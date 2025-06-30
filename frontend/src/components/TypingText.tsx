'use client';

import { useEffect, useState } from 'react';

interface TypingTextProps {
    texts: string[];
    speed?: number; // tiempo entre letras
    pause?: number; // pausa entre textos
    className?: string;
}

export default function TypingText({
    texts,
    speed = 1,
    pause = 100,
    className = '',
}: TypingTextProps) {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0); // índice del texto actual
    const [charIndex, setCharIndex] = useState(0); // índice de letra
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[index];

        let delay = speed;

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
                if (charIndex < currentText.length) {
                    setCharIndex((prev) => prev + 1);
                    setText(currentText.substring(0, charIndex + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pause);
                }
            }
        }, delay);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index, texts, speed, pause]);
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
