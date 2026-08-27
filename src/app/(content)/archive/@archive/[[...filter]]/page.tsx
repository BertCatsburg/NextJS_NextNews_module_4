"use server"

import {NewsItemType} from "@/types/newsItem";
import Link from "next/link";
import {
    getAvailableNewsMonths,
    getAvailableNewsYears,
    getNewsForYear,
    getNewsForYearAndMonth,
    getMonthName
} from "@/lib/news";
import {NewsList} from "@/components";
import React, {Suspense} from "react";

type FilteredNewsPageType = {
    params: Promise<{
        filter: string[]
    }>
}

const FilteredHeader = async ({year, month}: {
    year: number | undefined,
    month: number | undefined
}): Promise<React.ReactNode> => {
    const availableYears = await getAvailableNewsYears()
    let links: number[] = availableYears;

    if (
        year && !availableYears.includes(year) ||
        month && !getAvailableNewsMonths(year).includes(month)
    ) {
        // We have a selected year, but it is not part of the available years
        // We have a selected month, but that month is not in the news array
        throw new Error('Invalid Filter')
    }

    if (year && !month) {
        links = getAvailableNewsMonths(year) // Get all months for this year
    }
    if (year && month) {
        links = []
    }

    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map((link: number) => {
                        const href = year
                            ? `/archive/${year}/${link}`
                            : `/archive/${link}`
                        const linkText = year
                            ? getMonthName(link)
                            : link // This is the Year
                        return (
                            <li key={link}><Link href={href}>{linkText}</Link></li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

const FilteredNews = async ({year, month}: {
    year: number | undefined,
    month: number | undefined
}): Promise<React.ReactNode> => {
    let news: NewsItemType[] = [];
    if (year && !month) {
        news = await getNewsForYear(year)
    } else if (year && month) {
        news = await getNewsForYearAndMonth(year, month)
    }

    // newsContent is the variable shown on the screen
    let newsContent = <p>No News found for selected period.</p>

    if (news.length > 0) {
        newsContent = <NewsList news={news}/>
    }

    return newsContent
}


const FilteredNewsPage = async ({params}: FilteredNewsPageType) => {

    const {filter} = await params

    // Get the parts from the path
    const selectedYear = parseInt(filter?.[0])
    const selectedMonth = parseInt(filter?.[1])

    // const links = await FilteredHeader({year: selectedYear, month: selectedMonth}).sort()

    return (
        <>
            <Suspense fallback={<p>Loading Header...</p>}>
                <FilteredHeader year={selectedYear} month={selectedMonth}/>
            </Suspense>

            <Suspense fallback={<p>Loading News...</p>}>
                <FilteredNews year={selectedYear} month={selectedMonth}/>
            </Suspense>
        </>
    )
}

export default FilteredNewsPage
