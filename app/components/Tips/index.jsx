// Section to show song tip.

import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'

import TipsToggle from './Toggle'
import Texts from '../Texts'

import { getSongTipText } from '../../album/data/tips'

const mapStateToProps = ({
    lyricStore: { lyricSongIndex }
}) => ({
    lyricSongIndex
})

const Tips = () => {
    const { lyricSongIndex } = useSelector(mapStateToProps)

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
