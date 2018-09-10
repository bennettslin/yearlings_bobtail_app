import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import NohoHousesBackdrop from './Flats/NohoHouses/NohoHousesBackdrop'
import NohoHouseLeft from './Flats/NohoHouses/NohoHouseLeft'
import NohoHouseRight from './Flats/NohoHouses/NohoHouseRight'
import NohoSchoolBackdrop from './Flats/NohoSchool/NohoSchoolBackdrop'
import NohoSchoolhouse from './Flats/NohoSchool/NohoSchoolhouse'
import NurseOfficeBubble from './Flats/NohoSchool/NurseOfficeBubble'
import ValleyBackdrop from './Flats/Freeway/ValleyBackdrop'
import BedroomBackdrop from './Flats/Bedroom/BedroomBackdrop'
import BedroomSirenBackdrop from './Flats/Bedroom/BedroomSirenBackdrop'
import CaptainBedDrawers from './Flats/Bedroom/CaptainBedDrawers'
import FamilyHouse from './Flats/ChangelingCave/FamilyHouse'
import CaveShadows from './Flats/ChangelingCave/CaveShadows'
import Stalactites from './Flats/ChangelingCave/Stalactites'
import TaiwanMountainsFar from './Flats/PuppetShow/TaiwanMountainsFar'
import TaiwanMountainsBridged from './Flats/PuppetShow/TaiwanMountainsBridged'
import TaiwanMountainsNear from './Flats/PuppetShow/TaiwanMountainsNear'
import TaiwanClouds from './Flats/PuppetShow/TaiwanClouds'
import TogetherSketchbook from './Flats/PuppetShow/TogetherSketchbook'
import SchoolbusStreetThought from './Flats/Schoolbus/SchoolbusStreetThought'
import VanNuysSchoolThought from './Flats/TetherballCourt/VanNuysSchoolThought'
import VanNuysSchoolhouse from './Flats/TetherballCourt/VanNuysSchoolhouse'
import ApartSketchbook from './Flats/PuppetShow/ApartSketchbook'
import TaiwanGate from './Flats/TaiwanStairs/TaiwanGate'
import TaiwanStreetsBackdrop from './Flats/TaiwanGate/TaiwanStreetsBackdrop'
import ShoreBackdrop from './Flats/Rickshaw/ShoreBackdrop'
import ShoreFront from './Flats/Shore/ShoreFront'
import ShoreBack from './Flats/Shore/ShoreBack'
import OceanDepthsFront from './Flats/Buoy/OceanDepthsFront'
import OceanDepthsBack from './Flats/Buoy/OceanDepthsBack'
import OceanWaves from './Flats/OceanDepths/OceanWaves'
import OceanBottomFar from './Flats/OceanDepths/OceanBottomFar'
import OceanBottomNear from './Flats/OceanFloor/OceanBottomNear'
import DogsSketchbook from './Flats/Bedroom/DogsSketchbook'
import BedroomBusBackdrop from './Flats/Bedroom/BedroomBusBackdrop'
import EscapePodSketchbook from './Flats/VanNuysQuad/EscapePodSketchbook'
import VanNuysSchoolBackdrop from './Flats/VanNuysLockers/VanNuysSchoolBackdrop'

