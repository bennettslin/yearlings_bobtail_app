import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Tying = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Tying'
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
                    'Tying'
                )}
            </text>
        </Svg>
    )
}

Tying.propTypes = propTypes;

export default Tying
