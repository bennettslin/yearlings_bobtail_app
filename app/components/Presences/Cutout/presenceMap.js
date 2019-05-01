import PropTypes from 'prop-types'

import FireHydrant from './Cutouts/FireHydrant'
import PlaygroundSlide from './Cutouts/PlaygroundSlide'
import MirroredSink from './Cutouts/MirroredSink'
import TowelRack from './Cutouts/TowelRack'
import OverpassSignFront from './Cutouts/OverpassSignFront'
import OverpassSignBack from './Cutouts/OverpassSignBack'
import PorchPlantsLeft from './Cutouts/PorchPlantsLeft'
import PorchPlantsRight from './Cutouts/PorchPlantsRight'
import TintinPoster from './Cutouts/TintinPoster'
import TrollShadowLeft from './Cutouts/TrollShadowLeft'
import TrollShadowRight from './Cutouts/TrollShadowRight'
import Campfire from './Cutouts/Campfire'
import Stalactites from './Cutouts/Stalactites'
import BuddhaShrine from './Cutouts/BuddhaShrine'
import TaiwanFridgeFront from './Cutouts/TaiwanFridgeFront'
import BennettTaiwanStairs from './Cutouts/BennettTaiwanStairs'
import OdinTaiwanStairs from './Cutouts/OdinTaiwanStairs'
import BennettTaiwanGate from './Cutouts/BennettTaiwanGate'
import OdinTaiwanGate from './Cutouts/OdinTaiwanGate'
import BennettOdinRickshaw from './Cutouts/BennettOdinRickshaw'
import BennettShore from './Cutouts/BennettShore'
import OdinShore from './Cutouts/OdinShore'
import BennettOdinBuoy from './Cutouts/BennettOdinBuoy'
import YellowTapedGrill from './Cutouts/YellowTapedGrill'
import BennettOdinDepths from './Cutouts/BennettOdinDepths'
import SeaSerpents from './Cutouts/SeaSerpents'
import BennettOceanFloor from './Cutouts/BennettOceanFloor'
import BennettMat from './Cutouts/BennettMat'
import OdinMat from './Cutouts/OdinMat'
import BloomCountyPoster from './Cutouts/BloomCountyPoster'
import TrashCan from './Cutouts/TrashCan'
import VanNuysPlant from './Cutouts/VanNuysPlant'
import VanNuysLogo from './Cutouts/VanNuysLogo'
import Corkboard from './Cutouts/Corkboard'
import Recyclables from './Cutouts/Recyclables'
import NirvanaPoster from './Cutouts/NirvanaPoster'
import DispenserLeft from './Cutouts/DispenserLeft'
import DispenserRight from './Cutouts/DispenserRight'
import BerkeleyLamppost from './Cutouts/BerkeleyLamppost'
import SignPost from './Cutouts/SignPost'
import BancroftShrubs from './Cutouts/BancroftShrubs'
import UcBerkeleyTree from './Cutouts/UcBerkeleyTree'
import LeonardCohenPoster from './Cutouts/LeonardCohenPoster'
import ProgressChartEarly from './Cutouts/ProgressChartEarly'
import ProgressChartLate from './Cutouts/ProgressChartLate'
import MonitorSpeakerLeft from './Cutouts/MonitorSpeakerLeft'
import MonitorSpeakerRight from './Cutouts/MonitorSpeakerRight'
import WallSpeakerLeft from './Cutouts/WallSpeakerLeft'
import WallSpeakerRight from './Cutouts/WallSpeakerRight'
import CinemaPosterLeft from './Cutouts/CinemaPosterLeft'
import CinemaPosterRight from './Cutouts/CinemaPosterRight'
import CinemaPosterRightNormal from './Cutouts/CinemaPosterRightNormal'
import Sandbags from './Cutouts/Sandbags'
import StageLights from './Cutouts/StageLights'
import TrafficLight from './Cutouts/TrafficLight'
import ApartmentPlant from './Cutouts/ApartmentPlant'
import CodeBox from './Cutouts/CodeBox'
import Clipboard from './Cutouts/Clipboard'
import Painting from './Cutouts/Painting'
import WaitingRoomPlant from './Cutouts/WaitingRoomPlant'
import StorageBoxes from './Cutouts/StorageBoxes'
import StorageChest from './Cutouts/StorageChest'
import HowieFridge from './Cutouts/HowieFridge'
import Television from './Cutouts/Television'
import MonitorSpeakerSide from './Cutouts/MonitorSpeakerSide'
import WallSpeakerSide from './Cutouts/WallSpeakerSide'
import TwinStreetlamp from './Cutouts/TwinStreetlamp'
import ElliottSmithPoster from './Cutouts/ElliottSmithPoster'
import ElCerritoTree from './Cutouts/ElCerritoTree'
import Dumpster from './Cutouts/Dumpster'
import WeddingCrowd from './Cutouts/WeddingCrowd'
import CliffTree from './Cutouts/CliffTree'
import IvDrip from './Cutouts/IvDrip'

