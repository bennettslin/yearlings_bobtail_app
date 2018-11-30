// Container for lyric section.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRenderStore } from 'flux/render/action'

import LyricAccess from './Access'
import LyricScroll from './Scroll'
import LyricToggleEar from './Toggle/Ear'
import LyricToggleExpand from './Toggle/Expand'
import LyricToggleScroll from './Toggle/Scroll'
import VerseBar from './VerseBar'

const mapStateToProps = ({
    renderStore: { canLyricRender }
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
        updateRenderStore: PropTypes.func.isRequired
    }

    state = {
        hasMounted: false,
        isShown: false,
        isTransitioningHeight: false,
        didRenderTimeoutId: '',
        waitForShowTimeoutId: ''
    }

    componentDidUpdate(prevProps) {
        const { canLyricRender } = this.props,
            { canLyricRender: couldRender } = prevProps

        if (canLyricRender && !couldRender) {
            logger.warn('Lyric rendered.')

            clearTimeout(this.state.didRenderTimeoutId)
            clearTimeout(this.state.waitForShowTimeoutId)

            const
                // Wait for parent transition before continuing render sequence.
                didRenderTimeoutId = setTimeout(
                    this._lyricDidRender, 100
                ),
                // Set timeout to prevent children transitions before render.
                waitForShowTimeoutId = setTimeout(
                    this._waitForShowBeforeRender, 50
                ),

                { hasMounted } = this.state

            this.setState({
                didRenderTimeoutId,
                waitForShowTimeoutId,

                // Register that component has mounted.
                ...!hasMounted && { hasMounted: true }
            })

        } else if (couldRender && !canLyricRender) {

            this.setState({
                isShown: false
            })
        }
    }

    _lyricDidRender = () => {
        this.props.updateRenderStore({ didLyricRender: true })
    }

    _waitForShowBeforeRender = () => {
        this.setState({
            isShown: true
        })
    }

    _handleTransition = (e) => {
        if (e.propertyName === 'height') {
            this.setState({
                isTransitioningHeight: true
            })
        }
    }

    completeHeightTransition = () => {
        this.setState({
            isTransitioningHeight: false
        })
    }

    render() {

        const {
                /* eslint-disable no-unused-vars */
                dispatch,
                /* eslint-enable no-unused-vars */

                canLyricRender,

                ...other
            } = this.props,

            {
                hasMounted,
                isShown
            } = this.state,

            parent__shown = canLyricRender && isShown

        return (hasMounted || canLyricRender) && (
            <EarColumnView {...other}
                parent__shown={parent__shown}
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

const earColumnViewPropTypes = {
    // From parent.
        parent__shown: PropTypes.bool.isRequired,
        handleTransition: PropTypes.func.isRequired,

        handleLyricAutoScroll: PropTypes.func.isRequired,
        handleScrollToSelectedVerse: PropTypes.func.isRequired,
        handleVerseBarWheel: PropTypes.func.isRequired
    },

    EarColumnView = ({

        // From props.
        handleLyricAutoScroll,
        handleScrollToSelectedVerse,
        handleVerseBarWheel,

        // From controller.
        parent__shown,
        handleTransition,

        ...other
    }) => {

        const verseBarProps = {
            handleScrollToSelectedVerse,
            handleVerseBarWheel
        }

        return (
            <div
                className={cx(
                    'Lyric',
                    'position__earColumn__desktop',
                    'position__earColumn__mobile',
                    'gradientMask__earColumn__desktop',

                    { 'parent__shown': parent__shown }
                )}
                onTransitionEnd={handleTransition}
            >
                <LyricScroll {...other} />

                <LyricToggleEar />
                <LyricToggleExpand />

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

EarColumnView.propTypes = earColumnViewPropTypes

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateRenderStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Lyric)
