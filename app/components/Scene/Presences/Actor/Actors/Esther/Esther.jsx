import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    // From parent.
    instanceKey: PropTypes.string.isRequired
}

const Esther = ({

    instanceKey,

...other }) => {

    return (
        <g
            className={cx(
                'Actor',
                'Esther'
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
                {`Esther${instanceKey}`}
            </text>
        </g>
    )
}

Esther.propTypes = propTypes;

export default Esther
