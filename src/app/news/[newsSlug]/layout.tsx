import {ReactNode} from "react";

type NewsDetailLayoutType = {
    children: ReactNode
}

const NewsDetailLayout = ({children}: NewsDetailLayoutType)=>  {
    return (
        <>
            {children}
        </>
    )
}

export default NewsDetailLayout