import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../Svg/Svg'

import { getDotIcon } from './dotHelper'

const propTypes = {
    // From parent.
    showFieldOnly: PropTypes.bool,
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    isDeselected: PropTypes.bool,
    className: PropTypes.any,
    dotKey: PropTypes.string.isRequired
},

Dot = ({

    isAccessed,

    // Applies to selectable dots.
    isSelected,

    // Applies to slide dots.
    isDeselected,

    showFieldOnly,
    className,
    dotKey,

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
                    `bgColour__dot__${dotKey}`,

                    // These will override the default colour.
                    isAccessed && `bgColour__dot__accessed`,
                    isSelected && `bgColour__dot__selected`,
                    isDeselected && `bgColour__dot__deselected`
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
