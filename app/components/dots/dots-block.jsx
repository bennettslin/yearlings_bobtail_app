import React from 'react'
import DotButton from './dot-button'
import { ALL_DOT_KEYS } from 'helpers/constants'

const defaultProps = {
    selectedDotKeys: {},
    presentDotKeys: {}
}

/*************
 * CONTAINER *
 *************/

const DotsBlock = (props) => {

    const { inDotsSection,
            onDotClick } = props,

        isInteractable = !!onDotClick,

        /**
         * Dot in dots section can select and deselect, while dot in dot stanza
         * only selects.
         */
        canDeselect = inDotsSection

    return (
        <DotsBlockView {...props}
            isInteractable={isInteractable}
            canDeselect={canDeselect}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const DotsBlockView = ({

    // From props.
    inDotsSection,
    inBackground,
    selectedDotKeys,
    presentDotKeys,
    sectionAccessHighlighted,
    accessedDotIndex,

    // From controller.
    isInteractable,

...other }) => (

    <span className={`dots-block${isInteractable ? ' interactable' : ''}`}>
        {ALL_DOT_KEYS.map((dotKey, index) => {
            const isSelected = selectedDotKeys[dotKey],
                isPresent = presentDotKeys[dotKey]

            if (isInteractable) {
                /**
                 * It's in dots section or dot stanza. All dots are shown in
                 * dotssection, while only present dots are shown in dot stanza.
                 */

                const accessHighlighted = sectionAccessHighlighted && accessedDotIndex === index
                return (isPresent || inDotsSection ?
                    <DotButton {...other}
                        key={index}
                        dotKey={dotKey}
                        dotIndex={index + 1}
                        accessHighlighted={accessHighlighted}
                        isPresent={isPresent}
                        isSelected={isSelected}
                    /> : null
                )

            } else {
                // It's in anchor block or annotation card.
                return (isPresent ?
                    <div
                        key={index}
                        className={`dot ${dotKey}${inBackground ? ' background' : ''}`}
                    ></div> : null
                )
            }
        })}
    </span>
)

DotsBlock.defaultProps = defaultProps
export default DotsBlock
