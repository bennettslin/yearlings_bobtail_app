import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectAdminIndex,
         selectSongIndex,
         selectAnnotationIndex,
         selectVerseIndex,
         selectTimePlayed,
         selectDotKey,
         selectOverviewIndex,
         selectAudioOptionIndex,
         selectLyricColumnIndex,
         selectTipsIndex,
         selectWikiIndex,
         selectScoreIndex,
         selectNavIndex,
         selectDotsIndex,
         accessOn } from 'redux/actions'
import EventManager from './event-manager'
import { SHOWN,
         HIDDEN,
         OVERVIEW_OPTIONS,
         TIPS_OPTIONS,
         AUDIO_OPTIONS,

         CONTINUE,
         PAUSE_AT_END,

         LYRIC_COLUMN_KEYS } from 'helpers/constants'
import { getSong, getIsLogue, getAnnotationIndexForDirection, getPopupAnchorIndexForDirection, getSongTimes, getVerseIndexForTime, getSelectedBookColumnIndex, getSliderRatioForScreenX, getVerseBarStatus } from 'helpers/album-view-helper'
import { resizeWindow, getShowSingleLyricColumn, getIsLyricExpandable, getShowSingleBookColumn } from 'helpers/responsive-helper'
import { getPropsAreSame } from 'helpers/general-helper'
import LogHelper from 'helpers/log-helper'

/*********
 * STORE *
 *********/

const passReduxStateToProps = ({
    selectedAdminIndex,
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedVerseIndex,
    selectedTimePlayed,
    selectedDotKeys,
    selectedOverviewIndex,
    selectedAudioOptionIndex,
    selectedLyricColumnIndex,
    selectedTipsIndex,
    selectedWikiIndex,
    selectedScoreIndex,
    selectedNavIndex,
    selectedDotsIndex,
    accessedOn
}) => ({
    // Pass Redux state into component props.
    selectedAdminIndex,
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedVerseIndex,
    selectedTimePlayed,
    selectedDotKeys,
    selectedOverviewIndex,
    selectedAudioOptionIndex,
    selectedLyricColumnIndex,
    selectedTipsIndex,
    selectedWikiIndex,
    selectedScoreIndex,
    selectedNavIndex,
    selectedDotsIndex,
    accessedOn
})

const bindDispatchToProps = (dispatch) => (
    // Bind Redux action creators to component props.
    bindActionCreators({
        selectAdminIndex,
        selectSongIndex,
        selectAnnotationIndex,
        selectVerseIndex,
        selectTimePlayed,
        selectDotKey,
        selectOverviewIndex,
        selectAudioOptionIndex,
        selectLyricColumnIndex,
        selectTipsIndex,
        selectWikiIndex,
        selectScoreIndex,
        selectNavIndex,
        selectDotsIndex,
        accessOn
    }, dispatch)
)

let _stateLyricSectionTop = 0

/*************
 * CONTAINER *
 *************/

class App extends Component {

    constructor(props) {
        super(props)

        // Bind this to event handlers.
        this._bindEventHandlers()

        this.state = {
            isPlaying: false,

            accessedDotIndex: 0,
            accessedSongIndex: props.selectedSongIndex,
            accessedVerseIndex: props.selectedVerseIndex,

            // If no annotation selected, default to 1.
            accessedAnnotationIndex: getAnnotationIndexForDirection(props, props.selectedAnnotationIndex || 1),
            accessedPopupAnchorIndex: getPopupAnchorIndexForDirection(props, 1),

            selectedBookColumnIndex: getSelectedBookColumnIndex(props),
            isLyricExpanded: false,

            lyricSectionTop: 0,
            showLyricButtons: true,

            // Start at persisted time.
            updatedTimePlayed: props.selectedTimePlayed,

            isSelectedVerseAbove: false,
            isSelectedVerseBelow: false,
            sliderVerseIndex: -1,
            selectedVerseElement: null,
            sliderVerseElement: null,
            sliderMousedOrTouched: false,

            interactivatedVerseIndex: -1,

            // Prevent verse bar from showing upon load.
            appMounted: false
        }
    }

    componentWillMount() {
        this._assignLogFunctions()

        this._windowResize()
        window.onresize = this._windowResize
    }

    componentDidMount() {
        this.setState({
            appMounted: true
        })
    }

