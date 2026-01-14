import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'HealthPlus', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'MediCare', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'WellnessCo', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'LifeScan', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { name: 'BioTech', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'GlobalHealth', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg' },
];

const TrustedPartners: React.FC = () => {
  const scrollingPartners = [...partners, ...partners];

  return (
    <div className="py-12 bg-gray-950 border-y border-gray-800 overflow-hidden rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-center text-md font-bold uppercase tracking-[0.25em] text-gray-500">
          Trusted by leading healthcare providers
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Gradient fades */}
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-gray-950 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-gray-950 to-transparent z-10" />

        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {/* {scrollingPartners.map((partner, index) => (
            <div
              key={index}
              className="group flex items-center justify-center px-14 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 md:h-28 object-contain filter brightness-0 scale-200 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
              />
            </div>
          ))} */}
          {scrollingPartners.map((partner, index) => (
            <div
                key={index}
                className="group flex items-center justify-center px-20 py-18 transition-all duration-300"
            >
                <span
                className="
                    text-2xl md:text-4xl font-semibold tracking-wide
                    text-gray-600
                    transition-all duration-300
                    group-hover:text-white
                "
                >
                {partner.name}
                </span>
            </div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TrustedPartners;