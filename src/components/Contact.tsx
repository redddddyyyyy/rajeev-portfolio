"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bold text-[#FAFAF8] leading-none mb-12"
          style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
        >
          Let&apos;s build<br />something.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a href="mailto:rajeevreddy1009@gmail.com" className="text-sm font-mono text-[#aaa] hover:text-white underline underline-offset-4 transition-colors">
            rajeevreddy1009@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/rajeev-reddy" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-[#aaa] hover:text-white underline underline-offset-4 transition-colors">
            linkedin.com/in/rajeev-reddy
          </a>
          <a href="https://github.com/redddddyyyyy" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-[#aaa] hover:text-white underline underline-offset-4 transition-colors">
            github.com/redddddyyyyy
          </a>
        </motion.div>
      </div>
    </section>
  );
}
