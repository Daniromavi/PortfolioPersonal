'use client';

import { useEffect, useState } from 'react';

interface TypingTextProps {
    texts: string[];
    speed?: number; // tiempo entre letras
    pause?: number; // pausa entre textos
    className?: string;
    delayStart?: number; // delay antes de empezar (opcional)
}

export default function TypingText({
    texts,
    speed = 50,
    pause = 2000,
    className = '',
    delayStart = 1200,
}: TypingTextProps) {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0); // texto actual
    const [charIndex, setCharIndex] = useState(0); // letra actual
    const [isDeleting, setIsDeleting] = useState(false);
    const [showTyping, setShowTyping] = useState(false);

    // Delay inicial para empezar la animación
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTyping(true);
        }, delayStart);
        return () => clearTimeout(timer);
    }, [delayStart]);

    // Efecto de tipeo
    useEffect(() => {
        if (!showTyping) return;

        const currentText = texts[index];
        let delay = speed;

        if (!isDeleting && charIndex === currentText.length) {
            // Pausar antes de borrar
            const pauseTimeout = setTimeout(() => {
                setIsDeleting(true);
            }, pause);
            return () => clearTimeout(pauseTimeout);
        }

        const timeout = setTimeout(() => {
            if (isDeleting) {
                if (charIndex > 0) {
                    setCharIndex((prev) => prev - 1);
                    setText(currentText.substring(0, charIndex - 1));
                } else {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % texts.length);
                }
            } else {
                setCharIndex((prev) => prev + 1);
                setText(currentText.substring(0, charIndex + 1));
            }
        }, delay);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index, texts, speed, pause, showTyping]);

    return (
        <p className={`inline-block whitespace-nowrap ${className}`}>
            {text}
            <span
                className={`ml-1 ${isDeleting || charIndex < texts[index].length
                        ? 'opacity-100'
                        : 'animate-blink'
                    }`}
            >
                |
            </span>
        </p>
    );
}
