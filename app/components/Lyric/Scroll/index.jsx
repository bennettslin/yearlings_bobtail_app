import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateLyricStore } from 'flux/lyric/action'

import Transition from 'react-transition-group/Transition'
import ScrollLyricListener from '../../../listeners/Scroll/Lyric'
import LyricWheelDispatcher from '../../../dispatchers/LyricWheelDispatcher'
import Stanzas from '../../Stanzas'

import { populateRefs } from 'helpers/ref'

import TempGlobalAnnotations from './TempGlobalAnnotations'

const mapStateToProps = ({
    adminStore: { isGlobalAnnotationsOn },
    lyricStore: {
        canLyricCarouselUpdate,
        lyricSongIndex
    },
    appStore: { isTouchSupported }
}) => ({
    isGlobalAnnotationsOn,
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
        isGlobalAnnotationsOn: PropTypes.bool.isRequired,
        canLyricCarouselUpdate: PropTypes.bool.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        isTouchSupported: PropTypes.bool.isRequired,
        updateLyricStore: PropTypes.func.isRequired,

        // From parent.
        determineVerseBars: PropTypes.func.isRequired,
        setLyricFocusElement: PropTypes.func.isRequired,
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            handleVerseBarWheel: this.handleVerseBarWheel,
            getVerseElement: this.getVerseElement
        })
    }

    _getVerseElement = (verseIndex) => {
        /**
         * Allow verse bar handler to access verse elements stored in scroll
         * lyric listener.
         */
        return this.getVerseElement(verseIndex)
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

    handleVerseBarWheel = (e) => {
        this.dispatchVerseBarWheel(e, this.lyricElement)
    }

    _handleTouchMoveOrWheel = (e) => {
        this.dispatchLyricTouchMoveOrWheel(e, this.lyricElement)
    }

    _handleScroll = () => {
        this.props.determineVerseBars()
    }

    _handleTransitionEntered = () => {
        this.props.updateLyricStore({ didLyricUpdate: true })
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
            isGlobalAnnotationsOn,
            canLyricCarouselUpdate,
            isTouchSupported,
            determineVerseBars
        } = this.props

        return (
            <___>
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
                            onScroll: this._handleScroll,
                            onWheel: this._handleTouchMoveOrWheel
                        }}
                        {...isTouchSupported && {
                            onTouchMove: this._handleTouchMoveOrWheel
                        }}
                    >
                        {isGlobalAnnotationsOn ? (
                            <TempGlobalAnnotations />
                        ) : (
                            <Stanzas
                                {...{
                                    setLyricAnnotationElement:
                                        this._setLyricAnnotationElement,
                                    setVerseRef: this._setVerseElement
                                }}
                            />
                        )}
                    </div>
                </Transition>
                <LyricWheelDispatcher
                    {...{
                        getRefs: this._getRefs,
                        determineVerseBars
                    }}
                />
            </___>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateLyricStore }
)(LyricScroll)
