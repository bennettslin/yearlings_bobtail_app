import React from 'react'
import DotButton from './dot-button'
import { ALL_DOT_KEYS, ALL_DOT_KEYS_DOT_STANZA_ORDER } from 'helpers/constants'

const defaultProps = {
    selectedDotKeys: {},
    presentDotKeys: {}
}

/*************
 * CONTAINER *
 *************/

const DotsBlock = (props) => {

    const { inDotStanza,
            inDotsSection,
            onDotClick } = props,

        allDotKeys = inDotStanza ? ALL_DOT_KEYS_DOT_STANZA_ORDER : ALL_DOT_KEYS,

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
            allDotKeys={allDotKeys}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const DotsBlockView = ({

    // From props.
    onlyShowFirstDotKey,
    inDotsSection,
    inBackground,
    selectedDotKeys,
    presentDotKeys,
    sectionAccessHighlighted,
    accessedDotIndex,
    annotationIndex,

    // From controller.
    isInteractable,
    allDotKeys,

...other }) => {
    let firstDotKeyShown = false

    return (
        <span className={`dots-block${annotationIndex ? ' annotation-' + annotationIndex : ''}${isInteractable ? ' interactable' : ''}`}>
            {allDotKeys.map((dotKey, index) => {
                const isSelected = selectedDotKeys[dotKey],
                    isPresent = presentDotKeys[dotKey]

                if (isInteractable) {
                    /**
                     * It's in dots section or dot stanza. All dots are shown in
                     * dotssection, while only first present dot is shown in dot stanza.
                     */

                    const accessHighlighted = sectionAccessHighlighted && accessedDotIndex === index,
                        toRender = (isPresent || inDotsSection) && !firstDotKeyShown

                    // Only show first dot key.
                    if (toRender && onlyShowFirstDotKey && !firstDotKeyShown) {
                        firstDotKeyShown = true
                    }

                    return (toRender &&
                        <DotButton {...other}
                            inDotsSection={inDotsSection}
                            key={index}
                            dotKey={dotKey}
                            accessHighlighted={accessHighlighted}
                            isPresent={isPresent}
                            isSelected={isSelected}
                        />
                    )

                } else {
                    // It's in anchor block or annotation card.
                    return (isPresent &&
                        <div
                            key={index}
                            className={`dot ${dotKey}${inBackground ? ' background' : ''}`}
                        />
                    )
                }
            })}
        </span>
    )
}

DotsBlock.defaultProps = defaultProps
export default DotsBlock
