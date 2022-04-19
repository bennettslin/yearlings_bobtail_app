import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Texts from '../../../Texts'

const PromoViewTitle = ({ title }) => Boolean(title) && (
    <div
        {...{
            className: cx(
                'PromoViewTitle',
                'fontColour__title',
                'fontSize__largeTitle',
                'font__heading',
            ),
        }}
    >
        <Texts {...{ text: title }} />
    </div>
)

PromoViewTitle.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.string,
    ]),
}

export default PromoViewTitle
