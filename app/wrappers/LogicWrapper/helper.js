import { getSongVerseConfigs } from '../../album/api/verses'

export const getStanzaIndexForVerseIndex = (songIndex, verseIndex) => {

    const songVerseConfigs = getSongVerseConfigs(songIndex)
    return songVerseConfigs.length ?
        songVerseConfigs[verseIndex].stanzaIndex :
        0
}

export const getCursorVerseIndex = ({
    sliderVerseIndex,
    activatedVerseIndex,
    lyricVerseIndex
}) => {
    if (sliderVerseIndex >= 0) {
        return sliderVerseIndex
    } else if (activatedVerseIndex >= 0) {
        return activatedVerseIndex
    } else {
        return lyricVerseIndex
    }
}
