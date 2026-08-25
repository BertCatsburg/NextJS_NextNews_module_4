import React, {PropsWithChildren} from "react";

interface NewsDetailLayout extends PropsWithChildren {
    modal: React.ReactNode
}

const NewsDetailLayout = ({children, modal}: NewsDetailLayout)=>  {
    return (
        <>
            {modal}
            {children}
        </>
    )
}

export default NewsDetailLayout