import { AboutDialog } from "@/components/header/about-dialog";

export function Header() {
    return (
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
            <h1 className="text-xl font-semibold">The Bear</h1>
            <div className="ml-auto gap-1.5 text-sm">
            <AboutDialog />
            </div>
        </header>
    );
}