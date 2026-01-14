import { motion, type Variants } from "motion/react";
import { FaPlay, FaStar } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
          alt="Clinic Background"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/90 to-white/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=100&h=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=100&h=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=100&h=100&auto=format&fit=crop"
                ].map((src, i) => (
                  <img 
                    key={i} 
                    src={src} 
                    alt="User" 
                    className="w-12 h-12 rounded-full border-4 border-white object-cover" 
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">5K+ Happy Patients</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={14} className="text-yellow-500 fill-current" />
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-600">5.0 Ratings</span>
                </div>
              </div>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              Find Your <span className="text-blue-600">Trusted</span> Doctors Today
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-lg">
              Book appointments with the world's leading specialists. Professional care 
              delivered right to your doorstep or at our premium facilities.
            </motion.p>

            <motion.div variants={fadeInUp} className="bg-white rounded-3xl shadow-2xl p-2 md:p-4 border border-gray-100">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1">
                  <select className="w-full px-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 font-medium">
                    <option>Select Speciality</option>
                    <option>Cardiology</option>
                    <option>Neurology</option>
                    <option>Orthopedics</option>
                  </select>
                </div>
                <div className="flex-1 relative">
                  <FaMagnifyingGlass className="absolute left-4 top-5 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Doctor name..."
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 font-medium"
                  />
                </div>
                <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:scale-105 transition-all shadow-lg shadow-blue-200">
                  Search
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative overflow-hidden aspect-4/5">
              <img 
                // src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop" 
                src="./assets/banner-doctor.svg"
                alt="Doctor smiling"
                className="w-full h-full object-cover"
              />
              
              {/* Floating Video Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 flex items-center space-x-4 shadow-xl"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                  <FaPlay size={16} className="ml-1" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Watch Story</p>
                  <p className="text-sm font-bold text-gray-900">Health Consultation</p>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;