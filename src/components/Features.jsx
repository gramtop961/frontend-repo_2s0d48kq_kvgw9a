import { Sparkles, Shield, Gauge, Settings } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Polished UI',
    desc: 'Clean typography, generous spacing, and purposeful color to make your content shine.'
  },
  {
    icon: Shield,
    title: 'Secure by default',
    desc: 'Best practices baked in so you can ship confidently and sleep better.'
  },
  {
    icon: Gauge,
    title: 'Fast performance',
    desc: 'Optimized assets and snappy interactions for a smooth experience on any device.'
  },
  {
    icon: Settings,
    title: 'Easy to customize',
    desc: 'Composable components and utility-first styling make iterating a breeze.'
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Everything you need</h2>
          <p className="mt-3 text-slate-600">A thoughtful set of building blocks to help you launch faster.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-indigo-500 to-fuchsia-500 transition-all duration-300 group-hover:w-24" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
