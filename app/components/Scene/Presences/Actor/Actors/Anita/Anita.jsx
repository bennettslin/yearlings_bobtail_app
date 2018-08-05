import React, { Fragment } from 'react'
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
        <Fragment>
            <rect
                className={cx(
                    'Actor',
                    'Anita'
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
        </Fragment>
    )
}

Anita.propTypes = propTypes;

export default Anita
