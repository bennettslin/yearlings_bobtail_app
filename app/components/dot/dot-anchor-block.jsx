import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import DotButton from './dot-button'

/*************
 * CONTAINER *
 *************/

const DotAnchorBlock = (props) => (
    <DotAnchorBlockView {...props} />
)

DotAnchorBlock.propTypes = {
    dotKeys: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,
    accessHighlighted: PropTypes.bool.isRequired,
    handleDotButtonClick: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const DotAnchorBlockView = ({

    // From props.
    dotKeys,
    isSelected,
    accessHighlighted,
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
            handleDotButtonClick={!isSelected && handleDotButtonClick}
        />
    </div>
)

export default DotAnchorBlock