import {
    NOHO_HOUSES_BACKDROP,
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT,
    NOHO_SCHOOL_BACKDROP,
    NOHO_SCHOOLHOUSE,
    NURSE_OFFICE_BUBBLE,
    VALLEY_BACKDROP,
    BEDROOM_BACKDROP,
    BEDROOM_SIREN_BACKDROP,
    CAPTAIN_BED_DRAWERS,
    FAMILY_HOUSE,
    CAVE_SHADOWS,
    STALACTITES,
    TAIWAN_MOUNTAINS_FAR,
    TAIWAN_MOUNTAINS_BRIDGED,
    TAIWAN_MOUNTAINS_NEAR,
    TAIWAN_CLOUDS,
    TOGETHER_SKETCHBOOK,
    SCHOOLBUS_STREET_THOUGHT,
    VAN_NUYS_SCHOOL_THOUGHT,
    VAN_NUYS_SCHOOLHOUSE,
    APART_SKETCHBOOK,
    TAIWAN_GATE,
    TAIWAN_STREETS_BACKDROP,
    SHORE_BACKDROP,
    SHORE_FRONT,
    SHORE_BACK,
    OCEAN_DEPTHS_FRONT,
    OCEAN_DEPTHS_BACK,
    OCEAN_WAVES,
    OCEAN_BOTTOM_FAR,
    OCEAN_BOTTOM_NEAR,
    DOGS_SKETCHBOOK,
    BEDROOM_BUS_BACKDROP,
    ESCAPE_POD_SKETCHBOOK,
    VAN_NUYS_SCHOOL_BACKDROP
} from 'scene/flatKeys'

const FLATS_MAP = {
    [NOHO_HOUSES_BACKDROP]: NohoHousesBackdrop,
    [NOHO_HOUSE_LEFT]: NohoHouseLeft,
    [NOHO_HOUSE_RIGHT]: NohoHouseRight,
    [NOHO_SCHOOL_BACKDROP]: NohoSchoolBackdrop,
    [NOHO_SCHOOLHOUSE]: NohoSchoolhouse,
    [NURSE_OFFICE_BUBBLE]: NurseOfficeBubble,
    [VALLEY_BACKDROP]: ValleyBackdrop,
    [BEDROOM_BACKDROP]: BedroomBackdrop,
    [BEDROOM_SIREN_BACKDROP]: BedroomSirenBackdrop,
    [CAPTAIN_BED_DRAWERS]: CaptainBedDrawers,
    [FAMILY_HOUSE]: FamilyHouse,
    [CAVE_SHADOWS]: CaveShadows,
    [STALACTITES]: Stalactites,
    [TAIWAN_MOUNTAINS_FAR]: TaiwanMountainsFar,
    [TAIWAN_MOUNTAINS_BRIDGED]: TaiwanMountainsBridged,
    [TAIWAN_MOUNTAINS_NEAR]: TaiwanMountainsNear,
    [TAIWAN_CLOUDS]: TaiwanClouds,
    [TOGETHER_SKETCHBOOK]: TogetherSketchbook,
    [SCHOOLBUS_STREET_THOUGHT]: SchoolbusStreetThought,
    [VAN_NUYS_SCHOOL_THOUGHT]: VanNuysSchoolThought,
    [VAN_NUYS_SCHOOLHOUSE]: VanNuysSchoolhouse,
    [APART_SKETCHBOOK]: ApartSketchbook,
    [TAIWAN_GATE]: TaiwanGate,
    [TAIWAN_STREETS_BACKDROP]: TaiwanStreetsBackdrop,
    [SHORE_BACKDROP]: ShoreBackdrop,
    [SHORE_FRONT]: ShoreFront,
    [SHORE_BACK]: ShoreBack,
    [OCEAN_DEPTHS_FRONT]: OceanDepthsFront,
    [OCEAN_DEPTHS_BACK]: OceanDepthsBack,
    [OCEAN_WAVES]: OceanWaves,
    [OCEAN_BOTTOM_FAR]: OceanBottomFar,
    [OCEAN_BOTTOM_NEAR]: OceanBottomNear,
    [DOGS_SKETCHBOOK]: DogsSketchbook,
    [BEDROOM_BUS_BACKDROP]: BedroomBusBackdrop,
    [ESCAPE_POD_SKETCHBOOK]: EscapePodSketchbook,
    [VAN_NUYS_SCHOOL_BACKDROP]: VanNuysSchoolBackdrop
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

const Flat = ({

    className,
    nameKey,

...other }) => {

    const FlatComponent =
        FLATS_MAP[nameKey] || DEFAULT_COMPONENT

    return (
        <FlatComponent {...other}
            className={cx(
                'Flat',
                className
            )}
        />
    )
}

Flat.propTypes = propTypes;

export default Flat
