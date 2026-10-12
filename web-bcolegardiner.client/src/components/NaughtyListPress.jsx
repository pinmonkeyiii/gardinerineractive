import React from "react";
import { Link } from "react-router-dom";
import Seo from "./Seo";

const projectUrl = "https://www.kickstarter.com/projects/gardinerinteractive/naughty-list";
const gameplayUrl = "https://youtu.be/JwQMIgiyUW0";

const screenshots = [
    ["NaughtyList_Physical_Investigation.jpg", "Physical investigation", "Early development gameplay showing a physical investigation with an elevated clue."],
    ["NaughtyList_Computer_Evidence.jpg", "Computer evidence", "Early development gameplay showing computer-based evidence."],
    ["NaughtyList_Evidence_Inspection.jpg", "Evidence inspection", "Early development gameplay showing an evidence inspection inside a residence."],
    ["NaughtyList_Deductions.jpg", "Deductions", "Early development gameplay showing deduction and case reasoning."],
    ["NaughtyList_Interior_Exploration.jpg", "Interior exploration", "Early development gameplay inside an Evergreen residence."],
    ["NaughtyList_Neighborhood_Followup.jpg", "Neighborhood follow-up", "Early development gameplay showing follow-up investigation in the neighborhood."],
];

const facts = [
    ["Developer", "Gardiner Interactive"],
    ["Developer contact", "Brandon Gardiner"],
    ["Platforms", "Windows PC, Android"],
    ["Genre", "Detective, Investigation, Mystery, Adventure"],
    ["Status", "In active development"],
    ["Release date", "To be announced"],
    ["Funding", "Kickstarter pre-launch"],
];

