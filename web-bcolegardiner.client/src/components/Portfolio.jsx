import React from "react";

export default function Portfolio() {
    const books = [
        {
            title: "Threads of Elseron: The Heart of the Loom – The Shadow Code Rises",
            description:
                "Debut novel blending spellcraft with circuitry, memory with identity, and ancient secrets with futuristic threats.",
        },
        {
            title: "The Ship That Eats Secrets",
            description:
                "A YA horror mystery aboard a cursed cruise ship where truth is archived and illusions reign.",
        },
        {
            title: "The Salt Witch’s Cookbook",
            description:
                "A whimsical YA fantasy about memory, consent, and resistance against industrial exploitation.",
        },
        {
            title: "Threads of Elseron: The Rise of the Shadow Circuit – The Memory War",
            description:
                "Follw-up to my debut novel, continuing forward with the Memory war.",
        },
    ];

    const projects = [
        {
            title: "Gembalink UI & GembaLink Realtime and Historical Cube(s)",
            description:
                "A full stack web platform used to track machine OEE (Overall Equipment Effectiveness), using machine data to show at the machine what the stats for the machine are." +
                "As well as a Tabular Cube based on this data, to allow the higher ups in the company to make decisions",
            tech: ["C#", ".NET 8", "React", "SQL Server", "SSIS", "SSAS"],
        },
        {
            title: "Executive Dashboard",
            description:
                "An SSRS report, used to show the Executives running Lifetime to see all actionable data that will allow them to make the decisions they need to make to keep the company running.",
            tech: ["SQL", "SSSRS"],
        },
        {
            title: "Machine Tag Alerting (MTA)",
            description:
                "This project can use machine data, as well as other data, to set alerts that can be sent when conditions meet given criteria, " +
                "in an attempt to determine trends to combat downtime and quality issues",
            tech: ["Python", "FastAPI", "OpenAI API", "React"],
        },
        {
            title: "Gardiner Interactive Website",
            description:
                "This project allows me to keep up-to-date with some of the newer technologies that I am not using at work at the moment." +
                "It also allows me to showcase all that I am working on at the moment, and in the past and future.",
            tech: [".net 9.0", "React", "Tailwinds", "Web-hosting", "email set up", "blogging", "Newsletter"],
            link: "https://github.com/pinmonkeyiii/gardinerineractive",
        },
        {
            title: "Gardiner Interactive - Mobile Game: Lettris",
            description:
                "Creating a game initially in Python (giving me experience in Python), that I will then convert over to a Maui app that I can use to create an Apple as well as Android " +
                "deployable app, and a desktop app if so desired. ",
            tech: ["Python", "Maui", "Java", "Objective C", "Swift", "C#"],
        },
    ];

    const skills = {
        languages: ["C#", "JavaScript", "Python", "SQL", "HTML", "CSS", "Python"],
        frameworks: [
            "ASP.NET/Core",
            "React",
            "Tailwind CSS",
            "Blazor",
            "FastAPI",
            "Entity Framework Core",
        ],
        tools: [
            "Visual Studio",
            "VS Code",
            "Git",
            "Azure DevOps",
            "Power BI",
            "Docker",
        ],
        cloud: ["Azure", "AWS (basic)" ],
    };


    return (
        <section className="max-w-5xl mx-auto py-12 px-4">
            {/* Programming Projects Section */}
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
                Software & Technical Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((proj, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-slate-800">
                                {proj.title}
                            </h3>
                            <p className="text-slate-600 mb-3">{proj.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {proj.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="bg-slate-100 text-slate-700 text-sm px-2 py-1 rounded-md"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {proj.link && (
                            <a
                                href={proj.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-accent font-medium mt-auto"
                            >
                                View on GitHub →
                            </a>
                        )}
                    </div>
                ))}
            </div>
            {/* Writing section */ }
            <h2 className="text-2xl font-bold mb-6">Writing Portfolio</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {books.map((book, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
                        <p className="text-gray-700">{book.description}</p>
                    </div>
                ))}
            </div>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">
                Skills & Tools
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-800">
                        Languages
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                        {skills.languages.map((lang) => (
                            <li
                                key={lang}
                                className="bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-md"
                            >
                                {lang}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-800">
                        Frameworks & Libraries
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                        {skills.frameworks.map((fw) => (
                            <li
                                key={fw}
                                className="bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-md"
                            >
                                {fw}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-800">
                        Tools & Platforms
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                        {skills.tools.map((tool) => (
                            <li
                                key={tool}
                                className="bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-md"
                            >
                                {tool}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-800">Cloud</h3>
                    <ul className="flex flex-wrap gap-2">
                        {skills.cloud.map((cloud) => (
                            <li
                                key={cloud}
                                className="bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-md"
                            >
                                {cloud}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}