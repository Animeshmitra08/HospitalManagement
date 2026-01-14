import { anticipate, motion, type Variants } from "motion/react";
// Using Phosphor Icons for the best Duotone support
import { 
  PiCalendarCheckDuotone, 
  PiStethoscopeDuotone, 
  PiHospitalDuotone, 
  PiHeartbeatDuotone, 
  PiPillDuotone, 
  PiFlaskDuotone 
} from "react-icons/pi";

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// Spin Animation
const spinTransition = {
  rotateY: 360,
  transition: { 
    duration: 1, 
    ease: anticipate // Adds a slight 'wind-up' feel to the spin
  }
};

const QuickLinks: React.FC = () => {
  const links = [
    { icon: <PiCalendarCheckDuotone size={32} />, title: 'Book Appointment', color: 'text-indigo-300', bg: 'bg-indigo-600' },
    { icon: <PiStethoscopeDuotone size={32} />, title: 'Talk to Doctors', color: 'text-blue-300', bg: 'bg-blue-600' },
    { icon: <PiHospitalDuotone size={32} />, title: 'Hospitals', color: 'text-rose-300', bg: 'bg-rose-600' },
    { icon: <PiHeartbeatDuotone size={32} />, title: 'Healthcare', color: 'text-emerald-300', bg: 'bg-emerald-600' },
    { icon: <PiPillDuotone size={32} />, title: 'Medicine', color: 'text-purple-300', bg: 'bg-purple-600' },
    { icon: <PiFlaskDuotone size={32} />, title: 'Lab Testing', color: 'text-orange-300', bg: 'bg-orange-600' },
  ];

  return (
    <section className="py-16 sm:-mt-36 -mt-10  relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="md:hidden text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight text-center mb-6"
        >
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Quick Links</span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-10 border border-gray-100"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {links.map((link, index) => (
              <motion.a
                key={index}
                variants={fadeInUp}
                href="#"
                className="flex flex-col items-center text-center space-y-4 group"
              >
                {/* Icon Container with Spin */}
                <motion.div
                  
                  className={`w-16 h-16 ${link.bg} ${link.color} rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-opacity-80`}
                >
                    <motion.div
                    whileHover={spinTransition}
                    >
                        {link.icon}
                    </motion.div>
                </motion.div>
                
                <h6 className="font-bold text-gray-800 text-sm group-hover:text-blue-600 transition-colors">
                  {link.title}
                </h6>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickLinks;