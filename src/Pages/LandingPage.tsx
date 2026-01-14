import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, type Variants} from "motion/react"
import {
  FaHeart,
  FaStar,
  FaRegClock,
  FaCalendarCheck
} from 'react-icons/fa';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import QuickLinks from '../Components/QuickLinks';
import SpecialtiesSection from '../Components/SpecialtiesSection';
import WhyChooseUs from '../Components/WhyChooseUs';
import TrustedPartners from '../Components/TrustedPartners';
import TestimonialsSection from '../Components/Testimonials';
import Footer from '../Components/Footer';
import { HiOutlineLocationMarker } from 'react-icons/hi';

// Animation Variants
const fadeInUp : Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer : Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Doctors Section
const DoctorsSection: React.FC = () => {
  const doctors = [
    { 
      name: 'Dr. Michael Brown', 
      specialty: 'Psychologist', 
      location: 'Minneapolis, MN', 
      fee: 650, 
      rating: 5.0, 
      time: '30 Min',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
      available: true
    },
    { 
      name: 'Dr. Nicholas Tello', 
      specialty: 'Pediatrician', 
      location: 'Ogden, IA', 
      fee: 350, 
      rating: 4.6, 
      time: '60 Min',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400',
      available: true
    },
    { 
      name: 'Dr. Harold Bryant', 
      specialty: 'Neurologist', 
      location: 'Winona, MS', 
      fee: 500, 
      rating: 4.8, 
      time: '30 Min',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
      available: false
    },

    // --- additional data ---
    { 
      name: 'Dr. Sarah Johnson', 
      specialty: 'Cardiologist', 
      location: 'Austin, TX', 
      fee: 800, 
      rating: 4.9, 
      time: '45 Min',
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=400',
      available: true
    },
    { 
      name: 'Dr. Emily Carter', 
      specialty: 'Dermatologist', 
      location: 'San Diego, CA', 
      fee: 400, 
      rating: 4.7, 
      time: '20 Min',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
      available: true
    },
    { 
      name: 'Dr. James Wilson', 
      specialty: 'Orthopedic Surgeon', 
      location: 'Denver, CO', 
      fee: 750, 
      rating: 4.5, 
      time: '60 Min',
      image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400',
      available: false
    },
    { 
      name: 'Dr. Olivia Martinez', 
      specialty: 'Gynecologist', 
      location: 'Miami, FL', 
      fee: 550, 
      rating: 4.8, 
      time: '40 Min',
      image: 'https://images.unsplash.com/photo-1551601651-05d0b7cfc6c5?auto=format&fit=crop&q=80&w=400',
      available: true
    },
    { 
      name: 'Dr. Daniel Lee', 
      specialty: 'General Physician', 
      location: 'San Jose, CA', 
      fee: 300, 
      rating: 4.4, 
      time: '15 Min',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=400',
      available: true
    },
    { 
      name: 'Dr. Aisha Khan', 
      specialty: 'Endocrinologist', 
      location: 'Edison, NJ', 
      fee: 600, 
      rating: 4.6, 
      time: '30 Min',
      image: 'https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&q=80&w=400',
      available: false
    }
  ];

  const [first, setfirst] = useState([]);

  const fun1 = async () =>{
    const res = await fetch("");
  };
  
  useEffect(() => {
    fun1();
  }, [])
  

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Matching your Specialties style */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <span className="bg-blue-600 text-blue-50 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-4 inline-block">
            Expert Medical Team
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Our <span className="text-blue-600">Highlighted</span> Doctors
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
            >
              {/* Main Card Container */}
              <div className="relative bg-white rounded-4xl p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
                
                {/* Image Section */}
                <div className="relative h-80 w-full overflow-hidden rounded-3xl bg-gray-100">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className={`px-3 py-1.5 rounded-lg text-xs font-bold backdrop-blur-md flex items-center gap-1.5 ${doctor.available ? 'bg-emerald-500/90 text-white' : 'bg-gray-500/90 text-white'}`}>
                      <span className={`w-2 h-2 rounded-full animate-pulse ${doctor.available ? 'bg-white' : 'bg-gray-300'}`} />
                      {doctor.available ? 'Available Today' : 'Next Available: Mon'}
                    </span>
                    <button className="p-2.5 bg-white/90 backdrop-blur-md rounded-xl text-gray-400 hover:text-red-500 transition-colors shadow-sm">
                      <FaHeart size={18} />
                    </button>
                  </div>

                  {/* Rating Overlay */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1 shadow-lg">
                    <FaStar className="text-yellow-400" size={14} />
                    <span className="font-bold text-gray-900 text-sm">{doctor.rating}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="pt-6 pb-2 px-2">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-1">{doctor.specialty}</p>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{doctor.name}</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-6 font-medium">
                    <div className="flex items-center gap-1">
                      <HiOutlineLocationMarker size={18} className="text-gray-400" />
                      {doctor.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaRegClock size={15} className="text-gray-400" />
                      {doctor.time}
                    </div>
                  </div>

                  {/* Pricing and Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter">Consultation Fee</p>
                      <p className="text-2xl font-black text-gray-900 tracking-tight">
                        ${doctor.fee}<span className="text-sm font-normal text-gray-500">/hr</span>
                      </p>
                    </div>
                    <button className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-2xl font-bold text-sm hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 active:scale-95">
                      <FaCalendarCheck size={18} />
                      Book Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative background element */}
              <div className="absolute -z-10 inset-0 bg-blue-600/5 rounded-4xl translate-y-4 scale-[0.95] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


// Scroll Progress Bar
const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 to-purple-600 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

// Main LandingPage Component
const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <QuickLinks />
      <SpecialtiesSection />
      <DoctorsSection />
      <WhyChooseUs/>
      <TrustedPartners/>
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;