import React from "react";
import { Link } from "react-router-dom";
import Seo from "./Seo";

const kickstarterUrl = "https://www.kickstarter.com/projects/gardinerinteractive/naughty-list";

const features = [
    {
        title: "Investigate, don't follow arrows",
        text: "Explore Evergreen, talk to residents, revisit locations, and decide where the evidence points without a glowing marker solving the case for you.",
    },
    {
        title: "Physical access matters",
        text: "Locked doors, elevated clues, restricted spaces, and borrowed items are real investigative constraints. Getting to the evidence is part of the case.",
    },
    {
        title: "The game only knows what you know",
        text: "Naughty List separates world truth from player knowledge so dialogue and deductions do not reveal discoveries you have not legitimately made.",
    },
    {
        title: "More than one explanation can fit",
        text: "Evidence and testimony can support competing theories. Build a working case from what you can actually support, then live with the call you make.",
    },
];

const screenshots = [
    ["/press/naughty-list/screenshots/NaughtyList_Physical_Investigation.jpg", "Early development gameplay showing a physical investigation with an elevated clue."],
    ["/press/naughty-list/screenshots/NaughtyList_Computer_Evidence.jpg", "Early development gameplay showing computer-based evidence."],
    ["/press/naughty-list/screenshots/NaughtyList_Evidence_Inspection.jpg", "Early development gameplay showing an evidence inspection inside a residence."],
];

export default function NaughtyList() {
    return (
        <>
            <Seo
                title="Naughty List — Christmas Detective Game"
                description="Naughty List is a Christmas detective game from Gardiner Interactive where you explore Evergreen, question residents, uncover evidence, and decide what really happened."
                path="/naughty-list"
                image="/press/naughty-list/NaughtyList_KeyArt_Gameplay.png"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "VideoGame",
                    name: "Naughty List",
                    description: "A Christmas detective game where players investigate Evergreen, question residents, physically uncover evidence, and decide what really happened.",
                    url: "https://gardinerinteractive.com/naughty-list",
                    image: "https://gardinerinteractive.com/press/naughty-list/NaughtyList_KeyArt_Gameplay.png",
                    author: { "@type": "Organization", name: "Gardiner Interactive" },
                    gamePlatform: ["Windows PC", "Android"],
                    applicationCategory: "Game",
                }}
            />

            <section className="bg-slate-950 text-white">
                <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:py-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-300">Gardiner Interactive presents</p>
                        <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">Naughty List</h1>
                        <p className="mt-3 text-xl font-semibold text-amber-200">A Christmas detective game where the game does not solve the mystery for you.</p>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                            Investigate the residents of Evergreen, uncover evidence, question conflicting stories, gain legitimate access to the places you need to search, and decide what the facts actually support.
                        </p>
                        <div className="mt-7 flex flex-wrap items-center gap-3">
                            <a href={kickstarterUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-emerald-950/20 hover:bg-emerald-400">
                                Follow Naughty List on Kickstarter ↗
                            </a>
                            <a href="#gameplay" className="rounded-lg border border-white/25 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">Watch 10+ minutes of gameplay</a>
                        </div>
                        <p className="mt-3 text-sm text-slate-400">Get notified when the Kickstarter campaign launches. <Link to="/naughty-list/press" className="font-semibold text-slate-300 underline decoration-slate-600 underline-offset-4 hover:text-white">Press kit</Link></p>
                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                            <span><strong className="text-white">Platforms:</strong> Windows PC, Android</span>
                            <span><strong className="text-white">Status:</strong> In active development</span>
                        </div>
                    </div>

                    <figure>
                        <img src="/press/naughty-list/NaughtyList_KeyArt_Gameplay.png" alt="Naughty List promotional key art for the early development gameplay showcase" className="w-full rounded-2xl border border-white/10 shadow-2xl" width="1672" height="941" fetchPriority="high" />
                        <figcaption className="mt-2 text-xs text-slate-400">Promotional key art. Current gameplay visuals are shown below.</figcaption>
                    </figure>
                </div>
            </section>

            <section className="px-4 py-14">
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-700">Everyone has secrets</p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">You decide who's naughty.</h2>
                        <p className="mt-4 text-slate-700">
                            Evergreen may look cozy from the street, but investigations are grounded in what your detective can actually observe, reach, learn, and justify.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {features.map((feature) => (
                            <article key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-950">{feature.title}</h3>
                                <p className="mt-2 leading-7 text-slate-700">{feature.text}</p>
                            </article>
                        ))}
                    </div>

                    <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-emerald-200 bg-emerald-50 p-7 text-center sm:p-8">
                        <h3 className="text-2xl font-bold text-slate-950">Sound like your kind of mystery?</h3>
                        <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-700">Naughty List is currently in development. Follow the Kickstarter pre-launch page and you'll be notified when the campaign begins.</p>
                        <a href={kickstarterUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-lg bg-emerald-500 px-6 py-3 text-sm font-extrabold text-slate-950 hover:bg-emerald-400">Follow Naughty List on Kickstarter ↗</a>
                    </div>
                </div>
            </section>

            <section id="gameplay" className="scroll-mt-24 bg-slate-100 px-4 py-14">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">Early development gameplay</p>
                            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">See the investigation in motion.</h2>
                        </div>
                        <a href="https://youtu.be/JwQMIgiyUW0" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-700 hover:text-slate-950">Watch on YouTube ↗</a>
                    </div>

                    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-lg">
                        <div className="aspect-video">
                            <iframe
                                className="h-full w-full"
                                src="https://www.youtube-nocookie.com/embed/JwQMIgiyUW0"
                                title="Naughty List — 10+ Minutes of Early Development Gameplay"
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </div>
                    <p className="mt-3 text-sm text-slate-600">This footage represents the game while actively in development. Visuals, interfaces, content, and other elements may change before release.</p>

                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                        {screenshots.map(([src, alt]) => (
                            <img key={src} src={src} alt={alt} className="w-full rounded-xl border border-slate-200 bg-white shadow-sm" width="1440" height="752" loading="lazy" />
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-14">
                <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm sm:p-10">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">Follow development</p>
                    <h2 className="mt-3 text-3xl font-bold text-slate-950">Be there when the case opens.</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-slate-700">Follow Naughty List on Kickstarter to be notified when the campaign launches and help bring Evergreen's investigations to life.</p>
                    <a href={kickstarterUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-lg bg-slate-950 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800">Follow Naughty List on Kickstarter ↗</a>
                </div>
            </section>
        </>
    );
}
