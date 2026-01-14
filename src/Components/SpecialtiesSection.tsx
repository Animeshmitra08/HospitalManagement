import { type Variants, motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { 
  PiHeartbeatDuotone, PiBoneDuotone, PiBrainDuotone, 
  PiBabyDuotone, PiHandsPrayingDuotone, PiFirstAidKitDuotone,
  PiCaretLeftBold, PiCaretRightBold 
} from "react-icons/pi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const SpecialtiesSection: React.FC = () => {
  const specialties = [
    { 
        name: 'Cardiology', 
        doctors: 254, 
        color: 'text-red-600', 
        bg: 'bg-red-50', 
        icon: <PiHeartbeatDuotone size={48} />,
        image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=800" 
    },
    { 
        name: 'Orthopedics', 
        doctors: 151, 
        color: 'text-blue-600', 
        bg: 'bg-blue-50', 
        icon: <PiBoneDuotone size={48} />,
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
    },
    { 
        name: 'Neurology', 
        doctors: 176, 
        color: 'text-purple-600', 
        bg: 'bg-purple-50', 
        icon: <PiBrainDuotone size={48} />,
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800"
    },
    { 
        name: 'Pediatrics', 
        doctors: 124, 
        color: 'text-pink-600', 
        bg: 'bg-pink-50', 
        icon: <PiBabyDuotone size={48} />,
        image: "https://images.unsplash.com/photo-1581594632702-f20137f09344?auto=format&fit=crop&q=80&w=800"
    },
    { 
        name: 'Psychiatry', 
        doctors: 112, 
        color: 'text-indigo-600', 
        bg: 'bg-indigo-50', 
        icon: <PiHandsPrayingDuotone size={48} />,
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
    },
    { 
        name: 'General Care', 
        doctors: 104, 
        color: 'text-emerald-600', 
        bg: 'bg-emerald-50', 
        icon: <PiFirstAidKitDuotone size={48} />,
        image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=800"
    },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Fixed & Centered Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block text-white bg-blue-600 px-6 py-2 rounded-full font-bold tracking-wider uppercase text-xs mb-4 shadow-lg shadow-blue-200">
            Top Specialties
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Specialized <span className="text-blue-600">Care</span> <br className="hidden md:block" /> For Your Family
          </h2>
        </motion.div>

        {/* Slider Container with Custom Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Custom Navigation Buttons */}
          <button className="nav-prev absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer border border-gray-100">
            <PiCaretLeftBold size={24} />
          </button>
          
          <button className="nav-next absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer border border-gray-100">
            <PiCaretRightBold size={24} />
          </button>

          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".nav-prev",
              nextEl: ".nav-next",
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-16! px-2! pt-6!"
          >
            {specialties.map((item, index) => (
              <SwiperSlide key={index} className="h-full">
                <div className="group relative h-96 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-gray-900">
                  
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover opacity-60 hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-900/40 to-transparent" />
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <motion.div 
                      className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 hover:scale-110 transition-all duration-500`}
                    >
                      {item.icon}
                    </motion.div>

                    <div className="transform translate-y-4 hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-gray-300 font-medium mb-6">{item.doctors}+ Professional Doctors</p>
                      
                      <button className="flex items-center text-sm font-bold text-blue-400 hover:text-blue-300 transition-all">
                        EXPLORE MORE 
                        <span className="ml-2 hover:ml-4 transition-all text-xl">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style>{`
        .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
          width: 28px !important;
          border-radius: 4px !important;
        }
        /* Hide default swiper navigation if any */
        .swiper-button-next, .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default SpecialtiesSection;