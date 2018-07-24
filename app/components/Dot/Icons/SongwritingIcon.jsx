import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

const SongwritingIcon = ({

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

SongwritingIcon.propTypes = propTypes

export default SongwritingIcon
