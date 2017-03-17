import React, { Component } from 'react'
import AccessManager from './access-manager'

class EventManager extends Component {

    constructor(props) {
        super(props)

        this.handleAccessToggle = this.handleAccessToggle.bind(this)
        this.handleAccessedSectionSelect = this.handleAccessedSectionSelect.bind(this)
        this.handleAdminToggle = this.handleAdminToggle.bind(this)
        this.handleBodyClick = this.handleBodyClick.bind(this)
        this.handleBodyMouseOrTouchMove = this.handleBodyMouseOrTouchMove.bind(this)
        this.handleBodyMouseOrTouchEnd = this.handleBodyMouseOrTouchEnd.bind(this)
        this.handlePopupContainerClick = this.handlePopupContainerClick.bind(this)
        this.handleVerseElementSelect = this.handleVerseElementSelect.bind(this)
        this.handleVerseElementSlide = this.handleVerseElementSlide.bind(this)
        // this.handleKeyDownPress = this.handleKeyDownPress.bind(this)
        this.handleAnnotationPrevious = this.handleAnnotationPrevious.bind(this)
        this.handleAnnotationNext = this.handleAnnotationNext.bind(this)
        this.handleAnnotationWikiSelect = this.handleAnnotationWikiSelect.bind(this)
        this.handleAnnotationPortalSelect = this.handleAnnotationPortalSelect.bind(this)
        this.handleAudioPlay = this.handleAudioPlay.bind(this)
        this.handleAudioPreviousSong = this.handleAudioPreviousSong.bind(this)
        this.handleAudioNextSong = this.handleAudioNextSong.bind(this)
        this.handleAudioOptionsToggle = this.handleAudioOptionsToggle.bind(this)
        this.handleAudioSliderMouseOrTouchBegin = this.handleAudioSliderMouseOrTouchBegin.bind(this)

        this.handlePlayerTimeChange = this.handlePlayerTimeChange.bind(this)
        this.handlePlayerNextSong = this.handlePlayerNextSong.bind(this)
        this.handlePlayerTimeReset = this.handlePlayerTimeReset.bind(this)

        this.handleDotToggle = this.handleDotToggle.bind(this)
        this.handleDotsSectionToggle = this.handleDotsSectionToggle.bind(this)
        this.handleLyricSectionExpand = this.handleLyricSectionExpand.bind(this)
        this.handleLyricColumnSelect = this.handleLyricColumnSelect.bind(this)
        this.handleLyricVerseBarSelect = this.handleLyricVerseBarSelect.bind(this)
        this.handleLyricAnnotationSelect = this.handleLyricAnnotationSelect.bind(this)
        this.handleLyricPlay = this.handleLyricPlay.bind(this)
        this.handleLyricVerseSelect = this.handleLyricVerseSelect.bind(this)
        this.handleLyricVerseInteractivate = this.handleLyricVerseInteractivate.bind(this)
        this.handleLyricSectionScroll = this.handleLyricSectionScroll.bind(this)
        this.handleNavExpand = this.handleNavExpand.bind(this)
        this.handleNavSongSelect = this.handleNavSongSelect.bind(this)
        this.handleNavBookSelect = this.handleNavBookSelect.bind(this)
        this.handleOverviewToggle = this.handleOverviewToggle.bind(this)
        this.handleScoreToggle = this.handleScoreToggle.bind(this)
        this.handleTipsToggle = this.handleTipsToggle.bind(this)
        this.handleTitleSelect = this.handleTitleSelect.bind(this)
        this.handleWikiToggle = this.handleWikiToggle.bind(this)
    }

    /********
     * BODY *
     ********/

    handleBodyClick(e) {
        this.props.clickBody(e)
    }

    handleAccessToggle(accessedOn) {
        this.props.toggleAccess(accessedOn)
    }

    handleAccessedSectionSelect(e) {
        this.props.selectAccessedSection(e)
    }

    handleAdminToggle(e) {
        this.props.toggleAdmin(e)
    }

    handleBodyMouseOrTouchMove(e) {
        this.props.mouseOrTouchBodyMove(e)
    }

    handleBodyMouseOrTouchEnd(e) {
        this.props.mouseOrTouchBodyEnd(e)
    }

    handlePopupContainerClick(e) {
        this.props.clickPopupContainer(e)
    }

