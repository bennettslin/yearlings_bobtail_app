import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CouchReading = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'CouchReading'
            )}
        >
            <rect
                className={cx(
                    'Actor__temporaryRect'
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
                    'CouchReading'
                )}
            </text>
        </Svg>
    )
}

CouchReading.propTypes = propTypes;

export default CouchReading
