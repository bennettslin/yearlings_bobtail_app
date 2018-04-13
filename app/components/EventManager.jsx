// Component that handles all user events.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import scrollIntoView from 'scroll-into-view'
import AccessManager from './AccessManager'

import { getSongIsLogue, getAnnotationObject } from '../helpers/dataHelper'
import { intersects } from '../helpers/dotHelper'
import { getIsValidScrollingTargetCallback } from '../helpers/domHelper'
import { getCarouselLeftAlign, getCarouselTopAlign } from '../helpers/responsiveHelper'

import { REFERENCE } from '../constants/dots'
import { DISABLED,
         OVERVIEW_OPTIONS } from '../constants/options'

import { CAROUSEL_SCROLL,
         LYRIC_ANNOTATION_SCROLL,
         VERSE_SCROLL,
         SCROLL_CLASSES } from '../constants/dom'

class EventManager extends Component {

    constructor(props) {
        super(props)

        this.focusBody = this.focusBody.bind(this)

        this.handleAnnotationAccess = this.handleAnnotationAccess.bind(this)
        this.handleDotAccess = this.handleDotAccess.bind(this)
        this.handleAnnotationAnchorAccess = this.handleAnnotationAnchorAccess.bind(this)
        this.handleSongAccess = this.handleSongAccess.bind(this)
        this.handleVerseDirectionAccess = this.handleVerseDirectionAccess.bind(this)

        this.handleBodyClick = this.handleBodyClick.bind(this)
        this.handleBodyTouchMove = this.handleBodyTouchMove.bind(this)
        this.handleBodyTouchEnd = this.handleBodyTouchEnd.bind(this)
        this.handlePopupContainerClick = this.handlePopupContainerClick.bind(this)
        this.handleVerseElementSelect = this.handleVerseElementSelect.bind(this)
        this.handleVerseElementSlide = this.handleVerseElementSlide.bind(this)
        this.handleAccessToggle = this.handleAccessToggle.bind(this)
        this.handleAdminToggle = this.handleAdminToggle.bind(this)
        this.handleAnnotationPrevious = this.handleAnnotationPrevious.bind(this)
        this.handleAnnotationNext = this.handleAnnotationNext.bind(this)
        this.handleAnnotationWikiSelect = this.handleAnnotationWikiSelect.bind(this)
        this.handleAnnotationPortalSelect = this.handleAnnotationPortalSelect.bind(this)
        this.handleAudioPlay = this.handleAudioPlay.bind(this)
        this.handleAudioPreviousSong = this.handleAudioPreviousSong.bind(this)
        this.handleAudioNextSong = this.handleAudioNextSong.bind(this)
        this.handleAudioOptionsToggle = this.handleAudioOptionsToggle.bind(this)
        this.handleSliderTouchBegin = this.handleSliderTouchBegin.bind(this)

        this.handlePlayerTimeChange = this.handlePlayerTimeChange.bind(this)
        this.handlePlayerNextSong = this.handlePlayerNextSong.bind(this)
        this.handlePlayerTimeReset = this.handlePlayerTimeReset.bind(this)

        this.handleDotToggle = this.handleDotToggle.bind(this)
        this.handleDotsSectionToggle = this.handleDotsSectionToggle.bind(this)
        this.handleLyricSectionExpand = this.handleLyricSectionExpand.bind(this)
        this.handleLyricColumnSelect = this.handleLyricColumnSelect.bind(this)
        this.handleLyricAnnotationSelect = this.handleLyricAnnotationSelect.bind(this)
        this.handleLyricPlay = this.handleLyricPlay.bind(this)
        this.handleLyricVerseSelect = this.handleLyricVerseSelect.bind(this)
        this.handleLyricSectionScroll = this.handleLyricSectionScroll.bind(this)
        this.handleNavSongSelect = this.handleNavSongSelect.bind(this)
        this.handleNavBookSelect = this.handleNavBookSelect.bind(this)
        this.handleOverviewToggle = this.handleOverviewToggle.bind(this)
        this.handlePopupFocus = this.handlePopupFocus.bind(this)
        this.handleCarouselNavToggle = this.handleCarouselNavToggle.bind(this)
        this.handleSceneDirection = this.handleSceneDirection.bind(this)
        this.handleScoreToggle = this.handleScoreToggle.bind(this)
        this.handleTipsToggle = this.handleTipsToggle.bind(this)
        this.handleTitleToggle = this.handleTitleToggle.bind(this)
        this.handleVerseBarSelect = this.handleVerseBarSelect.bind(this)
        this.handleVerseBarWheel = this.handleVerseBarWheel.bind(this)
        this.handleVerseInteractivate = this.handleVerseInteractivate.bind(this)
        this.handleWikiToggle = this.handleWikiToggle.bind(this)
        this.handleScrollAfterLyricRerender = this.handleScrollAfterLyricRerender.bind(this)
        this.stopPropagation = this.stopPropagation.bind(this)
    }

