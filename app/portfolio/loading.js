import React from "react";
import LoadingComponent from "@/Components/LoadingComponent";
import { ContentLayout } from "@/Components/admin-panel/content-layout";

const Loading = () => {
    return (
        <ContentLayout pathname={"Portfolio"}>
            <LoadingComponent />
        </ContentLayout>
    );
}

export default Loading;
