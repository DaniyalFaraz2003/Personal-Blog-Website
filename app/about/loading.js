import React from "react";
import LoadingComponent from "@/components/LoadingComponent";
import { ContentLayout } from "@/components/admin-panel/content-layout";

const Loading = () => {
    return (
        <ContentLayout pathname={"About"}>
            <LoadingComponent />
        </ContentLayout>
    );
}

export default Loading;
