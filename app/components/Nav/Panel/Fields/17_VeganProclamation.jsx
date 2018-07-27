import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

const VeganPanelIcon = ({

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

VeganPanelIcon.propTypes = propTypes

export default VeganPanelIcon
