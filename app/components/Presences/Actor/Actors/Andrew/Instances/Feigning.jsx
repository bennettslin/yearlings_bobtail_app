import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Feigning = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Feigning'
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
                    'Feigning'
                )}
            </text>
        </Svg>
    )
}

Feigning.propTypes = propTypes;

export default Feigning
