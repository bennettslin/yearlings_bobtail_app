import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateEntranceStore } from '../../../redux/entrance/action'
import Transition from 'react-transition-group/Transition'
import LyricWheelDispatcher from '../../../dispatchers/LyricWheelDispatcher'
import ScrollLyricListener from '../../../listeners/Scroll/Lyric'
import ScrollOverlayDispatcher from '../../../dispatchers/ScrollOverlay'
import VerseBarHandler from '../../../handlers/VerseBar'
import Stanzas from '../../Stanzas'
import { IS_TOUCH_SUPPORTED } from '../../../constants/device'
import { mapLyricSongIndex } from '../../../redux/lyric/selectors'
import './style'

const mapStateToProps = state => {
    const {
            entranceStore: { canLyricCarouselUpdate }
        } = state,
        lyricSongIndex = mapLyricSongIndex(state)

    return {
        canLyricCarouselUpdate,
        lyricSongIndex
    }
}

/*************
 * CONTAINER *
 *************/

class LyricScroll extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricCarouselUpdate: PropTypes.bool.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        updateEntranceStore: PropTypes.func.isRequired,

        // From parent.
        setLyricFocusElement: PropTypes.func.isRequired,
        getRefs: PropTypes.func.isRequired
    }

    scrollAnnotationChildren = {}
    scrollVerseChildren = {}

    componentDidMount() {
        this.props.getRefs({
            handleVerseBarWheel: this.handleVerseBarWheel
        })
    }

    handleVerseBarWheel = e => {
        this.dispatchVerseBarWheel(e, this.lyricScrollParent)
    }

    _handleDetermineVerseBars = () => {
        this.dispatchVerseBarsTimeout()
        this.dispatchScrollTimeout()
    }

    _handleDetermineAutoScroll = e => {
        this.dispatchLyricTouchMoveOrWheel(e, this.lyricScrollParent)
    }

    _handleTransitionEntered = () => {
        logTransition('Lyric did update from LyricScroll.')
        this.props.updateEntranceStore({ didLyricUpdate: true })
    }

    getDispatchLyricWheel = dispatch => {
        if (dispatch) {
            this.dispatchLyricTouchMoveOrWheel = dispatch.dispatchLyricTouchMoveOrWheel
            this.dispatchVerseBarWheel = dispatch.dispatchVerseBarWheel
        }
    }

    getDispatchScrollTimeout = dispatch => {
        this.dispatchScrollTimeout = dispatch
    }

    getDispatchVerseBarsTimeout = dispatch => {
        this.dispatchVerseBarsTimeout = dispatch
    }

    _setLyricScrollParent = node => {
        // For lyric and verse bar wheel.
        this.lyricScrollParent = node

        // For focus.
        this.props.setLyricFocusElement(node)
    }

    _setScrollAnnotationChild = ({ node, index }) => {
        this.scrollAnnotationChildren[index] = node
    }

    _setScrollVerseChild = ({ node, index }) => {
        this.scrollVerseChildren[index] = node
    }

    getLyricScrollParent = () => (
        this.lyricScrollParent
    )

    getScrollAnnotationChild = index => (
        this.scrollAnnotationChildren[index]
    )

    getScrollVerseChild = index => (
        this.scrollVerseChildren[index]
    )

    render() {
        const {
            canLyricCarouselUpdate
        } = this.props

        return (
            <>
                <ScrollLyricListener {...{
                    getLyricScrollParent: this.getLyricScrollParent,
                    getScrollAnnotationChild: this.getScrollAnnotationChild,
                    getScrollVerseChild: this.getScrollVerseChild
                }} />
                <Transition
                    {...{
                        in: canLyricCarouselUpdate,
                        timeout: 200,
                        onEntered: this._handleTransitionEntered
                    }}
                >
                    <div
                        {...{
                            ref: this._setLyricScrollParent,
                            className: cx(
                                'LyricScroll',
                                'abF',

                                /**
                                 * This gradient does not obscure the lyric
                                 * toggle buttons.
                                 */
                                'gradientMask__lyricScroll'
                            ),
                            tabIndex: -1,
                            onScroll: this._handleDetermineVerseBars,
                            onWheel: this._handleDetermineAutoScroll
                        }}
                        {...IS_TOUCH_SUPPORTED && {
                            onTouchMove: this._handleDetermineAutoScroll
                        }}
                    >
                        <Stanzas
                            {...{
                                setLyricAnnotationChild:
                                    this._setScrollAnnotationChild,
                                setVerseChild: this._setScrollVerseChild
                            }}
                        />
                    </div>
                </Transition>
                <ScrollOverlayDispatcher
                    {...{
                        ref: this.getDispatchScrollTimeout,
                        getLyricElement: this.getLyricScrollParent
                    }}
                />
                <VerseBarHandler
                    {...{
                        ref: this.getDispatchVerseBarsTimeout,
                        getVerseChild: this.getScrollVerseChild
                    }}
                />
                <LyricWheelDispatcher
                    {...{
                        ref: this.getDispatchLyricWheel,
                        determineVerseBars: this._handleDetermineVerseBars
                    }}
                />
            </>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateEntranceStore }
)(LyricScroll)
