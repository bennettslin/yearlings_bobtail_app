import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Texts from '../../../Texts'

const PromoViewText = ({ text }) => (
    <div
        {...{
            className: cx(
                'PromoViewText',
                'fontSize__mediumTitle',
            ),
        }}
    >
        <Texts {...{ text }} />
    </div>
)

PromoViewText.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
}

export default PromoViewText
