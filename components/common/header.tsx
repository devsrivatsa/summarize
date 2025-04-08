
import { FileText } from "lucide-react";
import { Button } from "../ui/button";
import NavLink from "./nav-link";

export default function Header() {
    const isLoggedIn = false;
    return (
    
    <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto">

        <div className="flex lg:flex-1 justify-start">
            <NavLink href="/" className="flex items-center gap-1 lg:gap-2">
            <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out"/>
            <span className="text-gray-900 lg:text-xl font-extrabold">Summarize</span>
            </NavLink>
        </div>

        <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
            <NavLink href="/#pricing">Pricing</NavLink>
            {isLoggedIn && (
                <NavLink href="/#dashboard">Your Summaries</NavLink>
            )}
        </div>
        
        <div className="flex lg:flex-1 justify-end">
            {isLoggedIn ? (
                <div className="flex items-center gap-2">
                    <NavLink href="/#upload">Upload a PDF</NavLink>
                    <div>Pro</div>
                    <Button>Sign Out</Button>
                </div>
            ) : (
                <div>
                    <NavLink href="/#sign-in">Sign in</NavLink>
                </div>
            )}
        </div>

    </nav>
    )
}