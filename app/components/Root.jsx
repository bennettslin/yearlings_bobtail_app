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
import AccessStyle from './AccessLetter/AccessStyle'
import Admin from './Admin/Admin'
import Live from './Live/Live'
import AdminToggle from './admin/AdminToggle'

import {
    SHOWN,
    OVERVIEW_OPTIONS,
    TIPS_OPTIONS
} from 'constants/options'

import {
    PARENT_ACCESS_PREFIX
} from 'constants/prefixes'

import { DEVICE_OBJECTS } from 'constants/responsive'

import {
    getSongIsLogue,
    getStanzaIndexForVerseIndex
} from 'helpers/dataHelper'

import { getPrefixedDotLetterClassNames } from 'helpers/dotHelper'

import {
    getIsDesktop,
    getIsTabletOrMini
} from 'helpers/responsiveHelper'

import {
    getShowOverlay,
    getSingleShownLyricColumnKey
} from './rootHelper'

class Root extends Component {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,
        selectedAdminIndex: PropTypes.number.isRequired,

        deviceIndex: PropTypes.number.isRequired,
        isPlaying: PropTypes.bool.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        isSliderTouched: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,
        renderableVerseIndex: PropTypes.number.isRequired,
        renderableAnnotationIndex: PropTypes.number.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,
        selectedAccessIndex: PropTypes.number.isRequired,
        selectedCarouselNavIndex: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        selectedDotsIndex: PropTypes.number.isRequired,
        selectedLyricColumnIndex: PropTypes.number.isRequired,
        selectedOverviewIndex: PropTypes.number.isRequired,
        selectedTipsIndex: PropTypes.number.isRequired,
        selectedScoreIndex: PropTypes.number.isRequired,
        selectedTitleIndex: PropTypes.number.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,

        isLyricExpanded: PropTypes.bool.isRequired,
        showOneOfTwoLyricColumns: PropTypes.bool.isRequired,
        isHeightlessLyricColumn: PropTypes.bool.isRequired,
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

    constructor(props) {
        super(props)

        this.state = {
            sliderMousedUp: false,
            keyName: ''
        }

        this._handleClick = this._handleClick.bind(this)
        this._handleMouseUp = this._handleMouseUp.bind(this)
        this._resetSliderMousedUp = this._resetSliderMousedUp.bind(this)
        this.handleKeyDownPress = this.handleKeyDownPress.bind(this)
        this.handleKeyUpPress = this.handleKeyUpPress.bind(this)
        this.displayKeyLetter = this.displayKeyLetter.bind(this)
        this._setKeyHandlerRef = this._setKeyHandlerRef.bind(this)
    }

    componentDidUpdate(prevProps) {
        // If slider touch ended, then tell dom manager.
        if (!this.props.isSliderTouched && prevProps.isSliderTouched) {

            // Let click handler get called first, then reset state.
            setTimeout(this._resetSliderMousedUp, 0)
        }
    }

    _resetSliderMousedUp() {
        this.setState({
            sliderMousedUp: false
        })
    }

    _handleMouseUp(e) {
        const { handleBodyTouchEnd } = this.props.eventHandlers
        handleBodyTouchEnd(e)

        if (this.props.isSliderTouched) {
            this.setState({
                sliderMousedUp: true
            })

        }
    }

    _handleClick(e) {
        const { handleBodyClick } = this.props.eventHandlers

        /**
         * Don't register the click event that happens after mouseUp if we're
         * lifting up from moving the slider.
         */
        if (!this.state.sliderMousedUp) {
            handleBodyClick(e)
        }
    }

    handleKeyDownPress(e) {
        this.keyHandler.handleKeyDownPress(e)
    }

    handleKeyUpPress(e) {
        this.keyHandler.handleKeyUpPress(e)
    }

    displayKeyLetter(keyName = '') {
        this.setState({
            keyName
        })
    }

    _setKeyHandlerRef(node) {
        this.keyHandler = node
    }

