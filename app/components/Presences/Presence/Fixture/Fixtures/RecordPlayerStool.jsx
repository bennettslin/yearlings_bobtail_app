import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const RecordPlayerStool = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'RecordPlayerStool',
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
                    'RecordPlayerStool'
                )}
            </text>
        </Svg>
    )
}

RecordPlayerStool.propTypes = propTypes;

export default RecordPlayerStool
