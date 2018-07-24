import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../Svg/Svg'

import { getDotIcon } from './dotHelper'

const propTypes = {
    // From parent.
    showFieldOnly: PropTypes.bool,
    className: PropTypes.any,
    dotKey: PropTypes.string.isRequired
},

Dot = ({

    className,
    dotKey,
    showFieldOnly,

...other }) => {

    const IconComponent = getDotIcon(dotKey)

    return (
        <Svg {...other}
            className={cx(
                'Dot',
                className
            )}
        >

            <circle
                className={cx(
                    // TODO: Eventually do this better.
                    'Dot__temporaryField',
                    'bgColour__dot',
                    `bgColour__dot__${dotKey}`
                )}
                {...{
                    cx: 50,
                    cy: 50,
                    r: 50
                }}
            />

            {!showFieldOnly && (
                <IconComponent />
            )}
        </Svg>
    )
}

Dot.propTypes = propTypes

export default Dot
