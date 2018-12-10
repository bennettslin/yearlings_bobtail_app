import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ShaneBuying = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'ShaneBuying'
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
                    'ShaneBuying'
                )}
            </text>
        </Svg>
    )
}

ShaneBuying.propTypes = propTypes

export default ShaneBuying
