import React, { Fragment } from 'react'
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
        <Fragment>
            <rect
                className={cx(
                    'Actor',
                    'YoungBennett'
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
        </Fragment>
    )
}

YoungBennett.propTypes = propTypes;

export default YoungBennett
