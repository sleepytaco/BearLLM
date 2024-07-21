"use client"

import { Button } from "@/components/ui/button"
import {
    Book,
    PawPrint,
    LifeBuoy,
    Settings2,
    SquareTerminal,
    SquareUser,
  } from "lucide-react"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TooltipBtn } from "@/components/tooltip-btn"
import {
    TooltipProvider,
  } from "@/components/ui/tooltip"

const topNav = [
    { label: "Generate Recipes", icon: <SquareTerminal className="size-5" />, href: "/chat" },
    { label: "History", icon: <Book className="size-5" />, href: "/chat/history" },
    { label: "Settings", icon: <Settings2 className="size-5" />, href: "/settings" },
 ];

 const bottomNav = [
    { label: "Feedback", icon: <LifeBuoy className="size-5" />, href: "/feedback" },
    { label: "Account", icon: <SquareUser className="size-5" />, href: "/account" },
 ];

export function SideNav() {
    const pathname = usePathname();

    return (<aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
        <div className="border-b p-2">
         <Link href="/">
            <Button variant="outline" size="icon" aria-label="Home">
                <PawPrint className="size-5 fill-foreground" />
            </Button>
          </Link>
        </div>

        <TooltipProvider>
        <nav className="grid gap-1 p-2">
            { topNav.map((item) => (
                <Link key={item.label} href={item.href}>
                    <TooltipBtn label={item.label} icon={item.icon} 
                    isActive={item.href === pathname} />
                </Link>
            )) }
        </nav>
        <nav className="mt-auto grid gap-1 p-2">
            { bottomNav.map((item) => (
                <Link key={item.label} href={item.href}>
                    <TooltipBtn label={item.label} icon={item.icon} 
                    isActive={item.href === pathname} />
                </Link>
            )) }
        </nav>
        </TooltipProvider>

      </aside>);
}