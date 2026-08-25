import {DUMMY_NEWS} from "@/data/dummy-news";
import Image from 'next/image'
import {notFound} from "next/navigation";
import Link from 'next/link'

type NewsDetailsPageType = {
    params: Promise<{
        newsSlug: string
    }>
}

const NewsDetailsPage = async ({params}: NewsDetailsPageType) => {
    const {newsSlug} = await params
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug == newsSlug)

    if (!newsItem) {
        notFound()
    }

    // TODO How komt die slug dan in Image terecht ????
    return (
        <article className="news-article">
            <header>
                <div className="imageContainer">
                    <Link href={`/news/${newsItem.slug}/image`}><Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill /></Link>
                </div>
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    );
}

export default NewsDetailsPage
