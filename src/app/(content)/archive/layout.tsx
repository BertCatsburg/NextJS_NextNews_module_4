import {ReactNode} from "react";

type ArchiveLayoutType = {
    archive: ReactNode;
    latest: ReactNode;
}

const ArchiveLayout = ({archive, latest}: ArchiveLayoutType) => {
    // Input is the content from @archive/page.tsx and @latest/page.tsx

    return (
        <div>
            <h1>News Archive</h1>
            <section id="archive-filter">
                {archive}
            </section>
            <section id="archive-latest">
                {latest}
            </section>
        </div>
    )
}

export default ArchiveLayout