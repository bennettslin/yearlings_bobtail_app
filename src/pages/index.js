import React, { useState } from 'react'
import PageContainer from '../../app/containers/Page'
import PageIndicesContext from '../../app/contexts/PageIndices'

export default () => {
    const
        [pageSongIndex, setPageSongIndex] = useState(0),
        [pageVerseIndex, setPageVerseIndex] = useState(0),
        [pageAnnotationIndex, setPageAnnotationIndex] = useState(0),
        [isPageLogue, setIsPageLogue] = useState(0)

    return (
        <PageIndicesContext.Provider
            {...{
                value: {
                    pageSongIndex,
                    pageVerseIndex,
                    pageAnnotationIndex,
                    isPageLogue,
                    setPageSongIndex,
                    setPageVerseIndex,
                    setPageAnnotationIndex,
                    setIsPageLogue
                }
            }}
        >
            <PageContainer />
        </PageIndicesContext.Provider>
    )
}
