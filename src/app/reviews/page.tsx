"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { StarIcon } from "@heroicons/react/24/solid";

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-24 text-center px-6">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm font-medium text-gray-500 bg-gray-100 border border-gray-200">
            <StarIcon className="w-4 h-4 text-yellow-400" />
            500+ задоволених клієнтів
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Що кажуть наші клієнти
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Реальні відгуки українських підприємців, які вже управляють бізнесом з My Community
          </p>
        </section>

        {/* Placeholder */}
        <section className="max-w-[1100px] mx-auto px-6 pb-32">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 flex items-center justify-center" style={{ minHeight: 320 }}>
            <p className="text-gray-400 text-sm">Відгуки з'являться тут найближчим часом</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
