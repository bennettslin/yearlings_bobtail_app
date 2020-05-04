import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateLyricStore } from 'flux/lyric/action'

import Transition from 'react-transition-group/Transition'
import LyricWheelDispatcher from '../../../dispatchers/LyricWheelDispatcher'
import ScrollLyricListener from '../../../listeners/Scroll/Lyric'
import ScrollHandler from '../../../handlers/Scroll'
import VerseBarHandler from '../../../handlers/VerseBar'
import Stanzas from '../../Stanzas'

import { populateRefs } from 'helpers/ref'

const mapStateToProps = ({
    lyricStore: {
        canLyricCarouselUpdate,
        lyricSongIndex
    },
    appStore: { isTouchSupported }
}) => ({
    canLyricCarouselUpdate,
    lyricSongIndex,
    isTouchSupported
})

/*************
 * CONTAINER *
 *************/

class LyricScroll extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricCarouselUpdate: PropTypes.bool.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        isTouchSupported: PropTypes.bool.isRequired,
        updateLyricStore: PropTypes.func.isRequired,

        // From parent.
        setLyricFocusElement: PropTypes.func.isRequired,
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            handleVerseBarWheel: this.handleVerseBarWheel
        })
    }

    handleVerseBarWheel = (e) => {
        this.dispatchVerseBarWheel(e, this.lyricElement)
    }

    _getVerseElement = (verseIndex) => {
        /**
         * Allow verse bar handler to access verse elements stored in scroll
         * lyric listener.
         */
        return this.getVerseElement(verseIndex)
    }

    _getLyricElement = () => {
        return this.lyricElement
    }

    _setVerseElement = (payload) => {
        return this.setVerseElement(payload)
    }

    _setLyricElement = (node) => {
        // For lyric and verse bar wheel.
        this.lyricElement = node

        // For focus.
        this.props.setLyricFocusElement(node)

        // For scrolling.
        return this.setLyricParent(node)
    }

    _setLyricAnnotationElement = (payload) => {
        return this.setLyricAnnotationElement(payload)
    }

    _handleDetermineVerseBars = () => {
        this.dispatchVerseBarsTimeout()
        this.dispatchScrollTimeout()
    }

    _handleDetermineAutoScroll = (e) => {
        this.dispatchLyricTouchMoveOrWheel(e, this.lyricElement)
    }

    _handleTransitionEntered = () => {
        this.props.updateLyricStore({ didLyricUpdate: true })
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
            canLyricCarouselUpdate,
            isTouchSupported
        } = this.props

        return (
            <>
                <ScrollLyricListener {...{ getRefs: this._getRefs }} />
                <Transition
                    {...{
                        in: canLyricCarouselUpdate,
                        timeout: 200,
                        onEntered: this._handleTransitionEntered
                    }}
                >
                    <div
                        {...{
                            ref: this._setLyricElement,
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
                        {...isTouchSupported && {
                            onTouchMove: this._handleDetermineAutoScroll
                        }}
                    >
                        <Stanzas
                            {...{
                                setLyricAnnotationElement:
                                    this._setLyricAnnotationElement,
                                setVerseRef: this._setVerseElement
                            }}
                        />
                    </div>
                </Transition>
                <ScrollHandler
                    {...{
                        getRefs: this._getRefs,
                        getLyricElement: this._getLyricElement
                    }}
                />
                <VerseBarHandler
                    {...{
                        getRefs: this._getRefs,
                        getVerseElement: this._getVerseElement
                    }}
                />
                <LyricWheelDispatcher
                    {...{
                        getRefs: this._getRefs,
                        determineVerseBars: this._handleDetermineVerseBars
                    }}
                />
            </>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateLyricStore }
)(LyricScroll)
