import React, { useEffect, useRef, useState } from "react";
import Spinner from "../components/Spinner";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "", hp: "" });
    const [status, setStatus] = useState(null); // { type: "success" | "error", text: string }
    const [showStatus, setShowStatus] = useState(false);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);
        setStatus(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            // Don’t assume JSON (prevents "Unexpected end of JSON input")
            const text = await response.text();
            let result = {};
            try { result = text ? JSON.parse(text) : {}; } catch { /* empty */ }

            if (!response.ok) {
                throw new Error(result.message || `Request failed (${response.status})`);
            }

            setStatus({ type: "success", text: result.message || "Thanks! Your message has been sent." });
            setFormData({ name: "", email: "", message: "", hp: "" });
        } catch (error) {
            setStatus({ type: "error", text: `Error submitting form. Please try again. ${error.message || error}` });
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
        <section className="max-w-lg mx-auto py-12 px-4">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="sr-only" aria-hidden="true">
                    <label htmlFor="hp">Leave this field empty</label>
                    <input
                        id="hp"
                        name="hp"
                        type="text"
                        autoComplete="off"
                        tabIndex={-1}
                        value={formData.hp || ""}
                        onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
                    />
                </div>
                <input type="text" disabled={isSubmitting} name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded p-2" required />
                <input type="email" disabled={isSubmitting} name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded p-2" required />
                <textarea name="message" disabled={isSubmitting} placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full border border-gray-300 rounded p-2" rows="5" required />
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
                                sm:col-span-2 sm:w-fit sm:justify-self-end
                              "
                >
                    {isSubmitting ? (
                        <>
                            <Spinner size={16} />
                            <span className="leading-none">
                                {"Sending" + "\u2026"}
                            </span>
                        </>
                    ) : (
                        "Send Message"
                    )}
                </button>
            </form>
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
        </section>
    );
}