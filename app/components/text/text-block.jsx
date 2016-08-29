import React from 'react'
import AnchorBlock from './anchor-block'
import TextUnit from './text-unit'

/*************
 * CONTAINER *
 *************/

const TextBlock = (props) => {

    const { text } = props,

        isArray = Array.isArray(text)

    return (typeof text === 'string' || !isArray) ? (
            <TextUnit {...props} />
        ) : (
            <TextBlockView {...props} />
        )
}

/****************
 * PRESENTATION *
 ****************/

const TextBlockView = ({

    // From props.
    isLyric,
    isInAnchor,
    text,
    activeDotKeys,
    onAnchorClick

}) => (

    <span>
        {text.map((textElement, index) => (
                <TextBlock
                    key={index}
                    isLyric={isLyric}
                    isInAnchor={isInAnchor}
                    text={textElement}
                    activeDotKeys={activeDotKeys}
                    beginsNewLine={index === 0}
                    onAnchorClick={onAnchorClick}
                />
            )
        )}
    </span>
)

export default TextBlock
