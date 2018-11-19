import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Prologue = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Prologue'
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
                    'Prologue'
                )}
            </text>
        </Svg>
    )
}

Prologue.propTypes = propTypes;

export default Prologue
