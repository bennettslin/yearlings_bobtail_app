import React, { useState } from 'react'
import PropTypes from 'prop-types'
import PageIndicesContext from '../../app/contexts/PageIndices'

const HomePage = ({ children }) => {
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
            {children}
        </PageIndicesContext.Provider>
    )
}

HomePage.propTypes = {
    children: PropTypes.node.isRequired
}

export default HomePage
