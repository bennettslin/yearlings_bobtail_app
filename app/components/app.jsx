import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { accessAnnotationAnchorIndex, accessDotIndex, accessNavSongIndex } from '../redux/actions/access'
import { setIsCarouselExpandable, setIsHeightlessLyricColumn, setIsHiddenNav, setIsScoresTipsInMain, setIsTitleInAudio } from '../redux/actions/responsive'
import { selectAccessIndex, selectAdminIndex, selectAnnotationIndex, selectAudioOptionIndex, selectCarouselIndex, selectDotKey, selectDotsIndex, selectLyricColumnIndex, selectNavIndex, selectOverviewIndex, selectScoreIndex, selectSongIndex, selectTimePlayed, selectTipsIndex, selectTitleIndex, selectVerseIndex, selectWikiIndex } from '../redux/actions/storage'
import EventManager from './event-manager'
import { ALL_DOT_KEYS } from '../constants/dots'
import { CONTINUE,
         PAUSE_AT_END,
         AUDIO_OPTIONS,

         SHOWN,
         HIDDEN,
         OVERVIEW_OPTIONS,
         TIPS_OPTIONS } from '../constants/options'
import { getSongObject, getSongsLength, getIsLogue, getAnnotationObject, getBookColumnIndex, getOverview, getSongVerseTimes } from '../helpers/data-helper'
import { getVerseIndexForAccessedAnnotationIndex, getAnnotationIndexForDirection, getAnnotationIndexForVerseIndex, getAnnotationAnchorIndexForDirection, getVerseIndexForTime, getSliderRatioForClientX, getVerseBarStatus, shouldShowAnnotationForColumn } from '../helpers/logic-helper'
import { resizeWindow, getShowOneOfTwoLyricColumns, getIsCarouselExpandable, getIsHeightlessLyricColumn, getIsHiddenNav, getIsLyricExpandable, getShowSingleBookColumn, getShrinkNavIcon, getIsScoresTipsInMain, getIsTitleInAudio } from '../helpers/responsive-helper'
import LogHelper from '../helpers/log-helper'

/*********
 * STORE *
 *********/

// Pass Redux state into component props.
const passReduxStateToProps = ({
    selectedAccessIndex, selectedAdminIndex, selectedAnnotationIndex, selectedAudioOptionIndex, selectedCarouselIndex, selectedDotKeys, selectedDotsIndex, selectedLyricColumnIndex, selectedNavIndex, selectedOverviewIndex, selectedScoreIndex, selectedSongIndex, selectedTimePlayed, selectedTipsIndex, selectedTitleIndex, selectedVerseIndex, selectedWikiIndex, accessedAnnotationAnchorIndex, accessedDotIndex, accessedNavSongIndex, isCarouselExpandable, isHeightlessLyricColumn, isHiddenNav, isScoresTipsInMain, isTitleInAudio
}) => ({
    selectedAccessIndex, selectedAdminIndex, selectedAnnotationIndex, selectedAudioOptionIndex, selectedCarouselIndex, selectedDotKeys, selectedDotsIndex, selectedLyricColumnIndex, selectedNavIndex, selectedOverviewIndex, selectedScoreIndex, selectedSongIndex, selectedTimePlayed, selectedTipsIndex, selectedTitleIndex, selectedVerseIndex, selectedWikiIndex, accessedAnnotationAnchorIndex, accessedDotIndex, accessedNavSongIndex, isCarouselExpandable, isHeightlessLyricColumn, isHiddenNav, isScoresTipsInMain, isTitleInAudio
})

// Bind Redux action creators to component props.
const bindDispatchToProps = (dispatch) => (
    bindActionCreators({ selectAccessIndex, selectAdminIndex, selectAnnotationIndex, selectAudioOptionIndex, selectCarouselIndex, selectDotKey, selectDotsIndex, selectLyricColumnIndex, selectNavIndex, selectOverviewIndex, selectScoreIndex, selectSongIndex, selectTimePlayed, selectTipsIndex, selectTitleIndex, selectVerseIndex, selectWikiIndex, accessAnnotationAnchorIndex, accessDotIndex, accessNavSongIndex, setIsCarouselExpandable, setIsHeightlessLyricColumn, setIsHiddenNav, setIsScoresTipsInMain, setIsTitleInAudio }, dispatch)
)

