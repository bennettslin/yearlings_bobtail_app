import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../DidMountHoc'
import InlineSvg from '../../modules/InlineSvg'
import { getSvgForDot } from '../../api/svg'
import './style'

const Dot = ({
    didMount,
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

    return didMount && (
        <InlineSvg
            notAbsoluteFullContainer
            {...{
                className: cx(
                    'Dot',
                    dotKey,

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

Dot.propTypes = {
    didMount: PropTypes.bool.isRequired,
    className: PropTypes.string,
    noDropShadow: PropTypes.bool,
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    isDeselected: PropTypes.bool,
    isSequenceDot: PropTypes.bool,
    dotKey: PropTypes.string.isRequired
}

export default memo(getDidMountHoc(Dot))
