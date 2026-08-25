"use server";

import Link from 'next/link'
import {NavLink} from "@/components";

export const MainHeader = async () => {
    return (
        <header id="main-header">
            <div id="logo"><Link href="/">NextNews</Link></div>
            <nav>
                <ul>
                    <li><NavLink href='/' compareMethod='equals'>Home</NavLink></li>
                    <li><NavLink href='/archive' compareMethod='startWith'>Archive</NavLink></li>
                    <li><NavLink href='/news' compareMethod='startWith'>News</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}