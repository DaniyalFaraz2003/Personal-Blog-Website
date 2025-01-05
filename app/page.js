//page.tsx
import { ContentLayout } from "@/components/admin-panel/content-layout";
import HeroSection from "@/components/HeroSection";
import StarsCanvas from "@/components/Stars";
import Overview from "@/components/HomeOverview"
import HomeBlog from "@/components/HomeBlog"
import HomeProject from "@/components/HomeProject"
import HomeSkills from "@/components/HomeSkills"

export default function Page() {
    return (
        <ContentLayout pathname="Home">
            <div className={"relative z-0"}>
                <HeroSection />
                <StarsCanvas />
            </div>
            <Overview />
            <HomeBlog />
            <HomeProject />
            <HomeSkills />
        </ContentLayout>
    );
}