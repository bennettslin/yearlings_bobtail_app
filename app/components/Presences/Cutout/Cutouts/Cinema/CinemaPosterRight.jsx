import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CinemaPosterRight = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'CinemaPosterRight',
                className
            )}
        >
            <rect
                className={cx(
                    'Cutout__temporaryRect'
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
                    'CinemaPosterRight'
                )}
            </text>
        </Svg>
    )
}

CinemaPosterRight.propTypes = propTypes;

export default CinemaPosterRight