    componentDidMount() {
        // Focus lyric section when app is mounted.
        this.focusBody()
    }

    componentWillReceiveProps(nextProps) {

        // If annotation is selected or accessed in carousel, scroll to it.
        if (nextProps.appMounted && !this.props.appMounted) {
            const { selectedCarouselNavIndex,
                    selectedAnnotationIndex,
                    accessedAnnotationIndex } = nextProps,

                scrollToAnnotationIndex = selectedAnnotationIndex || accessedAnnotationIndex

            if (selectedCarouselNavIndex && scrollToAnnotationIndex) {
                // Animation is slightly less janky with setTimeout.
                setTimeout(() => {
                    this._scrollElementIntoView(CAROUSEL_SCROLL, scrollToAnnotationIndex)
                }, 0)
            }
        }
    }

    /**********
     * ACCESS *
     **********/

    handleAccessToggle(selectedAccessIndex) {
        this.props.toggleAccess(selectedAccessIndex)
    }

    handleAnnotationAccess({
        accessedAnnotationIndex,
        doScroll
    }) {
        const annotationAccessed = this.props.accessAnnotation(accessedAnnotationIndex)
        if (annotationAccessed && doScroll) {
            this._scrollElementIntoView(LYRIC_ANNOTATION_SCROLL, accessedAnnotationIndex)

            if (this.props.selectedCarouselNavIndex) {
                this._scrollElementIntoView(CAROUSEL_SCROLL, accessedAnnotationIndex)
            }
        }
    }

    handleDotAccess(accessedDotIndex) {
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return false
        }

