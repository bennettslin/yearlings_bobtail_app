import React, { Fragment } from 'react'
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
        <Fragment>
            <rect
                className={cx(
                    'Actor',
                    'Esther'
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
        </Fragment>
    )
}

Esther.propTypes = propTypes;

export default Esther
