import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export default function TypingAnimation({
    texts,
    duration = 100,
    className,
    pause = 2000,
}) {
    const [displayedText, setDisplayedText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < currentText.length) {
                    setDisplayedText((prev) => prev + currentText.charAt(charIndex));
                    setCharIndex((prev) => prev + 1);
                } else {
                    // Pause when word is finished
                    setTimeout(() => setIsDeleting(true), pause);
                }
            } else {
                if (charIndex > 0) {
                    setDisplayedText((prev) => prev.slice(0, -1));
                    setCharIndex((prev) => prev - 1);
                } else {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? duration / 2 : duration);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, texts, textIndex, duration, pause]);

    return (
        <span className={cn(className)}>
            {displayedText}
            <span className="animate-pulse border-r-2 border-white ml-1" />
        </span>
    );
}