    /*******************
     * EVENT LISTENERS *
     *******************/

    advanceToNextSong() {
        /**
         * When selecting next song through audio player, reset annotation and
         * verse, and scroll element into view, but do not access nav section.
         */
        const { selectedSongIndex } = this.props,
            selectedAudioOption = AUDIO_OPTIONS[this.props.selectedAudioOptionIndex],
            willAdvance = selectedAudioOption === CONTINUE

        // If option is to pause at end, stop play as well.
        if (selectedAudioOption === PAUSE_AT_END) {
            this.togglePlay()
        }

        // FIXME: This currently doesn't work, because audio player stops playing when currentTime is changed.

        /**
         * If option is to continue, advance to next song. Otherwise, stay
         * on same song, and start at beginning. (True evaluates to 1, false 0.)
         */
        this.selectSong({

            // FIXME: This should be set based on whether an annotation, score, or wiki popup is currently shown.
            preservePreviousPopupIndex: true
        }, selectedSongIndex + willAdvance)
    }

    resetUpdatedTimePlayed() {
        this.setState({
            updatedTimePlayed: null
        })
    }

    /**********
     * ACCESS *
     **********/

    toggleAccess(accessedOn = (this.props.accessedOn + 1) % 2) {
        // If no argument passed, then just toggle between on and off.

        if (typeof accessedOn === 'boolean') {
            accessedOn = accessedOn ? 1 : 0
        }

        this.props.accessOn(accessedOn)
    }

    accessAnnotation(accessedAnnotationIndex) {
        this.setState({
            accessedAnnotationIndex
        })
    }

    accessDot(accessedDotIndex) {
        this.setState({
            accessedDotIndex
        })
    }

    accessPopupAnchor(accessedPopupAnchorIndex) {
        this.setState({
            accessedPopupAnchorIndex
        })
    }

    accessSong(accessedSongIndex) {
        this.setState({
            accessedSongIndex
        })
    }

    /*********
     * ADMIN *
     *********/

    toggleAdmin(selectedAdminIndex = (this.props.selectedAdminIndex + 1) % 2) {
        // If no argument passed, then just toggle between on and off.

        this.props.selectAdminIndex(selectedAdminIndex)
    }

    /**************
     * ANNOTATION *
     **************/

    selectAnnotation({
        selectedAnnotationIndex = 0,
        direction,
        selectedSongIndex = this.props.selectedSongIndex
    }) {

        // Called from arrow buttons in popup.
        if (direction) {
            const lyricColumnShown = LYRIC_COLUMN_KEYS[this.props.selectedLyricColumnIndex]

            selectedAnnotationIndex = getAnnotationIndexForDirection(this.props, this.props.selectedAnnotationIndex, direction, undefined, lyricColumnShown)
        }

        // Keep accessed index, even if annotation is deselected.
        if (selectedAnnotationIndex) {
            const { songs,
                    selectedDotKeys } = this.props,
                accessedPopupAnchorIndex = getPopupAnchorIndexForDirection({
                    songs,
                    selectedSongIndex,
                    selectedAnnotationIndex,
                    selectedDotKeys
                }, 1)

            this.setState({
                accessedAnnotationIndex: selectedAnnotationIndex,

                // App does not know new index, so pass it directly.
                accessedPopupAnchorIndex
            })
        }

        this.props.selectAnnotationIndex(selectedAnnotationIndex)
    }

    /*********
     * AUDIO *
     *********/

     togglePlay(isPlaying = !this.state.isPlaying) {

         // Select first song if play button in logue is toggled on.
         if (getIsLogue(this.props) && isPlaying) {

             // FIXME: Handle this!
             this.selectSong(undefined, 1)
         }

         this.setState({
             isPlaying
         })
     }

    selectAudioOption(selectedAudioOptionIndex =
        (this.props.selectedAudioOptionIndex + 1) % AUDIO_OPTIONS.length) {
        // If no argument passed, then just toggle amongst audio options.

        this.props.selectAudioOptionIndex(selectedAudioOptionIndex)
    }

    selectTime(selectedTimePlayed = 0) {
        const selectedVerseIndex = getVerseIndexForTime(this.props, selectedTimePlayed)

        if (selectedVerseIndex !== null) {
            this._selectTimeAndVerse({
                selectedTimePlayed,
                selectedVerseIndex
            })
        }
    }

