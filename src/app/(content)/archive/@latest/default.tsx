import {getLatestNews} from "@/lib/news"
import {NewsList} from "@/components";

const LatestNewsPage = () => {

    const latestNews = getLatestNews()

    return (
        <>
            <h2>Latest News</h2>
            <NewsList news={latestNews} />
        </>
    )
}

export default LatestNewsPage
