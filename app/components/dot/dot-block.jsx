import React from 'react'
import classnames from 'classnames'
import DotButton from './dot-button'
import { ALL_DOT_KEYS, ALL_DOT_KEYS_DOT_STANZA_ORDER } from 'helpers/constants'

const defaultProps = {
    selectedDotKeys: {},
    presentDotKeys: {}
}

/*************
 * CONTAINER *
 *************/

const DotBlock = (props) => {

    const { inDotStanza,
            inDotsSection,
            handleDotKeyToggle } = props,

        allDotKeys = inDotStanza ? ALL_DOT_KEYS_DOT_STANZA_ORDER : ALL_DOT_KEYS,

        isInteractable = !!handleDotKeyToggle,

        /**
         * Dot in dots section can select and deselect, while dot in dot stanza
         * only selects.
         */
        canDeselect = inDotsSection

    return (
        <DotBlockView {...props}
            isInteractable={isInteractable}
            canDeselect={canDeselect}
            allDotKeys={allDotKeys}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const DotBlockView = ({

    // From props.
    onlyShowFirstDotKey,
    inDotsSection,
    inBackground,
    selectedDotKeys,
    presentDotKeys,
    accessedDotIndex,
    annotationIndex,
    inAnchor,

    // From controller.
    isInteractable,
    allDotKeys,
    allAnimatableDotKeys,

...other }) => {
    let firstDotKeyShown = false

    return (
        <span className={classnames(
            'dot-block',
            annotationIndex && `annotation-${annotationIndex}`,
            { 'interactable': isInteractable }
        )}>
            {allDotKeys.map((dotKey, index) => {
                const isSelected = selectedDotKeys[dotKey],
                    isPresent = presentDotKeys[dotKey],

                    // Only anchor block has this array.
                    isAnimatable = allAnimatableDotKeys ? allAnimatableDotKeys[dotKey] : false

                if (isInteractable) {
                    /**
                     * It's in dots section or dot stanza. All dots are shown in
                     * dotssection, while only first present dot is shown in dot stanza.
                     */

                    const accessHighlighted = accessedDotIndex === index,
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
                    /**
                     * If it's in anchor block, it will animate, present or not.
                     * If it's in annotation card, just render it or not.
                     */
                    return (((!inAnchor && isPresent) || inAnchor && isAnimatable) &&
                        <div
                            key={index}
                            className={classnames(
                                'dot',
                                dotKey,
                                isPresent ? 'is-present' : 'is-absent',
                                { 'animatable': inAnchor,
                                  'background': inBackground }
                            )}
                        />
                    )
                }
            })}
        </span>
    )
}

DotBlock.defaultProps = defaultProps
export default DotBlock
