import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ForebodingTrees = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ForebodingTrees',
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
                    'ForebodingTrees'
                )}
            </text>
        </Svg>
    )
}

ForebodingTrees.propTypes = propTypes;

export default ForebodingTrees
