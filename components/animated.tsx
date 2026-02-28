"use client"

import { useEffect, useRef, type ReactNode } from "react"

export function FadeInSection({
    children,
    delay = 0,
    direction = "up",
    className = "",
}: {
    children: ReactNode
    delay?: number
    direction?: "up" | "down" | "left" | "right"
    className?: string
}) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const transforms: Record<string, string> = {
            up: "translateY(40px)",
            down: "translateY(-40px)",
            left: "translateX(40px)",
            right: "translateX(-40px)",
        }

        el.style.opacity = "0"
        el.style.transform = transforms[direction]

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        el.style.transition =
                            "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
                        el.style.opacity = "1"
                        el.style.transform = "translate(0)"
                    }, delay)
                    obs.unobserve(el)
                }
            },
            { threshold: 0.05 }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [delay, direction])

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    )
}

export function StaggerChildren({
    children,
    staggerDelay = 100,
    className = "",
}: {
    children: ReactNode[]
    staggerDelay?: number
    className?: string
}) {
    return (
        <div className={className}>
            {children.map((child, i) => (
                <FadeInSection key={i} delay={i * staggerDelay}>
                    {child}
                </FadeInSection>
            ))}
        </div>
    )
}

export function FloatingParticles() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute h-1 w-1 rounded-full bg-primary/20"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `float ${6 + Math.random() * 8}s ease-in-out ${Math.random() * 5}s infinite`,
                        animationDirection: i % 2 === 0 ? "normal" : "reverse",
                    }}
                />
            ))}
        </div>
    )
}

export function GlowOrb({
    className = "",
    size = "lg",
}: {
    className?: string
    size?: "sm" | "md" | "lg" | "xl"
}) {
    const sizes = {
        sm: "h-32 w-32",
        md: "h-48 w-48",
        lg: "h-72 w-72",
        xl: "h-96 w-96",
    }
    return (
        <div
            className={`pointer-events-none absolute rounded-full bg-[#7c3aed]/10 blur-[100px] ${sizes[size]} ${className}`}
        />
    )
}

export function SectionHeading({
    title,
    subtitle,
    align = "center",
}: {
    title: string
    subtitle?: string
    align?: "center" | "left"
}) {
    return (
        <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                {title}
            </h2>
            {subtitle && (
                <p className="mx-auto mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
                    {subtitle}
                </p>
            )}
            <div
                className={`mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-accent to-transparent ${align === "center" ? "mx-auto" : ""
                    }`}
            />
        </div>
    )
}
