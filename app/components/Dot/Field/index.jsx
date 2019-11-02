import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import InlineSvg from 'modules/InlineSvg'

import { getDotIcon } from '../../../svg/dots'

const propTypes = {
    // From parent.
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    isDeselected: PropTypes.bool,
    dotKey: PropTypes.string.isRequired
}

const DotField = ({
    isAccessed,

    // Applies to selectable dots.
    isSelected,

    // Applies to slide dots.
    isDeselected,

    dotKey

}) => {
    const dotIconSvg = getDotIcon(dotKey)

    return (
        <InlineSvg
            {...{
                className: cx(
                    'DotField',

                    `DotField__${dotKey}`,
                    // Only used by DotsSlideSelect.
                    isDeselected && `DotField__deselected`,

                    // TODO: These currently don't do anything.
                    isAccessed && `DotField__accessed`,
                    isSelected && `DotField__selected`
                )
            }}
        >
            {dotIconSvg}
        </InlineSvg>
    )
}

DotField.propTypes = propTypes

export default memo(DotField)
