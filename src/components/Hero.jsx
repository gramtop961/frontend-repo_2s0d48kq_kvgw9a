import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              New
              <span className="h-1 w-1 rounded-full bg-indigo-500" />
              Beautiful starter template
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Build a gorgeous website in minutes
            </h1>
            <p className="mt-4 text-lg leading-7 text-slate-600">
              A clean, modern starter with thoughtful interactions, responsive design, and a subtle 3D accent.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-slate-700"
              >
                Explore Features <ArrowRight size={16} />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
              >
                View Pricing
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/64?img=1" alt="" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/64?img=2" alt="" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/64?img=3" alt="" />
              </div>
              <p>
                Loved by creators worldwide
              </p>
            </div>
          </div>
          <div className="relative h-[360px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <Spline scene="https://prod.spline.design/6mO7kwzO5bV9jD2m/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