    render() {
        const {
            appMounted,
            selectedAdminIndex,
            deviceIndex,
            selectedAccessIndex,
            renderableAnnotationIndex,
            selectedCarouselNavIndex,
            selectedDotKeys,
            selectedDotsIndex,
            selectedLyricColumnIndex,
            selectedOverviewIndex,
            selectedScoreIndex,
            selectedTipsIndex,
            selectedTitleIndex,
            selectedWikiIndex,
            isPlaying,
            isSliderTouched,
            isSliderMoving,
            isLyricExpanded,
            renderableSongIndex,
            renderableVerseIndex,
            sliderVerseIndex,
            interactivatedVerseIndex,
            showOneOfTwoLyricColumns,
            isHeightlessLyricColumn,
            showShrunkNavIcon,
            isScoresTipsInMain,
            isTwoRowMenu,
            isVerseBarAbove,
            isVerseBarBelow,
            isManualScroll
            } = this.props,

            { keyName } = this.state,

            {
                handleBodyTouchMove,
                setRootRef,
                ...other
            } = this.props.eventHandlers,

            deviceClassName = DEVICE_OBJECTS[deviceIndex].className,
            isDesktop = getIsDesktop(deviceIndex),
            isTabletOrMini = getIsTabletOrMini(deviceIndex),

            isLogue = getSongIsLogue(renderableSongIndex),

            singleShownLyricColumnKey = getSingleShownLyricColumnKey({
                showOneOfTwoLyricColumns,
                selectedLyricColumnIndex
            }),

            showOverlay = getShowOverlay({
                deviceIndex,
                isLyricExpanded,
                renderableAnnotationIndex,
                selectedScoreIndex,
                selectedTitleIndex,
                selectedWikiIndex
            }),

            overviewShown = OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN,
            tipsShown = TIPS_OPTIONS[selectedTipsIndex] === SHOWN,

            isCarouselNavShowable =
                !isLogue
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
                renderableVerseIndex,

            cursorStanzaIndex = getStanzaIndexForVerseIndex(
                renderableSongIndex, cursorVerseIndex
            )

        return appMounted && (
            <div
                ref={setRootRef}
                className={cx(
                    'Root',

                    keyName && `${PARENT_ACCESS_PREFIX}${keyName}`,

                    `RM__${deviceClassName}`,
                    isDesktop ?
                        'RM__desktop' : 'RM__mobile',
                    { 'RM__mobileNotPhone': isTabletOrMini },

                    selectedAccessIndex ? 'RM__accessOn' : 'RM__accessOff',
                    showOverlay ? 'RM__overlayShown' : 'RM__overlayHidden',

                    isLogue ? 'RM__logue' : 'RM__song',
                    isPlaying ? 'RM__isPlaying' : 'RM__isPaused',

                    renderableAnnotationIndex ?
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
                    isHeightlessLyricColumn ?
                        'RM__lyricHeightless' : 'RM__lyricHeighted',

                    areVerseBarsHidden ?
                        'RM__verseBarHidden' : 'RM__verseBarShown',

                    {
                        'RM__verseBarAbove': isVerseBarAbove,
                        'RM__verseBarBelow': isVerseBarBelow,
                        'RM__manualScroll': isManualScroll,
                        'RM__bothLyricColumnsShown': !singleShownLyricColumnKey,
                        'RM__sliderTouched': isSliderTouched,
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
                        `RdV${renderableVerseIndex}`,

                    isPlaying &&
                        // "Root playing verse index."
                        `RpV${renderableVerseIndex}`,

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
                <AccessStyle />

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
    selectedScoreIndex,
    selectedTipsIndex,
    selectedTitleIndex,
    selectedWikiIndex,
    isLyricExpanded,
    showOneOfTwoLyricColumns,
    isPlaying,
    deviceStore: { deviceIndex },
    renderableStore: {
        renderableSongIndex,
        renderableVerseIndex,
        renderableAnnotationIndex,
    },
    sliderStore: {
        isSliderTouched,
        isSliderMoving,
        sliderVerseIndex
    },
    isHeightlessLyricColumn,
    showShrunkNavIcon,
    isScoresTipsInMain,
    isTwoRowMenu,
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
    selectedScoreIndex,
    selectedTipsIndex,
    selectedTitleIndex,
    selectedWikiIndex,
    isLyricExpanded,
    showOneOfTwoLyricColumns,
    isPlaying,
    deviceIndex,
    renderableSongIndex,
    renderableVerseIndex,
    renderableAnnotationIndex,
    isSliderTouched,
    isSliderMoving,
    sliderVerseIndex,
    isHeightlessLyricColumn,
    showShrunkNavIcon,
    isScoresTipsInMain,
    isTwoRowMenu,
    isVerseBarAbove,
    isVerseBarBelow,
    isManualScroll
})

export default connect(mapStateToProps)(Root)
