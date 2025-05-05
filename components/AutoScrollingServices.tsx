'use client';

import { useEffect, useRef } from 'react';

const services = [
  "Asthma",
  "COPD",        
  "Tuberculosis TB",
  "Interstitial Lung Disease",
  "Pleural Effusion",
  "Obstructive Sleep Apnea In Adult",
  "Swine Flue",
  "Pulmonary Function Test",
  "Pulse Oximeter",
  "Bipap/CPAP/Oxygen Therapy",
  "Polysomnography",
  "6MWT",
  "Sputum Test",
  "Chest X Ray",
  "Vaccination",
  "Peakflow Metry",
];

export const AutoScrollingServices = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full bg-yellow-200 overflow-hidden py-4">
      <div
        ref={scrollRef}
        className="flex whitespace-nowrap gap-8 overflow-x-hidden"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {/* Duplicate the services array to create a seamless loop */}
        {[...services, ...services].map((service, index) => (
          <span
            key={index}
            className="text-3xl font-bold text-black/50 px-4"
          >
            {service}
            {index !== services.length * 2 - 1 && <span className="mx-4">•</span>}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollingServices; 