import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Texts from '../../../Texts'

const PromoViewParagraph = ({ paragraph }) => Boolean(paragraph) && (
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
    ]),
}

export default PromoViewParagraph
