import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Attic = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Attic'
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
                    'Attic'
                )}
            </text>
        </Svg>
    )
}

Attic.propTypes = propTypes

export default Attic
