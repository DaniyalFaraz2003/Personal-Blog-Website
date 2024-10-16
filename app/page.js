//page.tsx
import { ContentLayout } from "@/components/admin-panel/content-layout";
import HeroSection from "@/Components/HeroSection";
import StarsCanvas from "@/Components/Stars";

export default function Page() {
    return (
        <ContentLayout title="My Personal Website">
            <div className={"relative z-0"}>
                <HeroSection />
                <StarsCanvas />
            </div>
        </ContentLayout>
    );
}