export type Project = {
    title: string;
    description: string;
    technologies: string[];
    tags: string[];
    image?: string;
    github?: string;
    demo?: string;
    iconName?: 'network' | 'robot' | 'laptop' | 'movie' | 'location';
};

export const projects: Project[] = [
    {
        title: "TankNet",
        description: "Escáner de redes multiplataforma con detección de vulnerabilidades, orientado a pentesting académico.",
        technologies: ["Java", "JavaFX", "Socket", "SQL"],
        tags: ["Java", "Pentesting", "JavaFX", "MySQL"],
        github: "https://github.com/Daniromavi/TankNet",
        iconName: 'network',
    },

    {
        title: "Portfolio",
        description: "Este portfolio full-stack en Next.js 15 + Spring Boot 3, desarrollado desde cero.",
        technologies: ["Next.js", "TypeScript", "Tailwind", "Spring Boot"],
        tags: ["Next.js", "Spring Boot", "Tailwind", "Full-Stack"],
        github: "https://daniromavi.vercel.app/",
        iconName: 'laptop',
    },
    {
        title: "Catálogo de Series y Películas",
        description: "App de Android para visualizar un catálogo de películas y series usando Fragments y SQLite. Soporta búsqueda, favoritos y ficha detallada.",
        technologies: ["Java", "Android", "SQLite", "Fragments"],
        tags: ["Android", "SQLite", "UI", "Java"],
        github: "https://github.com/Daniromavi/PMDM-6",
        iconName: 'movie',
    },
    {
        title: "CRUD con API REST",
        description: "Aplicación Android que se conecta a una API REST para realizar operaciones CRUD.",
        technologies: ["Java", "Android", "API REST", "Volley"],
        tags: ["Android", "REST", "Java", "API"],
        github: "https://github.com/Daniromavi/PMDM9",
        iconName: 'laptop',
    },
    {
        title: "MAC Scanner",
        description: "Script en Python para escanear la red local, identificar dispositivos conectados y mostrar sus direcciones IP y MAC mediante ARP.",
        technologies: ["Python", "ARP", "Sockets"],
        tags: ["Python", "Networking", "ARP", "Automation"],
        github: "https://github.com/Daniromavi/TankNet",
        iconName: 'network',
    },
    {
        title: "Geolocalizador con Mapas y Batería",
        description: "App Android que guarda coordenadas GPS, nivel de batería y dirección en base de datos. Visualiza los puntos en Google Maps con marcadores personalizados.",
        technologies: ["Java", "Google Maps API", "SQLite", "Geocoder"],
        tags: ["Android", "Geolocalización", "Mapas", "SQLite"],
        github: "https://github.com/Daniromavi/PMDM8",
        iconName: "location",
    }


];
