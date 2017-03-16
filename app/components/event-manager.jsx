import React, { Component } from 'react'
import SwitchManager from './switch-manager'

class EventManager extends Component {

    constructor(props) {
        super(props)

        this.handleAnnotationPrevious = this.handleAnnotationPrevious.bind(this)
        this.handleAnnotationNext = this.handleAnnotationNext.bind(this)
        this.handleAnnotationWikiSelect = this.handleAnnotationWikiSelect.bind(this)
        this.handleAudioPlay = this.handleAudioPlay.bind(this)
        this.handleAudioPreviousSong = this.handleAudioPreviousSong.bind(this)
        this.handleAudioNextSong = this.handleAudioNextSong.bind(this)
        this.handleAudioOptionsToggle = this.handleAudioOptionsToggle.bind(this)
        this.handleAudioSliderMouseOrTouch = this.handleAudioSliderMouseOrTouch.bind(this)
        this.handleDotToggle = this.handleDotToggle.bind(this)
        this.handleDotsSectionToggle = this.handleDotsSectionToggle.bind(this)
        this.handleLyricSectionExpand = this.handleLyricSectionExpand.bind(this)
        this.handleLyricColumnSelect = this.handleLyricColumnSelect.bind(this)
        this.handleLyricVerseBarSelect = this.handleLyricVerseBarSelect.bind(this)
        this.handleNavExpand = this.handleNavExpand.bind(this)
        this.handleNavSongSelect = this.handleNavSongSelect.bind(this)
        this.handleNavBookSelect = this.handleNavBookSelect.bind(this)
        this.handleOverviewToggle = this.handleOverviewToggle.bind(this)
        this.handleScoreToggle = this.handleScoreToggle.bind(this)
        this.handleTipsToggle = this.handleTipsToggle.bind(this)
        this.handleTitleSelect = this.handleTitleSelect.bind(this)
        this.handleWikiToggle = this.handleWikiToggle.bind(this)
    }

    /**************
     * ANNOTATION *
     **************/

    handleAnnotationWikiSelect(e, selectedWikiIndex) {
        this.props.selectWiki(e, selectedWikiIndex)
    }

    handleAnnotationPortalAnchorClick() {

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

    handleAudioSliderMouseOrTouch(e) {
        this.props.mouseOrTouchSlider(e)
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

    handleLyricAudioButtonClick() {

    }

    handleLyricNavigationButtonClick() {

    }

    handleLyricAnchorClick() {

    }

    handleLyricLineClick() {

    }

    handleLyricColumnSelect(e) {
        this.props.selectLyricColumn(e)
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
        return (
            <SwitchManager {...this.props}
                handleAnnotationWikiSelect={this.handleAnnotationWikiSelect}
                handleAnnotationPortalAnchorClick={null}
                handleAnnotationPrevious={this.handleAnnotationPrevious}
                handleAnnotationNext={this.handleAnnotationNext}
                handleAudioPlay={this.handleAudioPlay}
                handleAudioPreviousSong={this.handleAudioPreviousSong}
                handleAudioNextSong={this.handleAudioNextSong}
                handleAudioOptionsToggle={this.handleAudioOptionsToggle}
                handleAudioSliderMouseOrTouch={this.handleAudioSliderMouseOrTouch}
                handleDotToggle={this.handleDotToggle}
                handleDotsSectionToggle={this.handleDotsSectionToggle}
                handleLyricSectionExpand={this.handleLyricSectionExpand}
                handleLyricVerseBarSelect={this.handleLyricVerseBarSelect}
                handleLyricAudioButtonClick={null}
                handleLyricNavigationButtonClick={null}
                handleLyricAnchorClick={null}
                handleLyricLineClick={null}
                handleLyricColumnSelect={this.handleLyricColumnSelect}
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
