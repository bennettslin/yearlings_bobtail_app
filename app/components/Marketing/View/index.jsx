import React from 'react'
import PropTypes from 'prop-types'
import MarketingTitle from './Title'
import MarketingContent from './Content'

const MarketingView = ({
    title,
    children,
    footnote,
}) => (
    <>
        <MarketingTitle {...{ title }} />
        <MarketingContent {...{ footnote }}>
            {children}
        </MarketingContent>
    </>
)

MarketingView.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    footnote: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
}

export default MarketingView
