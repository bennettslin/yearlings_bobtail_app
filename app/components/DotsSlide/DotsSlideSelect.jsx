// Button in dots section to select and deselect dot.
/* eslint-disable object-shorthand */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import omit from 'lodash.omit'

import Button from '../Button/Button'
import TextAnchor from '../Anchor/TextAnchor'

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

class DotsSlideSelect extends Component {

    static propTypes = {
        // Through Redux.
        selectedDotsIndex: PropTypes.number.isRequired,

        // From parent.
        dotIndex: PropTypes.number.isRequired,
        hasInteractivatedDotText: PropTypes.number.isRequired,
        setHasInteractivatedDotText: PropTypes.func.isRequired,
        stopPropagation: PropTypes.func.isRequired,
        handleDotSelect: PropTypes.func.isRequired
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
        this.props.handleDotSelect(e, this.props.dotIndex)
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

        const other = omit(this.props, [
            'dotIndex',
            'selectedDotsIndex',
            'handleDotSelect',
            'hasInteractivatedDotText',
            'setHasInteractivatedDotText',
            'stopPropagation'
        ])

        return (
            <DotsSlideSelectView {...other}
                isInteractivated={this.state.isInteractivated}
                handleDotSelectClick={this._handleDotToggleClick}
                handleTextContainerClick={this._handleTextContainerClick}
            />
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const dotsSlideSelectViewPropTypes = {
    // From parent.
    dotKey: PropTypes.string.isRequired,
    accessHighlighted: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isInteractivated: PropTypes.bool.isRequired,
    handleDotSelectClick: PropTypes.func.isRequired,
    handleTextContainerClick: PropTypes.func.isRequired
},

DotsSlideSelectView = ({

    // From props.
    dotKey,
    accessHighlighted,
    isSelected,

    // From controller.
    isInteractivated,
    handleDotSelectClick,
    handleTextContainerClick

}) => {

    let accessKey

    if (accessHighlighted) {
        accessKey = NAVIGATION_ENTER_KEY
    }

    return (
        <div className={cx(
            'DotsSlideSelect'
        )}>
            <div className="DotsSlideSelect__textAnchor">
                <TextAnchor
                    isSelected={isInteractivated}
                    isAccessed={accessHighlighted}
                    text={dotKey}
                    handleAnchorClick={handleTextContainerClick}
                >
                </TextAnchor>
            </div>
            <div className="DotsSlideSelect__dotButton">

                {/* TODO: Revisit with Button rework. */}

                <Button
                    isOverflowShown
                    accessKeysShown
                    buttonClass={isSelected ? `Dot__${dotKey}` : ''}
                    buttonName="dotsSlideSelect"
                    accessKey={accessKey}
                    iconClass={dotKey}
                    isDeselected={!isSelected}
                    handleClick={handleDotSelectClick}
                >
                    <div className={cx(
                        'DotsSlideSelect__description',
                        { 'DotsSlideSelect__interactivated': isInteractivated },
                        'flexCentreContainer'
                    )}>
                        {DOT_DESCRIPTIONS[dotKey]}
                    </div>
                </Button>
            </div>
        </div>
    )
}

DotsSlideSelectView.propTypes = dotsSlideSelectViewPropTypes

export default connect(mapStateToProps)(DotsSlideSelect)
