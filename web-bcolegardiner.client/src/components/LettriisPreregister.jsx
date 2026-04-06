import React from "react";
import PageContainer from "./PageContainer";

export default function LettriisPreregister() {
    return (
        <PageContainer>
            <div className="max-w-3xl mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold mb-6 text-slate-900">
                    Lettriis Pre-Registration Rewards
                </h1>

                <p className="mb-4 text-slate-700">
                    Thank you for pre-registering for <strong>Lettriis</strong> on Google Play!
                </p>

                <p className="mb-6 text-slate-700">
                    As a thank you for early support, players who pre-register will receive exclusive in-game rewards at launch.
                </p>

                <div className="bg-slate-100 rounded-xl p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-3">🎁 Rewards Include:</h2>
                    <ul className="list-disc list-inside text-slate-700 space-y-2">
                        <li>Bonus in-game currency</li>
                        <li>Exclusive starter boost</li>
                        <li>Early supporter badge</li>
                    </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-semibold mb-2">📲 How to Claim</h2>
                    <p className="text-slate-700">
                        Once the game launches, simply install Lettriis from Google Play using the same account you used to pre-register.
                        Your rewards will be automatically applied when you start the game.
                    </p>
                </div>

                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">❓ Need Help?</h2>
                    <p className="text-slate-700">
                        If you don’t receive your rewards or have questions, contact:
                    </p>
                    <p className="mt-2 font-medium text-slate-900">
                        gardiner.brandonc@gmail.com
                    </p>
                </div>

                <div className="text-sm text-slate-500">
                    <p>
                        Rewards are subject to change and may vary by region or availability.
                    </p>
                </div>
            </div>
        </PageContainer>
    );
}