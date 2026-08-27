"use client";

import {useEffect, useState} from "react";
import {NewsList} from '@/components'; // This is a Server Component
import {NewsItemType} from "@/types";

const NewsPage = () => {

    const [error, setError] = useState<string | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [news, setNews] = useState<NewsItemType[] | undefined>([])

    useEffect(() => {
        async function fetchNews() {
            setIsLoading(true)
            const response = await fetch('http://localhost:8080/news')

            if (!response.ok) {
                setError('Failed to fetch news');
                setIsLoading(false)
            }

            const news: NewsItemType[] | undefined = await response.json()
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
    if (news) {
        newsContent = <NewsList news={news}/>
    }

    return (
        <>
            <h1>News Page</h1>
            {newsContent}
        </>
    );
}

export default NewsPage
