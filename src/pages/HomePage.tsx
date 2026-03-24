import { Footer } from "../components/Footer";
import { Navbar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { StatsSection } from "../components/StatsSection";
import { FeatureSection } from "../components/FeatureSection";
import { StepsSection } from "../components/StepsSection";
import { UseCasesSection } from "../components/UseCasesSection";
import { CTASection } from "../components/CTASection";

export function HomePage() {
    return (
        <div className="min-h-screen bg-[#f6f6f8] text-slate-900">
            <Navbar />

            <main className="mx-auto max-w-310 px-4 pb-24 pt-14 sm:px-6 lg:px-8">
                <HeroSection />
                <StatsSection />

                <FeatureSection />

                <StepsSection />

                <UseCasesSection />

                <CTASection />
            </main>

            <Footer />
        </div>
    );
}
