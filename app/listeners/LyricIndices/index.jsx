import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateActivatedStore } from '../../redux/activated/action'
import { updateLyricStore } from '../../redux/lyric/action'

import { populateRefs } from 'helpers/ref'

class LyricIndicesListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        activatedVerseIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        updateActivatedStore: PropTypes.func.isRequired,
        updateLyricStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkAnnotationSelectForSameSong(prevProps)
        this._checkVerseSelectForSameSong(prevProps)
    }

    _checkAnnotationSelectForSameSong(prevProps) {
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
         * If annotation changed within the same song, change lyric index right
         * away.
         */
        if (
            selectedSongIndex === prevSongIndex &&
            selectedAnnotationIndex !== prevAnnotationIndex
        ) {
            this.props.updateLyricStore({
                lyricAnnotationIndex: selectedAnnotationIndex
            })
        }
    }

    _checkVerseSelectForSameSong(prevProps) {
        const
            {
                activatedVerseIndex,
                selectedSongIndex,
                selectedVerseIndex
            } = this.props,
            {
                selectedSongIndex: prevSongIndex,
                selectedVerseIndex: prevVerseIndex
            } = prevProps

        /**
         * If verse changed within the same song, change lyric index right
         * away.
         */
        if (
            selectedSongIndex === prevSongIndex &&
            selectedVerseIndex !== prevVerseIndex
        ) {
            this.props.updateLyricStore({
                lyricVerseIndex: selectedVerseIndex
            })

            /**
             * If selected verse index plays on to become the activated verse
             * index, then reset activation.
             */
            if (selectedVerseIndex === activatedVerseIndex) {
                this.props.updateActivatedStore()
            }
        }
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    activatedStore: { activatedVerseIndex },
    selectedStore: {
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex
    }
}) => ({
    activatedVerseIndex,
    selectedSongIndex,
    selectedVerseIndex,
    selectedAnnotationIndex
})

export default connect(
    mapStateToProps,
    {
        updateActivatedStore,
        updateLyricStore
    }
)(LyricIndicesListener)