// let _stateLyricSectionTop = 0

/*************
 * CONTAINER *
 *************/

class App extends Component {

    constructor(props) {
        super(props)

        const { selectedSongIndex,
                selectedAnnotationIndex } = props,

            isLogue = getIsLogue(selectedSongIndex),
            popupOverview = getOverview(selectedSongIndex)

        // Set initial access state.
        props.accessAnnotationAnchorIndex(
            getAnnotationAnchorIndexForDirection({
                selectedSongIndex,
                selectedAnnotationIndex,
                selectedDotKeys: props.selectedDotKeys,
                initialAnnotationAnchorIndex: 1
            })
        )
        props.accessDotIndex(0)
        props.accessNavSongIndex(selectedSongIndex)

        // Bind this to event handlers.
        this._bindEventHandlers()

        this.state = {
            isPlaying: false,

            annotationObject: getAnnotationObject(selectedSongIndex, selectedAnnotationIndex),

            popupLogueOverview: isLogue ? popupOverview : '',
            popupSongOverview: isLogue ? '' : popupOverview,

            shownBookColumnIndex: getBookColumnIndex(selectedSongIndex),
            showSingleBookColumn: false,
            shrinkNavIcon: false,

            isLyricExpanded: false,

            lyricSectionTop: 0,

            // Start at persisted time.
            updatedTimePlayed: props.selectedTimePlayed,

            isSelectedVerseAbove: false,
            isSelectedVerseBelow: false,
            selectedVerseElement: null,
            sliderVerseIndex: -1,
            sliderVerseElement: null,
            sliderMousedOrTouched: false,

            interactivatedVerseIndex: -1,

            // Selected from annotation in carousel.
            carouselAnnotationIndex: 0,

            // Prevent verse bar from showing upon load.
            appMounted: false
        }
    }

    componentWillMount() {
        this._assignLogFunctions()

        // This method sets initial responsive state.
        this._windowResize()

        // Then watch for any subsequent window resize.
        window.onresize = this._windowResize
    }

