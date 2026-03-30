import React from 'react';
import { motion } from 'motion/react';

export const Audition = () => {
  const handleSubmit = (e: React.FormEvent) => {
    // Form submission logic would go here
    // For now, we'll just prevent default as it's a demo
    // e.preventDefault();
  };

  return (
    <section id="audition" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-5xl font-black mb-16 text-center md:text-left"
        >
          AUDITION
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <h4 className="neon-text font-bold mb-3 text-lg">01. 자격 요건</h4>
              <p className="text-gray-300 text-lg">나이, 성별, 국적 제한 없음</p>
            </div>
            <div>
              <h4 className="neon-text font-bold mb-3 text-lg">02. 모집 분야</h4>
              <p className="text-gray-300 text-lg">보컬 / 랩 / 댄스 / 비주얼 / 연기 / 모델</p>
            </div>
            <div>
              <h4 className="neon-text font-bold mb-3 text-lg">03. 오디션 절차</h4>
              <p className="text-gray-300 text-lg">온라인 지원 → 1차 서류 합격 발표 → 2차 실물 오디션 → 최종 합격</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#111] p-10 rounded-xl border border-gray-800 flex flex-col justify-center"
          >
            <h4 className="text-xl font-bold mb-4">제출 이메일</h4>
            <p className="text-2xl md:text-3xl neon-text mb-6 break-all">LaughEntertainment@gmail.com</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              * 모든 파일은 고화질로 첨부 부탁드립니다. 보정된 사진은 심사에서 제외됩니다.
            </p>
          </motion.div>
        </div>

        {/* Audition Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-[#0a0a0a] p-8 md:p-12 rounded-2xl neon-border"
        >
          <form action="https://formspree.io/f/LaughEntertainment@gmail.com" method="POST">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs text-gray-400 mb-2 uppercase tracking-wider">이름 (Name)</label>
                <input 
                  type="text" 
                  name="name" 
                  className="w-full p-4 rounded bg-[#111] border border-gray-800 focus:border-neon-green outline-none transition-colors" 
                  required 
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2 uppercase tracking-wider">생년월일 (Birth)</label>
                <input 
                  type="date" 
                  name="birth" 
                  className="w-full p-4 rounded bg-[#111] border border-gray-800 focus:border-neon-green outline-none transition-colors" 
                  required 
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-xs text-gray-400 mb-2 uppercase tracking-wider">지원 분야 (Category)</label>
              <select 
                name="category" 
                className="w-full p-4 rounded bg-[#111] border border-gray-800 focus:border-neon-green outline-none transition-colors appearance-none"
              >
                <option>Vocal / Rap</option>
                <option>Dance</option>
                <option>Visual / Model</option>
                <option>Acting</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-xs text-gray-400 mb-2 uppercase tracking-wider">자기소개 및 경력 (Intro / Experience)</label>
              <textarea 
                name="message" 
                rows={4} 
                className="w-full p-4 rounded bg-[#111] border border-gray-800 focus:border-neon-green outline-none transition-colors resize-none"
              ></textarea>
            </div>
            <div className="mb-10">
              <label className="block text-xs text-gray-400 mb-2 uppercase tracking-wider">영상/사진 링크 (URL - YouTube, Drive etc.)</label>
              <input 
                type="url" 
                name="link" 
                placeholder="https://" 
                className="w-full p-4 rounded bg-[#111] border border-gray-800 focus:border-neon-green outline-none transition-colors" 
              />
            </div>
            <button 
              type="submit" 
              className="w-full neon-btn py-5 font-bold tracking-widest uppercase text-lg"
            >
              Submit Application
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
