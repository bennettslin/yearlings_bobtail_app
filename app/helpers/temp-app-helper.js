export default {

    // // Focus for accessibility.
    // _focusApp(element = this.myApp) {
    //     element.focus()
    // }

    // pressDownKey(keyName) {
    //
    //     // If universal key, handle and return.
    //     if (AccessHelper.handleKeyIfUniversal({
    //         keyName,
    //         selectOverview: this.selectOverview,
    //         selectDotsExpand: this.selectDotsExpand,
    //         selectAudioOption: this.selectAudioOption,
    //         selectTips: this.selectTips,
    //         togglePlay: this.togglePlay,
    //         toggleAdmin: this.toggleAdmin,
    //         windowResize: this.windowResize,
    //         selectedTimePlayed: this.props.selectedTimePlayed,
    //         selectLyricExpand: this.selectLyricExpand,
    //         selectNavExpand: this.selectNavExpand,
    //         selectBookColumn: this.selectBookColumn,
    //         selectTime: this.selectTime
    //     })) {
    //         return
    //     }
    //
    //     // If Escape to close popup, close it and return.
    //     if (keyName === ESCAPE) {
    //         const popupWasOpen = this._closePopupIfOpen({ accessOff: true })
    //
    //         if (popupWasOpen) {
    //             return
    //         }
    //     }
    //
    //     // If access is off, any key besides Escape turns it on.
    //     if (!this.props.accessedOn) {
    //         if (keyName !== ESCAPE) {
    //             this._handleAccessOn()
    //         }
    //
    //     // If access is on...
    //     } else {
    //         // Escape turns off access.
    //         if (keyName === ESCAPE) {
    //             this._handleAccessOn()
    //         }
    //     }
    // }

    _selectDefaultSectionElementIndex(accessedSectionIndex, selectedSongIndex) {
        const accessedSectionKey = SECTION_KEYS[accessedSectionIndex]
        let newState

        switch (accessedSectionKey) {
            case NAV_SECTION:
                this.selectBookColumn(undefined, true, selectedSongIndex)
                newState = { accessedSongIndex: this.props.selectedSongIndex }
                break
            case LYRICS_SECTION:
                newState = {
                    accessedVerseIndex: this.props.selectedVerseIndex,
                    accessedAnnotationIndex: getAnnotationIndexForVerseIndex(this.props, this.props.selectedVerseIndex)
                 }
                break
            default:
                break
        }

        if (newState) {
             this.setState(newState)
        }
    },

    selectDot(selectedDotKey) {

        const isSelected = !this.props.selectedDotKeys[selectedDotKey]
        this.props.selectDotKey(selectedDotKey, isSelected)

        // Close wiki popup if deselected.
        if (!isSelected && selectedDotKey === REFERENCE && this.props.selectedWikiIndex) {
            this._closePopupIfOpen({})
        }

        // Advance to the next accessible annotation and popup anchor, if needed.
        this.setState({
            accessedAnnotationIndex: getAnnotationIndexForDirection(this.props, this.state.accessedAnnotationIndex),
            accessedPopupAnchorIndex: getPopupAnchorIndexForDirection(this.props, this.state.accessedPopupAnchorIndex)
        })

        // If this is the last selected dot key, then close the annotation.
        if (!isSelected && allDotsDeselected(this.props, selectedDotKey)) {
            this.selectAnnotation()
        }
    },

    _closePopupIfOpen({
        exemptSection,
        closedFromSpace,
        overrideClosePopupsDefaultWithSection,
        selectedAnnotationIndex = this.props.selectedAnnotationIndex
    }) {
        const { selectedWikiIndex,
                selectedScoreIndex,
                selectedDotsIndex,
                selectedOverviewIndex } = this.props

        let popupWasOpen = false,
            collapseLyric = true


        this.selectNavExpand(undefined, 0)
        this.selectDotsExpand(undefined, 0)

        if (OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN) {
            this.selectOverview(undefined, undefined, HIDDEN)
        }

        // Hide dots.
        if (exemptSection !== DOTS_SECTION && selectedDotsIndex === 1) {
            this.selectDotsExpand({ bypassClosingPopups: true, overrideClosePopupsDefaultWithSection }, 0)

            /**
             * If dots popup was closed from space bar, leave lyric column
             * expanded.
             */
            if (closedFromSpace) {
                collapseLyric = false
            }

            popupWasOpen = true
        }

        if (selectedScoreIndex) {
            this.selectScore(undefined, 0)
        }

        // Hide wiki or annotation.
        if (selectedAnnotationIndex) {
            if (selectedWikiIndex) {
                if (exemptSection !== WIKI_SECTION) {
                    this.selectWiki({ bypassClosingPopups: true, overrideClosePopupsDefaultWithSection })
                }
            } else if (selectedScoreIndex) {
                this.selectScore()
            } else {
                if (exemptSection !== ANNOTATION_SECTION && exemptSection !== WIKI_SECTION) {
                    this.selectAnnotation({ bypassClosingPopups: true, overrideClosePopupsDefaultWithSection })
                    /**
                    * If closing annotation, set lyric element to annotation, and
                    * set accessed annotation index to closed annotation.
                    */

                    this.setState({
                        accessedLyricElement: LYRIC_ANNOTATION_ELEMENT,
                        accessedAnnotationIndex: selectedAnnotationIndex,
                        accessedVerseIndex: getVerseIndexForAnnotationIndex({
                            props: this.props,
                            index: selectedAnnotationIndex
                        })
                    })
                }
            }

            /**
             * If annotation popup was closed from space bar, leave lyric
             * column expanded.
             */
            if (closedFromSpace) {
                collapseLyric = false
            }

            popupWasOpen = true
        }

        /**
         * If audio section is accessed, it's fine to keep lyric expanded. Also,
         * annotation and dots popups will no longer collapse the lyric column
         * if expanded.
         */
        if (collapseLyric && this.state.isLyricExpanded && exemptSection !== AUDIO_SECTION && exemptSection !== LYRICS_SECTION && exemptSection !== ANNOTATION_SECTION && exemptSection !== DOTS_SECTION) {
            this.selectLyricExpand(undefined, false)
            popupWasOpen = true
        }

        return popupWasOpen
    }


}
