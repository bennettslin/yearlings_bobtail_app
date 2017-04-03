import React from 'react'
import classnames from 'classnames'
import DotButton from './dot-button'
import { ALL_DOT_KEYS } from '../../helpers/constants'

const defaultProps = {
    selectedDotKeys: {},
    presentDotKeys: {}
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
    presentDotKeys,
    accessedDotIndex,
    inAnchor,

    // From controller.
    inDotsSection,
    allAnimatableDotKeys,

...other }) => (
    <span className="dots-block">
        {ALL_DOT_KEYS.map((dotKey, index) => {

            if (inDotsSection) {
                const isSelected = selectedDotKeys[dotKey],
                    accessHighlighted = accessedDotIndex === index

                return (
                    <DotButton {...other}
                        key={index}
                        inDotsSection={true}
                        dotKey={dotKey}
                        isSelected={isSelected}
                        accessHighlighted={accessHighlighted}
                    />
                )

            } else {
                /**
                 * If it's in anchor block, it will animate, present or not.
                 * If it's in annotation card, just render it or not.
                 */
                const isPresent = presentDotKeys[dotKey],

                    // Only anchor block has this array.
                    isAnimatable = allAnimatableDotKeys && allAnimatableDotKeys[dotKey]

                return (((!inAnchor && isPresent) || inAnchor && isAnimatable) &&
                    <div
                        key={index}
                        className={classnames(
                            'dot',
                            dotKey,
                            isPresent ? 'is-present' : 'is-absent'
                        )}
                    />
                )
            }
        })}
    </span>
)

DotBlock.defaultProps = defaultProps
export default DotBlock
