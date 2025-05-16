
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-20">
        <div className="text-center max-w-lg px-6">
          <h1 className="text-4xl font-bold text-university-navy mb-4">Profile Page</h1>
          <p className="text-xl font-medium text-university-navy mb-6">Coming Soon</p>
          <p className="text-gray-600 mb-8">
            The profile page is under construction. Check back soon for personalized features.
          </p>
          <Button className="bg-university-gold text-university-navy hover:bg-university-gold/90" onClick={() => navigate('/')}>
            Return to Homepage
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
