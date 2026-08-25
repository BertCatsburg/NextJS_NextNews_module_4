import '../globals.css';
import {PropsWithChildren} from 'react'
import {MainHeader} from "@/components";


export const metadata = {
    title: 'Next.js Page Routing & Rendering, module 4',
    description: 'Learn how to route to different pages.',
}

const ContentLayout = ({children}: PropsWithChildren) => {
    return (
        <div id="page">
            <MainHeader/>
            {children}
        </div>
    )
}

export default ContentLayout;
