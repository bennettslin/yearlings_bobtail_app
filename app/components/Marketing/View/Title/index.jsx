import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Texts from '../../../Texts'
import './style'

const MarketingTitle = ({ title }) => (
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
        <Texts {...{ text: title }} />
    </div>
)

MarketingTitle.propTypes = {
    title: PropTypes.string.isRequired,
}

export default MarketingTitle
