import React from 'react';

export default function SpellFallDeleteData() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Gardiner Interactive</p>
        <h1 className="text-4xl font-black tracking-tight md:text-5xl">SpellFall Data Deletion</h1>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 leading-7 text-slate-200 shadow-2xl shadow-black/30 md:p-8">
          <p>
            SpellFall does not require an account and does not directly maintain a user profile database. Most gameplay
            progress, settings, and statistics are stored locally on your device.
          </p>
          <h2 className="mt-8 text-2xl font-bold text-white">Delete local SpellFall data</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6">
            <li>Open Android Settings.</li>
            <li>Go to Apps.</li>
            <li>Select SpellFall.</li>
            <li>Open Storage.</li>
            <li>Choose Clear Data or uninstall the app.</li>
          </ol>
          <h2 className="mt-8 text-2xl font-bold text-white">Contact</h2>
          <p className="mt-3">
            If you believe you need assistance with a privacy or data deletion request, contact{' '}
            <a className="text-cyan-300 underline" href="mailto:gardiner.brandonc@gmail.com">gardiner.brandonc@gmail.com</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
