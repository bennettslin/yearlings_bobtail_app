import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CatholicIdea = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'CatholicIdea'
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
                    'CatholicIdea'
                )}
            </text>
        </Svg>
    )
}

CatholicIdea.propTypes = propTypes;

export default CatholicIdea
