import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

const NarrativeIcon = ({

    className

}) => (
    <circle
        {...{
            className,
            cx: 50,
            cy: 50,
            r: 25
        }}
    />
)

const propTypes = {
    className: PropTypes.string
}

NarrativeIcon.propTypes = propTypes

export default NarrativeIcon
