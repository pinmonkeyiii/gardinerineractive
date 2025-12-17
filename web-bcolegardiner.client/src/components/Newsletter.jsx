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

            <form
                onSubmit={handleSubmit}
                className="grid gap-3 sm:grid-cols-2 sm:items-center"
            >
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name (optional)"
                    className="h-11 w-full rounded-md border border-slate-300 px-4 focus:outline-none focus:ring-2 focus:ring-slate-400"
                />
                <input
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="h-11 w-full rounded-md border border-slate-300 px-4 focus:outline-none focus:ring-2 focus:ring-slate-400"
                />

                <button
                    type="submit"
                    className="h-11 w-full rounded-md bg-slate-900 px-5 font-medium text-white hover:bg-slate-800 sm:col-span-2 sm:w-fit sm:justify-self-end"
                >
                    Subscribe
                </button>
            </form>

            {status && <p className="mt-4 text-slate-700">{status}</p>}
        </div>
    );
}
