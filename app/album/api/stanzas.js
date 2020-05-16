import { getSong } from './songs'

export const getSongStanzaConfigs = (songIndex) => {
    const { songStanzaConfigs } = getSong(songIndex)
    return songStanzaConfigs || []
}

export const getSongStanzasCount = (songIndex) => {
    const { songStanzaConfigs } = getSong(songIndex)
    return songStanzaConfigs ?
        songStanzaConfigs.length :
        0
}

export const getStanzaConfig = (songIndex, stanzaIndex) => {
    const songStanzaConfigs = getSongStanzaConfigs(songIndex)

    return songStanzaConfigs ?
        songStanzaConfigs[stanzaIndex] :
        null
}
