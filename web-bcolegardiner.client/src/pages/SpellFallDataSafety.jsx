import React from 'react';

export default function SpellFallDataSafety() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Gardiner Interactive</p>
        <h1 className="text-4xl font-black tracking-tight md:text-5xl">SpellFall Data Safety Summary</h1>
        <p className="mt-4 text-slate-300">
          This page summarizes SpellFall&apos;s expected Google Play data safety posture. The Play Console form should always
          be completed to match the final shipped app and SDK configuration.
        </p>

        <div className="mt-10 space-y-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 leading-7 text-slate-200 shadow-2xl shadow-black/30 md:p-8">
          <section>
            <h2 className="text-2xl font-bold text-white">App accounts</h2>
            <p className="mt-3">SpellFall does not require users to create an account.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Gameplay data</h2>
            <p className="mt-3">
              Run state, settings, unlocks, and statistics are stored locally on the device to support gameplay and restore
              progress. Gardiner Interactive does not directly receive this local gameplay data from the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Advertising</h2>
            <p className="mt-3">
              SpellFall uses Google AdMob for advertising. The Google Mobile Ads SDK may process advertising identifiers,
              device or other identifiers, app activity, diagnostics, approximate location, and related data depending on
              device settings, region, consent, and Google&apos;s SDK behavior.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">No sensitive direct collection</h2>
            <p className="mt-3">
              SpellFall does not directly collect precise location, contacts, photos, messages, health information,
              financial information, or government identifiers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Contact</h2>
            <p className="mt-3">
              Questions can be sent to{' '}
              <a className="text-cyan-300 underline" href="mailto:gardiner.brandonc@gmail.com">gardiner.brandonc@gmail.com</a>.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
