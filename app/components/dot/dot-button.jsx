import React, { Component } from 'react'
import classnames from 'classnames'
import { DOT_DESCRIPTIONS } from '../../helpers/constants'

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
            <div className={classnames(
                'dot-container',
                { 'dot-enabled': isEnabled }
            )}>
                {inDotsSection &&
                    <a
                        className="dot-text-container enabled"
                        onClick={e => this._handleTextContainerClick(e)}
                    >
                        <div className={classnames(
                            'dot-text-interactable',
                            'dot-text',
                            { 'interactivated': isInteractivated }
                        )}>
                            {dotKey}
                        </div>
                    </a>
                }
                <div className={classnames(
                    'dot',
                    dotKey,
                    { 'background': !isPresent,
                      'disabled': !isEnabled,
                      'deselected': isToggleDeselected,
                      'access-highlighted': accessHighlighted }
                )}>
                    <div className={classnames(
                        'dot-description',
                        'dot-text',
                        { 'interactivated': isInteractivated }
                    )}>
                        <span>
                            {DOT_DESCRIPTIONS[dotKey]}
                        </span>
                    </div>
                </div>
                <a className={classnames(
                    'dot-interactable',
                    { 'enabled': isEnabled }
                )}
                    onClick={onClick}
                >
                </a>
            </div>
        )
    }
}

export default DotButton
