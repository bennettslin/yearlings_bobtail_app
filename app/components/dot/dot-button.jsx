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

class DotButtonView extends Component {

    constructor(props) {
        super(props)

        this.onMouse = this.onMouse.bind(this)
        this.onTouch = this.onTouch.bind(this)
        this._handleTextContainerClick = this._handleTextContainerClick.bind(this)

        this.state = {
            isMoused: false,
            isTouched: false,
            isInteractivated: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.selectedDotsIndex ||
            (!nextProps.hasInteractivatedDotText && this.props.hasInteractivatedDotText)) {
            this.setState({
                isInteractivated: false
            })
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

    _handleTextContainerClick(e, isInteractivated = !this.state.isInteractivated) {
        e.stopPropagation()

        this.setState({
            isInteractivated
        })

        this.props.setHasInteractivatedDotText(isInteractivated)
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
          isTouched,
          isInteractivated } = this.state

        return (
            <div
                className={`dot-container${isEnabled ? ' dot-enabled' : ''}${isMoused || isTouched ? ' interacted' : ' uninteracted'}`}
            >
                {false && inDotsSection &&
                    <div className="tooltip-container">
                        <div className="tooltip">
                            {DOT_DESCRIPTIONS[dotKey]}
                        </div>
                    </div>
                }
                {inDotsSection &&
                    <a
                        className="dot-text-container enabled"
                        onClick={e => this._handleTextContainerClick(e)}
                    >
                        <div
                            className={`
                                dot-text
                                dot-text-interactable
                                ${isInteractivated ? 'interactivated' : ''}
                            `}
                        >
                            {dotKey}
                        </div>
                    </a>
                }
                <div
                    className={`
                        dot
                        ${dotKey}
                        ${isPresent ? '' : ' background'}
                        ${isToggleDeselected ? ' deselected' : ''}
                        ${isEnabled ? '' : ' disabled'}
                        ${accessHighlighted ? ' access-highlighted' : ''}
                    `}
                >
                    <div
                        className={`
                            dot-description
                            dot-text
                            ${isInteractivated ? 'interactivated' : ''}
                        `}
                    >
                        <span>
                            {DOT_DESCRIPTIONS[dotKey]}
                        </span>
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
            </div>
        )
    }
}

export default DotButton
