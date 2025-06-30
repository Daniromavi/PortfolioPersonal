export type Project = {
    title: string;
    description: string;
    technologies: string[];
    tags: string[];
    image?: string;
    github?: string;
    demo?: string;
    iconName?: 'network' | 'robot' | 'laptop';
};

export const projects: Project[] = [
    {
        title: "TankNet",
        description: "Escáner de redes multiplataforma con detección de vulnerabilidades, orientado a pentesting académico.",
        technologies: ["Java", "JavaFX", "Socket", "SQL"],
        tags: ["Java", "Pentesting", "JavaFX", "MySQL"],
        github: "https://github.com/tuusuario/tanknet",
        iconName: 'network',
    },
    {
        title: "Bot de Amazon",
        description: "Script en Python con Selenium y Tkinter para automatizar compras flash.",
        technologies: ["Python", "Selenium", "Tkinter"],
        tags: ["Python", "Selenium", "Automation", "Tkinter"],
        github: "https://github.com/tuusuario/amazon-bot",
        iconName: 'robot',
    },
    {
        title: "Portfolio",
        description: "Este portfolio full-stack en Next.js 15 + Spring Boot 3, desarrollado desde cero.",
        technologies: ["Next.js", "TypeScript", "Tailwind", "Spring Boot"],
        tags: ["Next.js", "Spring Boot", "Tailwind", "Full-Stack"],
        github: "https://github.com/tuusuario/portfolio",
        iconName: 'laptop',
    },
];
