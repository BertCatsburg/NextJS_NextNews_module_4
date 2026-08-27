import Image from 'next/image'
import {notFound} from "next/navigation";
import {NewsItemType} from "@/types/newsItem";
import {getNewsItem} from "@/lib/news";
import Link from 'next/link'


type ImagePageType = {
    params: {
        newsSlug: string
    }
}

const ImagePage = async ({params}: ImagePageType) => {
    const {newsSlug} = await params
    const newsItem: NewsItemType | undefined = await getNewsItem(newsSlug);

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