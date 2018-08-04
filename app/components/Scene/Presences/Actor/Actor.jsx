import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    // From parent.
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}

const Actor = ({

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
                    'Actor'
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

Actor.propTypes = propTypes;

export default Actor