import {
    FIRE_HYDRANT,
    PLAYGROUND_SLIDE,
    MIRRORED_SINK,
    TOWEL_RACK,
    OVERPASS_SIGN_FRONT,
    OVERPASS_SIGN_BACK,
    PORCH_PLANTS_LEFT,
    PORCH_PLANTS_RIGHT,
    TINTIN_POSTER,
    TROLL_SHADOW_LEFT,
    TROLL_SHADOW_RIGHT,
    CAMPFIRE,
    STALACTITES,
    BUDDHA_SHRINE,
    TAIWAN_FRIDGE_FRONT,
    BENNETT_TAIWAN_STAIRS,
    ODIN_TAIWAN_STAIRS,
    BENNETT_TAIWAN_GATE,
    ODIN_TAIWAN_GATE,
    BENNETT_ODIN_RICKSHAW,
    BENNETT_SHORE,
    ODIN_SHORE,
    BENNETT_ODIN_BUOY,
    YELLOW_TAPED_GRILL,
    BENNETT_ODIN_DEPTHS,
    SEA_SERPENTS,
    BENNETT_ODIN_OCEAN_FLOOR,
    BENNETT_MAT,
    ODIN_MAT,
    BLOOM_COUNTY_POSTER,
    TRASH_CAN_LOCKERS,
    TRASH_CAN_QUAD,
    VAN_NUYS_PLANT_LOCKERS,
    VAN_NUYS_PLANT_QUAD,
    VAN_NUYS_LOGO,
    CORKBOARD,
    RECYCLABLES,
    NIRVANA_POSTER,
    DISPENSER_LEFT,
    DISPENSER_RIGHT,
    BERKELEY_LAMPPOST,
    SIGNPOST,
    BANCROFT_SHRUBS,
    UC_BERKELEY_TREE_LEFT,
    UC_BERKELEY_TREE_RIGHT,
    LEONARD_COHEN_POSTER,
    PROGRESS_CHART_EARLY,
    PROGRESS_CHART_LATE,
    MONITOR_SPEAKER_LEFT,
    MONITOR_SPEAKER_RIGHT,
    WALL_SPEAKER_LEFT,
    WALL_SPEAKER_RIGHT,
    CINEMA_POSTER_LEFT,
    CINEMA_POSTER_RIGHT,
    CINEMA_POSTER_RIGHT_NORMAL,
    SANDBAGS,
    STAGE_LIGHTS,
    TRAFFIC_LIGHT,
    APARTMENT_PLANT,
    CODE_BOX,
    CLIPBOARD,
    PAINTING,
    WAITING_ROOM_PLANT,
    STORAGE_BOXES,
    STORAGE_CHEST,
    HOWIE_FRIDGE,
    TELEVISION,
    MONITOR_SIDE_CROWD,
    MONITOR_SIDE_STAGE,
    WALL_SPEAKER_SIDE_CROWD,
    WALL_SPEAKER_SIDE_STAGE,
    TWIN_STREETLAMP_FAR,
    TWIN_STREETLAMP_MIDDLE,
    TWIN_STREETLAMP_NEAR,
    ELLIOTT_SMITH_POSTER,
    EL_CERRITO_TREE,
    DUMPSTER,
    WEDDING_CROWD,
    CLIFF_TREE,
    IV_DRIP
} from 'scene/things/keys/cutouts'

