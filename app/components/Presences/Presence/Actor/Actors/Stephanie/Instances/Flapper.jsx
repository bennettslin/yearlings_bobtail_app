import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Flapper = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Flapper'
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
                    'Flapper'
                )}
            </text>
        </Svg>
    )
}

Flapper.propTypes = propTypes;

export default Flapper
