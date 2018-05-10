// Root component that sets all app state.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import debounce from 'debounce'
import { accessAnnotationIndex, accessAnnotationAnchorIndex, accessDotIndex, accessNavSongIndex } from '../redux/actions/access'
import { setIsPlaying, setUpdatedTimePlayed } from '../redux/actions/audio'
import { setDeviceIndex, setWindowHeight, setWindowWidth, setStageCoordinates } from '../redux/actions/device'
import { setIsScoreLoaded } from '../redux/actions/player'
import { setIsHeightlessLyricColumn, setIsHiddenCarouselNav, setIsMobileWiki, setIsScoresTipsInMain, setIsTwoRowMenu, setShowOneOfTwoLyricColumns, setShowShrunkNavIcon, setShowSingleBookColumn } from '../redux/actions/responsive'
import { setAppMounted, setIsHeavyRenderReady, setRenderReadySongIndex, setRenderReadyAnnotationIndex, setCarouselAnnotationIndex, setInteractivatedVerseIndex, setCurrentSceneIndex, setIsLyricExpanded, setIsVerseBarAbove, setIsVerseBarBelow, setIsManualScroll, setSelectedVerseElement, setShownBookColumnIndex } from '../redux/actions/session'
import { setIsSliderMoving, setIsSliderTouched, setSliderLeft, setSliderRatio, setSliderWidth, setSliderVerseElement, setSliderVerseIndex } from '../redux/actions/slider'
import { selectAccessIndex, selectAdminIndex, selectAnnotationIndex, selectAudioOptionIndex, selectCarouselNavIndex, selectDotKey, selectDotsIndex, selectLyricColumnIndex, selectOverviewIndex, selectScoreIndex, selectSongIndex, selectTimePlayed, selectTipsIndex, selectTitleIndex, selectVerseIndex, selectWikiIndex } from '../redux/actions/storage'
import EventManager from './eventManager'
import { ALL_DOT_KEYS } from '../constants/dots'
import { CONTINUE,
         PAUSE_AT_END,
         AUDIO_OPTIONS,

         SHOWN,
         HIDDEN,
         DISABLED,
         OVERVIEW_OPTIONS,
         TIPS_OPTIONS } from '../constants/options'
import { getSongsAndLoguesCount, getSongsNotLoguesCount, getSongIsLogue, getBookColumnIndex, getSongVerseTimes, getVerseIndexForTime, getSceneIndexForVerseIndex, getVerseIndexForNextScene } from '../helpers/dataHelper'
import { getValueInBitNumber } from '../helpers/bitHelper'
import { getAnnotationIndexForDirection, getAnnotationIndexForVerseIndex, getAnnotationAnchorIndexForDirection, getSliderRatioForClientX, getVerseIndexforRatio, getVerseBarStatus, shouldShowAnnotationForColumn, getIsSomethingBeingShown } from '../helpers/logicHelper'
import { resizeWindow, getShowOneOfTwoLyricColumns, getIsPhone, getIsHeightlessLyricColumn, getIsHiddenCarouselNav, getIsLyricExpandable, getIsMobileWiki, getIsScoreExpandable, getShowSingleBookColumn, getShowShrunkNavIcon, getIsScoresTipsInMain, getIsTwoRowMenu } from '../helpers/responsiveHelper'
import { getStageCoordinates } from '../helpers/stageHelper'
import LogHelper from '../helpers/logHelper'

/*************
 * CONTAINER *
 *************/

class App extends Component {

    static propTypes = {
        updatePath: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        const { selectedSongIndex,
                selectedAnnotationIndex,
                selectedVerseIndex } = props

        // Set initial access state.
        props.accessAnnotationAnchorIndex(
            getAnnotationAnchorIndexForDirection({
                selectedSongIndex,
                selectedAnnotationIndex,
                selectedDotKeys: props.selectedDotKeys,
                initialAnnotationAnchorIndex: 1
            })
        )
        props.accessNavSongIndex(selectedSongIndex)

        // Set initial audio state.
        // Start at persisted time.
        props.setUpdatedTimePlayed(props.selectedTimePlayed)

        // Set initial session state.
        props.setCurrentSceneIndex(getSceneIndexForVerseIndex(
            selectedSongIndex,
            selectedVerseIndex
        ))

        props.setShownBookColumnIndex(getBookColumnIndex(selectedSongIndex))

        // Bind this to event handlers.
        this._bindEventHandlers()

        this.state = {
            songChangeTimeoutId: null,

            // Device index is needed in state only upon mount.
            deviceIndex: -1
        }
    }

    componentWillMount() {
        // For dev purposes.
        this._assignLogFunctions()

        // This method sets initial responsive state.
        this._windowResize()

        // Then watch for any subsequent window resize.
        window.onresize = debounce(this._windowResize, 50)

        // Upon page load, should render immediately.
        this._setIsHeavyRenderReady()
    }

