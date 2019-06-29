import FireHydrant from './Cutouts/FireHydrant'
import PlaygroundSlide from './Cutouts/PlaygroundSlide'
import MirroredSink from './Cutouts/MirroredSink'
import TowelRack from './Cutouts/TowelRack'
import OverpassSignFront from './Cutouts/OverpassSignFront'
import OverpassSignBack from './Cutouts/OverpassSignBack'
import porchPlantsLeft from 'assets/svgs/cutouts/porchPlantsLeft.svg'
import porchPlantsRight from 'assets/svgs/cutouts/porchPlantsRight.svg'
import Campfire from './Cutouts/Campfire'
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
import TrashCan from './Cutouts/TrashCan'
import vanNuysPlant from 'assets/svgs/cutouts/vanNuysPlant.svg'
import recyclables from 'assets/svgs/cutouts/recyclables.svg'
import DispenserLeft from './Cutouts/DispenserLeft'
import DispenserRight from './Cutouts/DispenserRight'
import BerkeleyLamppost from './Cutouts/BerkeleyLamppost'
import SignPost from './Cutouts/SignPost'
import bancroftShrubs from 'assets/svgs/cutouts/bancroftShrubs.svg'
import ucBerkeleyTree from 'assets/svgs/cutouts/ucBerkeleyTree.svg'
import MonitorLeft from './Cutouts/MonitorLeft'
import MonitorRight from './Cutouts/MonitorRight'
import WallSpeakerLeft from './Cutouts/WallSpeakerLeft'
import WallSpeakerRight from './Cutouts/WallSpeakerRight'
import Sandbags from './Cutouts/Sandbags'
import StageLights from './Cutouts/StageLights'
import TrafficLight from './Cutouts/TrafficLight'
import apartmentPlant from 'assets/svgs/cutouts/apartmentPlant.svg'
import CodeBox from './Cutouts/CodeBox'
import waitingRoomPlant from 'assets/svgs/cutouts/waitingRoomPlant.svg'
import StorageBoxes from './Cutouts/StorageBoxes'
import StorageChest from './Cutouts/StorageChest'
import HowieFridge from './Cutouts/HowieFridge'
import Television from './Cutouts/Television'
import MonitorSide from './Cutouts/MonitorSide'
import WallSpeakerSide from './Cutouts/WallSpeakerSide'
import TwinStreetlamp from './Cutouts/TwinStreetlamp'
import elCerritoTree from 'assets/svgs/cutouts/elCerritoTree.svg'
import Dumpster from './Cutouts/Dumpster'
import WeddingCrowd from './Cutouts/WeddingCrowd'
import cliffTree from 'assets/svgs/cutouts/cliffTree.svg'
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
    CAMPFIRE,
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
    TRASH_CAN_LOCKERS,
    TRASH_CAN_QUAD,
    VAN_NUYS_PLANT_LOCKERS,
    VAN_NUYS_PLANT_QUAD,
    RECYCLABLES,
    DISPENSER_LEFT,
    DISPENSER_RIGHT,
    BERKELEY_LAMPPOST,
    SIGNPOST,
    BANCROFT_SHRUBS,
    UC_BERKELEY_TREE_LEFT,
    UC_BERKELEY_TREE_RIGHT,
    MONITOR_LEFT,
    MONITOR_RIGHT,
    WALL_SPEAKER_LEFT,
    WALL_SPEAKER_RIGHT,
    SANDBAGS,
    STAGE_LIGHTS,
    TRAFFIC_LIGHT,
    APARTMENT_PLANT,
    CODE_BOX,
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
    EL_CERRITO_TREE,
    DUMPSTER,
    WEDDING_CROWD,
    CLIFF_TREE,
    IV_DRIP
} from 'constants/scene/things/cutouts'

export default {
    [FIRE_HYDRANT]: FireHydrant,
    [PLAYGROUND_SLIDE]: PlaygroundSlide,
    [MIRRORED_SINK]: MirroredSink,
    [TOWEL_RACK]: TowelRack,
    [OVERPASS_SIGN_FRONT]: OverpassSignFront,
    [OVERPASS_SIGN_BACK]: OverpassSignBack,
    [PORCH_PLANTS_LEFT]: porchPlantsLeft,
    [PORCH_PLANTS_RIGHT]: porchPlantsRight,
    [CAMPFIRE]: Campfire,
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
    [TRASH_CAN_LOCKERS]: TrashCan,
    [TRASH_CAN_QUAD]: TrashCan,
    [VAN_NUYS_PLANT_LOCKERS]: vanNuysPlant,
    [VAN_NUYS_PLANT_QUAD]: vanNuysPlant,
    [RECYCLABLES]: recyclables,
    [DISPENSER_LEFT]: DispenserLeft,
    [DISPENSER_RIGHT]: DispenserRight,
    [BERKELEY_LAMPPOST]: BerkeleyLamppost,
    [SIGNPOST]: SignPost,
    [BANCROFT_SHRUBS]: bancroftShrubs,
    [UC_BERKELEY_TREE_LEFT]: ucBerkeleyTree,
    [UC_BERKELEY_TREE_RIGHT]: ucBerkeleyTree,
    [MONITOR_LEFT]: MonitorLeft,
    [MONITOR_RIGHT]: MonitorRight,
    [WALL_SPEAKER_LEFT]: WallSpeakerLeft,
    [WALL_SPEAKER_RIGHT]: WallSpeakerRight,
    [SANDBAGS]: Sandbags,
    [STAGE_LIGHTS]: StageLights,
    [TRAFFIC_LIGHT]: TrafficLight,
    [APARTMENT_PLANT]: apartmentPlant,
    [CODE_BOX]: CodeBox,
    [WAITING_ROOM_PLANT]: waitingRoomPlant,
    [STORAGE_BOXES]: StorageBoxes,
    [STORAGE_CHEST]: StorageChest,
    [HOWIE_FRIDGE]: HowieFridge,
    [TELEVISION]: Television,
    [MONITOR_SIDE_CROWD]: MonitorSide,
    [MONITOR_SIDE_STAGE]: MonitorSide,
    [WALL_SPEAKER_SIDE_CROWD]: WallSpeakerSide,
    [WALL_SPEAKER_SIDE_STAGE]: WallSpeakerSide,
    [TWIN_STREETLAMP_FAR]: TwinStreetlamp,
    [TWIN_STREETLAMP_MIDDLE]: TwinStreetlamp,
    [TWIN_STREETLAMP_NEAR]: TwinStreetlamp,
    [EL_CERRITO_TREE]: elCerritoTree,
    [DUMPSTER]: Dumpster,
    [WEDDING_CROWD]: WeddingCrowd,
    [CLIFF_TREE]: cliffTree,
    [IV_DRIP]: IvDrip
}

