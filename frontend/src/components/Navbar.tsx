'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [

    { href: "#inicio", label: "Inicio" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#sobremi", label: "Sobre mí" },
    { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all ${scrolled
                ? "bg-white/80 dark:bg-black/80 shadow backdrop-blur border-b border-gray-200 dark:border-gray-800"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <span className="text-lg font-bold">Daniel Romero</span>
                <ul className="flex gap-6 text-sm">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="hover:underline underline-offset-4 text-gray-700 dark:text-gray-200"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
