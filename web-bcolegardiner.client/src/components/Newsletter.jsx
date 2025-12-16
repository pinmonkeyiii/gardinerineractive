import React, { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState(""); // optional
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("");

        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, name }),
            });

            if (!res.ok) throw new Error(await res.text());
            const data = await res.json().catch(() => ({}));
            setStatus(data.message || "Subscribed successfully!");
            setEmail("");
            setName("");
        } catch (err) {
            console.error(err);
            setStatus("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900">Join My Newsletter</h2>
            <p className="text-slate-600 mt-2 mb-6">
                Get updates on upcoming books, writing insights, and more.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name (optional)"
                    className="flex-1 rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                />
                <input
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="flex-1 rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                />
                <button
                    type="submit"
                    className="rounded-md bg-slate-900 text-white px-5 py-2 font-medium hover:bg-slate-800"
                >
                    Subscribe
                </button>
            </form>

            {status && <p className="mt-4 text-slate-700">{status}</p>}
        </div>
    );
}
