import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const UcBerkeleyTreeRight = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'UcBerkeleyTreeRight',
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
                    'UcBerkeleyTreeRight'
                )}
            </text>
        </Svg>
    )
}

UcBerkeleyTreeRight.propTypes = propTypes;

export default UcBerkeleyTreeRight
