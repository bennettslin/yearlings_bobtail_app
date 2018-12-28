import { getSongObject } from 'album/api/songs'

export const getSongStanzaConfigs = (songIndex) => {
    const { songStanzaConfigs } = getSongObject(songIndex)
    return songStanzaConfigs || []
}
