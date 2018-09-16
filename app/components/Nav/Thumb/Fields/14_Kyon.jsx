import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

const KyonThumbIcon = ({

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

KyonThumbIcon.propTypes = propTypes

export default KyonThumbIcon
