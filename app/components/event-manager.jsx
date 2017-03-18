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
        this.props.clickBody(e)
    }

    handleBodyTouchMove(e) {
        this.props.touchBodyMove(e)
    }

    handleBodyTouchEnd(e) {
        this.props.touchBodyEnd(e)
    }

    handlePopupContainerClick(e) {
        this.props.clickPopupContainer(e)
    }

    /**********
     * ACCESS *
     **********/

    handleAccessToggle(accessedOn) {
        // This method does not need to know the event.
        this.props.toggleAccess(accessedOn)
    }

    /*********
     * ADMIN *
     *********/

    handleAdminToggle(e, selectedAdminIndex) {
        this._stopPropagation(e)
        this.props.toggleAdmin(selectedAdminIndex)
    }

    /**************
     * ANNOTATION *
     **************/

    handleAnnotationWikiSelect(e, wikiIndex) {
        this.props.selectWiki(e, wikiIndex)
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

    handleAudioOptionsToggle(e, selectedAudioOptionIndex) {
        this._stopPropagation(e)
        this.props.selectAudioOption(selectedAudioOptionIndex)
    }

    handleAudioSliderTouchBegin(e) {
        this.props.touchSliderBegin(e)
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

    handleDotToggle(e, dotKey) {
        this.props.selectDot(e, dotKey)
    }

    /********
     * DOTS *
     ********/

    handleDotsSectionToggle(e) {
        this.props.selectDotsExpand(e)

        // If showing the dots section, collapse the nav section.
        this.props.selectNavExpand(undefined, 0)
    }


    /*********
     * LYRIC *
     *********/

    handleLyricSectionExpand(e) {
        this.props.selectLyricExpand(e)
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

    handleLyricSectionScroll(lyricSectionElement, verseElement, lyricColumnJustTransitioned) {
        this.props.scrollLyricSection(lyricSectionElement, verseElement, lyricColumnJustTransitioned)
    }

    /*******
     * NAV *
     *******/

    handleNavExpand(e) {
        this.props.selectNavExpand(e)

        // If expanding the nav section, hide the dots section.
        this.props.selectDotsExpand(undefined, 0)
    }

    handleNavSongSelect(e, songIndex) {
        this.props.selectSong(e, songIndex)
    }

    handleNavBookSelect(e) {
        this.props.selectBookColumn(e)
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

    handleScoreToggle(e, selectedScoreIndex) {
        this._stopPropagation(e)
        this.props.selectScore(selectedScoreIndex)
    }

    /********
     * TIPS *
     ********/

    handleTipsToggle(e, selectedTipsIndex) {
        this._stopPropagation(e)
        this.props.selectTips(selectedTipsIndex)
    }

    /*********
     * TITLE *
     *********/

    handleTitleSelect(e) {
        this.props.selectSong(e, 0)
    }

    /*********
     * VERSE *
     *********/

    handleVerseBarSelect() {
        // No need to know event, since we are just scrolling.
        const { selectedVerseIndex } = this.props.domProps
        this.scrollElementIntoView('verse', selectedVerseIndex)
    }

    handleVerseElementSelect(verseElement) {
        this.props.selectVerseElement(verseElement)
    }

    handleVerseElementSlide(verseElement) {
        this.props.slideVerseElement(verseElement)
    }

    handleVerseInteractivate(e, verseIndex) {
        this._stopPropagation(e)
        this.props.interactivateVerse(verseIndex)
    }

    /********
     * WIKI *
     ********/

    handleWikiToggle(e) {
        this.props.selectWiki(e)
    }

    /***********
     * HELPERS *
     ***********/

    _stopPropagation(e) {
        if (e && e.stopPropagation) {
            e.stopPropagation()

            // Turn access off if not from a keyboard event.
            if (e.type !== 'keydown') {
                this.props.toggleAccess(false)
            }
        }
    }

    /**
     * scrollIntoViewIfNeeded should return a cancel function. It presently
     * does not, even though it says it does?
     * https://www.npmjs.com/package/scroll-into-view-if-needed
     */
    scrollElementIntoView(className, index, duration = 125) {
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
                handleDotToggle={this.handleDotToggle}
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
