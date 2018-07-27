import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

const ConstellationsPanelIcon = ({

    className

}) => (
    <circle
        {...{
            className,
            cx: 50,
            cy: 50,
            r: 50
        }}
    />
)

const propTypes = {
    className: PropTypes.string
}

ConstellationsPanelIcon.propTypes = propTypes

export default ConstellationsPanelIcon
