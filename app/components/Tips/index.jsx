// Section to show song tip.
import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import TipsToggle from './Toggle'
import Texts from '../Texts'
import { getSongTipText } from '../../album/api/tips'
import { LYRIC_SONG_INDEX_SELECTOR } from '../../redux/lyric/selectors'
import './style'

const Tips = () => {
    const lyricSongIndex = useSelector(LYRIC_SONG_INDEX_SELECTOR)

    return (

        <div className={cx(
            'Tips',
            'fontSize__verse'
        )}>
            <TipsToggle inPopup />
            <Texts {...{ text: getSongTipText(lyricSongIndex) }} />
        </div>
    )
}

export default Tips
