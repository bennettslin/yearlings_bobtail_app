import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Texts from '../../../Texts'
import './style'

const PromoTitle = ({ title }) => (
    <div
        {...{
            className: cx(
                'PromoTitle',
                'fontColour__title',
                'fontSize__largeTitle',
                'Rancho',
            ),
        }}
    >
        <Texts {...{ text: title }} />
    </div>
)

PromoTitle.propTypes = {
    title: PropTypes.string.isRequired,
}

export default PromoTitle
