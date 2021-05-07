// Section for marketing navigation.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const MarketingNav = ({ children }) => (
    <div
        {...{
            className: cx(
                'MarketingNav',
                'fCC',
            ),
        }}
    >
        {children}
    </div>
)

MarketingNav.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MarketingNav