        this.props.accessDot(accessedDotIndex)
        return true
    }

    handleAnnotationAnchorAccess(accessedAnnotationAnchorIndex) {
        this.props.accessAnnotationAnchor(accessedAnnotationAnchorIndex)
    }

    handleSongAccess(accessedNavSongIndex) {
        this.props.accessNavSong(accessedNavSongIndex)
    }

    handleVerseDirectionAccess(direction) {
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return false
        }

        const interactivatedVerseIndex =
            this.props.interactivateVerseDirection(direction)

        this._closeSections({
            exemptCarousel: true,
            exemptDots: true,
            exemptOverview: true,
            exemptTips: true,
            exemptInteractivatedVerse: true,
            exemptLyric: true,
            leaveOpenPopups: true
        })
        this._scrollElementIntoView(VERSE_SCROLL, interactivatedVerseIndex)
        return true
    }

    /*********
     * ADMIN *
     *********/

    handleAdminToggle(e) {
        this.stopPropagation(e)
        this.props.toggleAdmin()
        return true
    }

    /**************
     * ANNOTATION *
     **************/

    handleAnnotationWikiSelect(e, selectedWikiIndex, carouselAnnotationIndex) {
        const isWikiEnabled = this.props.selectedDotKeys[REFERENCE]

        // Don't register click if reference dot is deselected.
        if (!isWikiEnabled) {
            return false
        }

        this.stopPropagation(e)
        this.props.selectWiki(selectedWikiIndex, carouselAnnotationIndex)
        return true
    }

    handleAnnotationPortalSelect(e, selectedSongIndex, selectedAnnotationIndex, selectedVerseIndex, selectedLyricColumnIndex, destinationPortalIndex) {

        const songSelected = this.props.selectSong({
            selectedSongIndex,
            selectedAnnotationIndex,
            selectedVerseIndex,
            destinationPortalIndex
        })

        if (songSelected) {
            this.stopPropagation(e)

            if (!isNaN(selectedLyricColumnIndex)) {
                this.props.selectLyricColumn({
                    selectedLyricColumnIndex,
                    selectedSongIndex,
                    annotationIndex: selectedAnnotationIndex
                })
            }
        }

        return songSelected
    }

    handleAnnotationPrevious(e) {
        this._handleAccessedAnnotationSelect(e, -1)
    }

    handleAnnotationNext(e) {
        this._handleAccessedAnnotationSelect(e, 1)
    }

    _handleAccessedAnnotationSelect(e, direction) {
        this.stopPropagation(e)
        const selectedAnnotationIndex = this.props.selectAnnotation({
            direction
        })
        this._scrollElementIntoView(LYRIC_ANNOTATION_SCROLL, selectedAnnotationIndex)
        if (this.props.selectedCarouselNavIndex) {
            this._scrollElementIntoView(CAROUSEL_SCROLL, selectedAnnotationIndex)
        }
    }

    /*********
     * AUDIO *
     *********/

    handleAudioPlay(e) {
        const playToggled = this.props.togglePlay()
        if (playToggled) {
            this.stopPropagation(e)
        }
        return playToggled
    }

    handleAudioPreviousSong(e) {
        const songSelected = this.props.selectSong({
            direction: -1
        })
        this._closeDotsIfOverviewWillShow()
        if (songSelected) {
            this.stopPropagation(e)
        }
        return songSelected
    }

    handleAudioNextSong(e) {
        const songSelected = this.props.selectSong({
            direction: 1
        })
        this._closeDotsIfOverviewWillShow()
        if (songSelected) {
            this.stopPropagation(e)
        }
        return songSelected
    }

    handleAudioOptionsToggle(e) {
        const optionSelected = this.props.selectAudioOption()
        if (optionSelected) {
            this.stopPropagation(e)
        }
        return optionSelected
    }

    /****************
     * AUDIO PLAYER *
     ****************/

    handlePlayerTimeChange(time) {
        this.props.selectTime(time, true)
    }

    handlePlayerNextSong(e) {
        this.props.advanceToNextSong(e)
    }

    handlePlayerTimeReset(e) {
        this.props.resetUpdatedTimePlayed(e)
    }

    /************
     * CAROUSEL *
     ************/

    handleCarouselNavToggle(e, selectedCarouselNavIndex) {
        this.stopPropagation(e)

        const presentCarouselIndex = this.props.selectedCarouselNavIndex,
            carouselSelected = this.props.selectCarouselNav(selectedCarouselNavIndex)

        // Scroll only when expanding carousel.
        if (carouselSelected && !presentCarouselIndex) {
            const { selectedAnnotationIndex } = this.props,
                annotationIndex = selectedAnnotationIndex ? selectedAnnotationIndex : this.props.accessedAnnotationIndex
            this._scrollElementIntoView(CAROUSEL_SCROLL, annotationIndex)
        }

        this._closeSections({
            exemptAnnotation: true,
            exemptCarousel: true,
            exemptDots: true,
            exemptInteractivatedVerse: true,
            exemptOverview: true,
            exemptTips: true,
            continuePastClosingPopups: true
        })

        return carouselSelected
    }

    /*******
     * DOT *
     *******/

    handleDotToggle(e, dotIndex) {
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return false
        }

        this.stopPropagation(e)
        this.props.toggleDot(dotIndex)
        return true
    }

    /********
     * DOTS *
     ********/

    handleDotsSectionToggle(e) {
        const dotsToggled = this.props.selectDotsExpand()
        if (dotsToggled) {
            this.stopPropagation(e)
            this._closeSections({
                exemptCarousel: true,
                exemptDots: true,
                continuePastClosingPopups: true
            })
        }
        return dotsToggled
    }

    /*********
     * LYRIC *
     *********/

    handleLyricSectionExpand(e) {
        const lyricsToggled = this.props.selectLyricExpand()
        if (lyricsToggled) {
            this.stopPropagation(e)
            this._closeSections({
                exemptAnnotation: true,
                exemptCarousel: true,
                exemptLyric: true,
                continuePastClosingPopups: true
            })
        }
        return lyricsToggled
    }

    handleLyricSectionScroll() {
        this.props.scrollLyricSection()
    }

    handleLyricColumnSelect(e) {
        const columnSelected = this.props.selectLyricColumn({})
        if (columnSelected) {
            this.stopPropagation(e)
        }
        return columnSelected
    }

    /**********
     * LYRICS *
     **********/

    handleLyricPlay() {
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return false
        }

        this.props.togglePlay()
        return true
    }

    handleLyricVerseSelect(e, selectedVerseIndex) {
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return false
        }

        this.stopPropagation(e)
        this.props.selectVerse({
            selectedVerseIndex
        })

        // Deinteractivate after selecting.
        this.props.interactivateVerse()

        return true
    }

    handleLyricAnnotationSelect(e, selectedAnnotationIndex, fromCarousel) {
        /**
         * FIXME: This check is only necessary when clicking an annotation, to
         * ensure that it is not shown as text. Maybe bypass if done through
         * access?
         */
        // Do nothing if no dots are selected, as no annotation can be selected.
        if (selectedAnnotationIndex < 0) {
            return false
        }

        // If selecting an annotation, make sure that its dots intersect.
        if (selectedAnnotationIndex) {
            const annotation = getAnnotationObject(this.props.selectedSongIndex, selectedAnnotationIndex)

            if (!intersects(annotation.dotKeys, this.props.selectedDotKeys)) {
                return false
            }
        }

        this.stopPropagation(e)
        this._closeSections({
            exemptAnnotation: true,
            exemptCarousel: true,
            exemptLyric: true
        })
        this.props.selectAnnotation({
            selectedAnnotationIndex
        })

        // Scroll lyric column only if selecting from carousel.
        if (fromCarousel) {
            this._scrollElementIntoView(LYRIC_ANNOTATION_SCROLL, selectedAnnotationIndex)

        // Scroll carousel only if not selecting from carousel.
        } else {
            if (this.props.selectedCarouselNavIndex) {
                this._scrollElementIntoView(CAROUSEL_SCROLL, selectedAnnotationIndex)
            }
        }

        return true
    }

    /*******
     * NAV *
     *******/

    handleNavSongSelect(e, selectedSongIndex) {
        this.stopPropagation(e)
        return this.props.selectSong({
            selectedSongIndex
        })
    }

    handleNavBookSelect(e) {
        this.stopPropagation(e)
        this.props.selectBookColumn({})
    }

    /************
     * OVERVIEW *
     ************/

    handleOverviewToggle(e, justHideIfShown) {
        /**
         * If from click, alternate between shown and disabled. If from keydown,
         * cycle through all three options.
         */
        const clickToggle = e.type === 'click',
            overviewToggled = this.props.selectOverview({
                clickToggle,
                justHideIfShown
            })

        if (overviewToggled) {
            this.stopPropagation(e)
            this._closeSections({
                exemptCarousel: true,
                exemptOverview: true,
                continuePastClosingPopups: true
            })
        }
        return overviewToggled
    }

    /*********
     * POPUP *
     *********/

    handlePopupContainerClick(e, closeDotsOverview) {
        this.stopPropagation(e)

        // Carousel annotation was clicked.
        if (closeDotsOverview) {
            this.props.selectDotsExpand(false)
            this.props.selectOverview({
                justHideIfShown: true
            })
            this.props.selectTips({
                justHideIfShown: true
            })
        }
    }

    // NOTE: This is now no longer used anywhere.
    handlePopupFocus() {
        const { selectedScoreIndex,
                selectedWikiIndex } = this.props

        if (selectedScoreIndex) {
            this.myScoreSection && this.myScoreSection.focus()

        } else if (selectedWikiIndex) {
            this.myWikiSection && this.myWikiSection.focus()
        }
    }

    /*********
     * SCENE *
     *********/

    handleSceneDirection(e, direction) {
        this.stopPropagation(e)
        this.props.selectScene(direction)
        return true
    }

    /*********
     * SCORE *
     *********/

    handleScoreToggle(e) {
        const scoreToggled = this.props.selectScore()
        if (scoreToggled) {
            this.stopPropagation(e)

            // If score is off and we're toggling it on, then close other popups.
            if (!this.props.selectedScoreIndex) {
                this._closeSections({
                    justClosePopups: true
                })
            }
        }
        return scoreToggled
    }

    /********
     * TIPS *
     ********/

    handleTipsToggle(e, justHideIfShown) {
        // Duplicated from handleOverviewToggle.

        /**
         * If from click, alternate between shown and disabled. If from keydown,
         * cycle through all three options.
         */
        const clickToggle = e.type === 'click',
            tipsToggled = this.props.selectTips({
                clickToggle,
                justHideIfShown
            })

        if (tipsToggled) {
            this.stopPropagation(e)
            this._closeSections({
                exemptCarousel: true,
                exemptOverview: true,
                exemptTips: true,
                continuePastClosingPopups: true
            })
        }
        return tipsToggled
    }

    /*********
     * TITLE *
     *********/

    handleTitleToggle(e) {
        const titleToggled = this.props.selectTitle()
        if (titleToggled) {
            this.stopPropagation(e)

            // If title is off and we're toggling it on, then close other popups.
            if (!this.props.selectedTitleIndex) {
                this._closeSections({
                    justClosePopups: true
                })
            }
        }
        return titleToggled
    }

    /*********
     * TOUCH *
     *********/

    handleSliderTouchBegin(e) {

        // Can't be handled in logue.
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return
        }

        const { target } = e,
            clientX = this._getClientX(e),
            clientRect = target.getBoundingClientRect()

        if (!isNaN(clientX)) {
            this.stopPropagation(e)
            this.props.touchSliderBegin(clientRect, clientX)
        }

        this.props.interactivateVerse()
    }

    handleBodyTouchMove(e) {
        const clientX = this._getClientX(e)

        if (!isNaN(clientX)) {
            this.stopPropagation(e)
            this.props.touchBodyMove(clientX)
        }
    }

    _getClientX(e) {
        const { nativeEvent } = e,
            { touches,
              clientX } = nativeEvent

        // If mouse, clientX is in native event. If touch, it's in first touch.
        return touches ? touches[0].clientX : clientX
    }

    handleBodyTouchEnd(e) {
        e.preventDefault()
        this.stopPropagation(e)
        this.props.touchBodyEnd()
    }

    handleBodyClick(e) {
        this.stopPropagation(e)

        // If overview is open when tips is open, leave overview open.
        const exemptOverview = !this.props.selectedTipsIndex;

        this._closeSections({
            exemptCarousel: true,
            exemptLyric: true,
            exemptOverview
        })

        // Return focus to lyric section so it can have scroll access.
        // FIXME: Blind users will use tab to change focus. Will they find this annoying?
        this.focusBody()
    }


    focusBody() {

        const { isHeightlessLyricColumn,
                isLyricExpanded } = this.props,

            focusLyricSectionFirst =
                !isHeightlessLyricColumn || isLyricExpanded

        let focusElement

        // In live view.
        if (focusLyricSectionFirst) {
            /**
             * Not sure why the refs sometimes don't work, but if that's the
             * case, we'll find the elements through the document.
             */
            focusElement = this.myLyricSection ||
                document.getElementsByClassName('Lyric')[0]

        // In admin view.
        } else {
            focusElement = this.myDomManager ||
                document.getElementsByClassName('DomManager')[0]
        }

        if (focusElement) {
            focusElement.focus()
        }
    }

    /*********
     * VERSE *
     *********/

    handleVerseBarSelect() {
        // No need to know event, since we are just scrolling.
        const { selectedVerseIndex } = this.props
        this._scrollElementIntoView(VERSE_SCROLL, selectedVerseIndex)
    }

    handleVerseBarWheel(e) {
        const { deltaY } = e.nativeEvent
        this.myLyricSection.scrollTop += deltaY
    }

    handleVerseInteractivate(e, verseIndex) {
        const { selectedVerseIndex,
                isVerseBarAbove,
                isVerseBarBelow } = this.props

        // If verse bar is shown, do not allow click on selected verse.
        if (!(isVerseBarAbove || isVerseBarBelow) || verseIndex !== selectedVerseIndex) {

            this.stopPropagation(e)
            this._closeSections({
                exemptDots: true,
                exemptCarousel: true,
                exemptInteractivatedVerse: true,
                exemptLyric: true,
                exemptOverview: true,
                exemptTips: true
            })
            this.props.interactivateVerse(verseIndex)
        }
    }

    handleVerseElementSelect(verseElement) {
        this.props.selectVerseElement(verseElement)
    }

    handleVerseElementSlide(verseElement) {
        this.props.slideVerseElement(verseElement)
    }

    /********
     * WIKI *
     ********/

    handleWikiToggle(e, selectedWikiIndex) {
        this.stopPropagation(e)
        // If wiki is off and we're toggling it on, then close other popups.
        if (!this.props.selectedWikiIndex) {
            this._closeSections({
                justClosePopups: true
            })
        }
        this.props.selectWiki(selectedWikiIndex)
    }

    /***********
     * HELPERS *
     ***********/

    _closeSections({

        exemptAnnotation,
        exemptCarousel,
        exemptDots,
        exemptLyric,
        exemptOverview,
        exemptTips,
        exemptInteractivatedVerse,

        continuePastClosingPopups,
        justClosePopups,
        leaveOpenPopups

    }) {

        const { selectedScoreIndex,
                selectedTitleIndex,
                selectedWikiIndex } = this.props

        if (!leaveOpenPopups) {

            // If popup is open, close it and do nothing else.
            if (selectedWikiIndex) {
                this.props.selectWiki()
                if (!continuePastClosingPopups) {
                    return
                }

            } else if (selectedScoreIndex) {
                this.props.selectScore(false)
                if (!continuePastClosingPopups) {
                    return
                }

            } else if (selectedTitleIndex) {
                this.props.selectTitle(false)
                if (!continuePastClosingPopups) {
                    return
                }
            }
        }

        if (justClosePopups) {
            return
        }

        if (!exemptAnnotation) {
            this.props.selectAnnotation({})
        }

        if (!exemptCarousel) {
            this.props.selectCarouselNav(false)
        }

        if (!exemptDots) {
            this.props.selectDotsExpand(false)
        }

        if (!exemptLyric) {
            this.props.selectLyricExpand(false)
        }

        if (!exemptOverview) {
            this.props.selectOverview({
                justHideIfShown: true
            })
        }

        if (!exemptTips) {
            this.props.selectTips({
                justHideIfShown: true
            })
        }

        if (!exemptInteractivatedVerse) {
            this.props.interactivateVerse()
        }
    }

    stopPropagation(e) {
        if (e && e.stopPropagation) {
            e.stopPropagation()

            const { type } = e

            // Turn access off if not from a keyboard event.
            if (type === 'click' || type === 'mousedown') {
                this.props.toggleAccess(false)
            }
        }
    }

    handleScrollAfterLyricRerender() {

        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return
        }

        const annotationIndex = this.props.selectedAnnotationIndex

        // If a portal was selected, there will be an annotation index.
        if (annotationIndex) {
            this._scrollElementIntoView(LYRIC_ANNOTATION_SCROLL, annotationIndex)
            if (this.props.selectedCarouselNavIndex) {
                this._scrollElementIntoView(CAROUSEL_SCROLL, annotationIndex)
            }

            // Otherwise, scroll to top.
        } else {
            this._scrollElementIntoView(VERSE_SCROLL)
            if (this.props.selectedCarouselNavIndex) {
                this._scrollElementIntoView(CAROUSEL_SCROLL, 0)
            }
        }
    }

    _scrollElementIntoView(scrollClass, index, time = 350) {

        const { childClass,
                parentClass } = SCROLL_CLASSES[scrollClass],
            selector = isNaN(index) ? childClass : `${childClass}__${index}`,
            element = document.getElementsByClassName(selector)[0],
            isCarousel = scrollClass === CAROUSEL_SCROLL

        if (element) {
            console.warn(`Scrolling ${selector} into view.`);

            const align = isCarousel ?
                getCarouselLeftAlign(this.props.deviceIndex, this.props.windowWidth, index) :
                getCarouselTopAlign(this.props.deviceIndex, this.props.isLyricExpanded),

                validTarget = getIsValidScrollingTargetCallback(
                    parentClass
                )

            scrollIntoView(element, {
                time,
                align,
                validTarget
            }, this._scrollElementCallback)
            // })
        }
    }

    _scrollElementCallback(status) {
        console.warn('scroll status:', status);
    }

    _closeDotsIfOverviewWillShow() {
        /**
         * Helper method to close the dots section when selecting new song and
         * overview is not disabled.
         */
        const { selectedDotsIndex } = this.props

        if (selectedDotsIndex) {
            const selectedOverviewOption = OVERVIEW_OPTIONS[this.props.selectedOverviewIndex]

            if (selectedOverviewOption !== DISABLED) {
                this.props.selectDotsExpand()
            }
        }
    }

    render() {

        const domManagerRef = node => this.myDomManager = node,
            lyricRef = node => this.myLyricSection = node,
            scoreRef = node => this.myScoreSection = node,
            wikiRef = node => this.myWikiSection = node,

            eventHandlers = {

                domManagerRef,
                lyricRef,
                scoreRef,
                wikiRef,

                focusBody: this.focusBody,
                handleAnnotationAccess: this.handleAnnotationAccess,
                handleDotAccess: this.handleDotAccess,
                handleAnnotationAnchorAccess: this.handleAnnotationAnchorAccess,
                handleSongAccess: this.handleSongAccess,
                handleVerseDirectionAccess: this.handleVerseDirectionAccess,
                handlePopupFocus: this.handlePopupFocus,
                handleBodyClick: this.handleBodyClick,
                handleBodyTouchMove: this.handleBodyTouchMove,
                handleBodyTouchEnd: this.handleBodyTouchEnd,
                handlePopupContainerClick: this.handlePopupContainerClick,
                handleVerseElementSelect: this.handleVerseElementSelect,
                handleVerseElementSlide: this.handleVerseElementSlide,
                handleAccessToggle: this.handleAccessToggle,
                handleAdminToggle: this.handleAdminToggle,
                handleAnnotationWikiSelect: this.handleAnnotationWikiSelect,
                handleAnnotationPortalSelect: this.handleAnnotationPortalSelect,
                handleAnnotationPrevious: this.handleAnnotationPrevious,
                handleAnnotationNext: this.handleAnnotationNext,
                handleAudioPlay: this.handleAudioPlay,
                handleAudioPreviousSong: this.handleAudioPreviousSong,
                handleAudioNextSong: this.handleAudioNextSong,
                handleAudioOptionsToggle: this.handleAudioOptionsToggle,
                handleSliderTouchBegin: this.handleSliderTouchBegin,
                handlePlayerTimeChange: this.handlePlayerTimeChange,
                handlePlayerNextSong: this.handlePlayerNextSong,
                handlePlayerTimeReset: this.handlePlayerTimeReset,
                handleDotToggle: this.handleDotToggle,
                handleDotsSectionToggle: this.handleDotsSectionToggle,
                handleLyricSectionExpand: this.handleLyricSectionExpand,
                handleLyricColumnSelect: this.handleLyricColumnSelect,
                handleLyricPlay: this.handleLyricPlay,
                handleLyricVerseSelect: this.handleLyricVerseSelect,
                handleLyricAnnotationSelect: this.handleLyricAnnotationSelect,
                handleLyricSectionScroll: this.handleLyricSectionScroll,
                handleNavSongSelect: this.handleNavSongSelect,
                handleNavBookSelect: this.handleNavBookSelect,
                handleOverviewToggle: this.handleOverviewToggle,
                handleCarouselNavToggle: this.handleCarouselNavToggle,
                handleSceneDirection: this.handleSceneDirection,
                handleScoreToggle: this.handleScoreToggle,
                handleTipsToggle: this.handleTipsToggle,
                handleTitleToggle: this.handleTitleToggle,
                handleVerseBarSelect: this.handleVerseBarSelect,
                handleVerseBarWheel: this.handleVerseBarWheel,
                handleVerseInteractivate: this.handleVerseInteractivate,
                handleWikiToggle: this.handleWikiToggle,
                handleScrollAfterLyricRerender: this.handleScrollAfterLyricRerender,
                stopPropagation: this.stopPropagation
            }

        return (
            <AccessManager
                eventHandlers={eventHandlers}
            />
        )
    }
}

export default connect(({
    appMounted, selectedAdminIndex, selectedAnnotationIndex, selectedCarouselNavIndex, selectedDotKeys, selectedScoreIndex, selectedSongIndex, selectedTipsIndex, selectedTitleIndex, selectedVerseIndex, selectedWikiIndex, accessedAnnotationIndex, isHeightlessLyricColumn, isLyricExpanded, isVerseBarAbove, isSliderMoving, isSliderTouched, isVerseBarBelow, deviceIndex, windowWidth
}) => ({
    appMounted, selectedAdminIndex, selectedAnnotationIndex, selectedCarouselNavIndex, selectedDotKeys, selectedScoreIndex, selectedSongIndex, selectedTipsIndex, selectedTitleIndex, selectedVerseIndex, selectedWikiIndex, accessedAnnotationIndex, isHeightlessLyricColumn, isLyricExpanded, isVerseBarAbove, isSliderMoving, isSliderTouched, isVerseBarBelow, deviceIndex, windowWidth
}))(EventManager)
