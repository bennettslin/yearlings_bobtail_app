import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button/button'

/*************
 * CONTAINER *
 *************/

const DotButton = (props) => (
    <DotButtonView {...props} />
)

DotButton.propTypes = {
    isSelected: PropTypes.bool,
    isSmall: PropTypes.bool,
    dotKey: PropTypes.string,
    dotKeys: PropTypes.object,
    handleDotButtonClick: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const DotButtonView = ({

    // From props.
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
        isEnabled={!isSelected}
        isSmall={isSmall}
        handleClick={handleDotButtonClick}
    />
)

export default DotButton
