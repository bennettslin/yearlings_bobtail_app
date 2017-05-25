import React, { Component } from 'react'
import scrollIntoView from 'scroll-into-view'
import AccessManager from './access-manager'

import { OVERVIEW_OPTIONS,

         REFERENCE,

         DISABLED } from '../helpers/constants'

import { getAnnotationObject } from '../helpers/data-helper'
import { intersects } from '../helpers/dot-helper'
import { getCarouselLeftAlign, getCarouselTopAlign } from '../helpers/responsive-helper'

const ANNOTATION_SCROLL = 'annotation',
    CAROUSEL_SCROLL = 'carousel-scroll',
    CAROUSEL_ANNOTATION_SCROLL = 'carousel-annotation',
    LYRICS_SCROLL = 'lyrics-scroll',
    VERSE_SCROLL = 'verse'

class EventManager extends Component {

    constructor(props) {
        super(props)

        this.handleAnnotationAccess = this.handleAnnotationAccess.bind(this)
        this.handleDotAccess = this.handleDotAccess.bind(this)
        this.handlePopupAnchorAccess = this.handlePopupAnchorAccess.bind(this)
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
        this.handleAudioSliderTouchBegin = this.handleAudioSliderTouchBegin.bind(this)

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
        this.handleNavExpand = this.handleNavExpand.bind(this)
        this.handleNavSongSelect = this.handleNavSongSelect.bind(this)
        this.handleNavBookSelect = this.handleNavBookSelect.bind(this)
        this.handleOverviewToggle = this.handleOverviewToggle.bind(this)
        this.handlePopupFocus = this.handlePopupFocus.bind(this)
        this.handleCarouselToggle = this.handleCarouselToggle.bind(this)
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
        this._focusBody()
    }

    /********
     * BODY *
     ********/

    handleBodyClick(e) {
        this.stopPropagation(e)
        this._closeSections({
            exemptCarousel: true,
            exemptLyric: true
        })

        // Return focus to lyric section so it can have scroll access.
        // FIXME: Blind users will use tab to change focus. Will they find this annoying?
        this._focusBody()
    }

    handlePopupContainerClick(e) {
        this.stopPropagation(e)
    }

    handlePopupFocus() {
        const { selectedScoreIndex,
                selectedWikiIndex } = this.props.domProps

        if (selectedScoreIndex) {
            this.myScoreSection && this.myScoreSection.focus()

        } else if (selectedWikiIndex) {
            this.myWikiSection && this.myWikiSection.focus()
        }
    }

    _focusBody(newAdminIndex) {
        const { domProps,
                isLogue } = this.props,
            doFocusAdmin = typeof newAdminIndex !== 'undefined' ?
                newAdminIndex : domProps.selectedAdminIndex

        if (doFocusAdmin || isLogue) {
            this.myDomManager && this.myDomManager.focus()

        } else {
            this.myLyricSection && this.myLyricSection.focus()
        }
    }

    /**********
     * ACCESS *
     **********/

    handleAccessToggle(accessedOn) {
        this.props.toggleAccess(accessedOn)
    }

    handleAnnotationAccess({
        accessedAnnotationIndex,
        doScroll
    }) {
        const annotationAccessed = this.props.accessAnnotation(accessedAnnotationIndex)
        if (annotationAccessed && doScroll) {
            this._scrollElementIntoView(ANNOTATION_SCROLL, accessedAnnotationIndex)

            if (this.props.domProps.selectedCarouselIndex) {
                this._scrollElementIntoView(CAROUSEL_ANNOTATION_SCROLL, accessedAnnotationIndex)
            }
        }
    }

    handleDotAccess(accessedDotIndex) {
        if (this.props.isLogue) {
            return false
        }

        this.props.accessDot(accessedDotIndex)
        return true
    }

    handlePopupAnchorAccess(accessedPopupAnchorIndex) {
        this.props.accessPopupAnchor(accessedPopupAnchorIndex)
    }

    handleSongAccess(accessedSongIndex) {
        this.props.accessSong(accessedSongIndex)
    }

    handleVerseDirectionAccess(direction) {
        if (this.props.isLogue) {
            return false
        }

        const interactivatedVerseIndex = this.props.interactivateVerseDirection(direction)
        this._closeSections({
            exemptCarousel: true,
            exemptInteractivatedVerse: true
        })
        this._scrollElementIntoView(VERSE_SCROLL, interactivatedVerseIndex)
        return true
    }

    /*********
     * ADMIN *
     *********/

    handleAdminToggle(e) {
        const newAdminIndex = this.props.toggleAdmin()
        this.stopPropagation(e)

        // Change focus for keyboard events.
        this._focusBody(newAdminIndex)
        return true
    }

