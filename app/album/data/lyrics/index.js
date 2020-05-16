import _00_Prologue from './00_Prologue'
import _01_Didi from './01_Didi'
import _02_WillyTheCocoa from './02_WillyTheCocoa'
import _03_DearSaskia from './03_DearSaskia'
import _04_Odin from './04_Odin'
import _05_PchelkasStarryJourney from './05_PchelkasStarryJourney'
import _06_AshWednesday from './06_AshWednesday'
import _07_M from './07_M'
import _08_GoodNightSita from './08_GoodNightSita'
import _09_GrasshoppersLieHeavy from './09_GrasshoppersLieHeavy'
import _10_Constellations from './10_Constellations'
import _11_LookBackInAnger from './11_LookBackInAnger'
import _12_Garryowen from './12_Garryowen'
import _13_OnAGoldenCord from './13_OnAGoldenCord'
import _14_Kyon from './14_Kyon'
import _15_UncannyValleyBoy from './15_UncannyValleyBoy'
import _16_Cremated from './16_Cremated'
import _17_VeganProclamation from './17_VeganProclamation'
import _18_My100000thDream from './18_My100000thDream'
import _19_Epilogue from './19_Epilogue'

import { addSongIndices } from './helpers/song'
import {
    addIndexedVerses,
    addVerseConfigs
} from './helpers/verse'
import { addHasSideCardStatus } from './helpers/unit'
import { addStanzaTypes } from './helpers/stanzaType'
import { addStanzaConfigs } from './helpers/stanzaConfig'
import {
    addSceneConfigs,
    addSceneIndicesToVerseConfigs
} from './helpers/scene'
import { addAnnotations } from './helpers/annotation'
import {
    addDotUnitsCount,
    addPluralCardsCount
} from './helpers/admin'

const songs = [
    _00_Prologue,
    _01_Didi,
    _02_WillyTheCocoa,
    _03_DearSaskia,
    _04_Odin,
    _05_PchelkasStarryJourney,
    _06_AshWednesday,
    _07_M,
    _08_GoodNightSita,
    _09_GrasshoppersLieHeavy,
    _10_Constellations,
    _11_LookBackInAnger,
    _12_Garryowen,
    _13_OnAGoldenCord,
    _14_Kyon,
    _15_UncannyValleyBoy,
    _16_Cremated,
    _17_VeganProclamation,
    _18_My100000thDream,
    _19_Epilogue
]

logServe({
    log: 'Begin parsing album.',
    action: 'begin',
    label: 'album'
})

addSongIndices(songs)

songs.forEach(song => {
    addIndexedVerses(song)

    // This needs to come after indexed verses.
    addVerseConfigs(song)
    addHasSideCardStatus(song)
    addStanzaTypes(song)

    // This needs to come after verse configs.
    addStanzaConfigs(song)
    addSceneConfigs(song)

    // This needs to come after verse configs and scene configs.
    addSceneIndicesToVerseConfigs(song)

    addAnnotations(song)

    addDotUnitsCount(song)
    addPluralCardsCount(song)
})

logServe({
    log: 'End parsing album.',
    action: 'end',
    label: 'album'
})

export default songs
