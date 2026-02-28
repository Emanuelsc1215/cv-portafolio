"use client"

import { FadeInSection, GlowOrb, SectionHeading } from "@/components/animated"

const traits = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            </svg>
        ),
        title: "Aprendizaje Rapido",
        description:
            "Desde frameworks nuevos hasta arquitecturas complejas, mi capacidad de absorber conocimiento me permite adaptarme y contribuir rapidamente a cualquier equipo.",
        gradient: "from-[#a855f7] to-[#7c3aed]",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
        ),
        title: "Pasion por el Codigo",
        description:
            "No escribo codigo porque sea mi trabajo: lo hago porque me fascina. Cada proyecto es una oportunidad para crear algo que impacte positivamente.",
        gradient: "from-[#c084fc] to-[#a855f7]",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
        ),
        title: "Resolucion de Problemas",
        description:
            "Descompongo desafios complejos en pasos manejables. De arquitectura de microservicios a logica multi-tenant, disfruto enfrentar lo dificil.",
        gradient: "from-[#e879f9] to-[#c084fc]",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: "Trabajo en Equipo",
        description:
            "Creo firmemente en la colaboracion. Un gran producto se construye con equipos que comparten conocimiento y se apoyan mutuamente.",
        gradient: "from-[#a855f7] to-[#e879f9]",
    },
]

export function PassionSection() {
    return (
        <section className="relative px-6 py-32 lg:px-12">
            <GlowOrb className="-right-10 top-1/4" size="md" />
            <div className="mx-auto max-w-6xl">
                <FadeInSection>
                    <SectionHeading
                        title="Mas alla del codigo"
                        subtitle="Lo que me define como profesional y como persona"
                    />
                </FadeInSection>
                <div className="grid gap-6 sm:grid-cols-2">
                    {traits.map((trait, i) => (
                        <FadeInSection key={trait.title} delay={i * 120}>
                            <div className="group relative h-full overflow-hidden rounded-2xl border border-border/20 bg-[#13112b]/30 p-7 transition-all duration-500 hover:border-primary/15 hover:bg-[#13112b]/60 hover:shadow-[0_0_40px_rgba(168,85,247,0.06)]">
                                {/* Animated top border on hover */}
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent transition-all duration-700 group-hover:via-primary/50" />
                                {/* Subtle corner glow on hover */}
                                <div className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-primary/0 blur-2xl transition-all duration-700 group-hover:bg-primary/10" />

                                <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3.5 text-primary transition-all duration-500 group-hover:bg-primary/15 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] group-hover:scale-110">
                                    {trait.icon}
                                </div>
                                <h3 className="mb-3 text-lg font-bold text-foreground">
                                    {trait.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {trait.description}
                                </p>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    )
}
