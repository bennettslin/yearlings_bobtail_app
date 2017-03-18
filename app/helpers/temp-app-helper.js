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
    }

}
