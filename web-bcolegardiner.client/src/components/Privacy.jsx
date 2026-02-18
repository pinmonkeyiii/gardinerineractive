import React from "react";

export default function Privacy() {
    return (
        <section className="max-w-3xl mx-auto py-12 px-4">
            <h2 className="text-2xl font-bold mb-2">Lettriis Privacy Policy</h2>
            <p className="text-sm text-slate-600 mb-8">
                Last updated: February 2026
            </p>

            <p className="mb-4">
                Gardiner Interactive (“we”, “our”, or “us”) built the Lettriis mobile game as a free app with optional in-app purchases.
                This page informs users of our policies regarding the collection, use, and disclosure of information if anyone decides to use Lettriis.
            </p>

            <p className="mb-8">
                By using Lettriis, you agree to the collection and use of information in accordance with this policy.
            </p>

            <h3 className="text-xl font-semibold mb-3">1. Information We Collect</h3>
            <p className="mb-8">
                Lettriis does not require users to create an account and does not directly collect personal information such as names,
                email addresses, or phone numbers. However, the app uses third-party services that may collect certain information automatically.
            </p>

            <h3 className="text-xl font-semibold mb-3">2. Third-Party Services</h3>

            <h4 className="text-lg font-semibold mb-2">Google AdMob (Advertising)</h4>
            <p className="mb-2">
                The app displays advertisements provided by Google AdMob. AdMob may collect and process data such as:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Device identifiers</li>
                <li>Advertising ID</li>
                <li>IP address</li>
                <li>Device information</li>
                <li>Interaction with ads</li>
            </ul>
            <p className="mb-6">
                This data is used to provide and improve advertising services. Google’s privacy policy is available at{" "}
                <a className="underline" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">https://policies.google.com/privacy</a>.
            </p>

            <h4 className="text-lg font-semibold mb-2">Google Play Billing (In-App Purchases)</h4>
            <p className="mb-8">
                Lettriis offers optional in-app purchases for digital content. Purchases are processed securely through the Google Play Store.
                We do not collect or store payment information. All payment transactions are handled directly by Google.
            </p>

            <h3 className="text-xl font-semibold mb-3">3. Local Game Data</h3>
            <p className="mb-8">
                Lettriis stores gameplay progress, helper credits, and settings locally on your device. This information is stored only on your device,
                is not transmitted to us, and is not shared with third parties. If you uninstall the app, this local data may be deleted.
            </p>

            <h3 className="text-xl font-semibold mb-3">4. Children’s Privacy</h3>
            <p className="mb-8">
                Lettriis is intended for users aged 13 and older. We do not knowingly collect personal information from children under 13.
                If you believe a child has provided personal information, please contact us so we can take appropriate action.
            </p>

            <h3 className="text-xl font-semibold mb-3">5. Data Security</h3>
            <p className="mb-8">
                We value your trust in using our app. While we do not collect personal data directly, third-party services may process certain
                information as described above and implement their own security measures.
            </p>

            <h3 className="text-xl font-semibold mb-3">6. Your Privacy Choices</h3>
            <ul className="list-disc pl-6 mb-8">
                <li>Reset or limit your device’s advertising identifier in your device settings</li>
                <li>Opt out of personalized ads via your device settings</li>
                <li>Disable in-app purchases through Google Play parental controls</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">7. Changes to This Policy</h3>
            <p className="mb-8">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>

            <h3 className="text-xl font-semibold mb-3">8. Contact Us</h3>
            <p>
                If you have any questions or suggestions about this Privacy Policy, you may contact us at{" "}
                <a className="underline" href="mailto:gardiner.brandonc@gmail.com">gardiner.brandonc@gmail.com</a>.
            </p>
        </section>
    );
}