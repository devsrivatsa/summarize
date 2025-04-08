import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl">
            
                <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-gradient-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
                    <Badge className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200" variant="outline">
                        <Sparkles className="w-6 h-6 mr-2 text-rose-600 animate-pulse" />
                        <p className="text-rose-600 text-base">Powered by AI</p>
                    </Badge>
                </div>
                <h1 className="font-bold py-6 text-center">
                    Transform PDFs into{' '} 
                    <span className="relative inline-block">
                        <span className="relative z-10 px-2">Concise</span> 
                        <span className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1" aria-hidden="true"></span>
                    </span>{' '}
                    Summaries
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600">Get a beautiful reel of the this document in seconds</h2>
                <div className="flex justify-center">
                    <Button 
                    className="text-white mt-6 tex-base sm:text-lg lg:text-xl font-bold
                    rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 
                    bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 hover:no-underline
                    shadow-lg transition-all duration-300" 
                    variant={"link"}>
                        <Link href="/#pricing" className="flex gap-2 items-center text-decoration-none">
                        
                        <span>Try it</span>
                        <ArrowRightIcon className="animate-pulse" />
                        </Link>
                    </Button>
                </div>

        </section>
    )
}