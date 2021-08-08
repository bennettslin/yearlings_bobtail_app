// Section to show song tip.
import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import TipsToggle from './Toggle'
import Texts from '../Texts'
import { getSongTipText } from '../../endpoint/album/tips'
import { mapLyricSongIndex } from '../../redux/lyric/selector'
import './style'

const Tips = () => {
    const lyricSongIndex = useSelector(mapLyricSongIndex)

    return (

        <div className={cx(
            'Tips',
            'fontSize__verse',
        )}>
            <TipsToggle inPopup />
            <Texts {...{ text: getSongTipText(lyricSongIndex) }} />
        </div>
    )
}

export default Tips
