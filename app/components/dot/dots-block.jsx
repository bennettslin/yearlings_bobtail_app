import React from 'react'
import classnames from 'classnames'
import DotButton from './dot-button'
import { PORTAL, ALL_DOT_KEYS } from '../../helpers/constants'

const defaultProps = {
    selectedDotKeys: {},
    shownDotKeys: {}
}

/*************
 * CONTAINER *
 *************/

const DotBlock = (props) => (
    <DotBlockView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const DotBlockView = ({

    // From props.
    inDotsSection,
    inAnnotationCard,
    selectedDotKeys,
    shownDotKeys,
    annotationDotKeys,
    accessedDotIndex,

...other }) => (
    <span className="dots-block">
        {ALL_DOT_KEYS.map((dotKey, index) => {

            if (inDotsSection) {
                return (
                    <DotButton {...other}
                        key={index}
                        dotIndex={index}
                        dotKey={dotKey}
                        inDotsSection={true}
                        isSelected={selectedDotKeys[dotKey]}
                        accessHighlighted={accessedDotIndex === index}
                    />
                )

            } else {

                // Don't show portal dot here. Portal blocks will handle it.
                if (inAnnotationCard && dotKey === PORTAL) {
                    return null
                }

                // Go through all dot keys in array to ensure correct order.
                return annotationDotKeys[dotKey] && (
                    <div
                        key={index}
                        className={classnames(
                            'dot',
                            dotKey,
                            shownDotKeys[dotKey] ? 'dot-shown' : 'dot-hidden'
                        )}
                    />
                )
            }
        })}
    </span>
)

DotBlock.defaultProps = defaultProps
export default DotBlock
