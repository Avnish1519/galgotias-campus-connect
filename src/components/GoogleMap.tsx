
import React, { useState, useEffect, useRef } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { MapPin, Navigation } from 'lucide-react';

interface GoogleMapProps {
  apiKey?: string;
}

declare global {
  interface Window {
    initMap?: () => void;
    google?: any;
  }
}

const GoogleMap: React.FC<GoogleMapProps> = ({ apiKey }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [tempApiKey, setTempApiKey] = useState(apiKey || '');
  const [showMap, setShowMap] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const loadMap = () => {
    if (!tempApiKey) {
      setErrorMessage('Please enter a Google Maps API key');
      return;
    }

    setShowMap(true);
    setErrorMessage('');
    
    // Remove existing script if any
    const existingScript = document.getElementById('google-maps-script');
    if (existingScript) {
      document.head.removeChild(existingScript);
    }

    // Define the init function
    window.initMap = () => {
      if (!mapRef.current || !window.google) return;
      
      // University coordinates (example - replace with actual coordinates)
      const universityLocation = { lat: 28.458, lng: 77.5182 }; // Galgotias University approximate coordinates
      
      const map = new window.google.maps.Map(mapRef.current, {
        center: universityLocation,
        zoom: 16,
        mapTypeId: 'roadmap',
        styles: [
          {
            featureType: 'poi.school',
            elementType: 'labels',
            stylers: [{ visibility: 'on' }]
          },
          {
            featureType: 'poi.business',
            stylers: [{ visibility: 'off' }]
          },
          {
            featureType: 'transit',
            elementType: 'labels.icon',
            stylers: [{ visibility: 'on' }]
          }
        ]
      });

      // Main university marker
      const mainMarker = new window.google.maps.Marker({
        position: universityLocation,
        map: map,
        title: 'Galgotias University',
        animation: window.google.maps.Animation.DROP,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          fillColor: '#D4AF37',
          fillOpacity: 1,
          strokeColor: '#141E3C',
          strokeWeight: 2,
          scale: 8
        }
      });

      // Info window for main marker
      const infoWindow = new window.google.maps.InfoWindow({
        content: '<div class="p-2"><strong>Galgotias University</strong><p>Main Campus</p></div>'
      });

      mainMarker.addListener('click', () => {
        infoWindow.open(map, mainMarker);
      });

      // Add a few example location markers
      const locations = [
        { name: 'Library', position: { lat: 28.459, lng: 77.5192 }, type: 'academic' },
        { name: 'Cafeteria', position: { lat: 28.457, lng: 77.5175 }, type: 'facility' },
        { name: 'Sports Complex', position: { lat: 28.456, lng: 77.5186 }, type: 'recreation' },
        { name: 'Main Admin Building', position: { lat: 28.4575, lng: 77.5183 }, type: 'admin' }
      ];

      locations.forEach(location => {
        const marker = new window.google.maps.Marker({
          position: location.position,
          map: map,
          title: location.name,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            fillColor: getColorForType(location.type),
            fillOpacity: 0.8,
            strokeColor: '#141E3C',
            strokeWeight: 1,
            scale: 6
          }
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `<div class="p-2"><strong>${location.name}</strong></div>`
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });
    };

    // Load Google Maps script
    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${tempApiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      setErrorMessage('Failed to load Google Maps. Please check your API key.');
      setShowMap(false);
    };
    document.head.appendChild(script);
  };

  const getColorForType = (type: string): string => {
    switch (type) {
      case 'academic': return '#0EA5E9'; // Ocean Blue
      case 'facility': return '#F97316'; // Bright Orange
      case 'recreation': return '#8B5CF6'; // Vivid Purple
      case 'admin': return '#D946EF'; // Magenta Pink
      default: return '#D4AF37'; // University Gold
    }
  };

  return (
    <div className="w-full">
      {!showMap && (
        <Card className="p-4 mb-4">
          <div className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="api-key" className="text-sm font-medium mb-1">
                Enter Google Maps API Key
              </label>
              <div className="flex gap-2">
                <Input 
                  id="api-key"
                  type="password" 
                  value={tempApiKey} 
                  onChange={(e) => setTempApiKey(e.target.value)}
                  placeholder="Paste your Google Maps API key here"
                  className="flex-grow"
                />
                <Button onClick={loadMap} className="bg-university-navy hover:bg-university-navy/90">
                  <Navigation className="mr-2 h-4 w-4" />
                  Load Map
                </Button>
              </div>
              {errorMessage && (
                <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
              )}
            </div>
            <div className="text-sm text-gray-600">
              <p>To get an API key:</p>
              <ol className="list-decimal pl-5 space-y-1 mt-1">
                <li>Go to the <a href="https://console.cloud.google.com/google/maps-apis/start" target="_blank" rel="noopener noreferrer" className="text-university-navy underline">Google Cloud Console</a></li>
                <li>Create a project and enable the Maps JavaScript API</li>
                <li>Generate an API key and paste it above</li>
              </ol>
            </div>
          </div>
        </Card>
      )}
      
      {errorMessage && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-md mb-4">
          {errorMessage}
        </div>
      )}
      
      <div 
        ref={mapRef}
        className={`rounded-xl border border-gray-200 ${showMap ? 'h-[500px]' : 'h-96 bg-gray-300 flex items-center justify-center'}`}
      >
        {!showMap && (
          <div className="text-center">
            <MapPin className="h-12 w-12 mx-auto text-university-navy mb-2" />
            <p className="text-xl font-medium text-university-navy">
              Enter your API key to load the interactive map
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoogleMap;
