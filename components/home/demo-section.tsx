import { Pizza } from "lucide-react";

export default function DemoSection() {
    return (
        <section className="relative">
            <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
                <div>gradient</div>
                <div className="flex flex-col items-center text-center space-y-4 gap-4">
                    <div className="inline-flex items-center justify-center rounded-2xl p-2 bg-gray-100/80 backdrop-blur-xs border-gray-500/20 mb-4">
                        <Pizza className="w-10 h-10 text-rose-500" />
                    </div>
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold max-w-2xl mx-auto px-4 sm:px-6">
                            Watch how summarize transforms this pdf into an easy to read summary!
                        </h3>
                    </div>
                    <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
                        {/* summary viewer */}
                    </div>
                </div>
            </div>

        </section>
    )
}
