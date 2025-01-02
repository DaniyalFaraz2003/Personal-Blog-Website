import React from 'react'
import {ContentLayout} from "@/Components/admin-panel/content-layout";


export default function Page({ params }) {
    const { projectId } = params;

    return (
        <ContentLayout pathname={`portfolio/${projectId}`}>
            <h1>This is portfolio page with id {projectId}</h1>
        </ContentLayout>
    )
}