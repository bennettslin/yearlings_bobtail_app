import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    // From parent.
    instanceKey: PropTypes.string.isRequired
}

const Anita = ({

    instanceKey,

...other }) => {

    return (
        <g
            className={cx(
                'Actor',
                'Anita'
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
                {`Anita${instanceKey}`}
            </text>
        </g>
    )
}

Anita.propTypes = propTypes;

export default Anita