    /*******
     * DOT *
     *******/

    toggleDotKey(selectedDotKey) {
        const isSelected = !this.props.selectedDotKeys[selectedDotKey]
        this.props.selectDotKey(selectedDotKey, isSelected)
    }

    /********
     * DOTS *
     ********/

    selectDotsExpand(selectedDotsIndex =
        (this.props.selectedDotsIndex + 1) % 2) {
        // If no argument passed, then just toggle between on and off.

        if (typeof selectedDotsIndex === 'boolean') {
            selectedDotsIndex = selectedDotsIndex ? 1 : 0
        }

        // Dots section cannot be expanded in logue.
        if (getIsLogue(this.props) && selectedDotsIndex) {
            return false
        }

        this.props.selectDotsIndex(selectedDotsIndex)
    }

    /*********
     * LYRIC *
     *********/

    selectLyricExpand(isLyricExpanded = !this.state.isLyricExpanded) {
        /**
         * We should ignore this call if lyric is not expandable, or if it's a
         * logue.
         */
        if (!getIsLyricExpandable(this.state) || getIsLogue(this.props)) {
            return false
        }

        this.setState({
            isLyricExpanded
        })
    }

    scrollLyricSection({
        lyricSectionElement,
        verseElement = this.state.selectedVerseElement,
        fromHeightTransition
    }) {

        /**
         * Prevent verse bar from showing upon initial load.
         */
        if (!this.state.appMounted || !verseElement) {
            return false
        }

        // Get isSelectedVerseAbove and isSelectedVerseBelow.
        const newState = getVerseBarStatus(this.state, verseElement)

        // Show ear and expand buttons if this is from a height transition.
        if (fromHeightTransition) {
            newState.showLyricButtons = true

        // Otherwise, show the buttons only when scrolling up.
        } else if (lyricSectionElement) {
            const lyricSectionTop = lyricSectionElement.scrollTop

            newState.showLyricButtons = lyricSectionTop < _stateLyricSectionTop

            /**
             * We'll store this in a variable rather than the component state
             * in order to keep the lyric scroll smooth.
             */
            _stateLyricSectionTop = lyricSectionTop

            // Update the lyric section element.
            newState.lyricSectionElement = lyricSectionElement
        }

        if (!getPropsAreSame(newState, this.state)) {
            this.setState(newState)
        }
    }

    selectLyricColumn({
        selectedLyricColumnIndex = (this.props.selectedLyricColumnIndex + 1) % 2,
        selectedSongIndex
    }) {
        const { props,
                state } = this

        /**
         * We shouldn't be able to select lyric column if not in a song that
         * has double columns.
         */
        if (!getShowSingleLyricColumn(props, state, selectedSongIndex)) {
            return false
        }

        this.props.selectLyricColumnIndex(selectedLyricColumnIndex)
    }

    /*******
     * NAV *
     *******/

    selectNavExpand(selectedNavIndex = (this.props.selectedNavIndex + 1) % 2) {
        // If no argument passed, then just toggle between on and off.

        if (typeof selectedNavIndex === 'boolean') {
            selectedNavIndex = selectedNavIndex ? 1 : 0
        }

        // Reset accessed song index and book column upon nav expand.
        if (selectedNavIndex) {
            this.accessSong(this.props.selectedSongIndex)

            this.selectBookColumn({
                resetToDefault: true,
                selectedNavIndex
            })
        }

        this.props.selectNavIndex(selectedNavIndex)
    }

    selectBookColumn({
        selectedBookColumnIndex = (this.state.selectedBookColumnIndex) % 2 + 1,
        resetToDefault,
        selectedNavIndex = this.props.selectedNavIndex,
        selectedSongIndex = this.props.selectedSongIndex
    }) {
        // Either toggle or reset. Book column index is 1-based.

        /**
         * We shouldn't be able to select book column if it's not a single
         * column, or if nav is collapsed.
         */
        if (!getShowSingleBookColumn(this.state) || !selectedNavIndex) {
            return false
        }

        // Reset to default upon song change or nav expand.
        if (resetToDefault) {
            selectedBookColumnIndex = getSelectedBookColumnIndex(this.props, selectedSongIndex)
        }

        this.setState({
            selectedBookColumnIndex
        })
    }

