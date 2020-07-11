import { createContext } from 'react'

const PageIndicesContext = createContext({
    pageSongIndex: 0,
    pageVerseIndex: 0,
    pageAnnotationIndex: 0,
    isPageLogue: 0,
    setPageSongIndex() {},
    setPageVerseIndex() {},
    setPageAnnotationIndex() {},
    setIsPageLogue() {}
})

export default PageIndicesContext
