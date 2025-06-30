import { FC } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaNetworkWired, FaRobot, FaLaptopCode } from 'react-icons/fa';

interface Project {
    title: string;
    description: string;
    tags: string[];
    github?: string;
    iconName?: 'network' | 'robot' | 'laptop';
}

const getIcon = (name?: string) => {
    switch (name) {
        case 'network':
            return <FaNetworkWired />;
        case 'robot':
            return <FaRobot />;
        case 'laptop':
            return <FaLaptopCode />;
        default:
            return '📁';
    }
};

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
    return (
        <motion.div
            className="bg-[#140c1c] p-6 rounded-2xl shadow-md text-white flex flex-col gap-4 hover:shadow-purple-900 transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="text-3xl text-purple-400">{getIcon(project.iconName)}</div>
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="text-sm text-purple-100">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                    <span key={tag} className="bg-[#1f112a] text-xs px-3 py-1 rounded-full text-purple-200">
                        {tag}
                    </span>
                ))}
            </div>

            <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 mt-auto text-pink-400 hover:underline"
            >
                <FaGithub />
                View on GitHub
            </a>
        </motion.div>
    );
};

export default ProjectCard;
