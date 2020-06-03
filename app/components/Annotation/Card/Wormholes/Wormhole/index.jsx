// Component to show individual wormhole in wormholes block.
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import SongDispatcher from '../../../../../handlers/Song/Dispatcher'
import Texts from '../../../../Texts'
import Button from '../../../../Button'
import { ENTER } from '../../../../../constants/access'
import { WORMHOLE_BUTTON_KEY } from '../../../../../constants/buttons'
import {
    EAR_COLUMN_KEYS,
    LYRIC,
    LYRIC_CENTRE
} from '../../../../../constants/lyrics'
import { getIndexedTitleForSong } from '../../../../../api/album/songs'
import { getWormholeLinkForWormhole } from '../../../../../api/album/wormholes'
import { getVerse } from '../../../../../api/album/verses'
import { populateRefs } from '../../../../../helpers/ref'
import { mapLyricSongIndex } from '../../../../../redux/lyric/selectors'

const mapStateToProps = state => {
    const lyricSongIndex = mapLyricSongIndex(state)

    return {
        lyricSongIndex
    }
}

class AnnotationWormhole extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired,

        // From parent.
        isAccessedShown: PropTypes.bool.isRequired,
        annotationIndex: PropTypes.number.isRequired,
        wormholeLinkIndex: PropTypes.number.isRequired
    }

    _getWormholeLink() {
        const {
            lyricSongIndex,
            annotationIndex,
            wormholeLinkIndex
        } = this.props

        return getWormholeLinkForWormhole(
            lyricSongIndex,
            annotationIndex,
            wormholeLinkIndex
        )
    }

    _handleWormholeClick = () => {
        this.dispatchSong(this._getWormholeLink())
    }

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    render() {
        const { isAccessedShown } = this.props,

            // TODO: All this logic should live in a separate component.
            {
                selectedSongIndex: songIndex,
                selectedAnnotationIndex: annotationIndex,
                selectedVerseIndex: verseIndex,
                earColumnIndex: columnIndex,

                // Default if no wormhole prefix.
                wormholePrefix = 'wormhole to'
            } = this._getWormholeLink(),

            songTitle = getIndexedTitleForSong(songIndex),

            verseObject = getVerse(songIndex, verseIndex)

        const
            columnKey = EAR_COLUMN_KEYS[columnIndex],

            text =
                verseObject[LYRIC] ||
                verseObject[LYRIC_CENTRE] ||
                verseObject[columnKey]

        return (
            <div className="AnnotationWormhole">

                {/* Wrap button so it won't get squished if text wraps. */}
                <div
                    {...{
                        className: cx(
                            'AnnotationWormhole__button'
                        )
                    }}
                >
                    <Button
                        isBrightHover
                        {...{
                            accessKey: ENTER,
                            isAccessed: isAccessedShown,
                            buttonName: WORMHOLE_BUTTON_KEY,
                            handleButtonClick: this._handleWormholeClick
                        }}
                    />
                </div>

                <div className="AnnotationWormhole__text">
                    <div className="AnnotationWormhole__title">
                        {wormholePrefix} <strong>{songTitle}</strong>
                    </div>

                    <div className="AnnotationWormhole__verse">
                        <span>{'\u201c'}</span>
                        <Texts
                            isWormholeDestinationVerse
                            {...{
                                text,
                                wormholeAnnotationIndex: annotationIndex
                            }}
                        />
                        <span>{'\u201d'}</span>
                    </div>
                </div>
                <SongDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(AnnotationWormhole)
