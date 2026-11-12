import React, { useEffect, useRef, useState } from "react";
import Spinner from "../components/Spinner";

export default function Newsletter({ context = "general" }) {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [name, setName] = useState("");
    const [status, setStatus] = useState(null); // { type: "success" | "error", text: string }
    const [showStatus, setShowStatus] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);
        setStatus("");

        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, name }),
            });

            if (!res.ok) throw new Error(await res.text());
            const data = await res.json().catch(() => ({}));
            setStatus({ type: "success", text: data.message || "Subscription received!" });
            if (data.created === true && typeof window !== "undefined" && typeof window.gtag === "function") {
                window.gtag("event", "generate_lead", { lead_source: "newsletter", placement: context });
            }            
            setEmail("");
            setName("");
        } catch (err) {
            console.error(err);
            setStatus({ type: "error", text: "Something went wrong. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };

    const hideTimerRef = useRef(null);

    useEffect(() => {
        if (!status) return;

        setShowStatus(true);

        // clear existing timer
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);

        // hide after 4 seconds (adjust as you like)
        hideTimerRef.current = setTimeout(() => {
            setShowStatus(false);

            // after fade-out finishes, clear the message
            setTimeout(() => setStatus(null), 300);
        }, 4000);

        return () => {
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        };
    }, [status]);

    return (
        <div className="">
            <h2 className="text-2xl font-bold text-slate-900">Get Occasional Updates</h2>
            <p className="text-slate-700 mt-2 mb-6">
                News about books, game development, releases, and behind-the-scenes progress. No spam.
            </p>

            <form
                onSubmit={handleSubmit}
                className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] sm:items-center"
            >
                <input
                    type="text"
                    disabled={isSubmitting}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name (optional)"
                    aria-label="Name (optional)"
                    autoComplete="name"
                    className="h-11 w-full rounded-md border border-slate-300 px-4 focus:outline-none focus:ring-2 focus:ring-slate-400"
                />
                <input
                    type="email"
                    disabled={isSubmitting}
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    aria-label="Email address"
                    autoComplete="email"
                    className="h-11 w-full rounded-md border border-slate-300 px-4 focus:outline-none focus:ring-2 focus:ring-slate-400"
                />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                                h-11
                                w-full
                                inline-flex items-center justify-center gap-2
                                rounded-md bg-slate-900 px-5
                                font-medium text-white
                                hover:bg-slate-800
                                disabled:opacity-60 disabled:cursor-not-allowed
                                sm:col-span-2 sm:w-fit sm:justify-self-end lg:col-span-1 lg:justify-self-stretch
                              "
                >
                    {isSubmitting ? (
                        <>
                            <Spinner size={16} />
                            <span className="leading-none">
                                {"Subscribing" + "\u2026"}
                            </span>
                        </>
                    ) : (
                        "Subscribe"
                    )}
                </button>

            </form>

            <p className="mt-3 text-xs text-slate-500">By subscribing, you agree to receive occasional email updates. Unsubscribe anytime.</p>
            {status && (
                <p
                    className={[
                        "mt-4 text-sm transition-opacity duration-300",
                        showStatus ? "opacity-100" : "opacity-0",
                        status.type === "success" ? "text-emerald-700" : "text-red-700",
                    ].join(" ")}
                    role="status"
                    aria-live="polite"
                >
                    {status.text}
                </p>
            )}
        </div>
    );
}
