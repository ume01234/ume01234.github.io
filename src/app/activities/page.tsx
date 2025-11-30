'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { activities } from '@/lib/data';

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-space-dark/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Earth
            </motion.button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-16"
          >
            Current Activities
          </motion.h1>

          <div className="space-y-16">
            {activities.map((activity, index) => (
              <motion.article
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-colors"
              >
                <div className="w-full h-64 bg-white/10 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-white/50 text-sm">Thumbnail</span>
                </div>
                <h2 className="text-3xl font-semibold mb-4">{activity.title}</h2>
                <p className="text-white/80 leading-relaxed text-lg">{activity.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

