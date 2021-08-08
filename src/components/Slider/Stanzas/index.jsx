// Static field that shows the song stanzas in the slider.

import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import SliderStanza from './Stanza'
import { getStanzaIndices } from '../../../api/album/stanzas'
import { mapLyricSongIndex } from '../../../redux/lyric/selector'

const SliderStanzas = () => {
    const lyricSongIndex = useSelector(mapLyricSongIndex)

    return (
        <div className={cx(
            'SliderStanzas',
            'abF',
        )}>
            {getStanzaIndices(lyricSongIndex).map(stanzaIndex => (
                <SliderStanza
                    {...{
                        key: stanzaIndex,
                        stanzaIndex,
                    }}
                />
            ))}
        </div>
    )
}

export default memo(SliderStanzas)
