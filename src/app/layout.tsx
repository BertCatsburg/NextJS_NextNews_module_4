import './globals.css';
import React from 'react'
import {MainHeader} from "@/components";

type RootLayoutType = {
    children: React.ReactNode
}

export const metadata = {
    title: 'Next.js Page Routing & Rendering',
    description: 'Learn how to route to different pages.',
}

export default function RootLayout({children}: RootLayoutType) {
    return (
        <html lang="en">
            <body>
            <div id="page">
                <MainHeader/>
                {children}
            </div>
            </body>
        </html>
    )
}
