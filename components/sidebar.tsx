"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { LayoutDashboard } from "lucide-react"

export default function Sidebar() {
    const pathname = usePathname()

    const sidelinks = [
        { href: "/", label: "Dashboard", icon: <LayoutDashboard /> },
    ]

    return (
        <aside>
            {sidelinks.map(({ href, label, icon }) => (
                <Link key={href} href={href} className={`link ${pathname === href ? "active" : ""} flex items-center gap-1.5`}>
                    {icon}
                    <span>{label}</span>
                </Link>
            ))}
        </aside>
    )
}