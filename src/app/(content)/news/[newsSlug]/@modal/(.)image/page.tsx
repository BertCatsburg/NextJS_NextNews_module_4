'use server';

import Image from 'next/image'
import {notFound} from "next/navigation";
import {NewsItemType} from "@/types/newsItem";
import Link from 'next/link';
import {getNewsItem} from "@/lib/news";
import {ModalBackdrop} from "@/components/modal-backdrop";

type ImagePageType = {
    newsSlug: string;
}

const IntercepterImagePage = async ({params}: { params: Promise<ImagePageType> }) => {

    const {newsSlug} = await params;
    const newsItem: NewsItemType | undefined =  await getNewsItem(newsSlug);

    if (!newsItem) {
        notFound()
    }

    return (
        <>
            <ModalBackdrop/>
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