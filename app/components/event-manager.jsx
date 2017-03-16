import React, { Component } from 'react'
import SwitchManager from './switch-manager'

class EventManager extends Component {

    constructor(props) {
        super(props)

        this.handleAudioPlay = this.handleAudioPlay.bind(this)
        this.handleAudioPreviousSong = this.handleAudioPreviousSong.bind(this)
        this.handleAudioNextSong = this.handleAudioNextSong.bind(this)
        this.handleAudioOptionsToggle = this.handleAudioOptionsToggle.bind(this)
        this.handleLyricColumnExpand = this.handleLyricColumnExpand.bind(this)
        this.handleScoreToggle = this.handleScoreToggle.bind(this)
        this.handleTipsToggle = this.handleTipsToggle.bind(this)
        this.handleTitleSelect = this.handleTitleSelect.bind(this)
    }

    /**************
     * ANNOTATION *
     **************/

    handleAnnotationWikiAnchorClick() {

    }

    handleAnnotationPortalAnchorClick() {

    }

    handleAnnotationPreviousButtonClick() {

    }

    handleAnnotationNextButtonClick() {

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

    handleAudioSliderMouseOrTouch() {

    }

    /*******
     * DOT *
     *******/

    handleDotButtonClick() {

    }

    /********
     * DOTS *
     ********/

    handleDotsToggleButtonClick() {

    }


    /*********
     * LYRIC *
     *********/

    handleLyricColumnExpand(e) {
        this.props.selectLyricExpand(e)
    }

    handleLyricVerseBarClick() {

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

    handleLyricEarButtonClick() {

    }

    /*******
     * NAV *
     *******/

    handleNavToggleButtonClick() {

    }

    handleNavSongButtonClick() {

    }

    handleNavBookButtonClick() {

    }

    /************
     * OVERVIEW *
     ************/

    handleOverviewToggleButtonClick() {

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

    handleWikiToggleButtonClick() {

    }

    render() {
        return (
            <SwitchManager {...this.props}
                handleAnnotationWikiAnchorClick={null}
                handleAnnotationPortalAnchorClick={null}
                handleAnnotationPreviousButtonClick={null}
                handleAnnotationNextButtonClick={null}
                handleAudioPlay={this.handleAudioPlay}
                handleAudioPreviousSong={this.handleAudioPreviousSong}
                handleAudioNextSong={this.handleAudioNextSong}
                handleAudioOptionsToggle={this.handleAudioOptionsToggle}
                handleAudioSliderMouseOrTouch={null}
                handleDotButtonClick={null}
                handleDotsToggleButtonClick={null}
                handleLyricColumnExpand={this.handleLyricColumnExpand}
                handleLyricVerseBarClick={null}
                handleLyricAudioButtonClick={null}
                handleLyricNavigationButtonClick={null}
                handleLyricAnchorClick={null}
                handleLyricLineClick={null}
                handleLyricEarButtonClick={null}
                handleNavToggleButtonClick={null}
                handleNavSongButtonClick={null}
                handleNavBookButtonClick={null}
                handleOverviewToggleButtonClick={null}
                handleScoreToggle={this.handleScoreToggle}
                handleTipsToggle={this.handleTipsToggle}
                handleTitleSelect={this.handleTitleSelect}
                handleWikiToggleButtonClick={null}
            />
        )
    }
}

export default EventManager
