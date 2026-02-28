"use client"

import { useEffect, useRef } from "react"

export function Hero() {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        el.style.opacity = "0"
        el.style.transform = "translateY(30px)"
        requestAnimationFrame(() => {
            el.style.transition = "opacity 0.8s ease, transform 0.8s ease"
            el.style.opacity = "1"
            el.style.transform = "translateY(0)"
        })
    }, [])

    return (
        <section
            id="hero"
            className="flex min-h-screen items-center px-6 pt-20 lg:px-12"
        >
            <div ref={ref} className="mx-auto max-w-4xl">
                <p className="mb-4 font-mono text-sm text-primary md:text-base">
                    Hola, mi nombre es
                </p>
                <h1 className="text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                    Emanuel Sanchez Cano.
                </h1>
                <h2 className="mt-2 text-balance text-3xl font-bold leading-tight text-muted-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                    Construyo experiencias digitales.
                </h2>
                <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
                    Desarrollador Full Stack apasionado por crear soluciones limpias,
                    seguras y escalables. Actualmente trabajando en{" "}
                    <a href="#project" className="text-primary hover:underline">
                        Deep0
                    </a>
                    , una plataforma SaaS de gestion de enlaces dinamicos con arquitectura
                    de microservicios.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <a
                        href="#experience"
                        className="rounded-md border border-primary px-6 py-3 font-mono text-sm text-primary transition-all hover:bg-primary/10"
                    >
                        Ver mi experiencia
                    </a>
                    <a
                        href="mailto:sanchezcanoemanuel1512@gmail.com"
                        className="rounded-md bg-primary/10 px-6 py-3 font-mono text-sm text-primary transition-all hover:bg-primary/20"
                    >
                        Contactarme
                    </a>
                </div>
            </div>
        </section>
    )
}