export const propTypes = {
    [FIRE_HYDRANT]: PropTypes.bool,
    [PLAYGROUND_SLIDE]: PropTypes.bool,
    [MIRRORED_SINK]: PropTypes.bool,
    [TOWEL_RACK]: PropTypes.bool,
    [OVERPASS_SIGN_FRONT]: PropTypes.bool,
    [OVERPASS_SIGN_BACK]: PropTypes.bool,
    [PORCH_PLANTS_LEFT]: PropTypes.bool,
    [PORCH_PLANTS_RIGHT]: PropTypes.bool,
    [TINTIN_POSTER]: PropTypes.bool,
    [TROLL_SHADOW_LEFT]: PropTypes.bool,
    [TROLL_SHADOW_RIGHT]: PropTypes.bool,
    [CAMPFIRE]: PropTypes.bool,
    [STALACTITES]: PropTypes.bool,
    [BUDDHA_SHRINE]: PropTypes.bool,
    [TAIWAN_FRIDGE_FRONT]: PropTypes.bool,
    [BENNETT_TAIWAN_STAIRS]: PropTypes.bool,
    [ODIN_TAIWAN_STAIRS]: PropTypes.bool,
    [BENNETT_TAIWAN_GATE]: PropTypes.bool,
    [ODIN_TAIWAN_GATE]: PropTypes.bool,
    [BENNETT_ODIN_RICKSHAW]: PropTypes.bool,
    [BENNETT_SHORE]: PropTypes.bool,
    [ODIN_SHORE]: PropTypes.bool,
    [BENNETT_ODIN_BUOY]: PropTypes.bool,
    [YELLOW_TAPED_GRILL]: PropTypes.bool,
    [BENNETT_ODIN_DEPTHS]: PropTypes.bool,
    [SEA_SERPENTS]: PropTypes.bool,
    [BENNETT_ODIN_OCEAN_FLOOR]: PropTypes.bool,
    [BENNETT_MAT]: PropTypes.bool,
    [ODIN_MAT]: PropTypes.bool,
    [BLOOM_COUNTY_POSTER]: PropTypes.bool,
    [TRASH_CAN_LOCKERS]: PropTypes.bool,
    [TRASH_CAN_QUAD]: PropTypes.bool,
    [VAN_NUYS_PLANT_LOCKERS]: PropTypes.bool,
    [VAN_NUYS_PLANT_QUAD]: PropTypes.bool,
    [VAN_NUYS_LOGO]: PropTypes.bool,
    [CORKBOARD]: PropTypes.bool,
    [RECYCLABLES]: PropTypes.bool,
    [NIRVANA_POSTER]: PropTypes.bool,
    [DISPENSER_LEFT]: PropTypes.bool,
    [DISPENSER_RIGHT]: PropTypes.bool,
    [BERKELEY_LAMPPOST]: PropTypes.bool,
    [SIGNPOST]: PropTypes.bool,
    [BANCROFT_SHRUBS]: PropTypes.bool,
    [UC_BERKELEY_TREE_LEFT]: PropTypes.bool,
    [UC_BERKELEY_TREE_RIGHT]: PropTypes.bool,
    [LEONARD_COHEN_POSTER]: PropTypes.bool,
    [PROGRESS_CHART_EARLY]: PropTypes.bool,
    [PROGRESS_CHART_LATE]: PropTypes.bool,
    [MONITOR_SPEAKER_LEFT]: PropTypes.bool,
    [MONITOR_SPEAKER_RIGHT]: PropTypes.bool,
    [WALL_SPEAKER_LEFT]: PropTypes.bool,
    [WALL_SPEAKER_RIGHT]: PropTypes.bool,
    [CINEMA_POSTER_LEFT]: PropTypes.bool,
    [CINEMA_POSTER_RIGHT]: PropTypes.bool,
    [CINEMA_POSTER_RIGHT_NORMAL]: PropTypes.bool,
    [SANDBAGS]: PropTypes.bool,
    [STAGE_LIGHTS]: PropTypes.bool,
    [TRAFFIC_LIGHT]: PropTypes.bool,
    [APARTMENT_PLANT]: PropTypes.bool,
    [CODE_BOX]: PropTypes.bool,
    [CLIPBOARD]: PropTypes.bool,
    [PAINTING]: PropTypes.bool,
    [WAITING_ROOM_PLANT]: PropTypes.bool,
    [STORAGE_BOXES]: PropTypes.bool,
    [STORAGE_CHEST]: PropTypes.bool,
    [HOWIE_FRIDGE]: PropTypes.bool,
    [TELEVISION]: PropTypes.bool,
    [MONITOR_SIDE_CROWD]: PropTypes.bool,
    [MONITOR_SIDE_STAGE]: PropTypes.bool,
    [WALL_SPEAKER_SIDE_CROWD]: PropTypes.bool,
    [WALL_SPEAKER_SIDE_STAGE]: PropTypes.bool,
    [TWIN_STREETLAMP_FAR]: PropTypes.bool,
    [TWIN_STREETLAMP_MIDDLE]: PropTypes.bool,
    [TWIN_STREETLAMP_NEAR]: PropTypes.bool,
    [ELLIOTT_SMITH_POSTER]: PropTypes.bool,
    [EL_CERRITO_TREE]: PropTypes.bool,
    [DUMPSTER]: PropTypes.bool,
    [WEDDING_CROWD]: PropTypes.bool,
    [CLIFF_TREE]: PropTypes.bool,
    [IV_DRIP]: PropTypes.bool
}

