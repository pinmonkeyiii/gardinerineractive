import React from 'react';

export default function SpellFallPrivacyPolicy() {
  const updated = 'June 11, 2026';

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Gardiner Interactive</p>
        <h1 className="text-4xl font-black tracking-tight md:text-5xl">SpellFall Privacy Policy</h1>
        <p className="mt-4 text-slate-300">Last updated: {updated}</p>

        <div className="mt-10 space-y-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 leading-7 text-slate-200 shadow-2xl shadow-black/30 md:p-8">
          <section>
            <h2 className="text-2xl font-bold text-white">Overview</h2>
            <p className="mt-3">
              SpellFall is a mobile word roguelite game developed by Gardiner Interactive. This policy explains what
              information may be collected, used, or shared when you use SpellFall.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Information SpellFall collects directly</h2>
            <p className="mt-3">
              SpellFall does not require an account, and we do not directly collect your name, email address, phone
              number, contacts, precise location, messages, photos, payment information, or other personally submitted
              information through the game.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Local gameplay data</h2>
            <p className="mt-3">
              SpellFall may store gameplay progress, run state, settings, statistics, achievements, unlocks, and similar
              game data locally on your device. This data is used to make the game function, restore runs, and remember
              your preferences. Local data may be removed if you uninstall the app or clear app storage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Advertising and third-party services</h2>
            <p className="mt-3">
              SpellFall uses Google AdMob to show ads, including rewarded ads and interstitial ads. Google AdMob may
              collect or process device identifiers, advertising identifiers, approximate location, app activity,
              diagnostics, and other data as described by Google, depending on your device settings, region, consent
              choices, and Google services configuration.
            </p>
            <p className="mt-3">
              You can learn more about how Google uses information from apps and sites that use its services at
              https://policies.google.com/technologies/partner-sites and review Google&apos;s Privacy Policy at
              https://policies.google.com/privacy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Consent choices</h2>
            <p className="mt-3">
              In regions where consent is required, advertising consent choices may be requested through Google&apos;s consent
              tools or your device settings. You can also limit ad personalization from your Android advertising privacy
              settings where available.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Children&apos;s privacy</h2>
            <p className="mt-3">
              SpellFall is not directed to children under 13. We do not knowingly collect personal information from
              children. If you believe a child has provided personal information to us, contact us and we will take
              appropriate action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Data sharing</h2>
            <p className="mt-3">
              We do not sell personal information. Data processed by third-party services such as Google AdMob may be
              handled according to those providers&apos; policies and used for advertising, fraud prevention, service
              operation, analytics, diagnostics, and compliance purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Security</h2>
            <p className="mt-3">
              We use reasonable safeguards for the services we control. No mobile app or internet-connected service can
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Changes to this policy</h2>
            <p className="mt-3">
              We may update this policy as SpellFall changes. The updated date at the top of this page will reflect the
              latest revision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Contact</h2>
            <p className="mt-3">
              For privacy questions or support, contact Gardiner Interactive at{' '}
              <a className="text-cyan-300 underline" href="mailto:gardiner.brandonc@gmail.com">gardiner.brandonc@gmail.com</a>.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
