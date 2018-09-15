import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import FireHydrant from './Cutouts/NohoHouses/FireHydrant'
import PlaygroundSlide from './Cutouts/NohoSchool/PlaygroundSlide'
import Bathtub from './Cutouts/FamilyBathroom/Bathtub'
import MirroredSink from './Cutouts/FamilyBathroom/MirroredSink'
import TowelRack from './Cutouts/FamilyBathroom/TowelRack'
import OverpassSignFront from './Cutouts/Freeway/OverpassSignFront'
import OverpassSignBack from './Cutouts/Freeway/OverpassSignBack'
import PorchPlantsLeft from './Cutouts/Porch/PorchPlantsLeft'
import PorchPlantsRight from './Cutouts/Porch/PorchPlantsRight'
import CaptainBedDrawers from './Cutouts/Bedroom/CaptainBedDrawers'
import TrollShadowLeft from './Cutouts/ChangelingCave/TrollShadowLeft'
import TrollShadowRight from './Cutouts/ChangelingCave/TrollShadowRight'
import Campfire from './Cutouts/ChangelingCave/Campfire'
import Stalactites from './Cutouts/ChangelingCave/Stalactites'
import SchoolbusExterior from './Cutouts/Schoolbus/SchoolbusExterior'
import SchoolbusInterior from './Cutouts/Schoolbus/SchoolbusInterior'
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
import LockerBank from './Cutouts/VanNuysLockers/LockerBank'
import TrashCan from './Cutouts/VanNuysLockers/TrashCan'
import VanNuysPlants from './Cutouts/VanNuysLockers/VanNuysPlants'
import VanNuysLogo from './Cutouts/VanNuysQuad/VanNuysLogo'
import Recyclables from './Cutouts/Courtyard/Recyclables'
import NirvanaPoster from './Cutouts/BennettCouch/NirvanaPoster'
import DispenserLeft from './Cutouts/CatholicChurch/DispenserLeft'
import DispenserRight from './Cutouts/CatholicChurch/DispenserRight'
import BerkeleyLamppost from './Cutouts/CatholicChurch/BerkeleyLamppost'
import SignPost from './Cutouts/UcBerkeley/SignPost'
import BancroftShrubLeft from './Cutouts/UcBerkeley/BancroftShrubLeft'
import BancroftShrubRight from './Cutouts/UcBerkeley/BancroftShrubRight'
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
import GoKartExteriorLeft from './Cutouts/GoKarts/GoKartExteriorLeft'
import GoKartExteriorRight from './Cutouts/GoKarts/GoKartExteriorRight'
import TrafficLight from './Cutouts/LizGate/TrafficLight'
import DishroomSink from './Cutouts/Dishroom/DishroomSink'
import ApartmentPlant from './Cutouts/BennettGate/ApartmentPlant'
import CodeBox from './Cutouts/BennettGate/CodeBox'
import LightSwitch from './Cutouts/BennettBed/LightSwitch'
import Clipboard from './Cutouts/WaitingRoom/Clipboard'
import Painting from './Cutouts/WaitingRoom/Painting'
import WaitingRoomPlant from './Cutouts/WaitingRoom/WaitingRoomPlant'
import SaturnExterior from './Cutouts/StationWagon/SaturnExterior'
import SaturnInterior from './Cutouts/StationWagon/SaturnInterior'
import StorageBoxes from './Cutouts/Attic/StorageBoxes'
import StorageChest from './Cutouts/Attic/StorageChest'
import HowieFridge from './Cutouts/Attic/HowieFridge'
import Television from './Cutouts/Attic/Television'
import MonitorSpeakerSide from './Cutouts/ClubSide/MonitorSpeakerSide'
import WallSpeakerSide from './Cutouts/ClubSide/WallSpeakerSide'
import CrowdSideNear from './Cutouts/ClubSide/CrowdSideNear'
import CrowdSideFar from './Cutouts/ClubSide/CrowdSideFar'
import Volkswagen from './Cutouts/OaklandHouses/Volkswagen'
import TwinStreetlamp from './Cutouts/OaklandResidential/TwinStreetlamp'
import ReattaExterior from './Cutouts/ElCerrito/ReattaExterior'
import ReattaInterior from '../Cutout/Cutouts/ElCerrito/ReattaInterior'
import CrowdBackNear from './Cutouts/ClubFar/CrowdBackNear'
import CrowdBackFar from './Cutouts/ClubFar/CrowdBackFar'
import Dumpster from './Cutouts/Alley/Dumpster'
import WeddingPlatform from './Cutouts/OutdoorWedding/WeddingPlatform'
import WeddingCrowd from './Cutouts/OutdoorWedding/WeddingCrowd'
import IvDrip from './Cutouts/Deathbed/IvDrip'

