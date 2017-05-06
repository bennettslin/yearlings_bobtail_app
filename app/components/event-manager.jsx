import React, { Component } from 'react'
import AccessManager from './access-manager'
import scrollIntoView from 'scroll-into-view'

import { OVERVIEW_OPTIONS,
         DISABLED } from '../helpers/constants'

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
        this.handleTitleSelect = this.handleTitleSelect.bind(this)
        this.handleVerseBarSelect = this.handleVerseBarSelect.bind(this)
        this.handleVerseBarWheel = this.handleVerseBarWheel.bind(this)
        this.handleVerseInteractivate = this.handleVerseInteractivate.bind(this)
        this.handleWikiToggle = this.handleWikiToggle.bind(this)
        this.handleScrollAfterLyricRerender = this.handleScrollAfterLyricRerender.bind(this)
    }

    componentDidMount() {
        // Focus lyric section when app is mounted.
        this._focusBody()
    }

    /********
     * BODY *
     ********/

    handleBodyClick(e) {
        this._stopPropagation(e)
        this._closeSections({
            exemptLyric: true
        })

        // Return focus to lyric section so it can have scroll access.
        // FIXME: Blind users will use tab to change focus. Will they find this annoying?
        this._focusBody()
    }

    handlePopupContainerClick(e) {
        this._stopPropagation(e)
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
            this._scrollElementIntoView('annotation', accessedAnnotationIndex)

            // if (this.props.domProps.selectedCarouselIndex) {
            //     console.error('accessedAnnotationIndex', accessedAnnotationIndex);
            //     this._scrollElementIntoView('carousel-annotation', accessedAnnotationIndex)
            // }
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
            exemptInteractivatedVerse: true
        })
        this._scrollElementIntoView('verse', interactivatedVerseIndex)
        return true
    }

    /*********
     * ADMIN *
     *********/

    handleAdminToggle(e) {
        const newAdminIndex = this.props.toggleAdmin()
        this._stopPropagation(e)

        // Change focus for keyboard events.
        this._focusBody(newAdminIndex)
        return true
    }

    /**************
     * ANNOTATION *
     **************/

    handleAnnotationWikiSelect(e, selectedWikiIndex) {
        this._stopPropagation(e)
        this.props.selectWiki(selectedWikiIndex)
    }

    handleAnnotationPortalSelect(e, selectedSongIndex, selectedAnnotationIndex, selectedVerseIndex, selectedLyricColumnIndex) {

        const songSelected = this.props.selectSong({
            selectedSongIndex,
            selectedAnnotationIndex,
            selectedVerseIndex
        })

        if (songSelected) {
            this._stopPropagation(e)

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
        this._stopPropagation(e)
        const selectedAnnotationIndex = this.props.selectAnnotation({
            direction: -1
        })
        this._scrollElementIntoView('annotation', selectedAnnotationIndex)
    }

    handleAnnotationNext(e) {
        this._stopPropagation(e)
        const selectedAnnotationIndex = this.props.selectAnnotation({
            direction: 1
        })
        this._scrollElementIntoView('annotation', selectedAnnotationIndex)
    }

    handleCarouselToggle(e, selectedCarouselIndex) {
        this._stopPropagation(e)
        this.props.selectCarousel(selectedCarouselIndex)
    }

    /*********
     * AUDIO *
     *********/

    handleAudioPlay(e) {
        const playToggled = this.props.togglePlay()
        if (playToggled) {
            this._stopPropagation(e)
        }
        return playToggled
    }

    handleAudioPreviousSong(e) {
        const songSelected = this.props.selectSong({
            direction: -1
        })
        this._closeDotsIfOverviewWillShow()
        if (songSelected) {
            this._stopPropagation(e)
        }
        return songSelected
    }

    handleAudioNextSong(e) {
        const songSelected = this.props.selectSong({
            direction: 1
        })
        this._closeDotsIfOverviewWillShow()
        if (songSelected) {
            this._stopPropagation(e)
        }
        return songSelected
    }

    handleAudioOptionsToggle(e) {
        const optionSelected = this.props.selectAudioOption()
        if (optionSelected) {
            this._stopPropagation(e)
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

    /*******
     * DOT *
     *******/

    handleDotToggle(e, dotIndex) {
        if (this.props.isLogue) {
            return false
        }

        this._stopPropagation(e)
        this.props.toggleDot(dotIndex)
        return true
    }

    /********
     * DOTS *
     ********/

    handleDotsSectionToggle(e) {
        const dotsToggled = this.props.selectDotsExpand()
        if (dotsToggled) {
            this._stopPropagation(e)
            this._closeSections({
                exemptDots: true
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
            this._stopPropagation(e)
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
            this._stopPropagation(e)
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

        this._stopPropagation(e)
        this.props.selectVerse({
            selectedVerseIndex
        })
        this.props.interactivateVerse()
        return true
    }

    handleLyricAnnotationSelect(e, selectedAnnotationIndex) {
        this._stopPropagation(e)
        this._closeSections({
            exemptAnnotation: true,
            exemptLyric: true
        })
        this.props.selectAnnotation({
            selectedAnnotationIndex
        })
    }

    /*******
     * NAV *
     *******/

    handleNavExpand(e) {
        const navExpanded = this.props.selectNavExpand()
        if (navExpanded) {
            this._stopPropagation(e)
            this._closeSections({
                exemptNav: true
            })
        }
        return navExpanded
    }

    handleNavSongSelect(e, selectedSongIndex) {
        this._stopPropagation(e)
        this.props.selectNavExpand(false)
        return this.props.selectSong({
            selectedSongIndex
        })
    }

    handleNavBookSelect(e) {
        this._stopPropagation(e)
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
            this._stopPropagation(e)
            this._closeSections({
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
            this._stopPropagation(e)
        }
        return scoreToggled
    }

    /********
     * TIPS *
     ********/

    handleTipsToggle(e) {
        const tipsToggled = this.props.selectTips()
        if (tipsToggled) {
            this._stopPropagation(e)
        }
        return tipsToggled
    }

    /*********
     * TITLE *
     *********/

    handleTitleSelect(e) {
        const titleSelected = this.props.selectSong({
            selectedSongIndex: 0
        })
        if (titleSelected) {
            this._stopPropagation(e)
        }
        return titleSelected
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
            this._stopPropagation(e)
            this.props.touchSliderBegin(clientRect, clientX)
        }
    }

    handleBodyTouchMove(e) {
        const { clientX } = e.nativeEvent

        if (!isNaN(clientX)) {
            this._stopPropagation(e)
            this.props.touchBodyMove(clientX)
        }

    }

    handleBodyTouchEnd(e) {
        e.preventDefault()
        this._stopPropagation(e)
        this.props.touchBodyEnd()
    }


    /*********
     * VERSE *
     *********/

    handleVerseBarSelect() {
        // No need to know event, since we are just scrolling.
        const { selectedVerseIndex } = this.props.domProps
        this._scrollElementIntoView('verse', selectedVerseIndex)
    }

    handleVerseBarWheel(e) {
        // FIXME: Safari doesn't recognise trackpad's continuous scroll?

        const { deltaY } = e.nativeEvent
        this.myLyricSection.scrollTop += deltaY
    }

    handleVerseInteractivate(e, verseIndex) {
        this._stopPropagation(e)
        this._closeSections({
            exemptInteractivatedVerse: true,
            exemptLyric: true
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
        this._stopPropagation(e)
        this.props.selectWiki(selectedWikiIndex)
    }

    /***********
     * HELPERS *
     ***********/

    _closeSections({
        exemptAnnotation,
        exemptDots,
        exemptLyric,
        exemptNav,
        exemptOverview,
        exemptInteractivatedVerse
    }) {

        const { domProps } = this.props

        // If popup is open, close it and do nothing else.
        if (domProps.selectedWikiIndex) {
            this.props.selectWiki()
            return

        } else if (domProps.selectedScoreIndex) {
            this.props.selectScore(false)
            return
        }

        if (!exemptAnnotation) {
            this.props.selectAnnotation({})
        }

        if (!exemptDots) {
            this.props.selectDotsExpand(false)
        }

        if (!exemptLyric) {
            this.props.selectLyricExpand(false)
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

    _stopPropagation(e) {
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
                this._scrollElementIntoView('annotation', annotationIndex)

                // Otherwise, scroll to top.
            } else {
                this._scrollElementIntoView('lyrics-scroll', 'home')
            }
        }
    }

    _scrollElementIntoView(className, index, time = 350) {
        const selector = `${className}-${index}`,
            element = document.getElementsByClassName(selector)[0]

        if (element) {
            console.warn(`Scrolling ${selector} into view.`);

            scrollIntoView(element, {
                time,
                align: {
                    top: 0.15,
                    left: 0
                }
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
                handleTitleSelect={this.handleTitleSelect}
                handleVerseBarSelect={this.handleVerseBarSelect}
                handleVerseBarWheel={this.handleVerseBarWheel}
                handleVerseInteractivate={this.handleVerseInteractivate}
                handleWikiToggle={this.handleWikiToggle}
                handleScrollAfterLyricRerender={this.handleScrollAfterLyricRerender}
            />
        )
    }
}

export default EventManager
