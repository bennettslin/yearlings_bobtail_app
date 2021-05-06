import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import TipsHand from '../../Tips/Hand'
import {
    getShowAnnotationTip,
    getShowActivatedTip,
    getShowStanzaTabTip,
    getShowWormholesTip,
    getShowWikiTip,
} from '../../../api/album/tips'
import { mapLyricSongIndex } from '../../../redux/lyric/selector'
import {
    ANNOTATION,
    ACTIVATED_VERSE,
    STANZA_TAB,
    WORMHOLES,
    WIKI,
} from '../../../constants/tips'

const UnitTipsHands = ({
    didMount,
    unitIndex,

}) => {
    const
        lyricSongIndex = useSelector(mapLyricSongIndex),
        showAnnotationTip = getShowAnnotationTip(lyricSongIndex, unitIndex),
        showStanzaTabTip = getShowStanzaTabTip(lyricSongIndex, unitIndex),
        showActivatedTip = getShowActivatedTip(lyricSongIndex, unitIndex),
        showWormholesTip = getShowWormholesTip(lyricSongIndex, unitIndex),
        showWikiTip = getShowWikiTip(lyricSongIndex, unitIndex)

    return didMount && (
        <>
            {showAnnotationTip && (
                <TipsHand {...{ tipType: ANNOTATION }} />
            )}
            {showActivatedTip && (
                <TipsHand {...{ tipType: ACTIVATED_VERSE }} />
            )}
            {showStanzaTabTip && (
                <TipsHand reverse {...{ tipType: STANZA_TAB }} />
            )}
            {showWormholesTip && (
                <TipsHand {...{ tipType: WORMHOLES }} />
            )}
            {showWikiTip && (
                <TipsHand reverse {...{ tipType: WIKI }} />
            )}
        </>
    )
}

UnitTipsHands.propTypes = {
    didMount: PropTypes.bool.isRequired,
    unitIndex: PropTypes.number.isRequired,
}

export default memo(getDidMountHoc(UnitTipsHands))
