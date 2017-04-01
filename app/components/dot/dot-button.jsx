import React, { Component } from 'react'
import classnames from 'classnames'
import { DOT_DESCRIPTIONS } from '../../helpers/constants'

/*************
 * CONTAINER *
 *************/

const DotButton = ({

    isSelected,
    handleDotKeyToggle,

...other }) => {

    const { dotKey,
            inDotsSection } = other,
        isEnabled = !isSelected || inDotsSection,
        isToggleDeselected = inDotsSection && !isSelected,
        onClick = isEnabled && handleDotKeyToggle ? e => handleDotKeyToggle(e, dotKey) : null

    return (
        <DotButtonView {...other}
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
        { isInteractivated } = this.state,

        dotDescription = inDotsSection && (
            <div className={classnames(
                'dot-description',
                { 'interactivated': isInteractivated }
            )}>
                <span>
                    {DOT_DESCRIPTIONS[dotKey]}
                </span>
            </div>
        )

        return (
            <div className={classnames(
                'dot-container',
                { 'access-highlighted': accessHighlighted }
            )}>
                {inDotsSection &&
                    <a
                        className="dot-key"
                        onClick={e => this._handleTextContainerClick(e)}
                    >
                        <span className={classnames(
                            'anchor-block',
                            { 'enabled': !isInteractivated }
                        )}>
                            <span className="underline-bar"></span>
                            <span className="text-span">{dotKey}</span>
                        </span>
                    </a>
                }
                <a
                    className={classnames(
                        'dot',
                        dotKey,
                        { 'enabled': isEnabled },
                        { 'background': !isPresent,
                          'dot-stanza-disabled': !isEnabled,
                          'deselected': isToggleDeselected }
                    )}
                    onClick={onClick}
                >
                    {dotDescription}
                </a>
            </div>
        )
    }
}

export default DotButton
