import { getSongObject } from 'album/api/songs'

export const getSongStanzaConfigs = (songIndex) => {
    const songObject = getSongObject(songIndex),
        { songStanzaConfigs } = songObject

    return songStanzaConfigs || []
}
