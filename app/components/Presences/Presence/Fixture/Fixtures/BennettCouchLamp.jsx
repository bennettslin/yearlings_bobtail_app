import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettCouchLamp = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BennettCouchLamp',
                className
            )}
        >
            <rect
                className={cx(
                    'Fixture__temporaryRect'
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
                    'BennettCouchLamp'
                )}
            </text>
        </Svg>
    )
}

BennettCouchLamp.propTypes = propTypes

export default BennettCouchLamp
