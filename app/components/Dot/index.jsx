import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import InlineSvg from 'modules/InlineSvg'

import { getDotIcon } from '../../svg/dots'

const propTypes = {
    // From parent.
    className: PropTypes.string,
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    isDeselected: PropTypes.bool,
    isSequenceDot: PropTypes.bool,
    dotKey: PropTypes.string.isRequired
}

const Dot = ({
    className,

    isAccessed,

    // Applies to selectable dots.
    isSelected,

    // Applies to slide dots.
    isDeselected,

    isSequenceDot,

    dotKey

}) => {
    const dotIconSvg = getDotIcon(dotKey)

    return (
        <InlineSvg
            notAbsoluteFullContainer
            {...{
                className: cx(
                    'Dot',
                    `Dot__${dotKey}`,

                    isSequenceDot ?
                        'strokeShadow' :
                        'dropShadow',

                    // Only used by DotsSlideSelect.
                    isDeselected && `Dot__deselected`,

                    // TODO: These currently don't do anything.
                    isAccessed && `Dot__accessed`,
                    isSelected && `Dot__selected`,

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
