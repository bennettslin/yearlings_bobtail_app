import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CatholicGuy = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'CatholicGuy'
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
                    'CatholicGuy'
                )}
            </text>
        </Svg>
    )
}

CatholicGuy.propTypes = propTypes;

export default CatholicGuy
