import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

const UncannyValleyPanelIcon = ({

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

UncannyValleyPanelIcon.propTypes = propTypes

export default UncannyValleyPanelIcon
