import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import FireHydrant from './Cutouts/NohoHouses/FireHydrant'
import PlaygroundSlide from './Cutouts/NohoSchool/PlaygroundSlide'
import MirroredSink from './Cutouts/FamilyBathroom/MirroredSink'
import TowelRack from './Cutouts/FamilyBathroom/TowelRack'
import OverpassSignFront from './Cutouts/Freeway/OverpassSignFront'
import OverpassSignBack from './Cutouts/Freeway/OverpassSignBack'
import PorchPlantsLeft from './Cutouts/Porch/PorchPlantsLeft'
import PorchPlantsRight from './Cutouts/Porch/PorchPlantsRight'
import TrollShadowLeft from './Cutouts/ChangelingCave/TrollShadowLeft'
import TrollShadowRight from './Cutouts/ChangelingCave/TrollShadowRight'
import Campfire from './Cutouts/ChangelingCave/Campfire'
import Stalactites from './Cutouts/ChangelingCave/Stalactites'
import BuddhaShrine from './Cutouts/TaiwanRoom/BuddhaShrine'
import TaiwanFridgeFront from './Cutouts/TaiwanRoom/TaiwanFridgeFront'
import BennettTaiwanStairs from './Cutouts/TaiwanRoom/BennettTaiwanStairs'
import OdinTaiwanStairs from './Cutouts/TaiwanRoom/OdinTaiwanStairs'
import TaiwanFridgeSide from './Cutouts/TaiwanStairs/TaiwanFridgeSide'
import BennettTaiwanGate from './Cutouts/TaiwanStairs/BennettTaiwanGate'
import OdinTaiwanGate from './Cutouts/TaiwanStairs/OdinTaiwanGate'
import BennettOdinRickshaw from './Cutouts/TaiwanGate/BennettOdinRickshaw'
import BennettShore from './Cutouts/Rickshaw/BennettShore'
import OdinShore from './Cutouts/Rickshaw/OdinShore'
import BennettOdinBuoy from './Cutouts/Shore/BennettOdinBuoy'
import YellowTapedGrill from './Cutouts/Shore/YellowTapedGrill'
import BennettOdinDepths from './Cutouts/Buoy/BennettOdinDepths'
import SeaSerpents from './Cutouts/Buoy/SeaSerpents'
import BennettOceanFloor from './Cutouts/OceanDepths/BennettOceanFloor'
import OdinOceanFloor from './Cutouts/OceanDepths/OdinOceanFloor'
import BennettMat from './Cutouts/OceanFloor/BennettMat'
import OdinMat from './Cutouts/OceanFloor/OdinMat'
import BuddhaCave from './Cutouts/OceanFloor/BuddhaCave'
import TrashCan from './Cutouts/VanNuysLockers/TrashCan'
import VanNuysPlants from './Cutouts/VanNuysLockers/VanNuysPlants'
import VanNuysLogo from './Cutouts/VanNuysQuad/VanNuysLogo'
import Recyclables from './Cutouts/Courtyard/Recyclables'
import NirvanaPoster from './Cutouts/BennettCouch/NirvanaPoster'
import DispenserLeft from './Cutouts/CatholicChurch/DispenserLeft'
import DispenserRight from './Cutouts/CatholicChurch/DispenserRight'
import BerkeleyLamppost from './Cutouts/CatholicChurch/BerkeleyLamppost'
import SignPost from './Cutouts/UcBerkeley/SignPost'
import BancroftShrubs from './Cutouts/UcBerkeley/BancroftShrubs'
import UcBerkeleyTreeLeft from './Cutouts/UcBerkeley/UcBerkeleyTreeLeft'
import UcBerkeleyTreeRight from './Cutouts/UcBerkeley/UcBerkeleyTreeRight'
import LeonardCohenPoster from './Cutouts/BennettCouch/LeonardCohenPoster'
import MonitorSpeakerLeft from './Cutouts/ClubFront/MonitorSpeakerLeft'
import MonitorSpeakerRight from './Cutouts/ClubFront/MonitorSpeakerRight'
import WallSpeakerLeft from './Cutouts/ClubFront/WallSpeakerLeft'
import WallSpeakerRight from './Cutouts/ClubFront/WallSpeakerRight'
import CinemaPosterLeft from './Cutouts/Cinema/CinemaPosterLeft'
import CinemaPosterRight from './Cutouts/Cinema/CinemaPosterRight'
import Sandbags from './Cutouts/Backstage/Sandbags'
import StageLights from './Cutouts/Backstage/StageLights'
import TrafficLight from './Cutouts/LizGate/TrafficLight'
import ApartmentPlant from './Cutouts/BennettGate/ApartmentPlant'
import CodeBox from './Cutouts/BennettGate/CodeBox'
import Clipboard from './Cutouts/WaitingRoom/Clipboard'
import Painting from './Cutouts/WaitingRoom/Painting'
import WaitingRoomPlant from './Cutouts/WaitingRoom/WaitingRoomPlant'
import StorageBoxes from './Cutouts/Attic/StorageBoxes'
import StorageChest from './Cutouts/Attic/StorageChest'
import HowieFridge from './Cutouts/Attic/HowieFridge'
import Television from './Cutouts/Attic/Television'
import MonitorSpeakerSide from './Cutouts/ClubSide/MonitorSpeakerSide'
import WallSpeakerSide from './Cutouts/ClubSide/WallSpeakerSide'
import TwinStreetlamp from './Cutouts/OaklandResidential/TwinStreetlamp'
import Dumpster from './Cutouts/Alley/Dumpster'
import WeddingPlatform from './Cutouts/OutdoorWedding/WeddingPlatform'
import WeddingCrowd from './Cutouts/OutdoorWedding/WeddingCrowd'
import IvDrip from './Cutouts/Deathbed/IvDrip'

import {
    FIRE_HYDRANT,
    PLAYGROUND_SLIDE,
    MIRRORED_SINK,
    TOWEL_RACK,
    OVERPASS_SIGN_FRONT,
    OVERPASS_SIGN_BACK,
    PORCH_PLANTS_LEFT,
    PORCH_PLANTS_RIGHT,
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
    [RECYCLABLES]: Recyclables,
    [NIRVANA_POSTER]: NirvanaPoster,
    [DISPENSER_LEFT]: DispenserLeft,
    [DISPENSER_RIGHT]: DispenserRight,
    [BERKELEY_LAMPPOST]: BerkeleyLamppost,
    [SIGNPOST]: SignPost,
    [BANCROFT_SHRUBS]: BancroftShrubs,
    [UC_BERKELEY_TREE_LEFT]: UcBerkeleyTreeLeft,
    [UC_BERKELEY_TREE_RIGHT]: UcBerkeleyTreeRight,
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
