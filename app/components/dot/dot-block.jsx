// Container to show multiple dots in sequence.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import DotToggleButton from './dot-toggle-button'
import { PORTAL, ALL_DOT_KEYS } from '../../constants/dots'

const DotBlock = ({

    dotKeys,
    inDotsSection,
    inAnnotationCard,
    accessedDotIndex,

...other }) => (
    <span className="dots-block">
        {ALL_DOT_KEYS.map((dotKey, index) => {

            if (inDotsSection) {
                return (
                    <DotToggleButton {...other}
                        key={index}
                        dotIndex={index}
                        dotKey={dotKey}
                        inDotsSection={true}
                        isSelected={dotKeys[dotKey]}
                        accessHighlighted={accessedDotIndex === index}
                    />
                )

            } else {

                // Don't show portal dot here. Portals block will handle it.
                if (inAnnotationCard && dotKey === PORTAL) {
                    return null
                }

                // Go through all dot keys in array to ensure correct order.
                return dotKeys[dotKey] && (
                    <div
                        key={index}
                        className="dot"
                    >
                        <div className={classnames(
                            'animated-background',
                            dotKey,
                            { 'in-card': inAnnotationCard,
                              'in-lyric': other.inAnchor }
                        )}>

                        </div>
                    </div>
                )
            }
        })}
    </span>
)

DotBlock.defaultProps = {
    inDotsSection: false,
    inAnnotationCard: false
}

DotBlock.propTypes = {
    // Through Redux.
    accessedDotIndex: PropTypes.number,

    // From parent.
    dotKeys: PropTypes.object.isRequired,
    inDotsSection: PropTypes.bool.isRequired,
    inAnnotationCard: PropTypes.bool.isRequired
}

export default connect(({
    accessedDotIndex
}) => ({
    accessedDotIndex
}))(DotBlock)
