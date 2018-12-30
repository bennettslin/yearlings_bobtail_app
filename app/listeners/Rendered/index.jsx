// Singleton to listen for song change.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateRenderedStore } from 'flux/rendered/action'

import SongChangeDispatcher from '../../handlers/SongChange/Dispatcher'

import { populateRefs } from 'helpers/ref'

class RenderedListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        updateRenderedStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._prepareForSongChangeUnrender(prevProps)
        this._checkAnnotationSelect(prevProps)
        this._checkVerseSelect(prevProps)
    }

    _prepareForSongChangeUnrender(prevProps) {
        const
            { selectedSongIndex } = this.props,
            { selectedSongIndex: prevSongIndex } = prevProps

        if (selectedSongIndex !== prevSongIndex) {
            this.dispatchSongChangeUnrenderable(
                this._prepareForSongChangeRender
            )
        }
    }

    _prepareForSongChangeRender = () => {
        const {
            selectedSongIndex,
            selectedVerseIndex,
            selectedAnnotationIndex
        } = this.props

        this.props.updateRenderedStore({
            renderedSongIndex: selectedSongIndex,
            renderedVerseIndex: selectedVerseIndex,
            renderedAnnotationIndex: selectedAnnotationIndex
        })
    }

    _checkAnnotationSelect(prevProps) {
        const
            {
                selectedSongIndex,
                selectedAnnotationIndex
            } = this.props,
            {
                selectedSongIndex: prevSongIndex,
                selectedAnnotationIndex: prevAnnotationIndex
            } = prevProps

        /**
         * If annotation changed within the same song, change rendered index
         * right away.
         */
        if (
            selectedSongIndex === prevSongIndex &&
            selectedAnnotationIndex !== prevAnnotationIndex
        ) {
            this.props.updateRenderedStore({
                renderedAnnotationIndex: selectedAnnotationIndex
            })
        }
    }

    _checkVerseSelect(prevProps) {
        const
            {
                selectedSongIndex,
                selectedVerseIndex
            } = this.props,
            {
                selectedSongIndex: prevSongIndex,
                selectedVerseIndex: prevVerseIndex
            } = prevProps

        /**
         * If verse changed within the same song, change index to be rendered
         * right away.
         */
        if (
            selectedSongIndex === prevSongIndex &&
            selectedVerseIndex !== prevVerseIndex
        ) {
            /**
             * If selecting or changing verse in same song, change index to be
             * rendered right away.
             */
            this.props.updateRenderedStore({
                renderedVerseIndex: selectedVerseIndex
            })
        }
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <SongChangeDispatcher {...{ getRefs: this._getRefs }} />
        )
    }
}

const mapStateToProps = ({
    selectedStore: {
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex
    }
}) => ({
    selectedSongIndex,
    selectedVerseIndex,
    selectedAnnotationIndex
})

export default connect(
    mapStateToProps,
    {
        updateRenderedStore
    }
)(RenderedListener)
