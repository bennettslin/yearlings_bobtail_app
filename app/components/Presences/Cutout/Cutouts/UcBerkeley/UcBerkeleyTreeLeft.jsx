import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const UcBerkeleyTreeLeft = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'UcBerkeleyTreeLeft',
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
                    'UcBerkeleyTreeLeft'
                )}
            </text>
        </Svg>
    )
}

UcBerkeleyTreeLeft.propTypes = propTypes;

export default UcBerkeleyTreeLeft
