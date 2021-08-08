import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Texts from '../../../Texts'
import './style'

const PromoViewTitle = ({ title }) => Boolean(title) && (
    <div
        {...{
            className: cx(
                'PromoViewTitle',
                'fontColour__title',
                'fontSize__largeTitle',
                'Rancho',
            ),
        }}
    >
        <Texts {...{ text: title }} />
    </div>
)

PromoViewTitle.propTypes = {
    title: PropTypes.string,
}

export default PromoViewTitle
