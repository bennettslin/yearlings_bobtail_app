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
import TrollShadowLeft from './Cutouts/ChangelingCave/TrollShadowLeft'
import TrollShadowRight from './Cutouts/ChangelingCave/TrollShadowRight'
import Campfire from './Cutouts/ChangelingCave/Campfire'
import SchoolbusFront from './Cutouts/Schoolbus/SchoolbusFront'
import SchoolbusBack from './Cutouts/Schoolbus/SchoolbusBack'
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
import TrashCanBack from './Cutouts/VanNuysLockers/TrashCanBack'
import VanNuysPlantsBack from './Cutouts/VanNuysLockers/VanNuysPlantsBack'
import TrashCanFront from './Cutouts/VanNuysQuad/TrashCanFront'
import VanNuysPlantsFront from './Cutouts/VanNuysQuad/VanNuysPlantsFront'
import VanNuysLogo from './Cutouts/VanNuysQuad/VanNuysLogo'

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
    TROLL_SHADOW_LEFT,
    TROLL_SHADOW_RIGHT,
    CAMPFIRE,
    SCHOOLBUS_FRONT,
    SCHOOLBUS_BACK,
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
    TRASH_CAN_BACK,
    VAN_NUYS_PLANTS_BACK,
    TRASH_CAN_FRONT,
    VAN_NUYS_PLANTS_FRONT,
    VAN_NUYS_LOGO
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
    [TROLL_SHADOW_LEFT]: TrollShadowLeft,
    [TROLL_SHADOW_RIGHT]: TrollShadowRight,
    [CAMPFIRE]: Campfire,
    [SCHOOLBUS_FRONT]: SchoolbusFront,
    [SCHOOLBUS_BACK]: SchoolbusBack,
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
    [TRASH_CAN_BACK]: TrashCanBack,
    [VAN_NUYS_PLANTS_BACK]: VanNuysPlantsBack,
    [TRASH_CAN_FRONT]: TrashCanFront,
    [VAN_NUYS_PLANTS_FRONT]: VanNuysPlantsFront,
    [VAN_NUYS_LOGO]: VanNuysLogo
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
