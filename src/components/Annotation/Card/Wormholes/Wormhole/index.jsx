// Component to show individual wormhole in wormholes block.
import React, { useRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import SongDispatcher from '../../../../../dispatchers/Song'
import Texts from '../../../../Texts'
import Button from '../../../../Button'
import { ENTER } from '../../../../../constants/access'
import { WORMHOLE_BUTTON_KEY } from '../../../../../constants/buttons'
import { WORMHOLE } from '../../../../../constants/dots'
import {
    EAR_COLUMN_KEYS,
    LYRIC,
    LYRIC_CENTRE,
} from '../../../../../constants/lyrics'
import { getIndexedTitleForSong } from '../../../../../endpoint/album/songs'
import { getWormholeLinkForWormhole } from '../../../../../endpoint/album/wormholes'
import { getVerse } from '../../../../../endpoint/album/verses'
import { mapLyricSongIndex } from '../../../../../redux/lyric/selector'

const AnnotationWormhole = ({
    isAccessedShown,
    annotationIndex,
    wormholeLinkIndex,

}) => {
    const
        dispatchSong = useRef(),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        wormholeLink = getWormholeLinkForWormhole(
            lyricSongIndex,
            annotationIndex,
            wormholeLinkIndex,
        ),
        {
            selectedSongIndex: wormholeSongIndex,
            selectedAnnotationIndex: wormholeAnnotationIndex,
            selectedVerseIndex: wormholeVerseIndex,
            earColumnIndex: wormholeColumnIndex,

            // Default if no wormhole prefix.
            wormholePrefix = 'wormhole to',
        } = wormholeLink,

        songTitle = getIndexedTitleForSong(wormholeSongIndex),
        verseObject = getVerse(wormholeSongIndex, wormholeVerseIndex),
        columnKey = EAR_COLUMN_KEYS[wormholeColumnIndex],
        text =
            verseObject[LYRIC] ||
            verseObject[LYRIC_CENTRE] ||
            verseObject[columnKey]

    const handleButtonClick = () => {
        dispatchSong.current(wormholeLink)
    }

    return (
        <div className="AnnotationWormhole">

            {/* Wrap button so it won't get squished if text wraps. */}
            <div
                {...{
                    className: cx(
                        'AnnotationWormhole__button',
                    ),
                }}
            >
                <Button
                    isBrightHover
                    {...{
                        // This gives it the wormhole colour styling.
                        className: WORMHOLE,
                        accessKey: ENTER,
                        isAccessed: isAccessedShown,
                        buttonName: WORMHOLE_BUTTON_KEY,
                        handleButtonClick,
                    }}
                />
            </div>

            <div className="AnnotationWormhole__text">
                <div className="AnnotationWormhole__title">
                    {wormholePrefix} <strong>{songTitle}</strong>
                </div>

                <div className="AnnotationWormhole__verse">
                    {'\u201c'}
                    <Texts
                        isWormholeDestinationVerse
                        {...{
                            text,
                            wormholeAnnotationIndex,
                        }}
                    />
                    {'\u201d'}
                </div>
            </div>
            <SongDispatcher {...{ ref: dispatchSong }} />
        </div>
    )
}

AnnotationWormhole.propTypes = {
    isAccessedShown: PropTypes.bool.isRequired,
    annotationIndex: PropTypes.number.isRequired,
    wormholeLinkIndex: PropTypes.number.isRequired,
}

export default memo(AnnotationWormhole)
