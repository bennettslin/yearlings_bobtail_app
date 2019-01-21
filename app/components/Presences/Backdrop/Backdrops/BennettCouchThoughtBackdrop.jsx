import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const BennettCouchThoughtBackdrop = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BennettCouchThoughtBackdrop',
                className
            )}
        >
            <rect
                className={cx(
                    'Backdrop__temporaryRect'
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
                    'BennettCouchThoughtBackdrop'
                )}
            </text>
        </Svg>
    )
}

BennettCouchThoughtBackdrop.propTypes = propTypes

export default BennettCouchThoughtBackdrop