export default {
    [FIRE_HYDRANT]: FireHydrant,
    [PLAYGROUND_SLIDE]: PlaygroundSlide,
    [MIRRORED_SINK]: MirroredSink,
    [TOWEL_RACK]: TowelRack,
    [OVERPASS_SIGN_FRONT]: OverpassSignFront,
    [OVERPASS_SIGN_BACK]: OverpassSignBack,
    [PORCH_PLANTS_LEFT]: PorchPlantsLeft,
    [PORCH_PLANTS_RIGHT]: PorchPlantsRight,
    [TINTIN_POSTER]: TintinPoster,
    [TROLL_SHADOW_LEFT]: TrollShadowLeft,
    [TROLL_SHADOW_RIGHT]: TrollShadowRight,
    [CAMPFIRE]: Campfire,
    [STALACTITES]: Stalactites,
    [BUDDHA_SHRINE]: BuddhaShrine,
    [TAIWAN_FRIDGE_FRONT]: TaiwanFridgeFront,
    [BENNETT_TAIWAN_STAIRS]: BennettTaiwanStairs,
    [ODIN_TAIWAN_STAIRS]: OdinTaiwanStairs,
    [BENNETT_TAIWAN_GATE]: BennettTaiwanGate,
    [ODIN_TAIWAN_GATE]: OdinTaiwanGate,
    [BENNETT_ODIN_RICKSHAW]: BennettOdinRickshaw,
    [BENNETT_SHORE]: BennettShore,
    [ODIN_SHORE]: OdinShore,
    [BENNETT_ODIN_BUOY]: BennettOdinBuoy,
    [YELLOW_TAPED_GRILL]: YellowTapedGrill,
    [BENNETT_ODIN_DEPTHS]: BennettOdinDepths,
    [SEA_SERPENTS]: SeaSerpents,
    [BENNETT_ODIN_OCEAN_FLOOR]: BennettOceanFloor,
    [BENNETT_MAT]: BennettMat,
    [ODIN_MAT]: OdinMat,
    [BLOOM_COUNTY_POSTER]: BloomCountyPoster,
    [TRASH_CAN_LOCKERS]: TrashCan,
    [TRASH_CAN_QUAD]: TrashCan,
    [VAN_NUYS_PLANT_LOCKERS]: VanNuysPlant,
    [VAN_NUYS_PLANT_QUAD]: VanNuysPlant,
    [VAN_NUYS_LOGO]: VanNuysLogo,
    [CORKBOARD]: Corkboard,
    [RECYCLABLES]: Recyclables,
    [NIRVANA_POSTER]: NirvanaPoster,
    [DISPENSER_LEFT]: DispenserLeft,
    [DISPENSER_RIGHT]: DispenserRight,
    [BERKELEY_LAMPPOST]: BerkeleyLamppost,
    [SIGNPOST]: SignPost,
    [BANCROFT_SHRUBS]: BancroftShrubs,
    [UC_BERKELEY_TREE_LEFT]: UcBerkeleyTree,
    [UC_BERKELEY_TREE_RIGHT]: UcBerkeleyTree,
    [LEONARD_COHEN_POSTER]: LeonardCohenPoster,
    [PROGRESS_CHART_EARLY]: ProgressChartEarly,
    [PROGRESS_CHART_LATE]: ProgressChartLate,
    [MONITOR_SPEAKER_LEFT]: MonitorSpeakerLeft,
    [MONITOR_SPEAKER_RIGHT]: MonitorSpeakerRight,
    [WALL_SPEAKER_LEFT]: WallSpeakerLeft,
    [WALL_SPEAKER_RIGHT]: WallSpeakerRight,
    [CINEMA_POSTER_LEFT]: CinemaPosterLeft,
    [CINEMA_POSTER_RIGHT]: CinemaPosterRight,
    [CINEMA_POSTER_RIGHT_NORMAL]: CinemaPosterRightNormal,
    [SANDBAGS]: Sandbags,
    [STAGE_LIGHTS]: StageLights,
    [TRAFFIC_LIGHT]: TrafficLight,
    [APARTMENT_PLANT]: ApartmentPlant,
    [CODE_BOX]: CodeBox,
    [CLIPBOARD]: Clipboard,
    [PAINTING]: Painting,
    [WAITING_ROOM_PLANT]: WaitingRoomPlant,
    [STORAGE_BOXES]: StorageBoxes,
    [STORAGE_CHEST]: StorageChest,
    [HOWIE_FRIDGE]: HowieFridge,
    [TELEVISION]: Television,
    [MONITOR_SIDE_CROWD]: MonitorSpeakerSide,
    [MONITOR_SIDE_STAGE]: MonitorSpeakerSide,
    [WALL_SPEAKER_SIDE_CROWD]: WallSpeakerSide,
    [WALL_SPEAKER_SIDE_STAGE]: WallSpeakerSide,
    [TWIN_STREETLAMP_FAR]: TwinStreetlamp,
    [TWIN_STREETLAMP_MIDDLE]: TwinStreetlamp,
    [TWIN_STREETLAMP_NEAR]: TwinStreetlamp,
    [ELLIOTT_SMITH_POSTER]: ElliottSmithPoster,
    [EL_CERRITO_TREE]: ElCerritoTree,
    [DUMPSTER]: Dumpster,
    [WEDDING_CROWD]: WeddingCrowd,
    [CLIFF_TREE]: CliffTree,
    [IV_DRIP]: IvDrip
}

