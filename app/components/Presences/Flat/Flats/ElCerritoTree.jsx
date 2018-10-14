import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ElCerritoTree = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ElCerritoTree',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'ElCerritoTree'
                )}
            </text>
        </Svg>
    )
}

ElCerritoTree.propTypes = propTypes;

export default ElCerritoTree
