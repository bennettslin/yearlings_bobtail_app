import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Button from '../button/button'
import { DOT_DESCRIPTIONS } from '../../helpers/constants'

/*************
 * CONTAINER *
 *************/

const DotToggleButton = ({

    dotIndex,
    handleDotToggle,

...other }) => {

    const handleClick = e => handleDotToggle(e, dotIndex)

    return (
        <DotToggleButtonView {...other}
            handleClick={handleClick}
        />
    )
}

DotToggleButton.propTypes = {
    dotIndex: PropTypes.number.isRequired,
    handleDotToggle: PropTypes.func.isRequired
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
            accessHighlighted,
            isSelected,

            // From controller.
            handleClick

        } = this.props,
        { isInteractivated } = this.state,

        dotDescription = (
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
                <div className={classnames(
                    'anchor-block',
                    'dot-anchor-block',
                    // 'in-dots-section',
                    { 'access-highlighted': accessHighlighted }
                )}>
                    <Button
                        buttonClass="dot"
                        iconClass={dotKey}
                        isDeselected={!isSelected}
                        extraChild={dotDescription}
                        handleClick={handleClick}
                    />
                </div>
            </div>
        )
    }
}

DotToggleButtonView.propTypes = {
    dotKey: PropTypes.string.isRequired,
    accessHighlighted: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default DotToggleButton
