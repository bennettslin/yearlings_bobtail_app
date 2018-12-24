import Song_00 from './00_Prologue'
import Song_01 from './01_Didi'
import Song_02 from './02_WillyTheCocoa'
import Song_03 from './03_DearSaskia'
import Song_04 from './04_Odin'
import Song_05 from './05_PchelkasStarryJourney'
import Song_06 from './06_AshWednesday'
import Song_07 from './07_M'
import Song_08 from './08_GoodNightSita'
import Song_09 from './09_GrasshoppersLieHeavy'
import Song_10 from './10_Constellations'
import Song_11 from './11_LookBackInAnger'
import Song_12 from './12_Garryowen'
import Song_13 from './13_OnAGoldenCord'
import Song_14 from './14_Kyon'
import Song_15 from './15_UncannyValleyBoy'
import Song_16 from './16_Cremated'
import Song_17 from './17_VeganProclamation'
import Song_18 from './18_My100000thDream'
import Song_19 from './19_Epilogue'

import { addSongIndicesToSongs } from './helpers/song'
import { addVerseIndicesAndConfigsToSongs } from './helpers/verse'
import { addHasSideCardStatusToSongs } from './helpers/unit'
import { addStanzaTypesToSongs } from './helpers/stanzaType'
import { addStanzaConfigsToSongs } from './helpers/stanzaConfig'
import {
    addSceneConfigsToSongs,
    addSceneIndicesToVerseConfigs
} from './helpers/scene'

const albumSongs = [
    Song_00,
    Song_01,
    Song_02,
    Song_03,
    Song_04,
    Song_05,
    Song_06,
    Song_07,
    Song_08,
    Song_09,
    Song_10,
    Song_11,
    Song_12,
    Song_13,
    Song_14,
    Song_15,
    Song_16,
    Song_17,
    Song_18,
    Song_19
]

logParse('Begin adding metadata to songs.')

addSongIndicesToSongs(albumSongs)
addVerseIndicesAndConfigsToSongs(albumSongs)
addHasSideCardStatusToSongs(albumSongs)
addStanzaTypesToSongs(albumSongs)

// This needs to come after verse configs.
addStanzaConfigsToSongs(albumSongs)
addSceneConfigsToSongs(albumSongs)

// This needs to come after verse configs and scene configs.
addSceneIndicesToVerseConfigs(albumSongs)

logParse('End adding metadata to songs.')

export default albumSongs
