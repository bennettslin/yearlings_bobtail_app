// Container for lyric section.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import LyricAccess from './LyricAccess/LyricAccess'
import LyricToggleEar from './LyricToggle/LyricToggleEar'
import LyricToggleExpand from './LyricToggle/LyricToggleExpand'
import LyricToggleScroll from './LyricToggle/LyricToggleScroll'
import Stanzas from './Units/Stanzas'
import VerseBar from '../Verse/VerseBar/VerseBar'

const mapStateToProps = ({
    canLyricRender
}) => ({
    canLyricRender
})

/*************
 * CONTAINER *
 *************/

class Lyric extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,

        // From parent.
        handleScrollUponLyricRender: PropTypes.func.isRequired,
        lyricDidRender: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            hasMounted: false,
            isShown: false,
            isTransitioningHeight: false,
            waitForShowTimeoutId: '',
            didRenderTimeoutId: ''
        }

        this._handleTransition = this._handleTransition.bind(this)
        this.completeHeightTransition = this.completeHeightTransition.bind(this)
        this._waitForShowBeforeRender = this._waitForShowBeforeRender.bind(this)
    }

    componentDidUpdate(prevProps) {
        const { canLyricRender } = this.props,
            { canLyricRender: couldRender } = prevProps

        if (canLyricRender && !couldRender) {
            console.warn('Lyric rendered.')

            clearTimeout(this.state.waitForShowTimeoutId)
            clearTimeout(this.state.didRenderTimeoutId)

            const
                // Set timeout to prevent children transitions before render.
                waitForShowTimeoutId = setTimeout(
                    this._waitForShowBeforeRender, 50
                ),
                // Wait for parent transition before continuing render sequence.
                didRenderTimeoutId = setTimeout(
                    this.props.lyricDidRender, 100
                ),

                { hasMounted } = this.state

            this.setState({
                waitForShowTimeoutId,
                didRenderTimeoutId,

                // Register that component has mounted.
                ...!hasMounted && { hasMounted: true }
            })

            this.props.handleScrollUponLyricRender()

        } else if (couldRender && !canLyricRender) {

            this.setState({
                isShown: false
            })
        }
    }

    _waitForShowBeforeRender() {
        this.setState({
            isShown: true
        })
    }

    _handleTransition(e) {
        if (e.propertyName === 'height') {
            this.setState({
                isTransitioningHeight: true
            })
        }
    }

    completeHeightTransition() {
        this.setState({
            isTransitioningHeight: false
        })
    }

    render() {

        const {
                /* eslint-disable no-unused-vars */
                handleScrollUponLyricRender,
                lyricDidRender,
                dispatch,
                /* eslint-enable no-unused-vars */

                canLyricRender,

                ...other
            } = this.props,

            {
                hasMounted,
                isShown
            } = this.state,

            parentIsShown = canLyricRender && isShown

        return (hasMounted || canLyricRender) && (
            <LyricColumnView {...other}
                parentIsShown={parentIsShown}
                handleTransition={this._handleTransition}
                isTransitioningHeight={this.state.isTransitioningHeight}
                completeHeightTransition={this.completeHeightTransition}
            />
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const lyricColumnViewPropTypes = {
    // From parent.
    parentIsShown: PropTypes.bool.isRequired,
    handleTransition: PropTypes.func.isRequired,

    handleLyricColumnSelect: PropTypes.func.isRequired,
    handleLyricSectionExpand: PropTypes.func.isRequired,
    handleLyricAutoScroll: PropTypes.func.isRequired,
    handleVerseBarSelect: PropTypes.func.isRequired,
    handleVerseBarWheel: PropTypes.func.isRequired
},

LyricColumnView = ({

    // From props.
    handleLyricColumnSelect,
    handleLyricSectionExpand,
    handleLyricAutoScroll,
    handleVerseBarSelect,
    handleVerseBarWheel,

    // From controller.
    parentIsShown,
    handleTransition,

...other }) => {

    const verseBarProps = {
        handleVerseBarSelect,
        handleVerseBarWheel
    }

    return (
        <div
            className={cx(
                'Lyric',
                'position__lyricColumn__desktop',
                'position__lyricColumn__mobile',
                'gradientMask__lyricColumn__desktop',

                { 'parentIsShown': parentIsShown }
            )}
            onTransitionEnd={handleTransition}
        >
            <Stanzas {...other} />

            <LyricToggleEar
                handleLyricColumnSelect={handleLyricColumnSelect}
            />

            <LyricToggleExpand
                handleLyricSectionExpand={handleLyricSectionExpand}
            />

            <LyricToggleScroll
                handleLyricAutoScroll={handleLyricAutoScroll}
            />

            <LyricAccess />

            {/* These are the only two flex children. */}

            <VerseBar {...verseBarProps}
                isAbove
            />
            <VerseBar {...verseBarProps} />
        </div>
    )
}

LyricColumnView.propTypes = lyricColumnViewPropTypes

export default connect(mapStateToProps)(Lyric)
