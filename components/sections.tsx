"use client"

import { useRef, useEffect } from "react"
import { FadeInSection, GlowOrb, SectionHeading } from "@/components/animated"

/* ===== ABOUT ===== */
export function About() {
    return (
        <section id="about" className="relative px-6 py-32 lg:px-12">
            <GlowOrb className="-left-20 top-0" size="lg" />
            <div className="mx-auto max-w-6xl">
                <FadeInSection>
                    <SectionHeading title="Sobre Mi" subtitle="Conoce al desarrollador detras del codigo" />
                </FadeInSection>
                <div className="grid items-center gap-12 md:grid-cols-5">
                    <FadeInSection direction="right" delay={100} className="flex justify-center md:col-span-2">
                        <div className="relative">
                            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#7c3aed]/20 to-[#c084fc]/20 blur-2xl" />
                            <div className="relative z-10 flex h-72 w-72 flex-col items-center justify-center gap-4 rounded-2xl border border-primary/15 bg-[#13112b]/60 backdrop-blur-sm">
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                                <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/30 bg-gradient-to-br from-[#7c3aed]/20 to-[#a855f7]/20 font-mono text-4xl font-bold text-primary">
                                    ES
                                </div>
                                <span className="font-mono text-sm text-primary">Full Stack Developer</span>
                                <span className="text-xs text-muted-foreground">Antioquia, Colombia</span>
                                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection delay={200} className="space-y-5 leading-relaxed text-muted-foreground md:col-span-3">
                        <p className="text-base">
                            Soy un{" "}
                            <span className="font-semibold text-foreground">
                                Tecnologo en Desarrollo de Software
                            </span>{" "}
                            con experiencia practica en arquitecturas de microservicios y
                            desarrollo full-stack. Mi mayor fortaleza es mi{" "}
                            <span className="font-semibold text-primary">
                                capacidad de aprendizaje rapido
                            </span>{" "}
                            y mi genuina pasion por la tecnologia.
                        </p>
                        <p className="text-base">
                            No me limito a escribir codigo:{" "}
                            <span className="text-foreground">
                                me sumerjo completamente en cada proyecto
                            </span>
                            , entiendo el negocio, investigo las mejores soluciones y me
                            aseguro de que cada linea de codigo aporte valor real.
                        </p>
                        <p className="text-base">
                            Actualmente trabajo en{" "}
                            <span className="font-semibold text-primary">Deep0</span>, una plataforma
                            SaaS donde he crecido enormemente como desarrollador,
                            enfrentandome a retos de arquitectura de microservicios,
                            autenticacion multi-tenant y analiticas en tiempo real.
                        </p>
                        <div className="rounded-xl border border-primary/10 bg-gradient-to-r from-primary/5 via-primary/3 to-transparent p-5">
                            <p className="italic text-foreground/90">
                                {
                                    "\"Cada dia es una oportunidad para aprender algo nuevo. Mi curiosidad no tiene limites y eso me impulsa a ser mejor profesional.\""
                                }
                            </p>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    )
}

/* ===== SERVICES ===== */
const services = [
    {
        num: "01",
        title: "Desarrollo Frontend",
        desc: "Interfaces modernas con Next.js, React 19, TypeScript, Tailwind CSS y animaciones fluidas con Framer Motion.",
    },
    {
        num: "02",
        title: "Arquitectura Backend",
        desc: "APIs RESTful y microservicios con NestJS, Node.js, Firebase y patrones de diseno escalables.",
    },
    {
        num: "03",
        title: "Implementacion ERP",
        desc: "Configuracion tecnica de Odoo v18: modulos personalizados, facturacion electronica y migracion de datos.",
    },
    {
        num: "04",
        title: "DevOps & Deploy",
        desc: "Despliegue Serverless en Vercel, Docker, CI/CD, y monitoreo con herramientas de analitica avanzada.",
    },
]

export function Services() {
    return (
        <section id="services" className="relative px-6 py-32 lg:px-12">
            <GlowOrb className="-right-10 top-1/3" size="lg" />
            <GlowOrb className="-left-10 bottom-0" size="sm" />
            <div className="mx-auto max-w-6xl">
                <FadeInSection>
                    <SectionHeading
                        title="Mis Servicios"
                        subtitle="Soluciones de calidad que transforman ideas en productos reales"
                    />
                </FadeInSection>
                <div className="space-y-0">
                    {services.map((svc, i) => (
                        <FadeInSection key={svc.num} delay={i * 120}>
                            <div className="group relative border-b border-border/20 py-10 transition-all duration-500 hover:pl-4">
                                {/* Hover glow line on left */}
                                <div className="absolute left-0 top-0 h-full w-0.5 scale-y-0 bg-gradient-to-b from-primary to-accent transition-transform duration-500 group-hover:scale-y-100" />
                                <div className="flex items-start gap-6 sm:items-center">
                                    <span className="shrink-0 bg-gradient-to-b from-primary/40 to-primary/10 bg-clip-text font-mono text-4xl font-bold text-transparent transition-all duration-500 group-hover:from-primary group-hover:to-accent md:text-5xl">
                                        {svc.num}
                                    </span>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary md:text-2xl">
                                            {svc.title}
                                        </h3>
                                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                                            {svc.desc}
                                        </p>
                                    </div>
                                    <div className="hidden shrink-0 rounded-full border border-border/30 p-3 text-muted-foreground transition-all duration-500 group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:text-primary group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] sm:block">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:rotate-[-45deg]"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ===== EXPERIENCE ===== */
const experiences = [
    {
        role: "Desarrollador Full Stack",
        company: "Proyecto Deep0",
        period: "Oct 2024 - Actual",
        highlights: [
            "Plataforma administrativa SaaS con arquitectura de microservicios escalable.",
            "Frontend SPA/SSR con Next.js 15, React 19, TypeScript y Redux.",
            "Interfaces responsivas con Tailwind CSS, Radix UI y Framer Motion.",
            "API Gateway y microservicios con NestJS 11, Express y TypeScript estricto.",
            "Bases de datos NoSQL con Firebase (Firestore) de alta disponibilidad.",
            "Auth B2B/B2C con Clerk y tokens JWT con Passport.js.",
            "Deploy Serverless en Vercel con metricas avanzadas (D3.js, ApexCharts).",
        ],
    },
    {
        role: "Implementador Odoo ERP",
        company: "Proyectos Independientes",
        period: "Actual",
        highlights: [
            "Lidero el ciclo completo de desarrollo en Odoo (v18/19), especializándome en la creación de módulos personalizados y la automatización de flujos empresariales complejos.",
            "Diseño e implemento lógica de negocio avanzada, personalización de vistas (XML) y controladores.",
            "He desarrollado soluciones críticas como generadores masivos de series, integraciones de facturación electrónica y optimización de procesos en el ecosistema ERP.",
        ],
    },
    {
        role: "Aprendiz de Desarrollo / QA",
        company: "GSE (Gestión de Seguridad Electrónica)",
        period: "Nov 2024 - May 2025",
        highlights: [
            "Ejecución de pruebas funcionales y de regresión en ambientes de desarrollo y producción para asegurar la calidad del software.",
            "Gestión del ciclo de vida del proyecto mediante Azure DevOps bajo metodologías ágiles (Scrum) y trabajo por Sprints.",
            "Lideré el levantamiento de actas de requerimientos y la documentación técnica de planes de prueba, garantizando el cumplimiento de procesos internos en el sector de seguridad electrónica.",
        ],
    },
    {
        role: "Desarrollador Software (Aprendiz)",
        company: "SENA",
        period: "Ene 2023 - May 2025",
        highlights: [
            "Aplicativo web para el sector solidario (Fondo de empleados).",
            "Plataforma de servicio al cliente y consulta centralizada de bases de datos.",
        ],
    },
]

export function Experience() {
    return (
        <section id="experience" className="relative px-6 py-32 lg:px-12">
            <GlowOrb className="-left-20 bottom-1/4" size="lg" />
            <div className="mx-auto max-w-6xl">
                <FadeInSection>
                    <SectionHeading title="Experiencia" subtitle="Mi recorrido profesional en el desarrollo de software" />
                </FadeInSection>
                <div className="relative">
                    {/* Timeline line with animated gradient */}
                    <div className="absolute left-[18px] top-0 hidden h-full w-px md:block">
                        <div className="h-full w-full bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
                    </div>
                    <div className="space-y-8">
                        {experiences.map((exp, i) => (
                            <FadeInSection key={exp.role + exp.company} delay={i * 150}>
                                <div className="group relative pl-0 md:pl-14">
                                    {/* Timeline dot with pulse */}
                                    <div className="absolute left-[11px] top-7 hidden md:block">
                                        <div className="absolute -inset-2 animate-ping rounded-full bg-primary/20 group-hover:bg-primary/30" style={{ animationDuration: "3s" }} />
                                        <div className="relative h-3.5 w-3.5 rounded-full border-2 border-primary bg-background transition-all duration-500 group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(168,85,247,0.6)]" />
                                    </div>
                                    <div className="rounded-2xl border border-border/20 bg-[#13112b]/30 p-7 transition-all duration-500 hover:border-primary/15 hover:bg-[#13112b]/60 hover:shadow-[0_0_40px_rgba(168,85,247,0.06)]">
                                        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                            <h3 className="text-lg font-bold text-foreground">
                                                {exp.role}{" "}
                                                {exp.company === "Proyecto Deep0" ? (
                                                    <a
                                                        href="https://deep0.co"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-primary transition-colors hover:text-primary/80 hover:underline hover:underline-offset-4"
                                                    >
                                                        {"@ " + exp.company}
                                                    </a>
                                                ) : (
                                                    <span className="text-primary">{"@ " + exp.company}</span>
                                                )}
                                            </h3>
                                            <span className="shrink-0 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 font-mono text-xs text-primary">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <ul className="space-y-3">
                                            {exp.highlights.map((h, j) => (
                                                <li
                                                    key={j}
                                                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                                                >
                                                    <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ===== SKILLS ===== */
const skillItems = [
    { name: "Next.js", level: 90, color: "#a855f7" },
    { name: "React", level: 90, color: "#c084fc" },
    { name: "TypeScript", level: 85, color: "#a855f7" },
    { name: "Tailwind", level: 92, color: "#e879f9" },
    { name: "NestJS", level: 88, color: "#a855f7" },
    { name: "Firebase", level: 82, color: "#c084fc" },
    { name: "Node.js", level: 85, color: "#e879f9" },
    { name: "Docker", level: 75, color: "#c084fc" },
]

function CircularSkill({ name, level, color }: { name: string; level: number; color: string }) {
    const circleRef = useRef<SVGCircleElement>(null)
    const numberRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const el = circleRef.current
        if (!el) return
        const circumference = 2 * Math.PI * 42
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const offset = circumference - (level / 100) * circumference
                    el.style.transition = "stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1)"
                    el.style.strokeDashoffset = String(offset)

                    // Animate number
                    if (numberRef.current) {
                        let start = 0
                        const duration = 2000
                        const startTime = performance.now()
                        const animate = (now: number) => {
                            const progress = Math.min((now - startTime) / duration, 1)
                            const eased = 1 - Math.pow(1 - progress, 4)
                            start = Math.floor(eased * level)
                            if (numberRef.current) numberRef.current.textContent = `${start}%`
                            if (progress < 1) requestAnimationFrame(animate)
                        }
                        requestAnimationFrame(animate)
                    }
                    obs.unobserve(el)
                }
            },
            { threshold: 0.3 }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [level])

    const circumference = 2 * Math.PI * 42

    return (
        <div className="group flex flex-col items-center gap-4">
            <div className="relative transition-transform duration-500 group-hover:scale-110">
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" style={{ backgroundColor: `${color}20` }} />
                <svg width="110" height="110" viewBox="0 0 100 100" className="rotate-[-90deg] drop-shadow-sm">
                    <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="#1e1b3a"
                        strokeWidth="5"
                    />
                    <circle
                        ref={circleRef}
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke={color}
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference}
                        style={{ filter: `drop-shadow(0 0 6px ${color}40)` }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span ref={numberRef} className="font-mono text-lg font-bold text-foreground">0%</span>
                </div>
            </div>
            <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{name}</span>
        </div>
    )
}

export function Skills() {
    return (
        <section id="skills" className="relative px-6 py-32 lg:px-12">
            <GlowOrb className="-right-20 top-0" size="lg" />
            <div className="mx-auto max-w-6xl">
                <FadeInSection>
                    <SectionHeading title="Mis Habilidades" subtitle="Tecnologias y herramientas con las que trabajo diariamente" />
                </FadeInSection>
                <FadeInSection delay={150}>
                    <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
                        {skillItems.map((skill) => (
                            <CircularSkill key={skill.name} {...skill} />
                        ))}
                    </div>
                </FadeInSection>

                {/* Additional skills as animated pills */}
                <FadeInSection delay={300}>
                    <div className="mt-16">
                        <h3 className="mb-6 text-center font-mono text-sm text-primary/60">
                            {"// Mas tecnologias"}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                "Redux", "Framer Motion", "REST APIs", "Microservicios",
                                "JWT", "OAuth", "Clerk", "Passport.js", "Git / GitHub",
                                "Vercel", "Jest", "Odoo v18", "Scrum", "MongoDB",
                                "D3.js", "ApexCharts", "Radix UI", "Express",
                            ].map((tech, i) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-border/30 bg-[#13112b]/40 px-4 py-2 text-xs text-muted-foreground transition-all duration-400 hover:border-primary/30 hover:bg-primary/5 hover:text-foreground hover:shadow-[0_0_15px_rgba(168,85,247,0.1)]"
                                    style={{ animationDelay: `${i * 50}ms` }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    )
}

/* ===== DEEP PROJECT ===== */
export function DeepProject() {
    return (
        <section id="project" className="relative px-6 py-32 lg:px-12">
            <GlowOrb className="left-1/4 top-1/4" size="xl" />
            <div className="mx-auto max-w-6xl">
                <FadeInSection>
                    <SectionHeading title="Proyecto Destacado" subtitle="Lo que estoy construyendo actualmente" />
                </FadeInSection>
                <FadeInSection delay={100}>
                    <div className="overflow-hidden rounded-3xl border border-primary/10 bg-[#13112b]/40 shadow-[0_0_60px_rgba(168,85,247,0.04)] backdrop-blur-sm">
                        {/* Terminal header */}
                        <div className="flex items-center gap-2 border-b border-border/20 bg-[#13112b]/80 px-6 py-4">
                            <div className="h-3 w-3 rounded-full bg-[#ef4444]/60" />
                            <div className="h-3 w-3 rounded-full bg-[#f59e0b]/60" />
                            <div className="h-3 w-3 rounded-full bg-[#22c55e]/60" />
                            <span className="ml-4 font-mono text-xs text-muted-foreground/60">
                                deep0-platform.ts
                            </span>
                            <div className="ml-auto flex gap-2">
                                <span className="rounded border border-border/30 px-2 py-0.5 font-mono text-[10px] text-muted-foreground/40">TypeScript</span>
                            </div>
                        </div>
                        <div className="p-8 md:p-12">
                            <div className="mb-4 flex flex-wrap items-center gap-3">
                                <span className="rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 font-mono text-xs text-primary">
                                    SaaS Platform
                                </span>
                                <span className="flex items-center gap-1.5 rounded-full border border-green-500/15 bg-green-500/5 px-4 py-1.5 font-mono text-xs text-green-400">
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
                                    </span>
                                    En Desarrollo
                                </span>
                            </div>
                            <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                                <h3 className="flex items-center text-4xl font-bold text-foreground md:text-5xl">
                                    <a
                                        href="https://deep0.co"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/link inline-flex items-center gap-3 transition-colors"
                                    >
                                        <span>Deep<span className="text-primary glow-text">0</span></span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/40 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:text-primary"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" x2="21" y1="14" y2="3" /></svg>
                                    </a>
                                </h3>

                                {/* Contenedor del QR */}
                                <div className="group relative hidden shrink-0 sm:block">
                                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/50 to-[#c084fc]/50 opacity-0 blur transition duration-500 group-hover:opacity-100" />
                                    <div className="relative flex h-32 w-32 items-center justify-center rounded-xl border border-primary/20 bg-[#13112b] p-2 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                                        <img
                                            src="/qrmejoradouno.png"
                                            alt="Deep0 QR Code"
                                            className="h-full w-full rounded-lg object-cover"
                                        />
                                    </div>
                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-primary/20 bg-[#13112b] px-3 py-1 text-xs font-medium text-foreground opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                                        Escanear QR
                                        <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-primary/20 bg-[#13112b]" />
                                    </span>
                                </div>
                            </div>
                            <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
                                Plataforma SaaS B2B/B2C para la gestion, enrutamiento y
                                analitica avanzada de{" "}
                                <span className="font-semibold text-foreground">
                                    Enlaces Profundos Dinamicos (Dynamic Deep Links)
                                </span>
                                . El sistema permite a empresas crear enlaces inteligentes que
                                redirigen a los usuarios al destino correcto dependiendo de su
                                dispositivo y configuracion.
                            </p>

                            {/* Features grid */}
                            <div className="mb-10 grid gap-4 sm:grid-cols-2">
                                {[
                                    {
                                        title: "Enlaces Dinamicos",
                                        desc: "Links con caducidad, notificaciones, UTMs y subdominios personalizados.",
                                        icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>,
                                    },
                                    {
                                        title: "Analitica Avanzada",
                                        desc: "Fingerprinting para tracking real-time de clicks totales vs. usuarios unicos.",
                                        icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="m19 9-5 5-4-4-3 3" /></svg>,
                                    },
                                    {
                                        title: "Multi-tenant",
                                        desc: "Admin panel con soporte multi-compania, roles y suscripciones Free/Premium.",
                                        icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
                                    },
                                    {
                                        title: "Microservicios",
                                        desc: "Auth, Companias, Eventos, Enlaces, Invitaciones y Configs independientes.",
                                        icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /><rect width="7" height="7" x="3" y="3" rx="1" /></svg>,
                                    },
                                ].map((feat) => (
                                    <div
                                        key={feat.title}
                                        className="group flex gap-4 rounded-xl border border-border/15 bg-[#1e1b3a]/30 p-5 transition-all duration-400 hover:border-primary/15 hover:bg-[#1e1b3a]/50"
                                    >
                                        <div className="shrink-0 rounded-xl bg-primary/10 p-3 text-primary transition-all duration-400 group-hover:bg-primary/15 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                                            {feat.icon}
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-foreground">{feat.title}</h5>
                                            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{feat.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Tech stack */}
                            <div>
                                <h4 className="mb-4 font-mono text-sm text-primary/60">
                                    {"// Stack Tecnologico"}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Next.js 15", "React 19", "TypeScript", "Redux", "Tailwind CSS",
                                        "Framer Motion", "NestJS 11", "Firebase", "Clerk", "JWT",
                                        "D3.js", "ApexCharts", "Vercel", "Docker", "Radix UI",
                                    ].map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 font-mono text-xs text-primary transition-all duration-300 hover:border-primary/30 hover:bg-primary/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    )
}

/* ===== EDUCATION ===== */
const education = [
    {
        title: "Tecnologia en Analisis y Desarrollo de Software",
        institution: "SENA",
        period: "Feb 2023 - May 2025",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
        ),
    },
    {
        title: "Tecnico en Programacion de Software",
        institution: "SENA",
        period: "Ene 2021 - Nov 2022",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
        ),
    },
    {
        title: "Bachiller Academico",
        institution: "I.E Fe y Alegria La Cima",
        period: "Ene 2017 - Nov 2022",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /></svg>
        ),
    },
]

export function Education() {
    return (
        <section id="education" className="relative px-6 py-32 lg:px-12">
            <div className="mx-auto max-w-6xl">
                <FadeInSection>
                    <SectionHeading title="Educacion" subtitle="Mi formacion academica" />
                </FadeInSection>
                <div className="grid gap-6 md:grid-cols-3">
                    {education.map((edu, i) => (
                        <FadeInSection key={edu.title} delay={i * 120}>
                            <div className="group relative h-full overflow-hidden rounded-2xl border border-border/20 bg-[#13112b]/30 p-7 transition-all duration-500 hover:border-primary/15 hover:bg-[#13112b]/60 hover:shadow-[0_0_40px_rgba(168,85,247,0.06)]">
                                {/* Top accent line */}
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent transition-all duration-500 group-hover:via-primary/40" />
                                <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3.5 text-primary transition-all duration-500 group-hover:bg-primary/15 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] group-hover:scale-110">
                                    {edu.icon}
                                </div>
                                <h3 className="text-base font-bold text-foreground">{edu.title}</h3>
                                <p className="mt-2 text-sm font-medium text-primary">{edu.institution}</p>
                                <p className="mt-2 font-mono text-xs text-muted-foreground">{edu.period}</p>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ===== CONTACT ===== */
export function Contact() {
    return (
        <section id="contact" className="relative px-6 py-32 lg:px-12">
            <GlowOrb className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size="xl" />
            <div className="mx-auto max-w-2xl text-center">
                <FadeInSection>
                    <SectionHeading title="Hablemos" subtitle="Siempre abierto a nuevas oportunidades y colaboraciones" />
                    <p className="mx-auto mb-12 max-w-lg text-base leading-relaxed text-muted-foreground">
                        Estoy buscando nuevas oportunidades donde pueda aportar mi pasion,
                        mi capacidad de aprendizaje rapido y mi compromiso con la excelencia
                        tecnica. Si tienes un proyecto interesante o una posicion abierta,
                        me encantaria escucharte.
                    </p>
                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <a
                            href="mailto:sanchezcanoemanuel1512@gmail.com"
                            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <svg className="relative" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            <span className="relative">Enviar email</span>
                        </a>
                        <a
                            href="tel:+573137786255"
                            className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-8 py-4 font-semibold text-primary transition-all duration-300 hover:border-primary/60 hover:bg-primary/5"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            +57 313 778 6255
                        </a>
                    </div>
                </FadeInSection>
            </div>
        </section>
    )
}

/* ===== FOOTER ===== */
export function Footer() {
    return (
        <footer className="relative border-t border-border/20 px-6 py-10">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
                <div className="flex gap-8">
                    <a href="mailto:sanchezcanoemanuel1512@gmail.com" className="text-sm text-muted-foreground transition-all duration-300 hover:text-primary" aria-label="Email">Email</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-all duration-300 hover:text-primary" aria-label="GitHub">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-all duration-300 hover:text-primary" aria-label="LinkedIn">LinkedIn</a>
                </div>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <p className="font-mono text-xs text-muted-foreground/60">
                    {"Disenado & Construido por Emanuel Sanchez Cano"}
                </p>
            </div>
        </footer>
    )
}
