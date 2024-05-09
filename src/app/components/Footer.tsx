'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Footer = () => {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <footer className="max-w-6xl mx-auto px-4 pt-10">
            <hr className="bg-gray-200 border-0 dark:bg-gray-700 h-px"></hr>
            <div className="flex md:flex-row justify-between items-end py-10">
                <p className="font-light text-sm text-gray-500 dark:text-gray-400">
                    <strong className="font-semibold">Hajar Hamza</strong> all rights
                    reserved.
                </p>
                <p className="font-light text-sm text-gray-500 dark:text-gray-400">
                    Built with {theme === "dark" ? "🤍" : "🖤"}
                </p>
            </div>
        </footer>
    )
};
