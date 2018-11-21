/**
 * Parent component that handles knowledge of UI state so that child components
 * deal with as little state change as possible.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
// import debounce from 'debounce'

import KeyHandler from 'handlers/KeyHandler'
import AccessStylesheet from '../Access/Stylesheet'
import Admin from '../Admin'
import Live from '../Live'
import AdminToggle from '../admin/AdminToggle'

import {
    SHOWN,
    OVERVIEW_OPTIONS,
    TIPS_OPTIONS
} from 'constants/options'

import {
    PARENT_ACCESS_PREFIX
} from 'constants/prefixes'

import { DEVICE_OBJECTS } from 'constants/responsive'

import { getPrefixedDotLetterClassNames } from 'helpers/dotHelper'

import {
    getIsDesktop,
    getIsTabletOrMini
} from 'helpers/responsiveHelper'

import {
    getShowOverlay,
    getSingleShownLyricColumnKey,
    getStanzaIndexForVerseIndex
} from './helper'

class Root extends Component {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,
        selectedAdminIndex: PropTypes.number.isRequired,

        canCarouselRender: PropTypes.bool.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        isTitleShown: PropTypes.bool.isRequired,

        deviceIndex: PropTypes.number.isRequired,
        isPlaying: PropTypes.bool.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        isSliderTouched: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        renderedVerseIndex: PropTypes.number.isRequired,
        renderedAnnotationIndex: PropTypes.number.isRequired,
        isRenderedLogue: PropTypes.bool.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,
        selectedAccessIndex: PropTypes.number.isRequired,
        selectedCarouselNavIndex: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        selectedDotsIndex: PropTypes.number.isRequired,
        selectedLyricColumnIndex: PropTypes.number.isRequired,
        selectedOverviewIndex: PropTypes.number.isRequired,
        selectedTipsIndex: PropTypes.number.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,

        isLyricExpanded: PropTypes.bool.isRequired,
        showOneOfTwoLyricColumns: PropTypes.bool.isRequired,
        isHiddenLyric: PropTypes.bool.isRequired,
        showShrunkNavIcon: PropTypes.bool.isRequired,
        isScoresTipsInMain: PropTypes.bool.isRequired,
        isTwoRowMenu: PropTypes.bool.isRequired,
        isVerseBarAbove: PropTypes.bool.isRequired,
        isVerseBarBelow: PropTypes.bool.isRequired,
        isManualScroll: PropTypes.bool.isRequired,

        // From parent.
        eventHandlers: PropTypes.shape({
            handleBodyClick: PropTypes.func.isRequired,
            handleBodyTouchMove: PropTypes.func.isRequired,
            handleBodyTouchEnd: PropTypes.func.isRequired,
            setRootRef: PropTypes.func.isRequired
        })
    }

    state = {
        sliderMousedUp: false,
        keyName: ''
    }

    componentDidUpdate(prevProps) {
        const {
                isSliderTouched
            } = this.props,
            {
                isSliderTouched: wasSliderTouched
            } = prevProps

        // This prevents a click event from registering after mouseUp.
        if (
            !isSliderTouched && wasSliderTouched
        ) {
            // Let click handler get called first, then reset state.
            setTimeout(this._resetSliderMousedUp, 0)
        }
    }

    _resetSliderMousedUp = () => {
        this.setState({
            sliderMousedUp: false
        })
    }

    _handleMouseUp = (e) => {
        const { handleBodyTouchEnd } = this.props.eventHandlers
        handleBodyTouchEnd(e)

        if (this.props.isSliderTouched) {
            this.setState({
                sliderMousedUp: true
            })

        }
    }

    _handleClick = (e) => {
        const { handleBodyClick } = this.props.eventHandlers

        /**
         * Don't register the click event that happens after mouseUp if we're
         * lifting up from moving the slider.
         */
        if (!this.state.sliderMousedUp) {
            handleBodyClick(e)
        }
    }

    handleKeyDownPress = (e) => {
        this.keyHandler.handleKeyDownPress(e)
    }

    handleKeyUpPress = (e) => {
        this.keyHandler.handleKeyUpPress(e)
    }

    displayKeyLetter = (keyName = '') => {
        this.setState({
            keyName
        })
    }

    _setKeyHandlerRef = (node) => {
        this.keyHandler = node
    }

    render() {
        const {
                appMounted,
                canCarouselRender,
                selectedAdminIndex,
                deviceIndex,
                selectedAccessIndex,
                renderedAnnotationIndex,
                isRenderedLogue,
                selectedCarouselNavIndex,
                selectedDotKeys,
                selectedDotsIndex,
                selectedLyricColumnIndex,
                selectedOverviewIndex,
                isScoreShown,
                selectedTipsIndex,
                isTitleShown,
                selectedWikiIndex,
                isPlaying,
                isSliderTouched,
                isSliderMoving,
                isLyricExpanded,
                renderedSongIndex,
                renderedVerseIndex,
                sliderVerseIndex,
                interactivatedVerseIndex,
                showOneOfTwoLyricColumns,
                isHiddenLyric,
                showShrunkNavIcon,
                isScoresTipsInMain,
                isTwoRowMenu,
                isVerseBarAbove,
                isVerseBarBelow,
                isManualScroll
            } = this.props,

            {
                keyName
            } = this.state,

            {
                handleBodyTouchMove,
                setRootRef,
                ...other
            } = this.props.eventHandlers,

            deviceClassName = DEVICE_OBJECTS[deviceIndex].className,
            isDesktop = getIsDesktop(deviceIndex),
            isTabletOrMini = getIsTabletOrMini(deviceIndex),

            singleShownLyricColumnKey = getSingleShownLyricColumnKey({
                showOneOfTwoLyricColumns,
                selectedLyricColumnIndex
            }),

            showOverlay = getShowOverlay({
                deviceIndex,
                isLyricExpanded,
                renderedAnnotationIndex,
                isScoreShown,
                isTitleShown,
                selectedWikiIndex
            }),

            overviewShown = OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN,
            tipsShown = TIPS_OPTIONS[selectedTipsIndex] === SHOWN,

            isCarouselNavShowable =
                !isRenderedLogue
                && !showOverlay
                && !isLyricExpanded
                && !overviewShown
                && !tipsShown,

            areVerseBarsHidden = !isVerseBarAbove && !isVerseBarBelow,

            /**
             * If slider touched, compare stanza to slider verse. Otherwise,
             * compare it to selected verse.
             */
            cursorVerseIndex = sliderVerseIndex > -1 ?
                sliderVerseIndex :
                renderedVerseIndex,

            cursorStanzaIndex = getStanzaIndexForVerseIndex(
                renderedSongIndex, cursorVerseIndex
            )

        return appMounted && (
            <div
                ref={setRootRef}
                className={cx(
                    'Root',

                    keyName && `${PARENT_ACCESS_PREFIX}${keyName}`,

                    /**
                     * When transitioning between songs, explicitly reset all
                     * verse trackers. This current approach is brittle, since
                     * it depends on checking that the carousel can render,
                     * which is after when the slider and lyric can render,
                     * which is where the verse trackers are.
                     */
                    canCarouselRender ?
                        'RM__canTrackVerse' : 'RM__cannotTrackVerse',

                    `RM__${deviceClassName}`,
                    isDesktop ?
                        'RM__desktop' : 'RM__mobile',
                    { 'RM__mobileNotPhone': isTabletOrMini },

                    selectedAccessIndex ? 'RM__accessOn' : 'RM__accessOff',
                    showOverlay ? 'RM__overlayShown' : 'RM__overlayHidden',

                    isRenderedLogue ? 'RM__logue' : 'RM__song',
                    isPlaying ? 'RM__isPlaying' : 'RM__isPaused',

                    renderedAnnotationIndex ?
                        'RM__annotationShown' : 'RM__annotationHidden',
                    { 'RM__carouselExpanded': selectedCarouselNavIndex },
                    selectedDotsIndex ? 'RM__dotsShown' : 'RM__dotsHidden',
                    isLyricExpanded ?
                        'RM__lyricExpanded' : 'RM__lyricCollapsed',
                    { 'RM__navExpanded': !selectedCarouselNavIndex },
                    overviewShown ? 'RM__overviewShown' : 'RM__overviewHidden',
                    tipsShown ? 'RM__tipsShown' : 'RM__tipsHidden',

                    showShrunkNavIcon ?
                        'RM__navIconShrunk' : 'RM__navIconStatic',

                    isCarouselNavShowable ?
                        'RM__carouselNavShowable' : 'RM__carouselNavUnshowable',
                    isScoresTipsInMain ?
                        'RM__scoresTipsMain' : 'RM__scoresTipsMenu',
                    isTwoRowMenu ?
                        'RM__twoRowMenu' : 'RM__oneRowMenu',

                    singleShownLyricColumnKey &&
                        `RM__${singleShownLyricColumnKey}LyricColumnOnly`,
                    isHiddenLyric ?
                        'RM__lyricHeightless' : 'RM__lyricHeighted',

                    areVerseBarsHidden ?
                        'RM__verseBarHidden' : 'RM__verseBarShown',

                    {
                        'RM__verseBarAbove': isVerseBarAbove,
                        'RM__verseBarBelow': isVerseBarBelow,
                        'RM__manualScroll': isManualScroll,
                        'RM__bothLyricColumnsShown': !singleShownLyricColumnKey,
                        'RM__sliderTouched': isSliderTouched
                    },

                    getPrefixedDotLetterClassNames(
                        selectedDotKeys,
                        // "Root selected dot letter."
                        'RsD'
                    ),

                    // Relevant to verse index classes.
                    isSliderMoving ? 'RM__sliderMoving' : 'RM__sliderNotMoving',

                    interactivatedVerseIndex < 0 ?
                        'RM__verseInactive' : 'RM__verseActive',

                    // Make it easier to override this selector.
                    !isSliderMoving && interactivatedVerseIndex < 0 &&
                        'RM__verseCanHover',

                    // "Root cursored stanza index."
                    `RcS${cursorStanzaIndex}`,

                    isSliderMoving ?
                        // "Root slider stanza index."
                        `RsS${cursorStanzaIndex}` :
                        // "Root default stanza index."
                        `RdS${cursorStanzaIndex}`,

                    isSliderMoving ?
                        // "Root slider verse index."
                        `RsV${sliderVerseIndex}` :
                        // "Root default verse index."
                        `RdV${renderedVerseIndex}`,

                    isPlaying &&
                        // "Root playing verse index."
                        `RpV${renderedVerseIndex}`,

                    interactivatedVerseIndex < 0 &&
                        // "Root non-interactivated verse index."
                        `RnV${cursorVerseIndex}`,

                    areVerseBarsHidden && interactivatedVerseIndex < 0 &&
                        // "Root cursored lyric verse."
                        `RlV${cursorVerseIndex}`
                )}
                onClick={this._handleClick}
                onTouchStart={this._handleClick}
                onMouseMove={handleBodyTouchMove}
                onTouchMove={handleBodyTouchMove}
                onMouseUp={this._handleMouseUp}
                onMouseLeave={this._handleMouseUp}
                onTouchEnd={this._handleMouseUp}
                onTouchCancel={this._handleMouseUp}
                onKeyDown={this.handleKeyDownPress}
                onKeyUp={this.handleKeyUpPress}
                tabIndex="-1"
            >
                <AccessStylesheet />

                {/* TODO: Only pass the events used by KeyHandler. */}
                <KeyHandler
                    eventHandlers={this.props.eventHandlers}
                    setRef={this._setKeyHandlerRef}
                    displayKeyLetter={this.displayKeyLetter}
                />

                <Live {...other} />

                <AdminToggle />

                {Boolean(selectedAdminIndex) && (
                    <Admin {...other} />
                )}

            </div>
        )
    }
}

