import React from 'react'
import classnames from 'classnames'
import DotButton from './dot-button'
import { ALL_DOT_KEYS } from '../../helpers/constants'

const defaultProps = {
    selectedDotKeys: {},
    shownDotKeys: {}
}

/*************
 * CONTAINER *
 *************/

const DotBlock = (props) => {

    const { handleDotKeyToggle } = props,
        inDotsSection = !!handleDotKeyToggle

    return (
        <DotBlockView {...props}
            inDotsSection={inDotsSection}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const DotBlockView = ({

    // From props.
    selectedDotKeys,
    shownDotKeys,
    annotationDotKeys,
    accessedDotIndex,

    // From controller.
    inDotsSection,

...other }) => (
    <span className="dots-block">
        {ALL_DOT_KEYS.map((dotKey, index) => {

            if (inDotsSection) {
                return (
                    <DotButton {...other}
                        key={index}
                        dotKey={dotKey}
                        inDotsSection={true}
                        isSelected={selectedDotKeys[dotKey]}
                        accessHighlighted={accessedDotIndex === index}
                    />
                )

            } else {
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