    /**************
     * ANNOTATION *
     **************/

    handleAnnotationWikiSelect(e, selectedWikiIndex, carouselAnnotationIndex) {

        const isWikiEnabled = this.props.domProps.selectedDotKeys[REFERENCE]

        // Don't register click if reference dot is deselected.
        if (!isWikiEnabled) {
            return false
        }

        this.stopPropagation(e)
        this.props.selectWiki(selectedWikiIndex, carouselAnnotationIndex)
        return true
    }

    handleAnnotationPortalSelect(e, selectedSongIndex, selectedAnnotationIndex, selectedVerseIndex, selectedLyricColumnIndex) {

        const songSelected = this.props.selectSong({
            selectedSongIndex,
            selectedAnnotationIndex,
            selectedVerseIndex
        })

        if (songSelected) {
            this.stopPropagation(e)

            if (!isNaN(selectedLyricColumnIndex)) {
                this.props.selectLyricColumn({
                    selectedLyricColumnIndex,
                    selectedSongIndex
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
        this._scrollElementIntoView(ANNOTATION_SCROLL, selectedAnnotationIndex)
        if (this.props.domProps.selectedCarouselIndex) {
            this._scrollElementIntoView(CAROUSEL_ANNOTATION_SCROLL, selectedAnnotationIndex)
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
        this.props.selectTime(time)
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

    handleCarouselToggle(e, selectedCarouselIndex) {
        this.stopPropagation(e)

        const { domProps } = this.props,
            presentCarouselIndex = domProps.selectedCarouselIndex,
            carouselSelected = this.props.selectCarousel(selectedCarouselIndex)

        // Scroll only when expanding carousel.
        if (carouselSelected && !presentCarouselIndex) {
            const annotationIndex = domProps.selectedAnnotationIndex ? domProps.selectedAnnotationIndex : this.props.domState.accessedAnnotationIndex
            this._scrollElementIntoView(CAROUSEL_ANNOTATION_SCROLL, annotationIndex)
        }

        this._closeSections({
            exemptAnnotation: true,
            exemptCarousel: true,
            exemptDots: true,
            exemptInteractivatedVerse: true,
            exemptOverview: true
        })

        return carouselSelected
    }

    /*******
     * DOT *
     *******/

    handleDotToggle(e, dotIndex) {
        if (this.props.isLogue) {
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
                exemptNav: true
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
                exemptLyric: true
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
        if (this.props.isLogue) {
            return false
        }

        this.props.togglePlay()
        this.props.interactivateVerse()
        return true
    }

    handleLyricVerseSelect(e, selectedVerseIndex) {
        if (this.props.isLogue) {
            return false
        }

        this.stopPropagation(e)
        this.props.selectVerse({
            selectedVerseIndex
        })
        this.props.interactivateVerse()
        return true
    }

    handleLyricAnnotationSelect(e, selectedAnnotationIndex, fromCarousel) {
        /**
         * FIXME: This check is only necessary when clicking an annotation, to
         * ensure that it is not shown as text. Maybe bypass if done through
         * access?
         */

        const { domProps } = this.props

        // If selecting an annotation, make sure that its dots intersect.
        if (selectedAnnotationIndex) {
            const annotation = getAnnotationObject(domProps.selectedSongIndex, selectedAnnotationIndex)

            if (!intersects(annotation.dotKeys, domProps.selectedDotKeys)) {
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
            this._scrollElementIntoView(ANNOTATION_SCROLL, selectedAnnotationIndex)

        // Scroll carousel only if not selecting from carousel.
        } else {
            if (this.props.domProps.selectedCarouselIndex) {
                this._scrollElementIntoView(CAROUSEL_ANNOTATION_SCROLL, selectedAnnotationIndex)
            }
        }

        return true
    }

    /*******
     * NAV *
     *******/

    handleNavExpand(e) {
        const navExpanded = this.props.selectNavExpand()
        if (navExpanded) {
            this.stopPropagation(e)
            this._closeSections({
                exemptDots: true,
                exemptNav: true,
                exemptOverview: true,

                // Allow nav to close carousel and lyric even in logue.
                forceCloseCarousel: true,
                forceCloseLyric: true
            })
        }
        return navExpanded
    }

    handleNavSongSelect(e, selectedSongIndex) {
        this.stopPropagation(e)
        this.props.selectNavExpand(false)
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

    handleOverviewToggle(e) {
        /**
         * If from click, alternate between shown and disabled. If from keydown,
         * cycle through all three options.
         */
        const clickToggle = e.type === 'click',
            overviewToggled = this.props.selectOverview({
                clickToggle
            })

        if (overviewToggled) {
            this.stopPropagation(e)
            this._closeSections({
                exemptCarousel: true,
                exemptNav: true,
                exemptOverview: true
            })
        }
        return overviewToggled
    }

    /*********
     * SCORE *
     *********/

    handleScoreToggle(e) {
        const scoreToggled = this.props.selectScore()
        if (scoreToggled) {
            this.stopPropagation(e)
        }
        return scoreToggled
    }

    /********
     * TIPS *
     ********/

    handleTipsToggle(e) {
        const tipsToggled = this.props.selectTips()
        if (tipsToggled) {
            this.stopPropagation(e)
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
        }
        return titleToggled
    }

    /*********
     * TOUCH *
     *********/

    handleAudioSliderTouchBegin(e) {
        const { nativeEvent,
                target } = e,
            { clientX } = nativeEvent,
            clientRect = target.getBoundingClientRect()

        if (!isNaN(clientX)) {
            this.stopPropagation(e)
            this.props.touchSliderBegin(clientRect, clientX)
        }
    }

    handleBodyTouchMove(e) {
        const { clientX } = e.nativeEvent

        if (!isNaN(clientX)) {
            this.stopPropagation(e)
            this.props.touchBodyMove(clientX)
        }

    }

    handleBodyTouchEnd(e) {
        e.preventDefault()
        this.stopPropagation(e)
        this.props.touchBodyEnd()
    }


    /*********
     * VERSE *
     *********/

    handleVerseBarSelect() {
        // No need to know event, since we are just scrolling.
        const { selectedVerseIndex } = this.props.domProps
        this._scrollElementIntoView(VERSE_SCROLL, selectedVerseIndex)
    }

    handleVerseBarWheel(e) {
        // FIXME: Safari doesn't recognise trackpad's continuous scroll?

        const { deltaY } = e.nativeEvent
        this.myLyricSection.scrollTop += deltaY
    }

    handleVerseInteractivate(e, verseIndex) {
        this.stopPropagation(e)
        this._closeSections({
            exemptDots: true,
            exemptCarousel: true,
            exemptInteractivatedVerse: true,
            exemptLyric: true,
            exemptNav: true,
            exemptOverview: true
        })
        this.props.interactivateVerse(verseIndex)
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
        exemptNav,
        exemptOverview,
        exemptInteractivatedVerse,

        forceCloseCarousel,
        forceCloseLyric
    }) {

        const { domProps } = this.props

        // If popup is open, close it and do nothing else.
        if (domProps.selectedWikiIndex) {
            this.props.selectWiki()
            return

        } else if (domProps.selectedScoreIndex) {
            this.props.selectScore(false)
            return

        } else if (domProps.selectedTitleIndex) {
            this.props.selectTitle(false)
            return
        }

        if (!exemptAnnotation) {
            this.props.selectAnnotation({})
        }

        if (!exemptCarousel) {
            this.props.selectCarousel(false, forceCloseCarousel)
        }

        if (!exemptDots) {
            this.props.selectDotsExpand(false)
        }

        if (!exemptLyric) {
            this.props.selectLyricExpand(false, forceCloseLyric)
        }

        if (!exemptNav) {
            this.props.selectNavExpand(false)
        }

        if (!exemptOverview) {
            this.props.selectOverview({
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

            // Turn access off if not from a keyboard event.
            if (e.type === 'click') {
                this.props.toggleAccess(false)
            }
        }
    }

    handleScrollAfterLyricRerender() {
        const { isLogue } = this.props

        if (!isLogue) {
            const annotationIndex = this.props.domProps.selectedAnnotationIndex

            // If a portal was selected, there will be an annotation index.
            if (annotationIndex) {
                this._scrollElementIntoView(ANNOTATION_SCROLL, annotationIndex)
                if (this.props.domProps.selectedCarouselIndex) {
                    this._scrollElementIntoView(CAROUSEL_ANNOTATION_SCROLL, annotationIndex)
                }

                // Otherwise, scroll to top.
            } else {
                this._scrollElementIntoView(LYRICS_SCROLL, 'home')
                if (this.props.domProps.selectedCarouselIndex) {
                    this._scrollElementIntoView(CAROUSEL_ANNOTATION_SCROLL, 0)
                }
            }
        }
    }

    _scrollElementIntoView(className, index, time = 350) {
        const selector = `${className}-${index}`,
            element = document.getElementsByClassName(selector)[0],

            isCarousel = className === CAROUSEL_ANNOTATION_SCROLL,
            scrollParentClass = isCarousel ?
                CAROUSEL_SCROLL : LYRICS_SCROLL,

            // Don't scroll any immovable parent containers.
            validTarget = (parent) => {
                const isValidTarget = parent !== window && (parent.className &&
                    new RegExp("(\\s|^)" + scrollParentClass + "(\\s|$)").test(parent.className))

                // console.error('parent isValidTarget', parent, isValidTarget);
                return isValidTarget
            }

        if (element) {
            console.warn(`Scrolling ${selector} into view.`);

            const align = isCarousel ?
                getCarouselLeftAlign(this.props.domState, index) :
                getCarouselTopAlign(this.props.domState)

            scrollIntoView(element, {
                time,
                align,
                validTarget
            }, this._scrollElementCallback)
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
        const { domProps } = this.props,
            { selectedDotsIndex } = domProps

        if (selectedDotsIndex) {
            const selectedOverviewOption = OVERVIEW_OPTIONS[domProps.selectedOverviewIndex]

            if (selectedOverviewOption !== DISABLED) {
                this.props.selectDotsExpand()
            }
        }
    }

    render() {
        const { domProps,
                domState } = this.props

        return (
            <AccessManager {...domProps} {...domState}
                isLogue={this.props.isLogue}

                domManagerRef={node => this.myDomManager = node}
                lyricSectionRef={node => this.myLyricSection = node}
                scoreSectionRef={node => this.myScoreSection = node}
                wikiSectionRef={node => this.myWikiSection = node}

                handleAnnotationAccess={this.handleAnnotationAccess}
                handleDotAccess={this.handleDotAccess}
                handlePopupAnchorAccess={this.handlePopupAnchorAccess}
                handleSongAccess={this.handleSongAccess}
                handleVerseDirectionAccess={this.handleVerseDirectionAccess}
                handlePopupFocus={this.handlePopupFocus}
                handleBodyClick={this.handleBodyClick}
                handleBodyTouchMove={this.handleBodyTouchMove}
                handleBodyTouchEnd={this.handleBodyTouchEnd}
                handlePopupContainerClick={this.handlePopupContainerClick}
                handleVerseElementSelect={this.handleVerseElementSelect}
                handleVerseElementSlide={this.handleVerseElementSlide}
                handleAccessToggle={this.handleAccessToggle}
                handleAdminToggle={this.handleAdminToggle}
                handleAnnotationWikiSelect={this.handleAnnotationWikiSelect}
                handleAnnotationPortalSelect={this.handleAnnotationPortalSelect}
                handleAnnotationPrevious={this.handleAnnotationPrevious}
                handleAnnotationNext={this.handleAnnotationNext}
                handleAudioPlay={this.handleAudioPlay}
                handleAudioPreviousSong={this.handleAudioPreviousSong}
                handleAudioNextSong={this.handleAudioNextSong}
                handleAudioOptionsToggle={this.handleAudioOptionsToggle}
                handleAudioSliderTouchBegin={this.handleAudioSliderTouchBegin}
                handlePlayerTimeChange={this.handlePlayerTimeChange}
                handlePlayerNextSong={this.handlePlayerNextSong}
                handlePlayerTimeReset={this.handlePlayerTimeReset}
                handleDotToggle={this.handleDotToggle}
                handleDotsSectionToggle={this.handleDotsSectionToggle}
                handleLyricSectionExpand={this.handleLyricSectionExpand}
                handleLyricColumnSelect={this.handleLyricColumnSelect}
                handleLyricPlay={this.handleLyricPlay}
                handleLyricVerseSelect={this.handleLyricVerseSelect}
                handleLyricAnnotationSelect={this.handleLyricAnnotationSelect}
                handleLyricSectionScroll={this.handleLyricSectionScroll}
                handleNavExpand={this.handleNavExpand}
                handleNavSongSelect={this.handleNavSongSelect}
                handleNavBookSelect={this.handleNavBookSelect}
                handleOverviewToggle={this.handleOverviewToggle}
                handleCarouselToggle={this.handleCarouselToggle}
                handleScoreToggle={this.handleScoreToggle}
                handleTipsToggle={this.handleTipsToggle}
                handleTitleToggle={this.handleTitleToggle}
                handleVerseBarSelect={this.handleVerseBarSelect}
                handleVerseBarWheel={this.handleVerseBarWheel}
                handleVerseInteractivate={this.handleVerseInteractivate}
                handleWikiToggle={this.handleWikiToggle}
                handleScrollAfterLyricRerender={this.handleScrollAfterLyricRerender}
                stopPropagation={this.stopPropagation}
            />
        )
    }
}

export default EventManager
