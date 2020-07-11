import React, { forwardRef, memo } from 'react'
import Carousel from '../../components/Carousel'
import Main from '../../components/Main'
import LyricOverview from '../../components/LyricOverview'

const PageContainer = forwardRef((props, ref) => {
    return (
        <>
            <Carousel />
            <Main />
            <LyricOverview {...{ ref }} />
        </>
    )
})

export default memo(PageContainer)
