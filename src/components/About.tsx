import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-32 bg-[#0a0a0a] px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="neon-text text-sm tracking-[0.3em] mb-10 font-bold"
        >
          PHILOSOPHY
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-4xl font-light leading-relaxed mb-12"
        >
          “LAUGH는 단순한 이름이 아니라 <span className="font-bold text-white">방향</span>입니다.<br />
          아티스트가 웃을 수 있어야 좋은 콘텐츠가 나온다는 믿음, <br />
          그 환경을 만드는 것이 <span className="neon-text">레프엔터테인먼트</span>의 시작입니다.”
        </motion.p>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-1 w-20 bg-neon-green mx-auto mb-10 origin-center"
        />
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 leading-loose text-lg"
        >
          연습생 출신의 공감 능력과 글로벌 감각을 겸비한 젊은 리더십 아래,<br />
          우리는 아티스트와 회사가 파트너로서 함께 웃으며 성장하는 새로운 문화를 지향합니다.
        </motion.p>
      </div>
    </section>
  );
};
