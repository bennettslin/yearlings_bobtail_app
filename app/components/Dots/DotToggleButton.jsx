// Button in dots section to select and deselect dot.
/* eslint-disable object-shorthand */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../Button/Button'
import { NAVIGATION_ENTER_KEY } from '../../constants/access'
import { DOT_DESCRIPTIONS } from '../../constants/dots'

const mapStateToProps = ({
    selectedDotsIndex
}) => ({
    selectedDotsIndex
})

/*************
 * CONTAINER *
 *************/

class DotToggleButton extends Component {

    static propTypes = {
        // Through Redux.
        selectedDotsIndex: PropTypes.number.isRequired,

        // From parent.
        dotIndex: PropTypes.number.isRequired,
        hasInteractivatedDotText: PropTypes.number.isRequired,
        setHasInteractivatedDotText: PropTypes.func.isRequired,
        stopPropagation: PropTypes.func.isRequired,
        handleDotToggle: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleDotToggleClick = this._handleDotToggleClick.bind(this)
        this._handleTextContainerClick = this._handleTextContainerClick.bind(this)

        this.state = {
            isInteractivated: false
        }
    }

    /**
     * Not necessary to check shouldComponentUpdate, since the changed props
     * upon which to update are a subset of those in dots section.
     */

    componentWillReceiveProps(nextProps) {
        // Also deinteractivate if dots section has been hidden.
        if (!nextProps.selectedDotsIndex ||
            (!nextProps.hasInteractivatedDotText && this.props.hasInteractivatedDotText)) {
            this.setState({
                isInteractivated: false
            })
        }
    }

    _handleDotToggleClick(e) {
        this.props.handleDotToggle(e, this.props.dotIndex)
    }

    _handleTextContainerClick(e) {
        const isInteractivated = !this.state.isInteractivated

        e.stopPropagation()

        this.setState({
            isInteractivated
        })

        // Tell event manager to turn off access.
        this.props.stopPropagation(e)

        this.props.setHasInteractivatedDotText(isInteractivated)
    }

    render() {

        // Don't pass these props.
        /* eslint-disable no-unused-vars */
        const { dotIndex,
                selectedDotsIndex,
                handleDotToggle,
                hasInteractivatedDotText,
                setHasInteractivatedDotText,
                stopPropagation,
                ...other } = this.props
        /* eslint-enable no-unused-vars */

        return (
            <DotToggleButtonView {...other}
                isInteractivated={this.state.isInteractivated}
                handleDotToggleClick={this._handleDotToggleClick}
                handleTextContainerClick={this._handleTextContainerClick}
            />
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const dotToggleButtonViewPropTypes = {
    // From parent.
    dotKey: PropTypes.string.isRequired,
    accessHighlighted: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isInteractivated: PropTypes.bool.isRequired,
    handleDotToggleClick: PropTypes.func.isRequired,
    handleTextContainerClick: PropTypes.func.isRequired
},

DotToggleButtonView = ({

    // From props.
    dotKey,
    accessHighlighted,
    isSelected,

    // From controller.
    isInteractivated,
    handleDotToggleClick,
    handleTextContainerClick

}) => {

    let accessKey

    if (accessHighlighted) {
        accessKey = NAVIGATION_ENTER_KEY
    }

    return (
        <div className={cx(
            'dot-toggle-container'
        )}>
            <a
                className="dot-section-anchor"
                onClick={handleTextContainerClick}
                onTouchStart={handleTextContainerClick}
            >
                <span className={cx(
                    'anchor-block',
                    'TextAnchorBlock',
                    'in-Dots',
                    { 'selected': isInteractivated,
                      'accessHighlighted': accessHighlighted }
                )}>
                    <span className="underlineBar" />
                    <span className="TextSpan">{dotKey}</span>
                </span>
            </a>
            <div className={cx(
                'anchor-block',
                'DotAnchor',
                { 'accessHighlighted': accessHighlighted }
            )}>
                <Button
                    isOverflowShown
                    accessKeysShown
                    buttonClass="dot"
                    accessKey={accessKey}
                    iconClass={dotKey}
                    isDeselected={!isSelected}
                    handleClick={handleDotToggleClick}
                >
                    <div className={cx(
                        'dot-description',
                        { 'interactivated': isInteractivated }
                    )}>
                        <span>
                            {DOT_DESCRIPTIONS[dotKey]}
                        </span>
                    </div>
                </Button>
            </div>
        </div>
    )
}

DotToggleButtonView.propTypes = dotToggleButtonViewPropTypes

export default connect(mapStateToProps)(DotToggleButton)
