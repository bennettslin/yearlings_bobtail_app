import React from 'react'
import PropTypes from 'prop-types'
import PromoTitle from './Title'
import PromoContent from './Content'

const PromoView = ({
    title,
    children,
    footnote,
}) => (
    <>
        <PromoTitle {...{ title }} />
        <PromoContent {...{ footnote }}>
            {children}
        </PromoContent>
    </>
)

PromoView.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    footnote: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
}

export default PromoView
