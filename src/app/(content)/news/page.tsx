"use client";

import { useEffect, useState} from "react";
import {NewsList} from '@/components'
import {NewsItemType} from "@/types";

const NewsPage = () => {

    const [error, setError] = useState<string | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [news, setNews] = useState<NewsItemType[]>([])

    useEffect(() => {
        async function fetchNews() {
            setIsLoading(true)
            const response = await fetch('http://localhost:8080/news')

            if (!response.ok) {
                setError('Failed to fetch news');
                setIsLoading(false)
            }

            const news = await response.json()
            setIsLoading(false)
            setNews(news)
        }
        fetchNews();
    }, [])

    if (isLoading) {
        return (<p>Loading...</p>)
    }

    if (error) {
        return (<p>ERROR: {error}</p>)
    }

    let newsContent;
    if (news && news.length > 0) {
        newsContent = <NewsList newsList={news} />
    }

    return (
        <>
            <h1>News Page</h1>
            {newsContent}
        </>
    );
}

export default NewsPage
