import React from 'react';

export default function LexoriaSupport() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Gardiner Interactive</p>
        <h1 className="text-4xl font-black tracking-tight md:text-5xl">Lexoria Support</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Need help with Lexoria, found a bug, or have feedback? Use the contact information below.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30">
            <h2 className="text-2xl font-bold text-white">Contact Support</h2>
            <p className="mt-3 text-slate-300">Email:</p>
            <a className="mt-1 block text-lg font-semibold text-cyan-300 underline" href="mailto:gardiner.brandonc@gmail.com?subject=Lexoria%20Support">
              gardiner.brandonc@gmail.com
            </a>
            <p className="mt-4 text-sm text-slate-400">Please include your device model, Android version, and a short description of the issue.</p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30">
            <h2 className="text-2xl font-bold text-white">Useful Links</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li><a className="text-cyan-300 underline" href="/Lexoria/privacy">Privacy Policy</a></li>
              <li><a className="text-cyan-300 underline" href="/Lexoria/data-safety">Data Safety Summary</a></li>
              <li><a className="text-cyan-300 underline" href="https://gardinerinteractive.com">Gardiner Interactive Home</a></li>
            </ul>
          </section>
        </div>

        <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 leading-7 text-slate-200 shadow-2xl shadow-black/30">
          <h2 className="text-2xl font-bold text-white">Common fixes</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Make sure Lexoria is updated to the latest version from Google Play.</li>
            <li>If ads fail to load, check your internet connection and try again later.</li>
            <li>If a run does not restore correctly, fully close and reopen the app before starting a new run.</li>
            <li>If audio does not play, check device volume, silent mode, and in-game settings.</li>
          </ul>
        </section>
      </section>
    </main>
  );
}
