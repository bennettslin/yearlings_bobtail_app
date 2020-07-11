import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import Carousel from '../../components/Carousel'
import Main from '../../components/Main'
import LyricOverview from '../../components/LyricOverview'

const PageContainer = forwardRef((props, ref) => (
    <>
        <Carousel />
        <Main />
        <LyricOverview {...{ ref }} />
    </>
))

PageContainer.propTypes = {
    children: PropTypes.node.isRequired
}

export default memo(PageContainer)
