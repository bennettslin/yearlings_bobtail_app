import fireHydrant from 'assets/svgs/cutouts/fireHydrant.svg'
import playgroundSlide from 'assets/svgs/cutouts/playgroundSlide.svg'
// import mirroredSink from 'assets/svgs/cutouts/mirroredSink.svg'
import towelRack from 'assets/svgs/cutouts/towelRack.svg'
import overpassSignFront from 'assets/svgs/cutouts/overpassSignFront.svg'
import overpassSignBack from 'assets/svgs/cutouts/overpassSignBack.svg'
import porchPlant from 'assets/svgs/cutouts/porchPlant.svg'
import campfire from 'assets/svgs/cutouts/campfire.svg'
// import buddhaShrine from 'assets/svgs/cutouts/buddhaShrine.svg'
import taiwanFridge from 'assets/svgs/cutouts/taiwanFridge.svg'
import bennettTaiwanStairs from 'assets/svgs/cutouts/bennettTaiwanStairs.svg'
import odinTaiwanStairs from 'assets/svgs/cutouts/odinTaiwanStairs.svg'
import bennettTaiwanGate from 'assets/svgs/cutouts/bennettTaiwanGate.svg'
import odinTaiwanGate from 'assets/svgs/cutouts/odinTaiwanGate.svg'
// import bennettOdinRickshaw from 'assets/svgs/cutouts/bennettOdinRickshaw.svg'
import bennettShore from 'assets/svgs/cutouts/bennettShore.svg'
import odinShore from 'assets/svgs/cutouts/odinShore.svg'
// import bennettOdinBuoy from 'assets/svgs/cutouts/bennettOdinBuoy.svg'
import yellowTapedGrill from 'assets/svgs/cutouts/yellowTapedGrill.svg'
import bennettOdinDepths from 'assets/svgs/cutouts/bennettOdinDepths.svg'
// import seaSerpents from 'assets/svgs/cutouts/seaSerpents.svg'
import bennettOdinOceanFloor from 'assets/svgs/cutouts/bennettOdinOceanFloor.svg'
import bennettMat from 'assets/svgs/cutouts/bennettMat.svg'
import odinMat from 'assets/svgs/cutouts/odinMat.svg'
// import trashCan from 'assets/svgs/cutouts/trashCan.svg'
import vanNuysPlant from 'assets/svgs/cutouts/vanNuysPlant.svg'
import recyclables from 'assets/svgs/cutouts/recyclables.svg'
import berkeleyLamppost from 'assets/svgs/cutouts/berkeleyLamppost.svg'
import signpost from 'assets/svgs/cutouts/signpost.svg'
import bancroftShrubs from 'assets/svgs/cutouts/bancroftShrubs.svg'
import ucBerkeleyTree from 'assets/svgs/cutouts/ucBerkeleyTree.svg'
import monitorFront from 'assets/svgs/cutouts/monitorFront.svg'
import wallSpeakerFront from 'assets/svgs/cutouts/wallSpeakerFront.svg'
import sandbags from 'assets/svgs/cutouts/sandbags.svg'
import stageLights from 'assets/svgs/cutouts/stageLights.svg'
import trafficLight from 'assets/svgs/cutouts/trafficLight.svg'
import apartmentPlant from 'assets/svgs/cutouts/apartmentPlant.svg'
import waitingRoomPlant from 'assets/svgs/cutouts/waitingRoomPlant.svg'
import storageBoxes from 'assets/svgs/cutouts/storageBoxes.svg'
import storageChest from 'assets/svgs/cutouts/storageChest.svg'
import howieFridge from 'assets/svgs/cutouts/howieFridge.svg'
import television from 'assets/svgs/cutouts/television.svg'
import monitorSide from 'assets/svgs/cutouts/monitorSide.svg'
import wallSpeakerSide from 'assets/svgs/cutouts/wallSpeakerSide.svg'
import twinStreetlamp from 'assets/svgs/cutouts/twinStreetlamp.svg'
import elCerritoTree from 'assets/svgs/cutouts/elCerritoTree.svg'
// import dumpster from 'assets/svgs/cutouts/dumpster.svg'
import dispenserLeft from 'assets/svgs/cutouts/dispenserLeft.svg'
import dispenserRight from 'assets/svgs/cutouts/dispenserRight.svg'
import weddingCrowd from 'assets/svgs/cutouts/weddingCrowd.svg'
import cliffTree from 'assets/svgs/cutouts/cliffTree.svg'
import ivDrip from 'assets/svgs/cutouts/ivDrip.svg'

