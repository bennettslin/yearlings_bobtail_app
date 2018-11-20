import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettShore = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'BennettShore',
                className
            )}
        >
            <rect
                className={cx(
                    'Cutout__temporaryRect'
                )}
                {...other}
            />
            <text
                className={cx(
                    'Presence__temporaryText'
                )}
                {...other}
            >
                {cx(
                    'BennettShore'
                )}
            </text>
        </Svg>
    )
}

BennettShore.propTypes = propTypes

export default BennettShore
