import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Testimonials() {
    return (
        <section className="py-16 md:py-32 bg-gradient-to-b from-[#EAEBFC] to-white relative">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16 relative z-10">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <p className="text-[11px] tracking-[0.35em] uppercase text-slate-700 mb-5">
                        Honestly, in their own words
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-slate-900 font-light tracking-tight leading-[1.1]">
                        Stories from students who <span className="font-display italic">stayed.</span>
                    </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2 bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl">
                        <CardHeader className="pb-0">
                            <img
                                className="h-8 w-fit object-contain"
                                src="/nav bar logo.svg"
                                alt="PeaceCode Logo"
                                height="32"
                                width="auto"
                            />
                        </CardHeader>
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6 text-slate-900">
                                <p className="text-xl font-medium font-serif leading-relaxed">
                                    "Ek baar 2 baje raat ko breakdown hua before placements. Peace Code ka peer room mila, aur honestly it helped more than I expected. Kaafi light feel kiya."
                                </p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12 border border-white/50 shadow-sm">
                                        <AvatarImage
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
                                            alt="Priya S."
                                            loading="lazy"
                                        />
                                        <AvatarFallback className="bg-gradient-to-br from-[#C4B5D4] to-[#A8B8A8] text-white">PS</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <cite className="text-sm font-semibold not-italic">Priya S.</cite>
                                        <span className="text-slate-600 block text-xs">B.Tech CSE — IIT Roorkee</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2 bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6 text-slate-900">
                                <p className="text-xl font-medium font-serif leading-relaxed">
                                    "Medical college is not what they show in movies. The AI companion here doesn't give you gyaan — it just listens. That's all I needed at 3 a.m."
                                </p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12 border border-white/50 shadow-sm">
                                        <AvatarImage
                                            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop"
                                            alt="Rohan M."
                                            loading="lazy"
                                        />
                                        <AvatarFallback className="bg-gradient-to-br from-[#C4B5D4] to-[#A8B8A8] text-white">RM</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-semibold not-italic">Rohan M.</cite>
                                        <span className="text-slate-600 block text-xs">MBBS 3rd Year — AIIMS Delhi</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6 text-slate-900">
                                <p className="font-serif leading-relaxed">
                                    "Imposter syndrome in a competitive college is real. Peace Code helped me realize I'm not alone in feeling like I don't belong here."
                                </p>

                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="size-12 border border-white/50 shadow-sm">
                                        <AvatarImage
                                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
                                            alt="Sneha K."
                                            loading="lazy"
                                        />
                                        <AvatarFallback className="bg-gradient-to-br from-[#C4B5D4] to-[#A8B8A8] text-white">SK</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-semibold not-italic">Sneha K.</cite>
                                        <span className="text-slate-600 block text-xs">MBA — IIM Bangalore</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6 text-slate-900">
                                <p className="font-serif leading-relaxed">
                                    "It's like having a non-judgmental friend in your pocket. No forms, no waiting lists. Just someone to talk to when anxiety hits hard."
                                </p>

                                <div className="grid grid-cols-[auto_1fr] gap-3 items-center">
                                    <Avatar className="size-12 border border-white/50 shadow-sm">
                                        <AvatarImage
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
                                            alt="Vikram A."
                                            loading="lazy"
                                        />
                                        <AvatarFallback className="bg-gradient-to-br from-[#C4B5D4] to-[#A8B8A8] text-white">VA</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-semibold not-italic">Vikram A.</cite>
                                        <span className="text-slate-600 block text-xs">B.Arch — NIT Trichy</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
