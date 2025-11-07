export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Simple pricing</h2>
          <p className="mt-3 text-slate-600">Pick a plan that fits. You can always upgrade later.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Free */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Starter</h3>
            <p className="mt-1 text-sm text-slate-600">For personal projects</p>
            <p className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900">$0<span className="text-base font-medium text-slate-500">/mo</span></p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>1 project</li>
              <li>Community support</li>
              <li>Basic analytics</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">Get started</a>
          </div>

          {/* Pro */}
          <div className="relative rounded-2xl border-2 border-indigo-500 bg-white p-6 shadow-md">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">Popular</div>
            <h3 className="text-lg font-semibold text-slate-900">Pro</h3>
            <p className="mt-1 text-sm text-slate-600">For growing teams</p>
            <p className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900">$19<span className="text-base font-medium text-slate-500">/mo</span></p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>Up to 10 projects</li>
              <li>Priority support</li>
              <li>Advanced analytics</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">Upgrade</a>
          </div>

          {/* Business */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Business</h3>
            <p className="mt-1 text-sm text-slate-600">For established companies</p>
            <p className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900">$49<span className="text-base font-medium text-slate-500">/mo</span></p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>Unlimited projects</li>
              <li>Dedicated support</li>
              <li>Custom integrations</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