    handleVerseElementSelect(verseElement) {
        this.props.updateSelectedVerseElement(verseElement)
    }

    handleVerseElementSlide(verseElement) {
        this.props.updateSliderVerseElement(verseElement)
    }

    // handleKeyDownPress(e) {
        // this.props.pressDownKey(e)
    // }

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
        this.props.togglePlay(e)
    }

    handleAudioPreviousSong(e) {
        this.props.selectSong(e, undefined, -1)
    }

    handleAudioNextSong(e) {
        this.props.selectSong(e, undefined, 1)
    }

    handleAudioOptionsToggle(e) {
        this.props.selectAudioOption(e)
    }

    handleAudioSliderMouseOrTouchBegin(e) {
        this.props.mouseOrTouchSliderBegin(e)
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
    }


    /*********
     * LYRIC *
     *********/

    handleLyricSectionExpand(e) {
        this.props.selectLyricExpand(e)
    }

    handleLyricVerseBarSelect(e) {
        this.props.selectVerseBar(e)
    }

    /**********
     * LYRICS *
     **********/

    handleLyricPlay(e) {
        this.props.togglePlay(e)
        this.props.interactivateVerse(e)
    }

    handleLyricVerseSelect(e, verseIndex) {
        this.props.selectVerse(e, verseIndex)
        this.props.interactivateVerse(e)
    }

    handleLyricVerseInteractivate(e, verseIndex) {
        this.props.interactivateVerse(e, verseIndex)
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

    handleOverviewToggle(e) {
        this.props.selectOverview(e)
    }

    /*********
     * SCORE *
     *********/

    handleScoreToggle(e) {
        this.props.selectScore(e)
    }

    /********
     * TIPS *
     ********/

    handleTipsToggle(e) {
        this.props.selectTips(e)
    }

    /*********
     * TITLE *
     *********/

    handleTitleSelect(e) {
        this.props.selectSong(e, 0)
    }

    /********
     * WIKI *
     ********/

    handleWikiToggle(e) {
        this.props.selectWiki(e)
    }

    render() {

        const { domProps,
                domState } = this.props

        return (
            <AccessManager {...domProps} {...domState}
                handleAccessToggle={this.handleAccessToggle}
                handleAccessedSectionSelect={this.handleAccessedSectionSelect}
                handleAdminToggle={this.handleAdminToggle}
                handleBodyClick={this.handleBodyClick}
                handleBodyMouseOrTouchMove={this.handleBodyMouseOrTouchMove}
                handleBodyMouseOrTouchEnd={this.handleBodyMouseOrTouchEnd}
                handlePopupContainerClick={this.handlePopupContainerClick}
                handleVerseElementSelect={this.handleVerseElementSelect}
                handleVerseElementSlide={this.handleVerseElementSlide}
                // handleKeyDownPress={this.handleKeyDownPress}
                handleAnnotationWikiSelect={this.handleAnnotationWikiSelect}
                handleAnnotationPortalSelect={this.handleAnnotationPortalSelect}
                handleAnnotationPrevious={this.handleAnnotationPrevious}
                handleAnnotationNext={this.handleAnnotationNext}
                handleAudioPlay={this.handleAudioPlay}
                handleAudioPreviousSong={this.handleAudioPreviousSong}
                handleAudioNextSong={this.handleAudioNextSong}
                handleAudioOptionsToggle={this.handleAudioOptionsToggle}
                handleAudioSliderMouseOrTouchBegin={this.handleAudioSliderMouseOrTouchBegin}
                handlePlayerTimeChange={this.handlePlayerTimeChange}
                handlePlayerNextSong={this.handlePlayerNextSong}
                handlePlayerTimeReset={this.handlePlayerTimeReset}
                handleDotToggle={this.handleDotToggle}
                handleDotsSectionToggle={this.handleDotsSectionToggle}
                handleLyricSectionExpand={this.handleLyricSectionExpand}
                handleLyricVerseBarSelect={this.handleLyricVerseBarSelect}
                handleLyricPlay={this.handleLyricPlay}
                handleLyricVerseSelect={this.handleLyricVerseSelect}
                handleLyricVerseInteractivate={this.handleLyricVerseInteractivate}
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
                handleWikiToggle={this.handleWikiToggle}
            />
        )
    }
}

export default EventManager
