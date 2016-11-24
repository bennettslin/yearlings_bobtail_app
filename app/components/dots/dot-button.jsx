import React, { Component } from 'react'
import { DOT_DESCRIPTIONS } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const DotButton = ({

    dotKey,
    dotIndex,
    isSelected,
    canDeselect,
    onDotClick,

...other }) => {

    const isEnabled = !isSelected || canDeselect,
        isToggleDeselected = canDeselect && !isSelected,
        onClick = isEnabled && onDotClick ? e => onDotClick(e, dotKey) : null

    return (
        <DotButtonView {...other}
            dotKey={dotKey}
            isEnabled={isEnabled}
            isToggleDeselected={isToggleDeselected}
            onClick={onClick}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

// Making this a React component to store hover state.
class DotButtonView extends Component {

    constructor(props) {
        super(props)

        this.onHover = this.onHover.bind(this)

        this.state = {
            isHovered: false
        }
    }

    onHover(e) {
        const { type } = e
        this.setState({
            isHovered: type === 'mouseenter'
        })
    }

    render () {
        const {

            // From props.
            dotKey,
            isPresent,
            accessHighlighted,
            inDotsSection,

            // From controller.
            isEnabled,
            isToggleDeselected,
            onClick

        } = this.props,
        { isHovered } = this.state

        return (
            <a
                className={`dot ${dotKey}${accessHighlighted ? ' access-highlighted' : ''}${isPresent ? '' : ' background'}${isEnabled ? ' enabled' : ' disabled'}${isToggleDeselected ? ' deselected' : ''}${isHovered ? ' hovered' : ''}`}
                onClick={onClick}
            >
                {inDotsSection ?
                    <div className="tooltip">
                        {DOT_DESCRIPTIONS[dotKey]}
                    </div> : null
                }
                {/* FIXME: Dots ultimately won't have text, of course. */}
                <div className="dot-text">
                    {dotKey}
                </div>
                <div className="dot-interactable"
                    onMouseEnter={this.onHover}
                    onMouseLeave={this.onHover}
                >
                </div>
            </a>
        )
    }
}

export default DotButton
