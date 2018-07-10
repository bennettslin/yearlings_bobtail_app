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

const Fixture = ({

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
                    'Fixture'
                )}
                x={x}
                y={y}
                width={width}
                height={height}
            />
            <text
                className={cx(
                    'Presence__temporaryText'
                )}
                x={x}
                y={y}
                width={width}
                height={height}
            >
                {name}
            </text>
        </Fragment>
    )
}

Fixture.propTypes = propTypes;

export default Fixture
