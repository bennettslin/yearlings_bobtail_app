import React, { Component } from 'react'
import SwitchManager from './switch-manager'

class EventManager extends Component {

    constructor(props) {
        super(props)
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

    handleAudioPreviousSongButtonClick() {

    }

    handleAudioNextSongButtonClick() {

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

    handleLyricColumnExpandButtonClick() {

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

    handleTitleClick() {

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
                handleAudioPreviousSongButtonClick={null}
                handleAudioNextSongButtonClick={null}
                handleAudioSliderMouseOrTouch={null}
                handleDotButtonClick={null}
                handleDotsToggleButtonClick={null}
                handleLyricColumnExpandButtonClick={null}
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
                handleTitleClick={null}
                handleWikiToggleButtonClick={null}
            />
        )
    }
}

/**
    onSongClick={this.selectSong}
    onSongFromPortalClick={this.selectFromPortal}
    onWikiUrlClick={this.selectWiki}
    onScoreClick={this.selectScore}
    onAnnotationClick={this.selectAnnotation}
    onOverviewClick={this.selectOverview}
    onTimeChange={this.selectTime}
    onAudioOptionClick={this.selectAudioOption}
    onPlayClick={this.togglePlay}
    onVerseClick={this.selectVerse}
    onLyricAudioButtonClick={this.handleLyricAudioButtonClick}
    onInteractivatedVerseClick={this.interactivateVerse}
    onDotClick={this.selectDot}
    onLyricColumnClick={this.selectLyricColumn}
    onPopupContainerClick={this.handlePopupContainerClick}
    onLyricExpandClick={this.selectLyricExpand}
    onNavExpandClick={this.selectNavExpand}
    onBookColumnClick={this.selectBookColumn}
    onDotsExpandClick={this.selectDotsExpand}
    onTipsClick={this.selectTips}
    onSelectVerseElement={this.updateSelectedVerseElement}
    onSliderSelectVerseElement={this.updateSliderSelectedVerseElement}
    onLyricSectionScroll={this.handleLyricSectionScroll}
    onVerseBarClick={this.handleVerseBarClick}
    onSliderMouseOrTouch={this._handleSliderMouseOrTouch}
 */

export default EventManager