    componentDidMount() {
        const { selectedAnnotationIndex,
                selectedDotKeys,
                selectedLyricColumnIndex,
                selectedSongIndex,
                selectedVerseIndex } = this.props,

            // At this point, deviceIndex still hasn't come through in props.
            { deviceIndex } = this.state

        this.props.setAppMounted(true)

        this.props.accessAnnotationIndex(
            // Based on either selected annotation or selected verse.
            selectedAnnotationIndex ?
                getAnnotationIndexForDirection({
                    deviceIndex,
                    currentAnnotationIndex: selectedAnnotationIndex,
                    selectedSongIndex,
                    selectedDotKeys,
                    lyricColumnIndex: selectedLyricColumnIndex
                }) :
                getAnnotationIndexForVerseIndex({
                    deviceIndex,
                    verseIndex: selectedVerseIndex,
                    selectedSongIndex,
                    selectedDotKeys,
                    lyricColumnIndex: selectedLyricColumnIndex
                })
        )

        // As long as annotation is not selected, show overview and/or tips.
        if (!this.props.selectedAnnotationIndex) {
            this.selectOverview({
                justShowIfHidden: true
            })

            this.selectTips({
                justShowIfHidden: true
            })
        }
    }

    componentDidUpdate(prevProps) {
        this._songIndexDidChange(this.props, prevProps)
    }

    _songIndexDidChange(nextProps, prevProps) {
        const { selectedSongIndex } = nextProps

        if (!prevProps || selectedSongIndex !== prevProps.selectedSongIndex) {

            /**
             * Render is synchronous, so wait a bit after selecting new song
             * before rendering the most performance intensive components.
             */
            const songChangeTimeoutId = setTimeout(
                this._setIsHeavyRenderReady, 200
            )

            // Clear previous timeout.
            clearTimeout(this.state.songChangeTimeoutId)

            this.setState({
                songChangeTimeoutId
            })
        }
    }

    /*******************
     * EVENT LISTENERS *
     *******************/

    advanceToNextSong() {
        /**
         * When selecting next song through audio player, reset annotation and
         * verse, and scroll element into view, but do not access nav section.
         */
        const { selectedSongIndex,
                selectedAudioOptionIndex } = this.props,

            selectedAudioOption = AUDIO_OPTIONS[selectedAudioOptionIndex]

        // If option is to pause at end, stop play.
        if (selectedAudioOption === PAUSE_AT_END) {
            this.togglePlay()

        } else {

            /**
             * If option is to continue, advance to next song. Otherwise, stay
             * on same song, and start at beginning. (True evaluates to 1, false 0.)
             */
            const nextSongIndex = selectedSongIndex +
                (selectedAudioOption === CONTINUE)

            this.selectSong({
                selectedSongIndex: nextSongIndex,
                selectedVerseIndex: 0
            })
        }
    }

    resetUpdatedTimePlayed() {
        this.props.setUpdatedTimePlayed(null)
    }

    /**********
     * ACCESS *
     **********/

    toggleAccess(selectedAccessValue = (this.props.selectedAccessIndex + 1) % 2) {
        // If no argument passed, then just toggle between on and off.

        if (typeof selectedAccessValue === 'boolean') {
            selectedAccessValue = selectedAccessValue ? 1 : 0
        }

        this.props.selectAccessIndex(selectedAccessValue)
    }