    selectSong({
        selectedSongIndex = 0,
        direction,
        selectedAnnotationIndex = 0,
        selectedVerseIndex = 1
    }) {

        // Called from audio section's previous or next buttons.
        if (direction) {
            selectedSongIndex = this.props.selectedSongIndex + direction

            if (selectedSongIndex < 0 || selectedSongIndex >= this.props.songs.length) {
                return
            }
        }

        const isLogue = getIsLogue({ selectedSongIndex,
                                     songs: this.props.songs })

        // If not selected from portal, show overview if hidden.
        if (!selectedAnnotationIndex) {
            this.selectOverview({
                justShowIfHidden: true
            })
        }

        this.selectAnnotation({
            selectedAnnotationIndex,
            selectedSongIndex
        })

        this.selectVerse({
            selectedVerseIndex,
            selectedSongIndex
        })

        this.selectBookColumn({
            resetToDefault: true,
            selectedSongIndex
        })

        this.interactivateVerse()

        if (isLogue) {
            this.setState({
                isPlaying: false
            })
        }

        this.accessSong(selectedSongIndex)
        this.props.selectSongIndex(selectedSongIndex)
    }

    /************
     * OVERVIEW *
     ************/

    selectOverview({
        clickToggle,
        justHideIfShown,
        justShowIfHidden
    }) {

        // We shouldn't be able to change overview it's a logue.
        if (getIsLogue(this.props)) {
            return false
        }

        let selectedOverviewIndex = this.props.selectedOverviewIndex

        // If called from body click, hide if shown.
        if (justHideIfShown) {
            if (OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN) {
                selectedOverviewIndex = 2 // Hidden.
            }

        // If called from song select, show if hidden.
        } else if (justShowIfHidden) {
            if (OVERVIEW_OPTIONS[selectedOverviewIndex] === HIDDEN) {
                selectedOverviewIndex = 0 // Shown.
            }

        } else {
            do {
                // If it's a keydown event, cycle through all three options.
                selectedOverviewIndex = (selectedOverviewIndex + 1) % OVERVIEW_OPTIONS.length

            // If it's a click event, skip hidden.
            } while (clickToggle && OVERVIEW_OPTIONS[selectedOverviewIndex] === HIDDEN)
        }

        // Overview options are shown, disabled, hidden.
        if (selectedOverviewIndex !== this.props.selectedOverviewIndex) {
            this.props.selectOverviewIndex(selectedOverviewIndex)
        }
    }

    /*********
     * SCORE *
     *********/

    selectScore(selectedScoreIndex =
        (this.props.selectedScoreIndex + 1) % 2) {
        // If no argument passed, then just toggle between on and off.

        if (typeof selectedScoreIndex === 'boolean') {
            selectedScoreIndex = selectedScoreIndex ? 1 : 0
        }

        this.props.selectScoreIndex(selectedScoreIndex)
    }

    /********
     * TIPS *
     ********/

    selectTips(selectedTipsIndex =
        (this.props.selectedTipsIndex + 1) % TIPS_OPTIONS.length) {
        // If no argument passed, then just toggle amongst tips options.

        this.props.selectTipsIndex(selectedTipsIndex)
    }

    /*********
     * TOUCH *
     *********/

    touchSliderBegin(clientRect, screenX) {
        const sliderLeft = clientRect.left,
            sliderWidth = clientRect.width,
            sliderRatio = getSliderRatioForScreenX(screenX, sliderLeft, sliderWidth),

            sliderTime = sliderRatio * getSong(this.props).totalTime,
            sliderVerseIndex = getVerseIndexForTime(this.props, sliderTime)

        this.setState({
            sliderLeft,
            sliderWidth,
            sliderRatio,
            sliderVerseIndex,
            sliderMousedOrTouched: true
        })

        /**
         * If the move doesn't happen for a while, we recognise that it is
         * moving anyway for styling purposes.
         */
        setTimeout(() => {
            if (this.state.sliderMousedOrTouched && !this.state.sliderMoving) {
                this.setState({
                    sliderMoving: true
                })
            }
        }, 125)
    }

    touchBodyMove(screenX) {
        if (this.state.sliderMousedOrTouched) {
            const { sliderLeft,
                    sliderWidth } = this.state,
                sliderRatio = getSliderRatioForScreenX(screenX, sliderLeft, sliderWidth),

                sliderTime = sliderRatio * getSong(this.props).totalTime,
                sliderVerseIndex = getVerseIndexForTime(this.props, sliderTime)

            this.setState({
                sliderRatio,
                sliderVerseIndex,
                sliderMoving: true
            })
        }
    }

