import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CavemanBones = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'CavemanBones',
                className
            )}
        >
            <rect
                className={cx(
                    'Fixture__temporaryRect'
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
                    'CavemanBones'
                )}
            </text>
        </Svg>
    )
}

CavemanBones.propTypes = propTypes;

export default CavemanBones
