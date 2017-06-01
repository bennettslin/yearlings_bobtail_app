// Container to show dot button with underline bar.

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import DotButton from './dot-button'

const DotAnchorBlock = ({

    dotKeys,
    accessHighlighted,
    isSelected,
    handleDotButtonClick,

...other }) => (

    <div className={classnames(
        'anchor-block',
        'dot-anchor-block',
        dotKeys,
        { 'selected': isSelected,
          'access-highlighted': accessHighlighted && !isSelected }
    )}>
        <span className="underline-bar"></span>
        <DotButton {...other}
            dotKeys={dotKeys}
            isSelected={isSelected}
            handleDotButtonClick={isSelected ? null : handleDotButtonClick}
        />
    </div>
)

DotAnchorBlock.propTypes = {
    dotKeys: PropTypes.object.isRequired,
    accessHighlighted: PropTypes.bool,
    isSelected: PropTypes.bool,
    handleDotButtonClick: PropTypes.func
}

export default DotAnchorBlock
