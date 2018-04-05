// Container to show button as dot.

import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button/button'

const dotButtonPropTypes = {
    // From parent.
    isSelected: PropTypes.bool,
    isSmall: PropTypes.bool,
    dotKey: PropTypes.string,
    dotKeys: PropTypes.object,
    handleDotButtonClick: PropTypes.func
},

DotButton = ({

    isSelected,
    isSmall,
    dotKey,
    dotKeys,
    handleDotButtonClick

}) => (
    <Button
        buttonClass="dot"
        buttonName={dotKeys ? 'dot-stanza' : undefined}
        iconClass={dotKey || dotKeys}
        isSmall={isSmall}
        isEnabled={!isSelected}
        handleClick={handleDotButtonClick}
    />
)

DotButton.propTypes = dotButtonPropTypes

export default DotButton
