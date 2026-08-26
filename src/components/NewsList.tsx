import {NewsItemType} from "@/types/newsItem";
import Link from "next/link";
import Image from "next/image";



export const NewsList = ({newsList}: {newsList: NewsItemType[]}) => {
    return (
        <ul className="news-list">
            {
                newsList.map((newsItem: NewsItemType) => {
                    return (
                        <li key={newsItem.id}>
                            <Link href={`/news/${newsItem.slug}`}>
                                <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={400} height={400}/>
                                <span>{newsItem.title}</span>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}
