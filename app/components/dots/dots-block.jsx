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

    const { onDotClick } = props,
        isInteractable = !!onDotClick

    return (
        <DotsBlockView {...props}
            isInteractable={isInteractable}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const DotsBlockView = ({

    // From props.
    showUnpresent,
    isDisabled,
    selectedDotKeys,
    presentDotKeys,
    onDotClick,
    onDotHover,

    // From controller.
    isInteractable

}) => (

    <span className={`dots-block${isInteractable ? ' interactable' : ''}`}>
        {ALL_DOT_KEYS.map((dotKey, index) => {
            const isActive = selectedDotKeys[dotKey],
                isPresent = presentDotKeys[dotKey]

            if (isInteractable) {
                /**
                 * It's in dots block or dot stanza. All dots are shown in dots
                 * block, while only present dots are shown in dot stanza.
                 */
                return (isPresent || showUnpresent ?
                    <DotButton
                        key={index}
                        dotIndex={index + 1}
                        isDisabled={isDisabled}
                        isActive={isActive}
                        isPresent={isPresent}
                        dotKey={dotKey}
                        onDotClick={onDotClick}
                        onDotHover={showUnpresent ? onDotHover : null}
                    /> : null
                )

            } else {
                // It's in anchor block or annotation card.
                return (isPresent ?
                    <div
                        key={index}
                        className={`dot ${dotKey} ${isDisabled ? 'disabled' : 'enabled'}`}
                    ></div> : null
                )
            }
        })}
    </span>
)

DotsBlock.defaultProps = defaultProps
export default DotsBlock