import {
    FIRE_HYDRANT,
    PLAYGROUND_SLIDE,
    MIRRORED_SINK,
    TOWEL_RACK,
    OVERPASS_SIGN_FRONT,
    OVERPASS_SIGN_BACK,
    PORCH_PLANT__LEFT,
    PORCH_PLANT__RIGHT,
    CAMPFIRE,
    BUDDHA_SHRINE,
    TAIWAN_FRIDGE,
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
    TRASH_CAN__LOCKERS,
    TRASH_CAN__QUAD,
    VAN_NUYS_PLANT__LOCKERS,
    VAN_NUYS_PLANT__QUAD,
    RECYCLABLES,
    BERKELEY_LAMPPOST,
    SIGNPOST,
    BANCROFT_SHRUBS,
    UC_BERKELEY_TREE__LEFT,
    UC_BERKELEY_TREE__RIGHT,
    MONITOR_FRONT__LEFT,
    MONITOR_FRONT__RIGHT,
    WALL_SPEAKER_FRONT__LEFT,
    WALL_SPEAKER_FRONT__RIGHT,
    SANDBAGS,
    STAGE_LIGHTS,
    TRAFFIC_LIGHT,
    APARTMENT_PLANT,
    WAITING_ROOM_PLANT,
    STORAGE_BOXES,
    STORAGE_CHEST,
    HOWIE_FRIDGE,
    TELEVISION,
    MONITOR_SIDE__CROWD,
    MONITOR_SIDE__STAGE,
    WALL_SPEAKER_SIDE__CROWD,
    WALL_SPEAKER_SIDE__STAGE,
    TWIN_STREETLAMP__FAR,
    TWIN_STREETLAMP__MIDDLE,
    TWIN_STREETLAMP__NEAR,
    EL_CERRITO_TREE,
    DUMPSTER,
    DISPENSER_LEFT,
    DISPENSER_RIGHT,
    WEDDING_CROWD,
    CLIFF_TREE,
    IV_DRIP
} from 'constants/scene/things/cutouts'

export default {
    [FIRE_HYDRANT]: fireHydrant,
    [PLAYGROUND_SLIDE]: playgroundSlide,
    [MIRRORED_SINK]: false,
    [TOWEL_RACK]: towelRack,
    [OVERPASS_SIGN_FRONT]: overpassSignFront,
    [OVERPASS_SIGN_BACK]: overpassSignBack,
    [PORCH_PLANT__LEFT]: porchPlant,
    [PORCH_PLANT__RIGHT]: porchPlant,
    [CAMPFIRE]: campfire,
    [BUDDHA_SHRINE]: false,
    [TAIWAN_FRIDGE]: taiwanFridge,
    [BENNETT_TAIWAN_STAIRS]: bennettTaiwanStairs,
    [ODIN_TAIWAN_STAIRS]: odinTaiwanStairs,
    [BENNETT_TAIWAN_GATE]: bennettTaiwanGate,
    [ODIN_TAIWAN_GATE]: odinTaiwanGate,
    [BENNETT_ODIN_RICKSHAW]: false,
    [BENNETT_SHORE]: bennettShore,
    [ODIN_SHORE]: odinShore,
    [BENNETT_ODIN_BUOY]: false,
    [YELLOW_TAPED_GRILL]: yellowTapedGrill,
    [BENNETT_ODIN_DEPTHS]: bennettOdinDepths,
    [SEA_SERPENTS]: false,
    [BENNETT_ODIN_OCEAN_FLOOR]: bennettOdinOceanFloor,
    [BENNETT_MAT]: bennettMat,
    [ODIN_MAT]: odinMat,
    [TRASH_CAN__LOCKERS]: false,
    [TRASH_CAN__QUAD]: false,
    [VAN_NUYS_PLANT__LOCKERS]: vanNuysPlant,
    [VAN_NUYS_PLANT__QUAD]: vanNuysPlant,
    [RECYCLABLES]: recyclables,
    [BERKELEY_LAMPPOST]: berkeleyLamppost,
    [SIGNPOST]: signpost,
    [BANCROFT_SHRUBS]: bancroftShrubs,
    [UC_BERKELEY_TREE__LEFT]: ucBerkeleyTree,
    [UC_BERKELEY_TREE__RIGHT]: ucBerkeleyTree,
    [MONITOR_FRONT__LEFT]: monitorFront,
    [MONITOR_FRONT__RIGHT]: monitorFront,
    [WALL_SPEAKER_FRONT__LEFT]: wallSpeakerFront,
    [WALL_SPEAKER_FRONT__RIGHT]: wallSpeakerFront,
    [SANDBAGS]: sandbags,
    [STAGE_LIGHTS]: stageLights,
    [TRAFFIC_LIGHT]: trafficLight,
    [APARTMENT_PLANT]: apartmentPlant,
    [WAITING_ROOM_PLANT]: waitingRoomPlant,
    [STORAGE_BOXES]: storageBoxes,
    [STORAGE_CHEST]: storageChest,
    [HOWIE_FRIDGE]: howieFridge,
    [TELEVISION]: television,
    [MONITOR_SIDE__CROWD]: monitorSide,
    [MONITOR_SIDE__STAGE]: monitorSide,
    [WALL_SPEAKER_SIDE__CROWD]: wallSpeakerSide,
    [WALL_SPEAKER_SIDE__STAGE]: wallSpeakerSide,
    [TWIN_STREETLAMP__FAR]: twinStreetlamp,
    [TWIN_STREETLAMP__MIDDLE]: twinStreetlamp,
    [TWIN_STREETLAMP__NEAR]: twinStreetlamp,
    [EL_CERRITO_TREE]: elCerritoTree,
    [DUMPSTER]: false,
    [DISPENSER_LEFT]: dispenserLeft,
    [DISPENSER_RIGHT]: dispenserRight,
    [WEDDING_CROWD]: weddingCrowd,
    [CLIFF_TREE]: cliffTree,
    [IV_DRIP]: ivDrip
}

