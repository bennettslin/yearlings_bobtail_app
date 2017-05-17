import React from 'react'
import classnames from 'classnames'
import DotButton from './dot-button'

/*************
 * CONTAINER *
 *************/

const DotAnchorBlock = (props) => (
    <DotAnchorBlockView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const DotAnchorBlockView = ({

    // From props.
    dotKeys,
    isSelected,
    accessHighlighted,

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
        />
    </div>
)

export default DotAnchorBlock
