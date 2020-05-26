// Static field that shows the song stanzas in the slider.

import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import StanzaHoc from '../../Stanzas/Hoc'
import SliderStanza from './Stanza'
import { getStanzaIndices } from '../../../album/api/stanzas'
import { LYRIC_SONG_INDEX_SELECTOR } from '../../../redux/lyric/selectors'

const SliderStanzas = () => {
    const lyricSongIndex = useSelector(LYRIC_SONG_INDEX_SELECTOR)

    return (
        <div className={cx(
            'SliderStanzas',
            'abF'
        )}>
            {getStanzaIndices(lyricSongIndex).map(stanzaIndex => (
                <StanzaHoc
                    {...{
                        key: stanzaIndex,
                        stanzaIndex,
                        StanzaComponent: SliderStanza
                    }}
                />
            ))}
        </div>
    )
}

export default SliderStanzas