    touchBodyEnd() {
        if (this.state.sliderMousedOrTouched) {
            const selectedTime = this.state.sliderRatio * getSong(this.props).totalTime,
                selectedVerseIndex = getVerseIndexForTime(this.props, selectedTime),

                // We will start at the beginning of the selected verse.
                songTimes = getSongTimes(this.props),
                selectedTimePlayed = songTimes[selectedVerseIndex]

            this.selectTime(selectedTimePlayed)

            this.setState({
                sliderLeft: 0,
                sliderWidth: 0,
                sliderRatio: 0,
                sliderVerseIndex: -1,
                sliderMousedOrTouched: false,
                sliderMoving: false,
                sliderVerseElement: null
            })
        }
    }

    /*********
     * VERSE *
     *********/

    interactivateVerse(interactivatedVerseIndex = -1) {
        this.setState({
            interactivatedVerseIndex
        })
    }

    interactivateVerseDirection(direction) {
        const songTimes = getSongTimes(this.props),
            timesLength = songTimes.length

        let { interactivatedVerseIndex } = this.state

        if (direction === -1) {
            direction = timesLength - 1
        }

        // A verse is not yet interactivated.
        if (interactivatedVerseIndex === -1) {
            interactivatedVerseIndex = (this.props.selectedVerseIndex + direction) % timesLength

        // We already have an interactivated verse.
        } else {
            interactivatedVerseIndex = (interactivatedVerseIndex + direction) % timesLength
        }

        this.setState({
            interactivatedVerseIndex
        })
    }

    selectVerseElement(selectedVerseElement) {
        if (selectedVerseElement !== this.state.selectedVerseElement) {

            // Determine if new selected verse element shows or hides verse bar.
            const newState = getVerseBarStatus(this.state, selectedVerseElement)

            newState.selectedVerseElement = selectedVerseElement

            // App has a reference to the selected verse.
            this.setState(newState)
        }
    }

    slideVerseElement(sliderVerseElement) {
        if (sliderVerseElement !== this.state.sliderVerseElement) {

            const newState = getVerseBarStatus(this.state, sliderVerseElement)

            newState.sliderVerseElement = sliderVerseElement

            /**
             * Slider verse element overrides selected verse element, as long
             * as the slider is touched.
             */
            this.setState(newState)
        }
    }

    selectVerse({
        selectedVerseIndex = 0,
        selectedSongIndex
    }) {
        const songTimes = getSongTimes(this.props, selectedSongIndex),
            selectedTimePlayed = songTimes[selectedVerseIndex]

        this._selectTimeAndVerse({
            selectedTimePlayed,
            selectedVerseIndex
        })
    }

    /********
     * WIKI *
     ********/

    selectWiki(selectedWikiIndex = 0) {
        this.props.selectWikiIndex(selectedWikiIndex)
    }

    /***********
     * HELPERS *
     ***********/

    _selectTimeAndVerse({
        selectedTimePlayed,
        selectedVerseIndex
    }) {
        /**
         * Since time and verse are in sync, this helper method can be called
         * by either one.
         */

        /**
         * Don't let player change time before it has been updated to reflect
         * the new time selected by user.
         */
        // FIXME: This doesn't work anymore. Selecting verse or time when player is running is buggy.
        if (this.state.updatedTimePlayed !== null) {
            return false
        }

        this.setState({
            accessedVerseIndex: selectedVerseIndex
        })

        this.props.selectVerseIndex(selectedVerseIndex)
        this.props.selectTimePlayed(selectedTimePlayed)
    }

    _windowResize(e) {
        const resizedWindowObject = resizeWindow(e ? e.target : undefined)
        this.setState(resizedWindowObject)
    }