import {
    FIRE_HYDRANT,
    PLAYGROUND_SLIDE,
    BATHTUB,
    MIRRORED_SINK,
    TOWEL_RACK,
    OVERPASS_SIGN_FRONT,
    OVERPASS_SIGN_BACK,
    PORCH_PLANTS_LEFT,
    PORCH_PLANTS_RIGHT,
    CAPTAIN_BED_DRAWERS,
    TROLL_SHADOW_LEFT,
    TROLL_SHADOW_RIGHT,
    CAMPFIRE,
    STALACTITES,
    SCHOOLBUS_EXTERIOR,
    SCHOOLBUS_INTERIOR,
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
    LOCKER_BANK,
    TRASH_CAN,
    VAN_NUYS_PLANTS,
    VAN_NUYS_LOGO,
    RECYCLABLES,
    NIRVANA_POSTER,
    DISPENSER_LEFT,
    DISPENSER_RIGHT,
    BERKELEY_LAMPPOST,
    SIGNPOST,
    BANCROFT_SHRUB_LEFT,
    BANCROFT_SHRUB_RIGHT,
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
    GO_KART_EXTERIOR_LEFT,
    GO_KART_EXTERIOR_RIGHT,
    TRAFFIC_LIGHT,
    DISHROOM_SINK,
    APARTMENT_PLANT,
    CODE_BOX,
    LIGHT_SWITCH,
    CLIPBOARD,
    PAINTING,
    WAITING_ROOM_PLANT,
    SATURN_EXTERIOR,
    SATURN_INTERIOR,
    STORAGE_BOXES,
    STORAGE_CHEST,
    HOWIE_FRIDGE,
    TELEVISION,
    MONITOR_SPEAKER_SIDE,
    WALL_SPEAKER_SIDE,
    CROWD_SIDE_NEAR,
    CROWD_SIDE_FAR,
    VOLKSWAGEN,
    TWIN_STREETLAMP,
    REATTA_EXTERIOR,
    REATTA_INTERIOR,
    CROWD_BACK_NEAR,
    CROWD_BACK_FAR,
    DUMPSTER,
    WEDDING_PLATFORM,
    WEDDING_CROWD,
    IV_DRIP
} from 'scene/cutoutKeys'

const CUTOUTS_MAP = {
    [FIRE_HYDRANT]: FireHydrant,
    [PLAYGROUND_SLIDE]: PlaygroundSlide,
    [BATHTUB]: Bathtub,
    [MIRRORED_SINK]: MirroredSink,
    [TOWEL_RACK]: TowelRack,
    [OVERPASS_SIGN_FRONT]: OverpassSignFront,
    [OVERPASS_SIGN_BACK]: OverpassSignBack,
    [PORCH_PLANTS_LEFT]: PorchPlantsLeft,
    [PORCH_PLANTS_RIGHT]: PorchPlantsRight,
    [CAPTAIN_BED_DRAWERS]: CaptainBedDrawers,
    [TROLL_SHADOW_LEFT]: TrollShadowLeft,
    [TROLL_SHADOW_RIGHT]: TrollShadowRight,
    [CAMPFIRE]: Campfire,
    [STALACTITES]: Stalactites,
    [SCHOOLBUS_EXTERIOR]: SchoolbusExterior,
    [SCHOOLBUS_INTERIOR]: SchoolbusInterior,
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
    [LOCKER_BANK]: LockerBank,
    [TRASH_CAN]: TrashCan,
    [VAN_NUYS_PLANTS]: VanNuysPlants,
    [VAN_NUYS_LOGO]: VanNuysLogo,
    [RECYCLABLES]: Recyclables,
    [NIRVANA_POSTER]: NirvanaPoster,
    [DISPENSER_LEFT]: DispenserLeft,
    [DISPENSER_RIGHT]: DispenserRight,
    [BERKELEY_LAMPPOST]: BerkeleyLamppost,
    [SIGNPOST]: SignPost,
    [BANCROFT_SHRUB_LEFT]: BancroftShrubLeft,
    [BANCROFT_SHRUB_RIGHT]: BancroftShrubRight,
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
    [GO_KART_EXTERIOR_LEFT]: GoKartExteriorLeft,
    [GO_KART_EXTERIOR_RIGHT]: GoKartExteriorRight,
    [TRAFFIC_LIGHT]: TrafficLight,
    [DISHROOM_SINK]: DishroomSink,
    [APARTMENT_PLANT]: ApartmentPlant,
    [CODE_BOX]: CodeBox,
    [LIGHT_SWITCH]: LightSwitch,
    [CLIPBOARD]: Clipboard,
    [PAINTING]: Painting,
    [WAITING_ROOM_PLANT]: WaitingRoomPlant,
    [SATURN_EXTERIOR]: SaturnExterior,
    [SATURN_INTERIOR]: SaturnInterior,
    [STORAGE_BOXES]: StorageBoxes,
    [STORAGE_CHEST]: StorageChest,
    [HOWIE_FRIDGE]: HowieFridge,
    [TELEVISION]: Television,
    [MONITOR_SPEAKER_SIDE]: MonitorSpeakerSide,
    [WALL_SPEAKER_SIDE]: WallSpeakerSide,
    [CROWD_SIDE_NEAR]: CrowdSideNear,
    [CROWD_SIDE_FAR]: CrowdSideFar,
    [VOLKSWAGEN]: Volkswagen,
    [TWIN_STREETLAMP]: TwinStreetlamp,
    [REATTA_EXTERIOR]: ReattaExterior,
    [REATTA_INTERIOR]: ReattaInterior,
    [CROWD_BACK_NEAR]: CrowdBackNear,
    [CROWD_BACK_FAR]: CrowdBackFar,
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
