import React from 'react'
import DotButton from './dot-button'
import { ALL_DOT_KEYS } from 'helpers/constants'

const defaultProps = {
    activeDotKeys: {},
    presentDotKeys: {}
}

/*************
 * CONTAINER *
 *************/

const DotsBlock = (props) => {

    const { onDotClick } = props,
        isInteractive = !!onDotClick

    return (
        <DotsBlockView {...props}
            isInteractive={isInteractive}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const DotsBlockView = ({

    // From props.
    showUnpresent,
    activeDotKeys,
    presentDotKeys,
    onDotClick,

    // From controller.
    isInteractive

}) => (

    <span className={`dots-block${isInteractive ? ' interactive' : ''}`}>
        {ALL_DOT_KEYS.map((dotKey, index) => {
            const isActive = activeDotKeys[dotKey],
                isPresent = presentDotKeys[dotKey]

            if (isInteractive) {
                /**
                 * It's in dots block or dot stanza. All dots are shown in dots
                 * block, while only present dots are shown in dot stanza.
                 */
                return (isPresent || showUnpresent ?
                    <DotButton
                        key={index}
                        isActive={isActive}
                        isPresent={isPresent}
                        dotKey={dotKey}
                        onDotClick={onDotClick}
                    /> : null
                )

            } else {
                // It's in anchor block or annotation card.
                return (isPresent ?
                    <div
                        key={index}
                        className={`dot ${dotKey}`}
                    ></div> : null
                )
            }
        })}
    </span>
)

DotsBlock.defaultProps = defaultProps
export default DotsBlock
