import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Texts from '../../Texts'
import './style'

const MarketingTitle = ({ text }) => (
    <div
        {...{
            className: cx(
                'MarketingTitle',
                'fontColour__title',
                'fontSize__largeTitle',
                'Rancho',
            ),
        }}
    >
        <Texts {...{ text }} />
    </div>
)

MarketingTitle.propTypes = {
    text: PropTypes.string.isRequired,
}

export default MarketingTitle
