import React, { Component } from 'react'
import AccessManager from './access-manager'
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'

class EventManager extends Component {

    constructor(props) {
        super(props)

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

        this.handleDotKeyToggle = this.handleDotKeyToggle.bind(this)
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
        this.handleScoreToggle = this.handleScoreToggle.bind(this)
        this.handleTipsToggle = this.handleTipsToggle.bind(this)
        this.handleTitleSelect = this.handleTitleSelect.bind(this)
        this.handleVerseBarSelect = this.handleVerseBarSelect.bind(this)
        this.handleVerseInteractivate = this.handleVerseInteractivate.bind(this)
        this.handleWikiToggle = this.handleWikiToggle.bind(this)

        this._stopPropagation = this._stopPropagation.bind(this)

        this.state = {
            cancelScrollIntoView: null
        }
    }

    /********
     * BODY *
     ********/

    handleBodyClick(e) {
        this._stopPropagation(e)

        this._closeSections({})

        // this.props.clickBody(e)
    }

    handlePopupContainerClick(e) {
        this._stopPropagation(e)
    }

    /**********
     * ACCESS *
     **********/

    handleAccessToggle(accessedOn) {
        this.props.toggleAccess(accessedOn)
    }

    /*********
     * ADMIN *
     *********/

    handleAdminToggle(e) {
        this._stopPropagation(e)
        this.props.toggleAdmin()
    }

    /**************
     * ANNOTATION *
     **************/

    handleAnnotationWikiSelect(e, selectedWikiIndex) {
        this._stopPropagation(e)
        this.props.selectWiki(selectedWikiIndex)
    }

    handleAnnotationPortalSelect(e, songIndex, annotationIndex, verseIndex, columnIndex) {
        this.props.selectFromPortal(e, songIndex, annotationIndex, verseIndex, columnIndex)
    }

    // FIXME: Accessibility now broken.
    handleAnnotationPrevious(e) {
        this.props.selectAnnotation(e, { direction: -1 })
    }

    handleAnnotationNext(e) {
        this.props.selectAnnotation(e, { direction: 1 })
    }

    /*********
     * AUDIO *
     *********/

    handleAudioPlay(e) {
        this._stopPropagation(e)
        this.props.togglePlay()
    }

    handleAudioPreviousSong(e) {
        this.props.selectSong(e, undefined, -1)
    }

    handleAudioNextSong(e) {
        this.props.selectSong(e, undefined, 1)
    }

    handleAudioOptionsToggle(e) {
        this._stopPropagation(e)
        this.props.selectAudioOption()
    }

    /****************
     * AUDIO PLAYER *
     ****************/

