import {DUMMY_NEWS} from "@/data/dummy-news";

import {NewsList} from '@/components'

const NewsPage = () => {
    return (
        <>
            <h1>News Page</h1>
            <NewsList newslist={DUMMY_NEWS} />
        </>
    );
}

export default NewsPage