export default function NaughtyListPress() {
    return (
        <>
            <Seo
                title="Naughty List Press Kit"
                description="Official press kit for Naughty List, the Christmas detective game in development at Gardiner Interactive."
                path="/naughty-list/press"
                image="/press/naughty-list/NaughtyList_KeyArt_Gameplay.png"
            />

            <section className="bg-slate-950 px-4 py-12 text-white sm:py-16">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-3xl">
                            <p className="text-sm font-bold uppercase tracking-[0.28em] text-amber-300">Press kit</p>
                            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">Naughty List</h1>
                            <p className="mt-4 text-lg text-slate-300">Official media, game facts, copy-ready descriptions, gameplay footage, and contact information for editorial coverage.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <a href="/press/naughty-list/NaughtyList_Press_Media.zip" download className="rounded-lg bg-white px-5 py-3 text-sm font-extrabold text-slate-950 hover:bg-slate-100">Download media pack ↓</a>
                            <Link to="/naughty-list" className="rounded-lg border border-white/25 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">Game page</Link>
                        </div>
                    </div>
                </div>
            </section>

            <main className="px-4 py-12">
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-950">Overview</h2>
                            <p className="mt-4 text-lg leading-8 text-slate-700">
                                Naughty List is a Christmas detective game set in Evergreen, a persistent neighborhood filled with residents, secrets, and mysteries. Players explore locations, question residents, physically discover evidence, gain legitimate access to restricted spaces, and decide what the available information actually supports.
                            </p>
                            <p className="mt-4 leading-7 text-slate-700">
                                Rather than directing players to every clue or revealing facts their investigator has not discovered, Naughty List treats player knowledge, physical access, evidence, interviews, competing explanations, and case theory as connected investigative systems.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-950">Copy-ready descriptions</h2>
                            <div className="mt-5 space-y-5">
                                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                    <h3 className="font-bold text-slate-950">One sentence</h3>
                                    <p className="mt-2 text-slate-700">A Christmas detective game where you investigate a persistent neighborhood, uncover evidence, question residents, and decide what really happened.</p>
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                    <h3 className="font-bold text-slate-950">Short description</h3>
                                    <p className="mt-2 text-slate-700">Naughty List is a Christmas detective game set in Evergreen. Players investigate cases by exploring the world, talking to residents, physically discovering evidence, and gaining legitimate access to places they need to search. The game avoids simply directing players to the next clue or revealing information their character has not discovered.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-950">Key features</h2>
                            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                                {[
                                    "Physical investigation: doors, access, tools, elevated clues, and locations matter.",
                                    "Player-known information: the game does not expose discoveries the investigator has not legitimately made.",
                                    "Resident interviews and cross-checks that can support or challenge what you have been told.",
                                    "Multiple plausible explanations can coexist while the player builds a working case theory.",
                                    "A persistent world designed to support authored cases, generated investigations, and future seasonal jurisdictions.",
                                    "How the player investigates can matter, not only the final verdict.",
                                ].map((item) => <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4 leading-6 text-slate-700">{item}</li>)}
                            </ul>
                        </section>

                        <section>
                            <div className="flex flex-wrap items-end justify-between gap-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-950">Gameplay video</h2>
                                    <p className="mt-2 text-slate-600">10+ minutes of current early development gameplay.</p>
                                </div>
                                <a href={gameplayUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-700 hover:text-slate-950">YouTube ↗</a>
                            </div>
                            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-lg">
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
                            <p className="mt-3 text-sm text-slate-600">Development footage. Visuals, interfaces, content, and other elements may change before release.</p>
                        </section>

                        <section>
                            <div className="flex flex-wrap items-end justify-between gap-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-950">Gameplay screenshots</h2>
                                    <p className="mt-2 text-slate-600">These are actual early development gameplay captures.</p>
                                </div>
                                <a href="/press/naughty-list/NaughtyList_Press_Media.zip" download className="text-sm font-bold text-slate-700 hover:text-slate-950">Download all ↓</a>
                            </div>
                            <div className="mt-5 grid gap-5 sm:grid-cols-2">
                                {screenshots.map(([file, title, alt]) => (
                                    <figure key={file} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                                        <a href={`/press/naughty-list/screenshots/${file}`} target="_blank" rel="noopener noreferrer">
                                            <img src={`/press/naughty-list/screenshots/${file}`} alt={alt} className="w-full" width="1440" height="752" loading="lazy" />
                                        </a>
                                        <figcaption className="flex items-center justify-between gap-3 p-3 text-sm">
                                            <span className="font-semibold text-slate-800">{title}</span>
                                            <a href={`/press/naughty-list/screenshots/${file}`} download className="font-bold text-emerald-700 hover:text-emerald-600">Download ↓</a>
                                        </figcaption>
                                    </figure>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-950">Promotional key art</h2>
                            <p className="mt-2 text-slate-600">Promotional artwork used for marketing. This image is not an in-game screenshot.</p>
                            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <img src="/press/naughty-list/NaughtyList_KeyArt_Gameplay.png" alt="Naughty List promotional key art for the early development gameplay showcase" className="w-full" width="1672" height="941" loading="lazy" />
                                <div className="p-4 text-right"><a href="/press/naughty-list/NaughtyList_KeyArt_Gameplay.png" download className="text-sm font-bold text-emerald-700 hover:text-emerald-600">Download key art ↓</a></div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-950">Developer story</h2>
                            <div className="mt-4 space-y-4 leading-7 text-slate-700">
                                <p>Naughty List began with a simple question: instead of Santa somehow knowing who is naughty or nice, what if somebody actually had to investigate the neighborhood and make those decisions?</p>
                                <p>One development bug helped define the project's player-knowledge rule. A room could reference a garage photograph before the investigator had actually discovered that photograph. The game knew the connection, but the player should not. That small issue became a larger design principle: world truth and player knowledge must remain separate.</p>
                                <p>The project is being developed primarily by Brandon Gardiner under Gardiner Interactive.</p>
                            </div>
                        </section>
                    </div>

                    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
                        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h2 className="text-lg font-bold text-slate-950">Game facts</h2>
                            <dl className="mt-4 space-y-4 text-sm">
                                {facts.map(([label, value]) => (
                                    <div key={label}>
                                        <dt className="font-bold text-slate-500">{label}</dt>
                                        <dd className="mt-1 text-slate-900">{value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </section>

                        <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
                            <h2 className="text-lg font-bold text-slate-950">Links</h2>
                            <div className="mt-4 flex flex-col items-start gap-3 text-sm font-bold">
                                <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-800 hover:text-emerald-600">Kickstarter pre-launch ↗</a>
                                <a href={gameplayUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-800 hover:text-emerald-600">Gameplay video ↗</a>
                                <Link to="/naughty-list" className="text-emerald-800 hover:text-emerald-600">Public game page →</Link>
                                <a href="/press/naughty-list/NaughtyList_Press_Media.zip" download className="text-emerald-800 hover:text-emerald-600">Media pack ↓</a>
                            </div>
                        </section>

                        <section className="rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
                            <h2 className="text-lg font-bold">Press contact</h2>
                            <p className="mt-3 text-sm leading-6 text-slate-300">For interviews, review access, additional assets, or development questions:</p>
                            <p className="mt-4 font-bold">Brandon Gardiner</p>
                            <p className="text-sm text-slate-300">Gardiner Interactive</p>
                            <a href="mailto:brandon@gardinerinteractive.com" className="mt-3 block break-all text-sm font-bold text-amber-300 hover:text-amber-200">brandon@gardinerinteractive.com</a>
                        </section>
                    </aside>
                </div>
            </main>
        </>
    );
}
