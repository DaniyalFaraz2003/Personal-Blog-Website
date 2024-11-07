//page.tsx
import { ContentLayout } from "@/components/admin-panel/content-layout";
import HeroSection from "@/Components/HeroSection";
import StarsCanvas from "@/Components/Stars";
import Overview from "@/Components/HomeOverview"
import HomeBlog from "@/Components/HomeBlog"
import HomeProject from "@/Components/HomeProject"

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
        </ContentLayout>
    );
}