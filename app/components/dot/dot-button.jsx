import React, { Component } from 'react'
import classnames from 'classnames'
import Button from '../button/button'
import { DOT_DESCRIPTIONS } from '../../helpers/constants'

/*************
 * CONTAINER *
 *************/

const DotButton = ({

    dotIndex,
    handleDotStanzaSelect,
    handleDotToggle,
    handlePortalDotSelect,

...other }) => {

    const { dotKey,
            isSelected } = other

    let handleClick

    if (handleDotStanzaSelect) {
        handleClick = !isSelected && (e => handleDotStanzaSelect(e, dotKey))

    } else if (handleDotToggle) {
        handleClick = e => handleDotToggle(e, dotIndex)

    } else if (handlePortalDotSelect) {
        handleClick = handlePortalDotSelect
    }

    return (
        <DotButtonView {...other}
            handleClick={handleClick}
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

    render() {
        const {

            // From props.
            dotKey,
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
                <Button
                    buttonClass="dot"
                    iconClass={dotKey}
                    isEnabled={inDotsSection || !isSelected}
                    isDeselected={inDotsSection ? !isSelected : undefined}
                    extraChild={dotDescription}
                    handleClick={handleClick}
                />
            </div>
        )
    }
}

export default DotButton
