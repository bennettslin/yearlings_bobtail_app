import React, { Component } from 'react'
import { DOT_DESCRIPTIONS } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const DotButton = ({

    dotKey,
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
            <div
                className={`dot-container${isEnabled ? ' dot-enabled' : ''}${isMoused || isTouched ? ' interacted' : ' uninteracted'}`}
            >
                {inDotsSection ?
                    <div className="tooltip-container">
                        <div className="tooltip">
                            {DOT_DESCRIPTIONS[dotKey]}
                        </div>
                    </div> : null
                }
                <div className={`dot ${dotKey}${isPresent ? '' : ' background'}${isToggleDeselected ? ' deselected' : ''}${isEnabled ? '' : ' disabled'}${accessHighlighted ? ' access-highlighted' : ''}`}>
                    {/* FIXME: Dot text will be outside button. */}
                    <div className="dot-text">
                        {dotKey}
                    </div>
                </div>
                <a className={`dot-interactable${isEnabled ? ' enabled' : ''}`}
                    onMouseEnter={this.onMouse}
                    onMouseLeave={this.onMouse}
                    onTouchStart={this.onTouch}
                    onTouchEnd={this.onTouch}
                    onClick={onClick}
                >
                </a>
                {inDotsSection ?
                    <div className="dot-text-container">
                        <div className="dot-text">
                            {dotKey}
                        </div>
                    </div> : null
                }
            </div>
        )
    }
}

export default DotButton
