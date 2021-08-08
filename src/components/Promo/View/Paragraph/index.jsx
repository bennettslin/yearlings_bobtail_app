import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Texts from '../../../Texts'
import './style'

const PromoViewParagraph = ({ paragraph }) => (
    <div
        {...{
            className: cx(
                'PromoViewParagraph',
                'fontSize__mediumTitle',
            ),
        }}
    >
        <Texts {...{ text: paragraph }} />
    </div>
)

PromoViewParagraph.propTypes = {
    paragraph: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]).isRequired,
}

export default PromoViewParagraph
