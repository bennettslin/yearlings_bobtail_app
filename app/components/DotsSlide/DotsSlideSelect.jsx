// Button in dots section to select and deselect dot.
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import omit from 'lodash.omit'

import Button from '../Button/Button'
import Dot from '../Dot/Dot'
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

    componentDidUpdate(prevProps) {

        // Prevent infinite loop.
        if (this.state.isInteractivated) {

            // Also deinteractivate if dots section has been hidden.
            if (!this.props.selectedDotsIndex ||
                (!this.props.hasInteractivatedDotText && prevProps.hasInteractivatedDotText)) {

                this.setState({
                    isInteractivated: false
                })
            }
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
    isAccessed: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isInteractivated: PropTypes.bool.isRequired,
    handleDotSelectClick: PropTypes.func.isRequired,
    handleTextContainerClick: PropTypes.func.isRequired
},

DotsSlideSelectView = ({

    // From props.
    dotKey,
    isAccessed,
    isSelected,

    // From controller.
    isInteractivated,
    handleDotSelectClick,
    handleTextContainerClick

}) => {

    return (
        <div className="DotsSlideSelect">
            <Button
                buttonName="slideSelect"
                isCustomSize
                showAccessIconIfAccessOn={isAccessed}
                accessKey={NAVIGATION_ENTER_KEY}
                handleButtonClick={handleDotSelectClick}
            >
                <Dot className={cx(
                    'SlideSelectDot',

                    'bgColour__dot',
                    isSelected && `bgColour__dot__${dotKey}`,

                    'absoluteFullContainer'
                )} />

                <div className={cx(
                    'SlideSelectDescription',
                    { 'SlideSelectDescription__interactivated': isInteractivated,
                      'SlideSelectDescription__accessed': isAccessed },

                    'absoluteFullContainer',
                    'flexCentreContainer'
                )}>
                    {DOT_DESCRIPTIONS[dotKey]}
                </div>
            </Button>

            <TextAnchor
                className="DotsSlideSelect__textAnchor"
                isSelected={isInteractivated}
                isAccessed={isAccessed}
                text={dotKey}
                handleAnchorClick={handleTextContainerClick}
            />
        </div>
    )
}

DotsSlideSelectView.propTypes = dotsSlideSelectViewPropTypes

export default connect(mapStateToProps)(DotsSlideSelect)
