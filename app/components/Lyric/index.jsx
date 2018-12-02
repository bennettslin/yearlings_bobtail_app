// Container for lyric section.

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRenderStore } from 'flux/render/action'

import VerseDispatcher from '../../dispatchers/VerseDispatcher'
import LyricWheelDispatcher from '../../dispatchers/LyricWheelDispatcher'
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

class Lyric extends PureComponent {

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

    _handleVerseSelect = ({
        selectedVerseIndex,
        scrollLog
    }) => {
        this.dispatchVerse({
            selectedVerseIndex,
            scrollLog
        })
    }

    _handleVerseBarWheel = (e) => {
        this.dispatchVerseBarWheel(e, this.lyricElement)
    }

    setLyricElement = (node) => {
        // For verse wheel.
        this.lyricElement = node

        this.props.setLyricFocusElement(node)
    }

    render() {

        const {
                /* eslint-disable no-unused-vars */
                setLyricFocusElement,
                dispatch,
                /* eslint-enable no-unused-vars */

                canLyricRender,

                ...other
            } = this.props,

            {
                hasMounted,
                isShown,
                isTransitioningHeight
            } = this.state,

            isParentShown = canLyricRender && isShown

        return (hasMounted || canLyricRender) && (
            <___>
                <LyricView {...other}
                    {...{
                        isParentShown,
                        handleTransition: this._handleTransition,
                        isTransitioningHeight,
                        completeHeightTransition: this.completeHeightTransition,
                        handleVerseBarWheel: this._handleVerseBarWheel,
                        handleVerseSelect: this._handleVerseSelect,
                        setLyricElement: this.setLyricElement
                    }}
                />
                <VerseDispatcher {...{ parentThis: this }} />
                <LyricWheelDispatcher {...{ parentThis: this }} />
            </___>
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const lyricViewPropTypes = {
    // From parent.
        isParentShown: PropTypes.bool.isRequired,
        handleTransition: PropTypes.func.isRequired,
        handleVerseBarWheel: PropTypes.func.isRequired
    },

    LyricView = ({

        // From props.
        handleVerseBarWheel,

        // From controller.
        isParentShown,
        handleTransition,

        ...other
    }) => {

        return (
            <div
                className={cx(
                    'Lyric',
                    'position__lyricColumn__desktop',
                    'position__lyricColumn__mobile',
                    'gradientMask__lyricColumn__desktop',

                    { 'parent__shown': isParentShown }
                )}
                onTransitionEnd={handleTransition}
            >
                <LyricScroll {...other} />

                <LyricToggleEar />
                <LyricToggleExpand />
                <LyricToggleScroll />

                <LyricAccess />

                {/* These are the only two flex children. */}
                <VerseBar
                    isAbove
                    {...{ handleVerseBarWheel }}
                />
                <VerseBar {...{ handleVerseBarWheel }} />
            </div>
        )
    }

LyricView.propTypes = lyricViewPropTypes

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateRenderStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Lyric)
