import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GingerbreadPrison = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'GingerbreadPrison'
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
                    'GingerbreadPrison'
                )}
            </text>
        </Svg>
    )
}

GingerbreadPrison.propTypes = propTypes;

export default GingerbreadPrison
