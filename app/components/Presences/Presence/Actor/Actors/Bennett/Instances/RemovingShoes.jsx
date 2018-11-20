import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const RemovingShoes = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'RemovingShoes'
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
                    'RemovingShoes'
                )}
            </text>
        </Svg>
    )
}

RemovingShoes.propTypes = propTypes;

export default RemovingShoes