    componentDidMount() {
        const { props } = this,
            passedState = {
                deviceIndex: this.state.deviceIndex
            }

        // This state can only be set after component mounted.
        this.setState({
            appMounted: true,

            // Based on either selected annotation or selected verse.
            accessedAnnotationIndex: props.selectedAnnotationIndex ?
                getAnnotationIndexForDirection({
                    deviceIndex: passedState.deviceIndex,
                    currentAnnotationIndex: props.selectedAnnotationIndex,
                    selectedSongIndex: props.selectedSongIndex,
                    selectedDotKeys: props.selectedDotKeys,
                    lyricColumnIndex: props.selectedLyricColumnIndex
                }) :
                getAnnotationIndexForVerseIndex({
                    deviceIndex: passedState.deviceIndex,
                    verseIndex: props.selectedVerseIndex,
                    selectedSongIndex: props.selectedSongIndex,
                    selectedDotKeys: props.selectedDotKeys,
                    lyricColumnIndex: props.selectedLyricColumnIndex
                }),
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

    toggleAccess(selectedAccessIndex = (this.props.selectedAccessIndex + 1) % 2) {
        // If no argument passed, then just toggle between on and off.

        if (typeof selectedAccessIndex === 'boolean') {
            selectedAccessIndex = selectedAccessIndex ? 1 : 0
        }

        this.props.selectAccessIndex(selectedAccessIndex)
    }

    accessAnnotation(accessedAnnotationIndex) {

        this.setState({
            accessedAnnotationIndex
        })

        return true
    }

    accessDot(accessedDotIndex) {
        this.props.accessDotIndex(accessedDotIndex)
    }

    accessAnnotationAnchor(accessedAnnotationAnchorIndex) {
        this.props.accessAnnotationAnchorIndex(accessedAnnotationAnchorIndex)
    }

    accessNavSong(accessedNavSongIndex) {
        this.props.accessNavSongIndex(accessedNavSongIndex)
    }

    /*********
     * ADMIN *
     *********/

    toggleAdmin(selectedAdminIndex = (this.props.selectedAdminIndex + 1) % 2) {
        // If no argument passed, then just toggle between on and off.

        this.props.selectAdminIndex(selectedAdminIndex)
        return selectedAdminIndex
    }

    /**************
     * ANNOTATION *
     **************/

    selectAnnotation({
        selectedAnnotationIndex = 0,
        direction,
        selectedSongIndex = this.props.selectedSongIndex
    }) {
        const { props,
                state } = this

        // Called from arrow buttons in popup.
        if (direction) {
            selectedAnnotationIndex = getAnnotationIndexForDirection({
                deviceIndex: state.deviceIndex,
                selectedSongIndex,
                selectedDotKeys: props.selectedDotKeys,
                currentAnnotationIndex: props.selectedAnnotationIndex,
                lyricColumnIndex: props.selectedLyricColumnIndex,
                direction
            })
        }

        // Keep accessed index, even if annotation is deselected.
        if (selectedAnnotationIndex) {
            const { selectedDotKeys } = props

            this.setState({
                accessedAnnotationIndex: selectedAnnotationIndex
            })

            // App does not know new index, so pass it directly.
            this.props.accessAnnotationAnchorIndex(
                getAnnotationAnchorIndexForDirection({
                    selectedSongIndex,
                    selectedAnnotationIndex,
                    selectedDotKeys,
                    initialAnnotationAnchorIndex: 1
                })
            )
        }

        props.selectAnnotationIndex(selectedAnnotationIndex)

        /**
         * There should always be a popup annotation, so that popup is not
         * suddenly empty when popup fades out.
         */
        if (selectedAnnotationIndex) {
            const annotationObject = getAnnotationObject(selectedSongIndex, selectedAnnotationIndex)

            this.setState({
                annotationObject
            })
        }

        return selectedAnnotationIndex
    }

    /*********
     * AUDIO *
     *********/

     togglePlay(isPlaying = !this.state.isPlaying) {

         // Select first song if play button in logue is toggled on.
         if (getIsLogue(this.props.selectedSongIndex) && isPlaying) {
             this.selectSong({
                 selectedSongIndex: 1
             })
         }

         this.setState({
             isPlaying
         })
         return true
     }

    selectAudioOption(selectedAudioOptionIndex =
        (this.props.selectedAudioOptionIndex + 1) % AUDIO_OPTIONS.length) {
        // If no argument passed, then just toggle amongst audio options.

        this.props.selectAudioOptionIndex(selectedAudioOptionIndex)
        return true
    }

    selectTime(selectedTimePlayed = 0) {
        const selectedVerseIndex = getVerseIndexForTime(this.props.selectedSongIndex, selectedTimePlayed)

        if (selectedVerseIndex !== null) {
            this._selectTimeAndVerse({
                selectedTimePlayed,
                selectedVerseIndex
            })
        }
    }

    /************
     * CAROUSEL *
     ************/

    selectCarousel(selectedCarouselIndex =
        (this.props.selectedCarouselIndex + 1) % 2, overrideException) {
        // If no argument passed, then just toggle between on and off.

        /**
         * We should ignore this call if carousel is not expandable, or if
         * it's a heightless lyric, or if it's a logue. However, allow nav to
         * override this exception.
         */
        if (!overrideException && (!this.props.isCarouselExpandable ||
                this.props.isHeightlessLyricColumn ||
                getIsLogue(this.props.selectedSongIndex))) {
            return false
        }

        if (typeof selectedCarouselIndex === 'boolean') {
            selectedCarouselIndex = selectedCarouselIndex ? 1 : 0
        }

        this.props.selectCarouselIndex(selectedCarouselIndex)

        // Not really necessary, but doing it anyway.
        if (!selectedCarouselIndex) {
            this.setState({
                carouselAnnotationIndex: 0
            })
        }

        return true
    }

    /*******
     * DOT *
     *******/

    toggleDot(selectedDotIndex) {
        const selectedDotKey = ALL_DOT_KEYS[selectedDotIndex],
            isSelected = !this.props.selectedDotKeys[selectedDotKey]

        this.props.selectDotKey(selectedDotKey, isSelected)

        // Make most recently toggled dot the accessed dot.
        this.accessDot(selectedDotIndex)
    }

    /********
     * DOTS *
     ********/

    selectDotsExpand(selectedDotsIndex =
        (this.props.selectedDotsIndex + 1) % 2) {
        // If no argument passed, then just toggle between on and off.

        // Dots section cannot be changed in logue.
        if (getIsLogue(this.props.selectedSongIndex)) {
            return false
        }

        if (typeof selectedDotsIndex === 'boolean') {
            selectedDotsIndex = selectedDotsIndex ? 1 : 0
        }

        /**
         * If closing dots section, get accessed annotation index because it
         * might have changed.
         */
        if (!selectedDotsIndex) {
            const accessedAnnotationIndex = getAnnotationIndexForVerseIndex({
                deviceIndex: this.state.deviceIndex,
                verseIndex: this.props.selectedVerseIndex,
                selectedSongIndex: this.props.selectedSongIndex,
                selectedDotKeys: this.props.selectedDotKeys,
                lyricColumnIndex: this.props.selectedLyricColumnIndex
            })

            this.setState({
                accessedAnnotationIndex
            })
        }

        this.props.selectDotsIndex(selectedDotsIndex)
        return true
    }

    /*********
     * LYRIC *
     *********/

    selectLyricExpand(isLyricExpanded = !this.state.isLyricExpanded, overrideException) {

        /**
         * We should ignore this call if lyric is not expandable, or if it's a
         * logue. However, allow nav to override this exception.
         */
        if (!overrideException && (!getIsLyricExpandable(this.state.deviceIndex) || getIsLogue(this.props.selectedSongIndex))) {
            return false
        }

        this.setState({
            isLyricExpanded
        })
        return true
    }

    scrollLyricSection(verseElement = this.state.selectedVerseElement) {

        // Prevent verse bar from showing upon initial load.
        if (!this.state.appMounted || !verseElement) {
            return false
        }

        // Get isSelectedVerseAbove and isSelectedVerseBelow.

        // FIXME: Commenting out for now, to make column scroll smoother.
        const newState = getVerseBarStatus(this.state, verseElement)

        this.setState(newState)
    }

    selectLyricColumn({
        selectedLyricColumnIndex = (this.props.selectedLyricColumnIndex + 1) % 2,
        selectedSongIndex = this.props.selectedSongIndex
    }) {
        const { props,
                state } = this

        /**
         * We shouldn't be able to select lyric column if not in a song that
         * has double columns, or if in a logue. Check for new song if called
         * from portal.
         */
        if (!(!isNaN(selectedSongIndex) ? getShowOneOfTwoLyricColumns(selectedSongIndex, state.deviceIndex) : state.showOneOfTwoLyricColumns) || getIsLogue(selectedSongIndex)) {
            return false
        }

        // Deselect selected annotation if not in new selected column.
        this._deselectAnnotationIfSelected({
            selectedSongIndex,
            selectedLyricColumnIndex
        })

        props.selectLyricColumnIndex(selectedLyricColumnIndex)

        // Switching lyric column might change accessed annotation index.
        const accessedAnnotationIndex = getAnnotationIndexForVerseIndex({
            deviceIndex: state.deviceIndex,
            verseIndex: props.selectedVerseIndex,
            selectedSongIndex,
            selectedDotKeys: props.selectedDotKeys,
            lyricColumnIndex: selectedLyricColumnIndex
        })

        this.setState({
            accessedAnnotationIndex
        })
        return true
    }

    /*******
     * NAV *
     *******/

    selectNavExpand(selectedNavIndex = (this.props.selectedNavIndex + 1) % 2) {
        // If no argument passed, then just toggle between on and off.

        // Ignore this call if it's a hidden nav.
        if (this.props.isHiddenNav) {
            return false
        }

        if (typeof selectedNavIndex === 'boolean') {
            selectedNavIndex = selectedNavIndex ? 1 : 0
        }

        // Reset accessed song index and book column upon nav expand.
        if (selectedNavIndex) {
            this.accessNavSong(this.props.selectedSongIndex)

            this.selectBookColumn({
                resetToDefault: true,
                selectedNavIndex
            })
        }

        this.props.selectNavIndex(selectedNavIndex)
        return true
    }

    selectBookColumn({
        shownBookColumnIndex = (this.state.shownBookColumnIndex) % 2 + 1,
        resetToDefault,
        selectedNavIndex = this.props.selectedNavIndex,
        selectedSongIndex = this.props.selectedSongIndex
    }) {
        // Either toggle or reset. Book column index is 1-based.

        /**
         * We shouldn't be able to select book column if it's not a single
         * column, or if nav is collapsed.
         */
        if (!this.state.showSingleBookColumn || !selectedNavIndex) {
            return false
        }

        // Reset to default upon song change or nav expand.
        if (resetToDefault) {
            shownBookColumnIndex = getBookColumnIndex(selectedSongIndex)
        }

        this.setState({
            shownBookColumnIndex
        })
    }

    selectSong({
        selectedSongIndex = 0,
        direction,
        selectedAnnotationIndex = 0,
        selectedVerseIndex = 0,
        selectedWikiIndex = 0
    }) {

        const { props } = this

        // Called from audio section's previous or next buttons.
        if (direction) {
            selectedSongIndex = props.selectedSongIndex + direction

            if (selectedSongIndex < 0 || selectedSongIndex >= getSongsLength()) {
                return false
            }
        }

        const wasLogue = getIsLogue(props.selectedSongIndex),
            isLogue = getIsLogue(selectedSongIndex),

            // Allow logue and song overviews to overlap for fade animation.
            newOverview = getOverview(selectedSongIndex),
            newState = {}

        /**
         * If not selected from portal, show overview if hidden, and lyric
         * column is not expanded.
         */
        if (!selectedAnnotationIndex && !this.state.isLyricExpanded) {
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

        // TODO: This prevents app from breaking when wiki is selected and song is changed. But this might be handled more strategically.
        this.selectWiki(selectedWikiIndex)

        this.selectBookColumn({
            resetToDefault: true,
            selectedSongIndex
        })

        newState.showOneOfTwoLyricColumns = getShowOneOfTwoLyricColumns(selectedSongIndex, this.state.deviceIndex)

        this.interactivateVerse()

        if (isLogue) {
            newState.isPlaying = false
            newState.popupLogueOverview = newOverview

            if (wasLogue) {
                // Remove song overview if two logues in a row.
                newState.popupSongOverview = ''
            }
        } else {
            newState.popupSongOverview = newOverview

            if (!wasLogue) {
                // Remove logue overview if two songs in a row.
                newState.popupLogueOverview = ''
            }
        }

        /**
         * Get new accessed annotation index by starting from first and going
         * forward. It should always be the title annotation unless deselected
         * by dits.
         */
        newState.accessedAnnotationIndex = getAnnotationIndexForDirection({
            deviceIndex: this.state.deviceIndex,
            currentAnnotationIndex: 1,
            selectedSongIndex,
            selectedDotKeys: props.selectedDotKeys,
            lyricColumnIndex: props.selectedLyricColumnIndex
        })

        this.setState(newState)
        this.accessNavSong(selectedSongIndex)
        props.selectSongIndex(selectedSongIndex)

        return true
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
        if (getIsLogue(this.props.selectedSongIndex)) {
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
        return true
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
        return true
    }

    /********
     * TIPS *
     ********/

    selectTips(selectedTipsIndex =
        (this.props.selectedTipsIndex + 1) % TIPS_OPTIONS.length) {
        // If no argument passed, then just toggle amongst tips options.

        this.props.selectTipsIndex(selectedTipsIndex)
        return true
    }

    /*********
     * TITLE *
     *********/

    selectTitle(selectedTitleIndex =
        (this.props.selectedTitleIndex + 1) % 2) {
        // If no argument passed, then just toggle between on and off.

        if (typeof selectedTitleIndex === 'boolean') {
            selectedTitleIndex = selectedTitleIndex ? 1 : 0
        }

        this.props.selectTitleIndex(selectedTitleIndex)
        return true
    }

    /*********
     * TOUCH *
     *********/

    touchSliderBegin(clientRect, clientX) {
        const sliderLeft = clientRect.left,
            sliderWidth = clientRect.width,
            sliderRatio = getSliderRatioForClientX(clientX, sliderLeft, sliderWidth),

            sliderTime = sliderRatio * getSongObject(this.props.selectedSongIndex).totalTime,
            sliderVerseIndex = getVerseIndexForTime(this.props.selectedSongIndex, sliderTime)

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

    touchBodyMove(clientX) {
        if (this.state.sliderMousedOrTouched) {
            const { sliderLeft,
                    sliderWidth } = this.state,
                sliderRatio = getSliderRatioForClientX(clientX, sliderLeft, sliderWidth),

                sliderTime = sliderRatio * getSongObject(this.props.selectedSongIndex).totalTime,
                sliderVerseIndex = getVerseIndexForTime(this.props.selectedSongIndex, sliderTime)

            this.setState({
                sliderRatio,
                sliderVerseIndex,
                sliderMoving: true
            })
        }
    }

    touchBodyEnd() {
        if (this.state.sliderMousedOrTouched) {
            const { props } = this,
                selectedTime = this.state.sliderRatio * getSongObject(props.selectedSongIndex).totalTime,
                selectedVerseIndex = getVerseIndexForTime(props.selectedSongIndex, selectedTime),

                // We will start at the beginning of the selected verse.
                songTimes = getSongVerseTimes(props.selectedSongIndex),
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
        const { selectedAccessIndex,
                selectedSongIndex } = this.props,
            songTimes = getSongVerseTimes(selectedSongIndex),
            timesLength = songTimes.length

        let { interactivatedVerseIndex } = this.state

        // Ensure modulo.
        if (direction === -1) {
            direction = timesLength - 1
        }

        // We are turning on interactivation.
        if (interactivatedVerseIndex === -1) {

            // If accessed on, start from accessed annotation index.
            if (selectedAccessIndex) {
                const { accessedAnnotationIndex } = this.state

                interactivatedVerseIndex = getVerseIndexForAccessedAnnotationIndex(this.props.selectedSongIndex, accessedAnnotationIndex)

            // If not, start from the selected verse.
            } else {
                interactivatedVerseIndex = (this.props.selectedVerseIndex + direction) % timesLength
            }

        // We already have an interactivated verse.
        } else {
            interactivatedVerseIndex = (interactivatedVerseIndex + direction) % timesLength
        }

        this.setState({
            interactivatedVerseIndex
        })

        return interactivatedVerseIndex
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
        selectedSongIndex = this.props.selectedSongIndex
    }) {
        const songTimes = getSongVerseTimes(selectedSongIndex),
            selectedTimePlayed = songTimes[selectedVerseIndex]

        this._selectTimeAndVerse({
            selectedTimePlayed,
            selectedVerseIndex
        })
    }

    /********
     * WIKI *
     ********/

    selectWiki(selectedWikiIndex = 0, carouselAnnotationIndex = 0) {
        this.props.selectWikiIndex(selectedWikiIndex)
        this.setState({
            carouselAnnotationIndex
        })
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

        this.props.selectVerseIndex(selectedVerseIndex)
        this.props.selectTimePlayed(selectedTimePlayed)
    }

    _deselectAnnotationIfSelected({
        selectedSongIndex = this.props.selectedSongIndex,
        selectedLyricColumnIndex = this.props.selectedLyricColumnIndex,
        annotationIndex = this.props.selectedAnnotationIndex,
        state = this.state
    }) {
        if (annotationIndex) {
            const showAnnotationForColumn = shouldShowAnnotationForColumn({
                    selectedSongIndex,
                    selectedLyricColumnIndex,
                    annotationIndex,
                    deviceIndex: state.deviceIndex
                })
            if (!showAnnotationForColumn) {
                this.selectAnnotation({})
            }
        }
    }

    _windowResize(e) {
        const { selectedSongIndex } = this.props,
            newState = resizeWindow(e ? e.target : undefined),
            { deviceIndex } = newState,
            isCarouselExpandable = getIsCarouselExpandable(deviceIndex),
            isHeightlessLyricColumn = getIsHeightlessLyricColumn(newState)

        this.props.setIsCarouselExpandable(isCarouselExpandable)
        this.props.setIsHeightlessLyricColumn(isHeightlessLyricColumn)
        this.props.setIsHiddenNav(getIsHiddenNav(newState))
        this.props.setIsScoresTipsInMain(getIsScoresTipsInMain(newState))
        this.props.setIsTitleInAudio(getIsTitleInAudio(newState))

        newState.showOneOfTwoLyricColumns = getShowOneOfTwoLyricColumns(selectedSongIndex, deviceIndex)
        newState.showSingleBookColumn = getShowSingleBookColumn(newState)
        newState.shrinkNavIcon = getShrinkNavIcon(newState)

        /**
         * Force collapse of carousel in state if not expandable, or if
         * heightless lyric.
         */
        if (!isCarouselExpandable || isHeightlessLyricColumn) {
            this.selectCarousel(false, true)
        }

        // Deselect selected annotation if not in new shown column.
        if (newState.showOneOfTwoLyricColumns && !this.state.showOneOfTwoLyricColumns) {
            this._deselectAnnotationIfSelected({
                state: newState
            })
        }

        this.setState(newState)
    }

    _bindEventHandlers() {
        this.accessAnnotation = this.accessAnnotation.bind(this)
        this.accessDot = this.accessDot.bind(this)
        this.accessAnnotationAnchor = this.accessAnnotationAnchor.bind(this)
        this.accessNavSong = this.accessNavSong.bind(this)
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
        this.toggleDot = this.toggleDot.bind(this)
        this.selectWiki = this.selectWiki.bind(this)
        this.selectCarousel = this.selectCarousel.bind(this)
        this.selectScore = this.selectScore.bind(this)
        this.interactivateVerse = this.interactivateVerse.bind(this)
        this.interactivateVerseDirection = this.interactivateVerseDirection.bind(this)
        this.selectLyricColumn = this.selectLyricColumn.bind(this)
        this.selectLyricExpand = this.selectLyricExpand.bind(this)
        this.selectNavExpand = this.selectNavExpand.bind(this)
        this.selectBookColumn = this.selectBookColumn.bind(this)
        this.selectDotsExpand = this.selectDotsExpand.bind(this)
        this.selectTips = this.selectTips.bind(this)
        this.selectTitle = this.selectTitle.bind(this)
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
        window.p = LogHelper.logPortalLinks.bind(LogHelper, this.props)
        window.s = LogHelper.logSong.bind(LogHelper, this)
        window.v = LogHelper.logVerse.bind(LogHelper, this)
        window.t = LogHelper.logStorage.bind(LogHelper)
    }

    render() {
        return (
            <EventManager
                domState={this.state}
                isLogue={getIsLogue(this.props.selectedSongIndex)}

                // Event manager props.
                accessAnnotation={this.accessAnnotation}
                accessAnnotationAnchor={this.accessAnnotationAnchor}
                accessDot={this.accessDot}
                accessNavSong={this.accessNavSong}
                touchSliderBegin={this.touchSliderBegin}
                touchBodyMove={this.touchBodyMove}
                touchBodyEnd={this.touchBodyEnd}
                selectAnnotation={this.selectAnnotation}
                selectAudioOption={this.selectAudioOption}
                selectBookColumn={this.selectBookColumn}
                toggleDot={this.toggleDot}
                selectDotsExpand={this.selectDotsExpand}
                selectLyricColumn={this.selectLyricColumn}
                selectLyricExpand={this.selectLyricExpand}
                scrollLyricSection={this.scrollLyricSection}
                selectNavExpand={this.selectNavExpand}
                selectOverview={this.selectOverview}
                selectCarousel={this.selectCarousel}
                selectScore={this.selectScore}
                selectSong={this.selectSong}
                selectTime={this.selectTime}
                selectTitle={this.selectTitle}
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
