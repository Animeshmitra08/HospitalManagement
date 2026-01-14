import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    { name: 'Deny Hendrawan', location: 'United States', text: 'I had a wonderful experience; the staff was friendly and attentive, and Dr. Smith took the time to explain everything clearly.', role: 'Patient' },
    { name: 'Brooks Steave', location: 'Dallas, CA', text: 'My experience was excellent. The staff was polite and attentive, and the doctor took the time to explain every step clearly.', role: 'Patient' },
    { name: 'Sofia Doe', location: 'Boston, USA', text: 'Highly professional medical team. The booking process was seamless and the facility was top-notch.', role: 'Patient' },
    { name: 'Alex Johnson', location: 'London, UK', text: 'The best dental care I have received in years. Modern equipment and very gentle approach.', role: 'Patient' },
  ];

  const stats = [
    { count: '500+', label: 'Doctors Available' },
    { count: '18+', label: 'Specialities' },
    { count: '30K', label: 'Bookings Done' },
    { count: '97+', label: 'Hospitals & Clinic' },
    { count: '317+', label: 'Lab Tests' },
  ];

  return (
    <section className="py-24 bg-linear-to-b from-white to-blue-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-blue-50 uppercase bg-blue-600 rounded-full"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            15k Users <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Trust Doccure</span>
          </motion.h2>
        </div>

        {/* Slider Section */}
        <div className="relative pb-12">
            {/* Custom Navigation */}
            <div className="absolute -top-20 right-0 md:flex gap-3 z-10 md:visible hidden">
                <button className="testimonial-prev w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md hover:bg-blue-600 hover:text-white transition-all">
                <FaArrowLeft />
                </button>
                <button className="testimonial-next w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md hover:bg-blue-600 hover:text-white transition-all">
                <FaArrowRight />
                </button>
            </div>
            
          <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                navigation={{
                prevEl: '.testimonial-prev',
                nextEl: '.testimonial-next',
                }}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                }}
                className="pb-16"
            >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="h-full">
                <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-xl shadow-blue-900/5 flex flex-col h-full hover:border-blue-200 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                    <FaQuoteLeft className="text-blue-100 text-3xl" />
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed italic mb-8 grow">
                    "{item.text}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
                    <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg leading-tight">{item.name}</h4>
                      <p className="text-sm text-blue-600 font-medium">{item.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Modern Counter Stats */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group p-6 text-center bg-white/40 backdrop-blur-sm rounded-2xl border border-white/60 shadow-sm"
            >
              <h4 className="text-3xl font-black text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                {stat.count}
              </h4>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;