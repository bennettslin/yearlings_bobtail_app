import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettDefiant = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'BennettDefiant'
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
                    'BennettDefiant'
                )}
            </text>
        </Svg>
    )
}

BennettDefiant.propTypes = propTypes

export default BennettDefiant
