import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { useEffect, useState } from "react";

export default function WordPullUp({
    words,
    wrapperFramerProps = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    },
    framerProps = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 },
    },
    className,
    repeat = true,
}) {
    const [key, setKey] = useState(0);

    useEffect(() => {
        if (!repeat) return;

        const interval = setInterval(() => {
            setKey((prev) => prev + 1);
        }, 5000); // Se repite cada 5 segundos

        return () => clearInterval(interval);
    }, [repeat]);

    return (
        <motion.h1
            key={key}
            variants={wrapperFramerProps}
            initial="hidden"
            animate="show"
            className={cn(
                "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
                className,
            )}
        >
            {words.split(" ").map((word, i) => (
                <motion.span
                    key={i}
                    variants={framerProps}
                    style={{ display: "inline-block", paddingRight: "8px" }}
                >
                    {word === "" ? "\u00A0" : word}
                </motion.span>
            ))}
        </motion.h1>
    );
}
