import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    // From parent.
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}

const Cutout = ({

    x,
    y,
    width,
    height,
    name

}) => {

    return (
        <Fragment>
            <rect
                className={cx(
                    'Cutout'
                )}
                {...{
                    x,
                    y,
                    width,
                    height
                }}
            />
            <text
                className={cx(
                    'Presence__temporaryText'
                )}
                {...{
                    x,
                    y,
                    width,
                    height
                }}
            >
                {name}
            </text>
        </Fragment>
    )
}

Cutout.propTypes = propTypes;

export default Cutout
