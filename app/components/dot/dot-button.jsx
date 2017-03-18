import React, { Component } from 'react'
import { DOT_DESCRIPTIONS } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const DotButton = ({

    dotKey,
    isSelected,
    canDeselect,
    handleDotKeyToggle,

...other }) => {

    const isEnabled = !isSelected || canDeselect,
        isToggleDeselected = canDeselect && !isSelected,
        onClick = isEnabled && handleDotKeyToggle ? e => handleDotKeyToggle(e, dotKey) : null

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

        this._handleTextContainerClick = this._handleTextContainerClick.bind(this)

        this.state = {
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
        { isInteractivated } = this.state

        return (
            <div
                className={`dot-container${isEnabled ? ' dot-enabled' : ''}`}
            >
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
                        ${isEnabled ? '' : ' disabled'}
                        ${isToggleDeselected ? ' deselected' : ''}
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
                    onClick={onClick}
                >
                </a>
            </div>
        )
    }
}

export default DotButton