    handlePlayerTimeChange(e, time) {
        this.props.selectTime(e, time)
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

    handleDotKeyToggle(e, dotKey) {
        this._stopPropagation(e)
        this.props.toggleDotKey(dotKey)
    }

    /********
     * DOTS *
     ********/

    handleDotsSectionToggle(e) {
        this._stopPropagation(e)
        this._closeSections({
            exemptDots: true
        })
        this.props.selectDotsExpand()
    }

    /*********
     * LYRIC *
     *********/

    handleLyricSectionExpand(e) {
        this._stopPropagation(e)
        this._closeSections({
            exemptLyric: true
        })
        this.props.selectLyricExpand()
    }

    handleLyricSectionScroll({
        lyricSectionElement,
        verseElement,
        fromHeightTransition
    }) {
        this.props.scrollLyricSection({
            lyricSectionElement,
            verseElement,
            fromHeightTransition
        })
    }

    /**********
     * LYRICS *
     **********/

    handleLyricPlay(e) {
        this.props.togglePlay()
        this.props.interactivateVerse(e)
    }

    handleLyricVerseSelect(e, verseIndex) {
        this.props.selectVerse(e, verseIndex)
        this.props.interactivateVerse(e)
    }

    handleLyricAnnotationSelect(e, annotationIndex) {
        this.props.selectAnnotation(e, annotationIndex)
    }

    handleLyricColumnSelect(e) {
        this.props.selectLyricColumn(e)
    }

    /*******
     * NAV *
     *******/

    handleNavExpand(e) {
        this._stopPropagation(e)
        this._closeSections({
            exemptNav: true
        })
        this.props.selectNavExpand()
    }

    handleNavSongSelect(e, songIndex) {
        this.props.selectSong(e, songIndex)
    }

    handleNavBookSelect(e) {
        this._stopPropagation(e)
        this.props.selectBookColumn({})
    }

    /************
     * OVERVIEW *
     ************/

    handleOverviewToggle(e, selectedOverviewIndex, selectedOverviewKey) {
        this.props.selectOverview(e, selectedOverviewIndex, selectedOverviewKey)
    }

    /*********
     * SCORE *
     *********/

    handleScoreToggle(e) {
        this._stopPropagation(e)
        this.props.selectScore()
    }

    /********
     * TIPS *
     ********/

    handleTipsToggle(e) {
        this._stopPropagation(e)
        this.props.selectTips()
    }

    /*********
     * TITLE *
     *********/

    handleTitleSelect(e) {
        this.props.selectSong(e, 0)
    }

    /*********
     * TOUCH *
     *********/

    handleAudioSliderTouchBegin(e) {
        const { nativeEvent,
                target } = e,
            { screenX } = nativeEvent,
            clientRect = target.getBoundingClientRect()

        if (!isNaN(screenX)) {
            this._stopPropagation(e)
            this.props.touchSliderBegin(clientRect, screenX)
        }
    }

    handleBodyTouchMove(e) {
        const { screenX } = e.nativeEvent

        if (!isNaN(screenX)) {
            this._stopPropagation(e)
            this.props.touchBodyMove(screenX)
        }

    }

    handleBodyTouchEnd(e) {
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

    handleVerseInteractivate(e, verseIndex) {
        this._stopPropagation(e)
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

    handleWikiToggle(e) {
        this._stopPropagation(e)
        this.props.selectWiki()
    }

    /***********
     * HELPERS *
     ***********/

    _closeSections({
        exemptDots,
        exemptLyric,
        exemptNav
    }) {
        if (!exemptDots) {
            this.props.selectDotsExpand(false)
        }

        if (!exemptLyric) {
            this.props.selectLyricExpand(false)
        }

        if (!exemptNav) {
            this.props.selectNavExpand(false)
        }

        this.props.interactivateVerse()
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

    /**
     * scrollIntoViewIfNeeded should return a cancel function. It presently
     * does not, even though it says it does?
     * https://www.npmjs.com/package/scroll-into-view-if-needed
     */
    _scrollElementIntoView(className, index, duration = 125) {
        const selector = `${className}-${index}`,
            element = document.getElementsByClassName(selector)[0]

        if (this.state.cancelScrollIntoView) {
            this.state.cancelScrollIntoView()
        }

        if (element) {
            console.warn(`Scrolling ${selector} into view.`);
            const cancelScrollIntoView = scrollIntoViewIfNeeded(element, false, {
                duration
            })

            this.setState({
                cancelScrollIntoView
            })
        }
    }

    render() {

        const { domProps,
                domState } = this.props

        return (
            <AccessManager {...domProps} {...domState}
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
                handleDotKeyToggle={this.handleDotKeyToggle}
                handleDotsSectionToggle={this.handleDotsSectionToggle}
                handleLyricSectionExpand={this.handleLyricSectionExpand}
                handleLyricPlay={this.handleLyricPlay}
                handleLyricVerseSelect={this.handleLyricVerseSelect}
                handleLyricAnnotationSelect={this.handleLyricAnnotationSelect}
                handleLyricColumnSelect={this.handleLyricColumnSelect}
                handleLyricSectionScroll={this.handleLyricSectionScroll}
                handleNavExpand={this.handleNavExpand}
                handleNavSongSelect={this.handleNavSongSelect}
                handleNavBookSelect={this.handleNavBookSelect}
                handleOverviewToggle={this.handleOverviewToggle}
                handleScoreToggle={this.handleScoreToggle}
                handleTipsToggle={this.handleTipsToggle}
                handleTitleSelect={this.handleTitleSelect}
                handleVerseBarSelect={this.handleVerseBarSelect}
                handleVerseInteractivate={this.handleVerseInteractivate}
                handleWikiToggle={this.handleWikiToggle}
            />
        )
    }
}

export default EventManager
