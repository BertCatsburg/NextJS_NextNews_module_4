import Image from 'next/image'
import {notFound} from "next/navigation";
import {NewsItemType} from "@/types/newsItem";
import {DUMMY_NEWS} from '@/data/dummy-news';
import Link from 'next/link'


type ImagePageType = {
    params: {
        newsSlug: string
    }
}

const ImagePage = ({params}: ImagePageType) => {
    const {newsSlug} = params
    const newsItem: NewsItemType | undefined = DUMMY_NEWS.find(newsItem => newsItem.slug == newsSlug)

    if (!newsItem) {
        notFound()
    }

    return (
        <div className="fullscreen-image">
            <Link href={`/news/${newsItem.slug}`}>
                <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill/>
            </Link>
        </div>
    )
}

export default ImagePage