    _bindEventHandlers() {
        this.accessAnnotation = this.accessAnnotation.bind(this)
        this.accessDot = this.accessDot.bind(this)
        this.accessPopupAnchor = this.accessPopupAnchor.bind(this)
        this.accessSong = this.accessSong.bind(this)
        this.toggleAccess = this.toggleAccess.bind(this)
        this.toggleAdmin = this.toggleAdmin.bind(this)
        this.togglePlay = this.togglePlay.bind(this)
        this.selectSong = this.selectSong.bind(this)
        this.selectOverview = this.selectOverview.bind(this)
        this.selectAudioOption = this.selectAudioOption.bind(this)
        this.selectAnnotation = this.selectAnnotation.bind(this)
        this.selectVerse = this.selectVerse.bind(this)
        this.selectTime = this.selectTime.bind(this)
        this.resetUpdatedTimePlayed = this.resetUpdatedTimePlayed.bind(this)
        this.toggleDotKey = this.toggleDotKey.bind(this)
        this.selectWiki = this.selectWiki.bind(this)
        this.selectScore = this.selectScore.bind(this)
        this.interactivateVerse = this.interactivateVerse.bind(this)
        this.interactivateVerseDirection = this.interactivateVerseDirection.bind(this)
        this.selectLyricColumn = this.selectLyricColumn.bind(this)
        this.selectLyricExpand = this.selectLyricExpand.bind(this)
        this.selectNavExpand = this.selectNavExpand.bind(this)
        this.selectBookColumn = this.selectBookColumn.bind(this)
        this.selectDotsExpand = this.selectDotsExpand.bind(this)
        this.selectTips = this.selectTips.bind(this)
        this.advanceToNextSong = this.advanceToNextSong.bind(this)
        this.selectVerseElement = this.selectVerseElement.bind(this)
        this.slideVerseElement = this.slideVerseElement.bind(this)
        this.scrollLyricSection = this.scrollLyricSection.bind(this)
        this._windowResize = this._windowResize.bind(this)
        this.touchSliderBegin = this.touchSliderBegin.bind(this)
        this.touchBodyMove = this.touchBodyMove.bind(this)
        this.touchBodyEnd = this.touchBodyEnd.bind(this)
    }

    _assignLogFunctions() {
        window.a = LogHelper.logAnchorAnnotation.bind(LogHelper, this)
        window.c = LogHelper.logAccessedAnnotation.bind(LogHelper, this)
        window.d = LogHelper.logDrawings.bind(LogHelper, this)
        window.n = LogHelper.logAnnotationsDotKeys.bind(LogHelper, this)
        window.p = LogHelper.logPortalLinks.bind(LogHelper, this.props)
        window.s = LogHelper.logSong.bind(LogHelper, this)
        window.v = LogHelper.logVerse.bind(LogHelper, this)
        window.t = LogHelper.logStorage.bind(LogHelper)
    }

    render() {
        return (
            <EventManager
                // Dom manager props.
                domProps={this.props}
                domState={this.state}

                // Event manager props.
                accessAnnotation={this.accessAnnotation}
                accessDot={this.accessDot}
                accessPopupAnchor={this.accessPopupAnchor}
                accessSong={this.accessSong}
                touchSliderBegin={this.touchSliderBegin}
                touchBodyMove={this.touchBodyMove}
                touchBodyEnd={this.touchBodyEnd}
                selectAnnotation={this.selectAnnotation}
                selectAudioOption={this.selectAudioOption}
                selectBookColumn={this.selectBookColumn}
                toggleDotKey={this.toggleDotKey}
                selectDotsExpand={this.selectDotsExpand}
                selectLyricColumn={this.selectLyricColumn}
                selectLyricExpand={this.selectLyricExpand}
                scrollLyricSection={this.scrollLyricSection}
                selectNavExpand={this.selectNavExpand}
                selectOverview={this.selectOverview}
                selectScore={this.selectScore}
                selectSong={this.selectSong}
                selectTime={this.selectTime}
                selectTips={this.selectTips}
                selectVerse={this.selectVerse}
                interactivateVerse={this.interactivateVerse}
                interactivateVerseDirection={this.interactivateVerseDirection}
                selectWiki={this.selectWiki}
                toggleAccess={this.toggleAccess}
                toggleAdmin={this.toggleAdmin}
                togglePlay={this.togglePlay}
                selectVerseElement={this.selectVerseElement}
                slideVerseElement={this.slideVerseElement}

                advanceToNextSong={this.advanceToNextSong}
                resetUpdatedTimePlayed={this.resetUpdatedTimePlayed}
            />
        )
    }
}

export default connect(passReduxStateToProps, bindDispatchToProps)(App)
