import React, { Component } from 'react'
import classnames from 'classnames'
import Button from '../button/button'
import { DOT_DESCRIPTIONS } from '../../helpers/constants'

/*************
 * CONTAINER *
 *************/

const DotToggleButton = ({

    dotIndex,
    handleDotButtonClick,
    handleDotToggle,
    handlePortalDotSelect,

...other }) => {

    const { dotKey,
            isSelected } = other

    let handleClick

    if (handleDotButtonClick) {
        handleClick = !isSelected && (e => handleDotButtonClick(e, dotKey))

    } else if (handleDotToggle) {
        handleClick = e => handleDotToggle(e, dotIndex)

    } else if (handlePortalDotSelect) {
        handleClick = handlePortalDotSelect
    }

    return (
        <DotToggleButtonView {...other}
            handleClick={handleClick}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

class DotToggleButtonView extends Component {

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

        // Tell event manager to turn off access.
        this.props.stopPropagation(e)
    }

    render() {
        const {

            // From props.
            dotKey,
            dotKeys,
            accessHighlighted,
            inDotsSection,
            isSelected,

            // From controller.
            handleClick

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
                'dot-container'
            )}>
                {inDotsSection &&
                    <a
                        className="dot-section-anchor"
                        onClick={e => this._handleTextContainerClick(e)}
                    >
                        <span className={classnames(
                            'anchor-block',
                            'text-anchor-block',
                            'in-dots-section',
                            { 'selected': isInteractivated,
                              'access-highlighted': accessHighlighted }
                        )}>
                            <span className="underline-bar"></span>
                            <span className="text-span">{dotKey}</span>
                        </span>
                    </a>
                }
                <div className={classnames(
                    'anchor-block',
                    'dot-anchor-block',
                    { 'access-highlighted': accessHighlighted }
                )}>
                    <Button
                        buttonClass="dot"
                        buttonName={dotKeys ? 'dot-stanza' : undefined}
                        iconClass={dotKey || dotKeys}
                        isEnabled={inDotsSection || !isSelected}
                        isDeselected={inDotsSection ? !isSelected : undefined}
                        extraChild={dotDescription}
                        handleClick={handleClick}
                    />
                </div>
            </div>
        )
    }
}

export default DotToggleButton
