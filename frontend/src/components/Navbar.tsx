'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobremi", label: "Sobre mí" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#contacto", label: "Contacto" },
    { href: "#formacion", label: "Formacion" },
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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-[#1a0e2a]/80 backdrop-blur-md border-b border-purple-800 shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
                <Link
                    href="#inicio"
                    className="text-2xl font-extrabold text-purple-300 hover:text-purple-400 transition duration-300 hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]"
                >
                    Dhanny
                </Link>


                <ul className="flex gap-6 text-sm">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="relative text-purple-100 hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
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
