import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import InlineSvg from '../../modules/InlineSvg'
import { getSvgForDot } from '../../api/svg/dots'
import './style'

const propTypes = {
    // From parent.
    className: PropTypes.string,
    noDropShadow: PropTypes.bool,
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    isDeselected: PropTypes.bool,
    isSequenceDot: PropTypes.bool,
    dotKey: PropTypes.string.isRequired
}

const Dot = ({
    className,

    noDropShadow,

    isAccessed,

    // Applies to selectable dots.
    isSelected,

    // Applies to slide dots.
    isDeselected,

    isSequenceDot,

    dotKey

}) => {
    const dotIconSvg = getSvgForDot(dotKey)

    return (
        <InlineSvg
            notAbsoluteFullContainer
            {...{
                className: cx(
                    'Dot',
                    `Dot__${dotKey}`,

                    isSequenceDot && 'strokeShadow',

                    // Only used by DotsSlideSelect.
                    isDeselected && `Dot__deselected`,

                    !isSequenceDot && !noDropShadow && [
                        'dropShadow',
                        'dropShadow__anchorHover',

                        isAccessed && `dropShadow__accessed`,
                        isSelected && `dropShadow__selected`
                    ],

                    className
                )
            }}
        >
            {dotIconSvg}
        </InlineSvg>
    )
}

Dot.propTypes = propTypes

export default memo(Dot)
