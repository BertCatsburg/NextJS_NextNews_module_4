'use client'

import Image from 'next/image'
import {notFound, useRouter} from "next/navigation";
import {NewsItemType} from "@/types/newsItem";
import {DUMMY_NEWS} from '@/data/dummy-news';
import Link from 'next/link'


type ImagePageType = {
    params: {
        newsSlug: string
    }
}

const IntercepterImagePage =  ({params}: ImagePageType) => {
    const router = useRouter()

    const {newsSlug} = params
    const newsItem: NewsItemType | undefined = DUMMY_NEWS.find(newsItem => newsItem.slug == newsSlug)

    if (!newsItem) {
        notFound()
    }

    return (
        <>
            <div className="modal-backdrop" onClick={router.back}/>
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <Link href={`/news/${newsItem.slug}`}>
                        <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill/>
                    </Link>
                </div>
            </dialog>
        </>
    )
}

export default IntercepterImagePage