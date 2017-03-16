import React, { Component } from 'react'
import SwitchManager from './switch-manager'

class EventManager extends Component {

    constructor(props) {
        super(props)

        this.handleAudioPreviousSong = this.handleAudioPreviousSong.bind(this)
        this.handleAudioNextSong = this.handleAudioNextSong.bind(this)
        this.handleLyricColumnExpand = this.handleLyricColumnExpand.bind(this)
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

    handleAudioPlayButtonClick() {

    }

    handleAudioOptionsButtonClick() {

    }

    handleAudioPreviousSong(e) {
        this.props.selectSong(e, undefined, -1)
    }

    handleAudioNextSong(e) {
        this.props.selectSong(e, undefined, 1)
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

    handleScoreToggleButtonClick() {

    }

    /********
     * TIPS *
     ********/

    handleTipsToggleButtonClick() {

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
                handleAudioPlayButtonClick={null}
                handleAudioOptionsButtonClick={null}
                handleAudioPreviousSong={this.handleAudioPreviousSong}
                handleAudioNextSong={this.handleAudioNextSong}
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
                handleScoreToggleButtonClick={null}
                handleTipsToggleButtonClick={null}
                handleTitleSelect={this.handleTitleSelect}
                handleWikiToggleButtonClick={null}
            />
        )
    }
}

export default EventManager
