import '../globals.css';
import React, {PropsWithChildren} from 'react'

export const metadata = {
    title: 'Next.js Page Routing & Rendering, module 4',
    description: 'Learn how to route to different pages.',
}

const RootLayout = ({children}: PropsWithChildren) => {
    return (
        <main>
            <div id="home">
                <h1>A News Site For The Next Generation</h1>
                {children}
            </div>
        </main>
    )
}

export default RootLayout;
