import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    className: PropTypes.string,
    dotKey: PropTypes.string,
    text: PropTypes.string
}

const Icon = ({

    className,
    dotKey,
    text

}) => {
    return (
        <div className={cx(
            'icon-canvas-block',
            dotKey
        )}>
            <div className={cx(
                'icon-canvas',
                dotKey,
                className
            )}>
                {text}
            </div>
        </div>
    )
}

Icon.propTypes = propTypes

export default Icon
