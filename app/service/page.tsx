// @ts-nocheck
'use client';

import { BentoGrid } from '@/components/bento-grid';
import { TemplateGallery } from '@/components/gallery';
import HeroSection from '@/components/hero-section';
import InfoSection from '@/components/info-section';
import { staticContent } from '@/lib/data';
import { useScroll, useTransform, motion } from 'motion/react';
import { useEffect, useRef } from 'react';

export default function Index() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      <div ref={container} className='relative bg-[#0E100F]'>
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </div>
    </>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  return (
    <motion.section
      style={{ scale }}
      className='sticky font-semibold top-0 h-screen bg-primary flex flex-col items-center justify-center text-black'
    >
      
    </motion.section>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.section
      style={{ scale}}
      className='relative bg-white'
    >
        
        
        

    </motion.section>
  );
};
