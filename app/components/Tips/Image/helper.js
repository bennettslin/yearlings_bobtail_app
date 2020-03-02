import Didi from './01_Didi'
import WillyTheCocoa from './02_WillyTheCocoa'
import DearSaskia from './03_DearSaskia'
import Odin from './04_Odin'
import PchelkasStarryJourney from './05_PchelkasStarryJourney'
import AshWednesday from './06_AshWednesday'
import M from './07_M'
import GoodNightSita from './08_GoodNightSita'
import GrasshoppersLieHeavy from './09_GrasshoppersLieHeavy'
import Constellations from './10_Constellations'
import LookBackInAnger from './11_LookBackInAnger'
import Garryowen from './12_Garryowen'
import OnAGoldenCord from './13_OnAGoldenCord'
import Kyon from './14_Kyon'
import UncannyValleyBoy from './15_UncannyValleyBoy'
import Cremated from './16_Cremated'
import VeganProclamation from './17_VeganProclamation'
import My100000thDream from './18_My100000thDream'

const TIP_IMAGES = [
    Didi,
    WillyTheCocoa,
    DearSaskia,
    Odin,
    PchelkasStarryJourney,
    AshWednesday,
    M,
    GoodNightSita,
    GrasshoppersLieHeavy,
    Constellations,
    LookBackInAnger,
    Garryowen,
    OnAGoldenCord,
    Kyon,
    UncannyValleyBoy,
    Cremated,
    VeganProclamation,
    My100000thDream
]

export const getTipImage = songIndex => {
    return TIP_IMAGES[songIndex - 1]
}
