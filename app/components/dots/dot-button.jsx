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

        this.onMouse = this.onMouse.bind(this)
        this.onTouch = this.onTouch.bind(this)

        this.state = {
            isMoused: false,
            isTouched: false,
        }
    }

    onMouse(e) {
        const { type } = e
        this.setState({
            isMoused: type === 'mouseenter'
        })
    }

    // FIXME: Revisit to see if this works properly.
    onTouch(e) {
        const { type } = e
        this.setState({
            isTouched: type === 'touchstart'
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
        { isMoused,
          isTouched } = this.state

        return (
            <a
                className={`dot ${dotKey}${accessHighlighted ? ' access-highlighted' : ''}${isPresent ? '' : ' background'}${isEnabled ? ' enabled' : ' disabled'}${isToggleDeselected ? ' deselected' : ''}${isMoused || isTouched ? ' show-tooltip' : ''}`}
                onClick={onClick}
            >
                {inDotsSection ?
                    <div className="tooltip">
                        {DOT_DESCRIPTIONS[dotKey]}
                    </div> : null
                }
                {/* FIXME: Dot text will be outside button. */}
                <div className="dot-text">
                    {dotKey}
                </div>
                <div className="dot-interactable"
                    onMouseEnter={this.onMouse}
                    onMouseLeave={this.onMouse}
                    onTouchStart={this.onTouch}
                    onTouchEnd={this.onTouch}
                >
                </div>
            </a>
        )
    }
}

export default DotButton