    accessAnnotation(accessedAnnotationIndex) {
        this.props.accessAnnotationIndex(accessedAnnotationIndex)
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
        selectedSongIndex = this.props.selectedSongIndex,
        initialAnnotationAnchorIndex = 1,
        direction
    }) {
        const { props } = this

        // Called from arrow buttons in popup.
        if (direction) {
            selectedAnnotationIndex = getAnnotationIndexForDirection({
                deviceIndex: props.deviceIndex,
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

            props.accessAnnotationIndex(selectedAnnotationIndex)

            // App does not know new index, so pass it directly.
            props.accessAnnotationAnchorIndex(
                getAnnotationAnchorIndexForDirection({
                    selectedSongIndex,
                    selectedAnnotationIndex,
                    selectedDotKeys,
                    initialAnnotationAnchorIndex
                })
            )
        }

        props.selectAnnotationIndex(selectedAnnotationIndex)

        /**
         * There should always be a popup annotation, so that popup is not
         * suddenly empty when popup fades out.
         */

        /**
         * If selecting or changing annotation in same song, change index to
         * be rendered right away.
         */
        if (selectedAnnotationIndex &&
            selectedSongIndex === props.selectedSongIndex) {
            props.setRenderReadyAnnotationIndex(selectedAnnotationIndex)
        }

        /** This is the only place where app will change the router path based
         * on a new annotation index.
         */
        props.updatePath({
            props,
            selectedSongIndex,
            selectedAnnotationIndex
        })

        return selectedAnnotationIndex
    }

    /*********
     * AUDIO *
     *********/

    togglePlay(isPlaying = !this.props.isPlaying) {

        const { selectedSongIndex,
                canPlayThroughs } = this.props

        const
            isLogue = getSongIsLogue(this.props.selectedSongIndex),

            songCanPlayThrough = getValueInBitNumber({
                keysCount: getSongsNotLoguesCount(),
                bitNumber: canPlayThroughs,

                // If logue, select first song.
                key: isLogue ? 1 : selectedSongIndex
            })

        // Do not toggle play if player is not ready to play through.
        if (!songCanPlayThrough) {
            return false
        }

        // Select first song if play button in logue is toggled on.
        if (isLogue && isPlaying) {
            this.selectSong({
                selectedSongIndex: 1
            })
        }

        this.props.setIsPlaying(isPlaying)
        return true
    }

    selectAudioOption(selectedAudioOptionIndex =
        (this.props.selectedAudioOptionIndex + 1) % AUDIO_OPTIONS.length) {
        // If no argument passed, then just toggle amongst audio options.

        this.props.selectAudioOptionIndex(selectedAudioOptionIndex)
        return true
    }

    selectTime(selectedTimePlayed = 0, isPlayerAdvancing, autoScrollCallback) {
        const selectedVerseIndex = getVerseIndexForTime(this.props.selectedSongIndex, selectedTimePlayed)

        if (selectedVerseIndex !== null) {
            this._selectTimeAndVerse({
                selectedTimePlayed,
                selectedVerseIndex,

                // When time is being selected, always render verse immediately.
                renderVerseImmediately: true,
                isPlayerAdvancing,
                autoScrollCallback
            })
        }
    }

    /************
     * CAROUSEL *
     ************/

    selectCarouselNav(selectedCarouselNavValue =
        (this.props.selectedCarouselNavIndex + 1) % 2) {
        // If no argument passed, then just toggle between on and off.

        // We shouldn't be able to toggle carousel under these conditions.
        if (getSongIsLogue(this.props.selectedSongIndex) ||
            getIsPhone(this.props.deviceIndex) ||
            this.props.isHiddenCarouselNav) {

            return false
        }

        if (typeof selectedCarouselNavValue === 'boolean') {
            selectedCarouselNavValue = selectedCarouselNavValue ? 1 : 0
        }

        // /**
        //  * If it has heightless lyrics, carousel is always collapsed.
        //  */
        // if (this.props.isHeightlessLyricColumn) {

        //     if (!this.props.selectedCarouselNavIndex) {
        //         return false

        //     } else {
        //         selectedCarouselNavValue = 0
        //     }
        // }

        this.props.selectCarouselNavIndex(selectedCarouselNavValue)

        /**
         * New behaviour is that nav is expanded when carousel is hidden, and
         * vice versa.
         */
        this._selectCarouselToggle(selectedCarouselNavValue)
        this._selectNavExpand(selectedCarouselNavValue)

        return true
    }

    _selectCarouselToggle(selectedCarouselNavIndex) {
        if (!selectedCarouselNavIndex) {
            this.props.setCarouselAnnotationIndex(0)
        }
    }

    _selectNavExpand(selectedCarouselNavIndex) {
        // Reset accessed song index and book column upon nav expand.
        if (!selectedCarouselNavIndex) {
            this.accessNavSong(this.props.selectedSongIndex)

            this.selectBookColumn({
                resetToDefault: true
            })
        }
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

    selectDotsExpand(selectedDotsValue =
        (this.props.selectedDotsIndex + 1) % 2) {
        // If no argument passed, then just toggle between on and off.

        // Dots section cannot be changed in logue.
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return false
        }

        if (typeof selectedDotsValue === 'boolean') {
            selectedDotsValue = selectedDotsValue ? 1 : 0
        }

        /**
         * If closing dots section, get accessed annotation index because it
         * might have changed.
         */
        if (!selectedDotsValue) {
            this.props.accessAnnotationIndex(
                getAnnotationIndexForVerseIndex({
                    deviceIndex: this.props.deviceIndex,
                    verseIndex: this.props.selectedVerseIndex,
                    selectedSongIndex: this.props.selectedSongIndex,
                    selectedDotKeys: this.props.selectedDotKeys,
                    lyricColumnIndex: this.props.selectedLyricColumnIndex
                })
            )
        }

        this.props.selectDotsIndex(selectedDotsValue)
        return true
    }

    /*********
     * LYRIC *
     *********/

    selectLyricExpand(isLyricExpanded = !this.props.isLyricExpanded) {

        // We shouldn't be able to expand or collapse lyric while in logue.
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return false
        }

        /**
         * We shouldn't be able to expand lyric if it's not expandable. So
         * return false if it's already collapsed, or collapse it if not.
         */
        if (!getIsLyricExpandable(this.props.deviceIndex)) {

            if (!this.props.isLyricExpanded) {
                return false

            } else {
                isLyricExpanded = false
            }
        }

        this.props.setIsLyricExpanded(isLyricExpanded)
        return true
    }

    determineVerseBars(verseElement = this.props.selectedVerseElement) {

        // Prevent verse bar from showing upon initial load.
        if (!this.props.appMounted || !verseElement) {
            return false
        }

        const { isVerseBarAbove,
                isVerseBarBelow } = getVerseBarStatus({
                    deviceIndex: this.props.deviceIndex,
                    windowWidth: this.props.windowWidth,
                    windowHeight: this.props.windowHeight,
                    isLyricExpanded: this.props.isLyricExpanded,
                    isHeightlessLyricColumn:
                        this.props.isHeightlessLyricColumn,
                    verseElement
                })

        this.props.setIsVerseBarAbove(isVerseBarAbove)
        this.props.setIsVerseBarBelow(isVerseBarBelow)
    }

    resetVerseBars() {
        this.props.setIsVerseBarAbove(false)
        this.props.setIsVerseBarBelow(false)
    }

    selectManualScroll(isManualScroll = false) {
        this.props.setIsManualScroll(isManualScroll);
    }

    selectLyricColumn({
        selectedLyricColumnIndex = (this.props.selectedLyricColumnIndex + 1) % 2,
        selectedSongIndex = this.props.selectedSongIndex,
        annotationIndex = this.props.selectedAnnotationIndex
    }) {
        const { props } = this

        /**
         * We shouldn't be able to select lyric column if not in a song that
         * has double columns, or if in a logue. Check for new song if called
         * from portal.
         */
        if (!(getShowOneOfTwoLyricColumns(selectedSongIndex, props.deviceIndex)) || getSongIsLogue(selectedSongIndex)) {
            return false
        }

        // Deselect selected annotation if not in new selected column.
        this._deselectAnnotationIfSelected({
            selectedSongIndex,
            annotationIndex,
            selectedLyricColumnIndex
        })

        props.selectLyricColumnIndex(selectedLyricColumnIndex)

        // Switching lyric column might change accessed annotation index.
        this.props.accessAnnotationIndex(
            getAnnotationIndexForVerseIndex({
                deviceIndex: props.deviceIndex,
                verseIndex: props.selectedVerseIndex,
                selectedSongIndex,
                selectedDotKeys: props.selectedDotKeys,
                lyricColumnIndex: selectedLyricColumnIndex
            })
        )
        return true
    }

    /*******
     * NAV *
     *******/

    selectBookColumn({
        shownBookColumnIndex = (this.props.shownBookColumnIndex + 1) % 2,
        resetToDefault,
        selectedCarouselNavIndex = this.props.selectedCarouselNavIndex,
        selectedSongIndex = this.props.selectedSongIndex
    }) {
        // Either toggle or reset. Book column index is 1-based.

        /**
         * We shouldn't be able to select book column if it's not a single
         * column, or if nav is collapsed, unless we are resetting to default.
         */
        if (!resetToDefault && !(this.props.showSingleBookColumn && !selectedCarouselNavIndex)) {
            return false
        }

        // Reset to default upon song change or nav expand.
        if (resetToDefault) {
            shownBookColumnIndex = getBookColumnIndex(selectedSongIndex)
        }

        this.props.setShownBookColumnIndex(shownBookColumnIndex)
    }

    selectSong({
        selectedSongIndex = 0,
        direction,
        selectedAnnotationIndex = 0,
        selectedVerseIndex = 0,
        selectedWikiIndex = 0,
        destinationPortalIndex
    }) {

        const { props } = this

        // Called from audio section's previous or next buttons.
        if (direction) {
            selectedSongIndex = props.selectedSongIndex + direction

            if (selectedSongIndex < 0 || selectedSongIndex >= getSongsAndLoguesCount()) {
                return false
            }
        }

        const isLogue = getSongIsLogue(selectedSongIndex)

        // If not selected from portal, show overview if hidden.
        if (!selectedAnnotationIndex) {
            this.selectOverview({
                justShowIfHidden: true
            })

            this.selectTips({
                justShowIfHidden: true
            })

            /**
             * If overview or tips are being shown, collapse lyric column and
             * hide dots section.
             */
            if (OVERVIEW_OPTIONS[this.props.selectedOverviewIndex] !== DISABLED ||
                TIPS_OPTIONS[this.props.selectedTipsIndex] !== DISABLED) {
                this.selectDotsExpand(false)
                this.selectLyricExpand(false)
            }
        }

        this.selectAnnotation({
            selectedAnnotationIndex,
            selectedSongIndex,

            // If from portal, access destination portal index.
            initialAnnotationAnchorIndex: destinationPortalIndex
        })

        this.selectVerse({
            selectedVerseIndex,
            selectedSongIndex
        })

        // TODO: This prevents app from breaking when wiki is selected and song is changed. But this might be handled more strategically.
        this.selectWiki(selectedWikiIndex)

        this.interactivateVerse()

        if (isLogue) {
            this.props.setIsPlaying(false)
            this.selectScore(false)
        }

        // Nav will update book column right away.
        this.selectBookColumn({
            resetToDefault: true,
            selectedSongIndex
        })

        /**
         * Get new accessed annotation index by starting from first and going
         * forward. If not called from portal, it should always be the title
         * annotation unless deselected by dots.
         */
        this.props.accessAnnotationIndex(
            selectedAnnotationIndex ||
            getAnnotationIndexForDirection({
                deviceIndex: this.props.deviceIndex,
                currentAnnotationIndex: 1,
                selectedSongIndex,
                selectedDotKeys: props.selectedDotKeys,
                lyricColumnIndex: props.selectedLyricColumnIndex
            })
        )

        this.accessNavSong(selectedSongIndex)
        props.selectSongIndex(selectedSongIndex)

        // If not selecting a new song, no need to render again.
        if (selectedSongIndex === this.props.selectedSongIndex) {
            this._setIsHeavyRenderReady(
                selectedSongIndex,
                selectedAnnotationIndex
            )

        } else {
            props.setIsHeavyRenderReady(false)
            props.setIsScoreLoaded(false)
        }

        // Reset verse bars.
        this.props.setIsVerseBarAbove(false)
        this.props.setIsVerseBarBelow(false)

        return true
    }

    _setIsHeavyRenderReady(
        selectedSongIndex = this.props.selectedSongIndex,
        selectedAnnotationIndex = this.props.selectedAnnotationIndex,
        selectedVerseIndex = this.props.selectedVerseIndex
    ) {

        this.props.setIsHeavyRenderReady(
            true
        )

        this.props.setRenderReadySongIndex(
            selectedSongIndex
        )

        this.props.setRenderReadyAnnotationIndex(
            selectedAnnotationIndex
        )

        if (this.props.appMounted) {

            // Handle doublespeaker columns only when lyrics are ready to render.
            this.props.setShowOneOfTwoLyricColumns(
                getShowOneOfTwoLyricColumns(selectedSongIndex, this.props.deviceIndex)
            )
        }

        this.props.setCurrentSceneIndex(getSceneIndexForVerseIndex(
            selectedSongIndex,
            selectedVerseIndex
        ))
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
        if (getSongIsLogue(this.props.selectedSongIndex)) {
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
            // If called when something else is shown, show right away.
            if (getIsSomethingBeingShown({
                props: this.props,
                calledByOverview: true
            })) {
                selectedOverviewIndex = 0

            } else {
                do {
                    // If it's a keydown event, cycle through all three options.
                    selectedOverviewIndex = (selectedOverviewIndex + 1) % OVERVIEW_OPTIONS.length

                    // If it's a click event, skip hidden.
                } while (clickToggle && OVERVIEW_OPTIONS[selectedOverviewIndex] === HIDDEN)
            }
        }

        // Overview options are shown, disabled, hidden.
        if (selectedOverviewIndex !== this.props.selectedOverviewIndex) {
            this.props.selectOverviewIndex(selectedOverviewIndex)
        }
        return true
    }

    /*********
     * SCENE *
     *********/

    selectScene(direction) {
        const { selectedSongIndex, selectedVerseIndex } = this.props

        const nextVerseIndex = getVerseIndexForNextScene(
            selectedSongIndex, selectedVerseIndex, direction
        )

        if (nextVerseIndex > -1) {
            this.selectVerse({
                selectedVerseIndex: nextVerseIndex
            })
        }
    }

    /*********
     * SCORE *
     *********/

    selectScore(selectedScoreValue =
        (this.props.selectedScoreIndex + 1) % 2) {
        // If no argument passed, then just toggle between on and off.

        // We shouldn't be able to toggle score while in logue.
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return false
        }

        if (typeof selectedScoreValue === 'boolean') {
            selectedScoreValue = selectedScoreValue ? 1 : 0
        }

        /**
         * We shouldn't be able to expand score if it's phone width. So return
         * false if it's already collapsed, or collapse it if not.
         */
        if (!getIsScoreExpandable(this.props.deviceIndex)) {
            if (!this.props.selectedScoreIndex) {
                return false

            } else {
                selectedScoreValue = 0
            }
        }

        this.props.selectScoreIndex(selectedScoreValue)
        return true
    }

    /********
     * TIPS *
     ********/

    selectTips({
        clickToggle,
        justHideIfShown,
        justShowIfHidden
    }) {
        // Duplicated from selectOverview.

        // We shouldn't be able to change overview it's a logue.
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return false
        }

        let selectedTipsIndex = this.props.selectedTipsIndex

        // If called from body click, hide if shown.
        if (justHideIfShown) {
            if (TIPS_OPTIONS[selectedTipsIndex] === SHOWN) {
                selectedTipsIndex = 2 // Hidden.
            }

        // If called from song select, show if hidden.
        } else if (justShowIfHidden) {
            if (TIPS_OPTIONS[selectedTipsIndex] === HIDDEN) {
                selectedTipsIndex = 0 // Shown.
            }

        } else {
            // If called when something else is shown, show right away.
            if (getIsSomethingBeingShown({
                props: this.props,
                calledByTips: true
            })) {
                selectedTipsIndex = 0

            } else {
                do {
                    // If it's a keydown event, cycle through all three options.
                    selectedTipsIndex = (selectedTipsIndex + 1) % TIPS_OPTIONS.length

                    // If it's a click event, skip hidden.
                } while (clickToggle && TIPS_OPTIONS[selectedTipsIndex] === HIDDEN)
            }
        }

        // Overview options are shown, disabled, hidden.
        if (selectedTipsIndex !== this.props.selectedTipsIndex) {
            this.props.selectTipsIndex(selectedTipsIndex)
        }
        return true
    }

    /*********
     * TITLE *
     *********/

    selectTitle(selectedTitleValue =
        (this.props.selectedTitleIndex + 1) % 2) {
        // If no argument passed, then just toggle between on and off.

        if (typeof selectedTitleValue === 'boolean') {
            selectedTitleValue = selectedTitleValue ? 1 : 0
        }

        this.props.selectTitleIndex(selectedTitleValue)
        return true
    }

    /*********
     * TOUCH *
     *********/

    touchSliderBegin(clientRect, clientX) {
        const sliderLeft = clientRect.left,
            sliderWidth = clientRect.width,
            sliderRatio = getSliderRatioForClientX(clientX, sliderLeft, sliderWidth),

            sliderVerseIndex = getVerseIndexforRatio(
                this.props.selectedSongIndex,
                sliderRatio,
                sliderWidth
            )

        this.props.setIsSliderTouched(true)
        this.props.setSliderLeft(sliderLeft)
        this.props.setSliderRatio(sliderRatio)
        this.props.setSliderWidth(sliderWidth)
        this.props.setSliderVerseIndex(sliderVerseIndex)

        /**
         * If the move doesn't happen for a while, we recognise that it is
         * moving anyway for styling purposes.
         */
        setTimeout(() => {
            if (this.props.isSliderTouched && !this.props.isSliderMoving) {
                this.props.setIsSliderMoving(true)
            }
        }, 125)
    }

    touchBodyMove(clientX) {
        if (this.props.isSliderTouched) {
            const { sliderLeft,
                    sliderWidth } = this.props,
                sliderRatio = getSliderRatioForClientX(clientX, sliderLeft, sliderWidth),

                sliderVerseIndex = getVerseIndexforRatio(
                    this.props.selectedSongIndex,
                    sliderRatio,
                    sliderWidth
                )

            this.props.setSliderRatio(sliderRatio)
            this.props.setSliderVerseIndex(sliderVerseIndex)
            this.props.setIsSliderMoving(true)
        }
    }

    touchBodyEnd() {
        if (this.props.isSliderTouched) {

            // Selected verse is wherever touch ended on slider.
            const selectedVerseIndex = this.props.sliderVerseIndex,

                // We will start at the beginning of the selected verse.
                songVerseTimes =
                    getSongVerseTimes(this.props.selectedSongIndex),
                selectedTimePlayed = songVerseTimes[selectedVerseIndex]

            this.selectTime(selectedTimePlayed)

            // Reset slider state.
            this.props.setIsSliderMoving(false)
            this.props.setIsSliderTouched(false)
            this.props.setSliderLeft(0)
            this.props.setSliderRatio(0)
            this.props.setSliderWidth(0)
            this.props.setSliderVerseIndex(-1)

            this.selectOrSlideVerseElement(
                /**
                 * If slider was moved, there will be a slider verse element.
                 * If it was just tapped, there won't be, so fall back to the
                 * selected verse element.
                 */
                this.props.sliderVerseElement ||
                    this.props.selectedVerseElement,
                true
            )
        }
    }

    /*********
     * VERSE *
     *********/

    interactivateVerse(interactivatedVerseIndex = -1) {
        this.props.setInteractivatedVerseIndex(interactivatedVerseIndex)
    }

    interactivateVerseDirection(direction) {
        const { selectedSongIndex } = this.props,
            songVerseTimes = getSongVerseTimes(selectedSongIndex),
            songVerseTimesCount = songVerseTimes.length

        let { interactivatedVerseIndex } = this.props

        // Ensure modulo.
        if (direction === -1) {
            direction = songVerseTimesCount - 1
        }

        // We are turning on interactivation, so start from selected verse.
        if (interactivatedVerseIndex === -1) {
            interactivatedVerseIndex = (this.props.selectedVerseIndex + direction) % songVerseTimesCount

        // We already have an interactivated verse.
        } else {
            interactivatedVerseIndex = (interactivatedVerseIndex + direction) % songVerseTimesCount
        }

        this.props.setInteractivatedVerseIndex(interactivatedVerseIndex)
        return interactivatedVerseIndex
    }

    setVerseElement(verseElement) {
        this.props.setSelectedVerseElement(verseElement)
    }

    selectOrSlideVerseElement(
        verseElement,
        isTouchBodyEnd
    ) {

        const doSetSlider = this.props.isSliderMoving && !isTouchBodyEnd,

            propsVerseElement =
                doSetSlider ?
                this.props.sliderVerseElement : this.props.selectedVerseElement

        if (verseElement !== propsVerseElement) {

            this.determineVerseBars(verseElement)

            if (doSetSlider) {
                /**
                 * Slider verse element overrides selected verse element, as
                 * long as the slider is touched.
                 */
                this.props.setSliderVerseElement(verseElement)

            } else {
                // App has a reference to the selected verse.
                this.props.setSelectedVerseElement(verseElement)
            }

            if (isTouchBodyEnd) {
                this.props.setSliderVerseElement(null)
            }
        }
    }

    selectVerse({
        selectedVerseIndex = 0,
        selectedSongIndex = this.props.selectedSongIndex
    }) {
        const songVerseTimes = getSongVerseTimes(selectedSongIndex),
            selectedTimePlayed = songVerseTimes[selectedVerseIndex],

            /**
             * If selecting or changing verse in same song, change index to be
             * rendered right away.
             */
            renderVerseImmediately =
                selectedSongIndex === this.props.selectedSongIndex

        this._selectTimeAndVerse({
            selectedTimePlayed,
            selectedSongIndex,
            selectedVerseIndex,
            renderVerseImmediately
        })
    }

    /********
     * WIKI *
     ********/

    selectWiki(selectedWikiIndex = 0, carouselAnnotationIndex = 0) {
        this.props.selectWikiIndex(selectedWikiIndex)
        this.props.setCarouselAnnotationIndex(carouselAnnotationIndex)
    }

    /***********
     * HELPERS *
     ***********/

    _selectTimeAndVerse({
        selectedTimePlayed,
        selectedSongIndex = this.props.selectedSongIndex,
        selectedVerseIndex,
        renderVerseImmediately,
        isPlayerAdvancing,
        autoScrollCallback
    }) {

        const { props } = this

        /** This is the only place where app will change the router path based
         * on a new song or verse index.
         */
        props.updatePath({
            props,
            selectedSongIndex,
            selectedVerseIndex
        })

        /**
         * Since time and verse are in sync, this helper method can be called
         * by either one.
         */

        props.selectVerseIndex(selectedVerseIndex)
        props.selectTimePlayed(selectedTimePlayed)

        /**
         * If called by player, and autoScroll is on, then scroll to selected
         * verse.
         */
        if (!this.props.isManualScroll && autoScrollCallback) {
            autoScrollCallback(selectedVerseIndex)
        }

        /**
         * If time was not changed by the audio element advancing, tell player
         * to update audio element's time.
         */
        if (!isPlayerAdvancing) {
            props.setUpdatedTimePlayed(selectedTimePlayed)
        }

        // Render verse and scene immediately.
        if (renderVerseImmediately) {

            props.setCurrentSceneIndex(getSceneIndexForVerseIndex(
                props.selectedSongIndex,
                selectedVerseIndex
            ))
        }
    }

    _deselectAnnotationIfSelected({
        selectedSongIndex = this.props.selectedSongIndex,
        selectedLyricColumnIndex = this.props.selectedLyricColumnIndex,
        annotationIndex = this.props.selectedAnnotationIndex,
        deviceIndex = this.props.deviceIndex
    }) {
        if (annotationIndex) {
            const showAnnotationForColumn = shouldShowAnnotationForColumn({
                    selectedSongIndex,
                    selectedLyricColumnIndex,
                    annotationIndex,
                    deviceIndex
                })

            if (!showAnnotationForColumn) {
                this.selectAnnotation({})
            }
        }
    }

    _windowResize(e) {
        const { selectedSongIndex } = this.props,
            { deviceIndex,
              windowHeight,
              windowWidth } = resizeWindow(e ? e.target : undefined),

            isLyricExpandable = getIsLyricExpandable(deviceIndex),
            isHeightlessLyricColumn = getIsHeightlessLyricColumn({ deviceIndex, windowHeight, windowWidth }),
            showOneOfTwoLyricColumns = getShowOneOfTwoLyricColumns(
                selectedSongIndex,
                deviceIndex
            )

        /**
         * Deselect selected annotation if not in new shown column. Do it here,
         * before we tell Redux to update the prop.
         */
        if (showOneOfTwoLyricColumns && !this.props.showOneOfTwoLyricColumns) {
            this._deselectAnnotationIfSelected({
                deviceIndex
            })
        }

        this.setState({ deviceIndex })
        this.props.setDeviceIndex(deviceIndex)
        this.props.setWindowHeight(windowHeight)
        this.props.setWindowWidth(windowWidth)
        this.props.setStageCoordinates(getStageCoordinates({
            deviceIndex,
            windowWidth,
            windowHeight,
            isHeightlessLyricColumn
        }))

        this.props.setIsHeightlessLyricColumn(isHeightlessLyricColumn)
        this.props.setShowOneOfTwoLyricColumns(showOneOfTwoLyricColumns)

        this.props.setIsHiddenCarouselNav(getIsHiddenCarouselNav({
            deviceIndex, windowHeight, windowWidth
        }))
        this.props.setIsMobileWiki(getIsMobileWiki({ deviceIndex, windowWidth }))
        this.props.setIsScoresTipsInMain(getIsScoresTipsInMain({ deviceIndex, windowWidth }))
        this.props.setIsTwoRowMenu(getIsTwoRowMenu({ deviceIndex, windowWidth }))
        this.props.setShowSingleBookColumn(getShowSingleBookColumn({ deviceIndex, windowWidth }))
        this.props.setShowShrunkNavIcon(getShowShrunkNavIcon({ deviceIndex, windowWidth }))

        /**
         * Force collapse of lyric in state if not expandable, or if heightless
         * lyric.
         */
         if (!isLyricExpandable || isHeightlessLyricColumn) {
             this.selectLyricExpand(false)
         }

        // Force collapse of score in state if not expandable.
        if (!getIsScoreExpandable(deviceIndex)) {
            this.selectScore(false)
        }
    }

    _bindEventHandlers() {
        this._songIndexDidChange = this._songIndexDidChange.bind(this)
        this._setIsHeavyRenderReady = this._setIsHeavyRenderReady.bind(this)
        this.accessAnnotation = this.accessAnnotation.bind(this)
        this.accessDot = this.accessDot.bind(this)
        this.accessAnnotationAnchor = this.accessAnnotationAnchor.bind(this)
        this.accessNavSong = this.accessNavSong.bind(this)
        this.toggleAccess = this.toggleAccess.bind(this)
        this.toggleAdmin = this.toggleAdmin.bind(this)
        this.togglePlay = this.togglePlay.bind(this)
        this.selectScene = this.selectScene.bind(this)
        this.selectSong = this.selectSong.bind(this)
        this.selectOverview = this.selectOverview.bind(this)
        this.selectAudioOption = this.selectAudioOption.bind(this)
        this.selectAnnotation = this.selectAnnotation.bind(this)
        this.selectVerse = this.selectVerse.bind(this)
        this.selectTime = this.selectTime.bind(this)
        this.resetUpdatedTimePlayed = this.resetUpdatedTimePlayed.bind(this)
        this.toggleDot = this.toggleDot.bind(this)
        this.selectWiki = this.selectWiki.bind(this)
        this.selectCarouselNav = this.selectCarouselNav.bind(this)
        this.selectScore = this.selectScore.bind(this)
        this.interactivateVerse = this.interactivateVerse.bind(this)
        this.interactivateVerseDirection = this.interactivateVerseDirection.bind(this)
        this.selectLyricColumn = this.selectLyricColumn.bind(this)
        this.selectLyricExpand = this.selectLyricExpand.bind(this)
        this.selectBookColumn = this.selectBookColumn.bind(this)
        this.selectDotsExpand = this.selectDotsExpand.bind(this)
        this.selectTips = this.selectTips.bind(this)
        this.selectTitle = this.selectTitle.bind(this)
        this.advanceToNextSong = this.advanceToNextSong.bind(this)
        this.setVerseElement = this.setVerseElement.bind(this)
        this.selectOrSlideVerseElement = this.selectOrSlideVerseElement.bind(this)
        this.determineVerseBars = this.determineVerseBars.bind(this)
        this.resetVerseBars = this.resetVerseBars.bind(this)
        this.selectManualScroll = this.selectManualScroll.bind(this)
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
                determineVerseBars={this.determineVerseBars}
                resetVerseBars={this.resetVerseBars}
                selectManualScroll={this.selectManualScroll}
                selectOverview={this.selectOverview}
                selectCarouselNav={this.selectCarouselNav}
                selectScore={this.selectScore}
                selectScene={this.selectScene}
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
                setVerseElement={this.setVerseElement}
                selectOrSlideVerseElement={this.selectOrSlideVerseElement}

                advanceToNextSong={this.advanceToNextSong}
                resetUpdatedTimePlayed={this.resetUpdatedTimePlayed}
            />
        )
    }
}

