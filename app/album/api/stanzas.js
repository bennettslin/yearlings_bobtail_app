import { getSong } from 'album/api/songs'

export const getSongStanzaConfigs = (songIndex) => {
    const { songStanzaConfigs } = getSong(songIndex)
    return songStanzaConfigs || []
}
