
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  quote: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aditya Sharma",
    position: "CSE Graduate '22",
    quote: "My four years at Galgotias University shaped my career and helped me land my dream job at Microsoft. The mentors and resources were exceptional!",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Patel",
    position: "MBA Graduate '23",
    quote: "The business program at Galgotias gave me real-world exposure through internships and industry connections that were invaluable to my career.",
    rating: 5
  },
  {
    id: 3,
    name: "Rahul Verma",
    position: "ECE Graduate '21",
    quote: "The hands-on experience in the labs and the guidance from professors helped me develop the technical skills needed in the industry.",
    rating: 4
  },
  {
    id: 4,
    name: "Sneha Gupta",
    position: "BCA Student",
    quote: "The clubs and extracurricular activities at Galgotias have given me a platform to showcase my talents and develop leadership skills.",
    rating: 5
  },
  {
    id: 5,
    name: "Arjun Singh",
    position: "B.Tech Graduate '22",
    quote: "The placement cell at Galgotias was incredibly supportive, helping me prepare for interviews and connect with top companies.",
    rating: 4
  }
];

const TestimonialsCarousel: React.FC = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden" id="testimonials">
      <div className="absolute top-10 left-10 -rotate-6 text-university-gold/10">
        <Quote size={120} />
      </div>
      <div className="absolute bottom-10 right-10 rotate-180 text-university-gold/10">
        <Quote size={120} />
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-university-navy mb-4">
            Student <span className="text-university-gold">Voices</span>
          </h2>
          <div className="h-1 w-20 bg-university-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our students and alumni have to say about their experiences at Galgotias University.
          </p>
        </motion.div>
        
        <Carousel
          opts={{
            align: "center",
            loop: true
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/1 lg:basis-1/1">
                <motion.div 
                  className="p-6 md:p-8 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full"
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative mb-6">
                    <Avatar className="w-20 h-20 border-4 border-university-gold/20">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback className="bg-university-navy text-white text-xl">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-university-gold py-1 px-3 rounded-full">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < testimonial.rating ? "fill-white text-white" : "text-gray-300"}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  
                  <div className="mt-auto">
                    <h4 className="font-bold text-university-navy">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center mt-8 space-x-4">
            <CarouselPrevious className="relative bg-university-navy text-white hover:bg-university-navy/90" />
            <CarouselNext className="relative bg-university-navy text-white hover:bg-university-navy/90" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