const mapStateToProps = ({
    appMounted,
    selectedAdminIndex,
    interactivatedVerseIndex,
    selectedAccessIndex,
    selectedCarouselNavIndex,
    selectedDotKeys,
    selectedDotsIndex,
    selectedLyricColumnIndex,
    selectedOverviewIndex,
    selectedTipsIndex,
    selectedWikiIndex,
    isPlaying,
    toggleStore: {
        isScoreShown,
        isTitleShown,
        isLyricExpanded
    },
    deviceStore: { deviceIndex },
    renderStore: { canCarouselRender },
    renderedStore: {
        renderedSongIndex,
        renderedVerseIndex,
        renderedAnnotationIndex,
        isRenderedLogue
    },
    sliderStore: {
        isSliderTouched,
        isSliderMoving,
        sliderVerseIndex
    },
    responsiveStore: {
        isHiddenLyric,
        showOneOfTwoLyricColumns,
        isScoresTipsInMain,
        isTwoRowMenu,
        showShrunkNavIcon
    },
    isVerseBarAbove,
    isVerseBarBelow,
    isManualScroll
}) => ({
    appMounted,
    selectedAdminIndex,
    interactivatedVerseIndex,
    selectedAccessIndex,
    selectedCarouselNavIndex,
    selectedDotKeys,
    selectedDotsIndex,
    selectedLyricColumnIndex,
    selectedOverviewIndex,
    selectedTipsIndex,
    isTitleShown,
    selectedWikiIndex,
    isLyricExpanded,
    showOneOfTwoLyricColumns,
    isPlaying,
    isScoreShown,
    deviceIndex,
    canCarouselRender,
    renderedSongIndex,
    renderedVerseIndex,
    renderedAnnotationIndex,
    isRenderedLogue,
    isSliderTouched,
    isSliderMoving,
    sliderVerseIndex,
    isHiddenLyric,
    showShrunkNavIcon,
    isScoresTipsInMain,
    isTwoRowMenu,
    isVerseBarAbove,
    isVerseBarBelow,
    isManualScroll
})

export default connect(mapStateToProps)(Root)
