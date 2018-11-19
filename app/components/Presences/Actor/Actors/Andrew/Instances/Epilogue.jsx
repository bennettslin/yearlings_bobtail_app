import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Epilogue = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Epilogue'
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
                    'Epilogue'
                )}
            </text>
        </Svg>
    )
}

Epilogue.propTypes = propTypes;

export default Epilogue
