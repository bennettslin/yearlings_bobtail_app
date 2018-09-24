import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

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
import TaiwanFridgeSide from './Cutouts/TaiwanFridgeSide'
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
import OdinOceanFloor from './Cutouts/OdinOceanFloor'
import BennettMat from './Cutouts/BennettMat'
import OdinMat from './Cutouts/OdinMat'
import BuddhaCave from './Cutouts/BuddhaCave'
import TrashCan from './Cutouts/TrashCan'
import VanNuysPlants from './Cutouts/VanNuysPlants'
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
import MonitorSpeakerLeft from './Cutouts/MonitorSpeakerLeft'
import MonitorSpeakerRight from './Cutouts/MonitorSpeakerRight'
import WallSpeakerLeft from './Cutouts/WallSpeakerLeft'
import WallSpeakerRight from './Cutouts/WallSpeakerRight'
import CinemaPosterLeft from './Cutouts/CinemaPosterLeft'
import CinemaPosterRight from './Cutouts/CinemaPosterRight'
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
import Dumpster from './Cutouts/Dumpster'
import WeddingPlatform from './Cutouts/WeddingPlatform'
import WeddingCrowd from './Cutouts/WeddingCrowd'
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
    TAIWAN_FRIDGE_SIDE,
    BENNETT_TAIWAN_GATE,
    ODIN_TAIWAN_GATE,
    BENNETT_ODIN_RICKSHAW,
    BENNETT_SHORE,
    ODIN_SHORE,
    BENNETT_ODIN_BUOY,
    YELLOW_TAPED_GRILL,
    BENNETT_ODIN_DEPTHS,
    SEA_SERPENTS,
    BENNETT_OCEAN_FLOOR,
    ODIN_OCEAN_FLOOR,
    BENNETT_MAT,
    ODIN_MAT,
    BUDDHA_CAVE,
    TRASH_CAN,
    VAN_NUYS_PLANTS,
    VAN_NUYS_LOGO,
    CORKBOARD,
    RECYCLABLES,
    NIRVANA_POSTER,
    DISPENSER_LEFT,
    DISPENSER_RIGHT,
    BERKELEY_LAMPPOST,
    SIGNPOST,
    BANCROFT_SHRUBS,
    UC_BERKELEY_TREE,
    LEONARD_COHEN_POSTER,
    MONITOR_SPEAKER_LEFT,
    MONITOR_SPEAKER_RIGHT,
    WALL_SPEAKER_LEFT,
    WALL_SPEAKER_RIGHT,
    CINEMA_POSTER_LEFT,
    CINEMA_POSTER_RIGHT,
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
    MONITOR_SPEAKER_SIDE,
    WALL_SPEAKER_SIDE,
    TWIN_STREETLAMP,
    ELLIOTT_SMITH_POSTER,
    DUMPSTER,
    WEDDING_PLATFORM,
    WEDDING_CROWD,
    IV_DRIP
} from 'scene/cutoutKeys'

const CUTOUTS_MAP = {
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
    [TAIWAN_FRIDGE_SIDE]: TaiwanFridgeSide,
    [BENNETT_TAIWAN_GATE]: BennettTaiwanGate,
    [ODIN_TAIWAN_GATE]: OdinTaiwanGate,
    [BENNETT_ODIN_RICKSHAW]: BennettOdinRickshaw,
    [BENNETT_SHORE]: BennettShore,
    [ODIN_SHORE]: OdinShore,
    [BENNETT_ODIN_BUOY]: BennettOdinBuoy,
    [YELLOW_TAPED_GRILL]: YellowTapedGrill,
    [BENNETT_ODIN_DEPTHS]: BennettOdinDepths,
    [SEA_SERPENTS]: SeaSerpents,
    [BENNETT_OCEAN_FLOOR]: BennettOceanFloor,
    [ODIN_OCEAN_FLOOR]: OdinOceanFloor,
    [BENNETT_MAT]: BennettMat,
    [ODIN_MAT]: OdinMat,
    [BUDDHA_CAVE]: BuddhaCave,
    [TRASH_CAN]: TrashCan,
    [VAN_NUYS_PLANTS]: VanNuysPlants,
    [VAN_NUYS_LOGO]: VanNuysLogo,
    [CORKBOARD]: Corkboard,
    [RECYCLABLES]: Recyclables,
    [NIRVANA_POSTER]: NirvanaPoster,
    [DISPENSER_LEFT]: DispenserLeft,
    [DISPENSER_RIGHT]: DispenserRight,
    [BERKELEY_LAMPPOST]: BerkeleyLamppost,
    [SIGNPOST]: SignPost,
    [BANCROFT_SHRUBS]: BancroftShrubs,
    [UC_BERKELEY_TREE]: UcBerkeleyTree,
    [LEONARD_COHEN_POSTER]: LeonardCohenPoster,
    [MONITOR_SPEAKER_LEFT]: MonitorSpeakerLeft,
    [MONITOR_SPEAKER_RIGHT]: MonitorSpeakerRight,
    [WALL_SPEAKER_LEFT]: WallSpeakerLeft,
    [WALL_SPEAKER_RIGHT]: WallSpeakerRight,
    [CINEMA_POSTER_LEFT]: CinemaPosterLeft,
    [CINEMA_POSTER_RIGHT]: CinemaPosterRight,
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
    [MONITOR_SPEAKER_SIDE]: MonitorSpeakerSide,
    [WALL_SPEAKER_SIDE]: WallSpeakerSide,
    [TWIN_STREETLAMP]: TwinStreetlamp,
    [ELLIOTT_SMITH_POSTER]: ElliottSmithPoster,
    [DUMPSTER]: Dumpster,
    [WEDDING_PLATFORM]: WeddingPlatform,
    [WEDDING_CROWD]: WeddingCrowd,
    [IV_DRIP]: IvDrip
},
DEFAULT_COMPONENT = () => (null)

const propTypes = {
    // From parent.
    className: PropTypes.any,
    nameKey: PropTypes.string.isRequired,
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

const Cutout = ({

    className,
    nameKey,

...other }) => {

    const CutoutComponent =
        CUTOUTS_MAP[nameKey] || DEFAULT_COMPONENT

    return (
        <CutoutComponent {...other}
            className={cx(
                'Cutout',
                className
            )}
        />
    )
}

Cutout.propTypes = propTypes;

export default Cutout
