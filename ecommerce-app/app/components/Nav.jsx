"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";


export function Nav({ children }) {

    return (
        <nav className="bg-primary text-primary-foreground flex justify-center px-4">
            {children}
        </nav>
    );
}

export function NavLink(props) {

    const pathname = usePathname();

    return (
        <>
            <Link {...props} className={cn("p-2",
                "hover:bg-secondary",
                "hover:text-secondary-foreground ",
                "focus-visible:bg-secondary-foreground",
                "focus-visible:text-secondary-foreground",
                pathname === props.href && "bg-background text-foreground")}>
            </Link>
        </>

    )
}
