import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    // From parent.
    instanceKey: PropTypes.string.isRequired
}

const YoungBennett = ({

    instanceKey,

...other }) => {

    return (
        <g
            className={cx(
                'Actor',
                'YoungBennett'
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
                {`YoungBennett${instanceKey}`}
            </text>
        </g>
    )
}

YoungBennett.propTypes = propTypes;

export default YoungBennett
