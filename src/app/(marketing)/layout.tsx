import '../globals.css';
import React, {PropsWithChildren} from 'react'

export const metadata = {
    title: 'Next.js Page Routing & Rendering, module 4',
    description: 'Learn how to route to different pages.',
}

const RootLayout = ({children}: PropsWithChildren) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default RootLayout;
