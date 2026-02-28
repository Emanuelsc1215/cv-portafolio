"use client"

import { useState, useEffect } from "react"

const navLinks = [
    { label: "Sobre Mi", href: "#about" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyecto", href: "#project" },
    { label: "Habilidades", href: "#skills" },
    { label: "Educacion", href: "#education" },
    { label: "Contacto", href: "#contact" },
]

export function Nav() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
                ? "bg-background/90 shadow-lg shadow-background/20 backdrop-blur-md"
                : "bg-transparent"
                }`}
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-12">
                <a
                    href="#"
                    className="font-mono text-lg font-bold text-primary transition-colors hover:text-primary/80"
                    aria-label="Ir al inicio"
                >
                    {"<ES />"}
                </a>

                {/* Desktop nav */}
                <ul className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link, i) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="group flex items-center gap-1 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                            >
                                <span className="font-mono text-xs text-primary">
                                    {String(i + 1).padStart(2, "0")}.
                                </span>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile button */}
                <button
                    className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Abrir menu"
                >
                    <span
                        className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""
                            }`}
                    />
                </button>

                {/* Mobile menu */}
                {mobileOpen && (
                    <div className="fixed inset-0 z-40 flex items-center justify-center bg-background/95 backdrop-blur-md md:hidden">
                        <ul className="flex flex-col items-center gap-6">
                            {navLinks.map((link, i) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="flex flex-col items-center gap-1 text-lg text-foreground transition-colors hover:text-primary"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        <span className="font-mono text-sm text-primary">
                                            {String(i + 1).padStart(2, "0")}.
                                        </span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    )
}