/*********
 * STORE *
 *********/

const passReduxStateToProps = (state) => (state)

// Bind Redux action creators to component props.
const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        selectAccessIndex, selectAdminIndex, selectAnnotationIndex, selectAudioOptionIndex, selectCarouselNavIndex, selectDotKey, selectDotsIndex, selectLyricColumnIndex, selectOverviewIndex, selectScoreIndex, selectSongIndex, selectTimePlayed, selectTipsIndex, selectTitleIndex, selectVerseIndex, selectWikiIndex, accessAnnotationIndex, accessAnnotationAnchorIndex, accessDotIndex, accessNavSongIndex, setIsHeightlessLyricColumn, setIsHiddenCarouselNav, setIsMobileWiki, setIsScoresTipsInMain, setIsTwoRowMenu, setShowOneOfTwoLyricColumns, setShowShrunkNavIcon, setShowSingleBookColumn, setAppMounted, setIsScoreLoaded, setIsHeavyRenderReady, setRenderReadySongIndex, setRenderReadyAnnotationIndex, setCarouselAnnotationIndex, setInteractivatedVerseIndex, setCurrentSceneIndex, setIsLyricExpanded, setIsVerseBarAbove, setIsVerseBarBelow, setIsManualScroll, setSelectedVerseElement, setShownBookColumnIndex, setDeviceIndex, setWindowHeight, setWindowWidth, setStageCoordinates, setIsPlaying, setUpdatedTimePlayed, setIsSliderMoving, setIsSliderTouched, setSliderLeft, setSliderRatio, setSliderWidth, setSliderVerseElement, setSliderVerseIndex
    }, dispatch)
)

export default connect(passReduxStateToProps, bindDispatchToProps)(App)
