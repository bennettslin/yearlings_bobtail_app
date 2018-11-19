import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Mermaid = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Mermaid'
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
                    'Mermaid'
                )}
            </text>
        </Svg>
    )
}

Mermaid.propTypes = propTypes;

export default Mermaid
