import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import NohoHouseLeft from './Flats/NohoHouses/NohoHouseLeft'
import NohoHouseRight from './Flats/NohoHouses/NohoHouseRight'
import NohoSchoolhouse from './Flats/NohoSchool/NohoSchoolhouse'
import NurseOfficeBubble from './Flats/NohoSchool/NurseOfficeBubble'
import FamilyHouse from './Flats/ChangelingCave/FamilyHouse'
import CaveShadows from './Flats/ChangelingCave/CaveShadows'
import TaiwanMountainsBridged from './Flats/PuppetShow/TaiwanMountainsBridged'
import TaiwanMountainsNear from './Flats/PuppetShow/TaiwanMountainsNear'
import TaiwanClouds from './Flats/PuppetShow/TaiwanClouds'
import TogetherSketchbook from './Flats/PuppetShow/TogetherSketchbook'
import VanNuysSchoolhouse from './Flats/TetherballCourt/VanNuysSchoolhouse'
import ApartSketchbook from './Flats/PuppetShow/ApartSketchbook'
import ShoreBack from './Flats/Shore/ShoreBack'
import OceanDepthsBack from './Flats/Buoy/OceanDepthsBack'
import OceanBottomFar from './Flats/OceanDepths/OceanBottomFar'
import DogsSketchbook from './Flats/Bedroom/DogsSketchbook'
import EscapePodSketchbook from './Flats/VanNuysQuad/EscapePodSketchbook'
import StJosephsAnnex from './Flats/CatholicChurch/StJosephsAnnex'
import StJosephsChurch from './Flats/CatholicChurch/StJosephsChurch'
import Campanile from './Flats/UcBerkeley/Campanile'
import CinemaThoughts from './Flats/Cinema/CinemaThoughts'
import MuseumDisplay from './Flats/Museum/MuseumDisplay'
import RoyceHall from './Flats/RoyceHall/RoyceHall'
import PharmacyAisle from './Flats/Walgreens/PharmacyAisle'
import SteamPipes from './Flats/SteamTunnel/SteamPipes'
import CemeteryHillsNear from './Flats/Cemetery/CemeteryHillsNear'
import TarpitThought from './Flats/StationWagon/TarpitThought'
import SiblingThought from './Flats/StationWagon/SiblingThought'
import OaklandHouseLeft from './Flats/OaklandHouses/OaklandHouseLeft'
import OaklandHouseRight from './Flats/OaklandHouses/OaklandHouseRight'
import ResidentialLeft from './Flats/OaklandResidential/ResidentialLeft'
import ResidentialRight from './Flats/OaklandResidential/ResidentialRight'
import CommercialLeft from './Flats/OaklandCommercial/CommercialLeft'
import CommercialRight from './Flats/OaklandCommercial/CommercialRight'
import PublicLeft from './Flats/OaklandPublic/PublicLeft'
import PublicRight from './Flats/OaklandPublic/PublicRight'
import SnowglobesPast from './Flats/SnowglobesPast/SnowglobesPast'
import SnowglobesPresent from './Flats/SnowglobesPresent/SnowglobesPresent'
import SnowglobesFuture from './Flats/SnowglobesFuture/SnowglobesFuture'
import ElCerritoRoad from './Flats/ElCerrito/ElCerritoRoad'
import PhoneBubble from './Flats/LizBed/PhoneBubble'
import HospitalThought from './Flats/Deathbed/HospitalThought'
import TennisThought from './Flats/Deathbed/TennisThought'
import CliffGravesBackdrop from './Flats/Cliff/CliffGravesBackdrop'

import {
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT,
    NOHO_SCHOOLHOUSE,
    NURSE_OFFICE_BUBBLE,
    FAMILY_HOUSE,
    CAVE_SHADOWS,
    TAIWAN_MOUNTAINS_BRIDGED,
    TAIWAN_MOUNTAINS_NEAR,
    TAIWAN_CLOUDS,
    TOGETHER_SKETCHBOOK,
    VAN_NUYS_SCHOOLHOUSE,
    APART_SKETCHBOOK,
    SHORE_BACK,
    OCEAN_DEPTHS_BACK,
    OCEAN_BOTTOM_FAR,
    DOGS_SKETCHBOOK,
    ESCAPE_POD_SKETCHBOOK,
    ST_JOSEPHS_ANNEX,
    ST_JOSEPHS_CHURCH,
    CAMPANILE,
    CINEMA_THOUGHTS,
    MUSEUM_DISPLAY,
    ROYCE_HALL,
    PHARMACY_AISLE,
    STEAM_PIPES,
    CEMETERY_HILLS_NEAR,
    TARPIT_THOUGHT,
    SIBLING_THOUGHT,
    OAKLAND_HOUSE_LEFT,
    OAKLAND_HOUSE_RIGHT,
    RESIDENTIAL_LEFT,
    RESIDENTIAL_RIGHT,
    COMMERCIAL_LEFT,
    COMMERCIAL_RIGHT,
    PUBLIC_LEFT,
    PUBLIC_RIGHT,
    SNOWGLOBES_PAST,
    SNOWGLOBES_PRESENT,
    SNOWGLOBES_FUTURE,
    EL_CERRITO_ROAD,
    PHONE_BUBBLE,
    HOSPITAL_THOUGHT,
    TENNIS_THOUGHT,
    CLIFF_GRAVES
} from 'scene/flatKeys'

const FLATS_MAP = {
    [NOHO_HOUSE_LEFT]: NohoHouseLeft,
    [NOHO_HOUSE_RIGHT]: NohoHouseRight,
    [NOHO_SCHOOLHOUSE]: NohoSchoolhouse,
    [NURSE_OFFICE_BUBBLE]: NurseOfficeBubble,
    [FAMILY_HOUSE]: FamilyHouse,
    [CAVE_SHADOWS]: CaveShadows,
    [TAIWAN_MOUNTAINS_BRIDGED]: TaiwanMountainsBridged,
    [TAIWAN_MOUNTAINS_NEAR]: TaiwanMountainsNear,
    [TAIWAN_CLOUDS]: TaiwanClouds,
    [TOGETHER_SKETCHBOOK]: TogetherSketchbook,
    [VAN_NUYS_SCHOOLHOUSE]: VanNuysSchoolhouse,
    [APART_SKETCHBOOK]: ApartSketchbook,
    [SHORE_BACK]: ShoreBack,
    [OCEAN_DEPTHS_BACK]: OceanDepthsBack,
    [OCEAN_BOTTOM_FAR]: OceanBottomFar,
    [DOGS_SKETCHBOOK]: DogsSketchbook,
    [ESCAPE_POD_SKETCHBOOK]: EscapePodSketchbook,
    [ST_JOSEPHS_ANNEX]: StJosephsAnnex,
    [ST_JOSEPHS_CHURCH]: StJosephsChurch,
    [CAMPANILE]: Campanile,
    [CINEMA_THOUGHTS]: CinemaThoughts,
    [MUSEUM_DISPLAY]: MuseumDisplay,
    [ROYCE_HALL]: RoyceHall,
    [PHARMACY_AISLE]: PharmacyAisle,
    [STEAM_PIPES]: SteamPipes,
    [CEMETERY_HILLS_NEAR]: CemeteryHillsNear,
    [TARPIT_THOUGHT]: TarpitThought,
    [SIBLING_THOUGHT]: SiblingThought,
    [OAKLAND_HOUSE_LEFT]: OaklandHouseLeft,
    [OAKLAND_HOUSE_RIGHT]: OaklandHouseRight,
    [RESIDENTIAL_LEFT]: ResidentialLeft,
    [RESIDENTIAL_RIGHT]: ResidentialRight,
    [COMMERCIAL_LEFT]: CommercialLeft,
    [COMMERCIAL_RIGHT]: CommercialRight,
    [PUBLIC_LEFT]: PublicLeft,
    [PUBLIC_RIGHT]: PublicRight,
    [SNOWGLOBES_PAST]: SnowglobesPast,
    [SNOWGLOBES_PRESENT]: SnowglobesPresent,
    [SNOWGLOBES_FUTURE]: SnowglobesFuture,
    [EL_CERRITO_ROAD]: ElCerritoRoad,
    [PHONE_BUBBLE]: PhoneBubble,
    [HOSPITAL_THOUGHT]: HospitalThought,
    [TENNIS_THOUGHT]: TennisThought,
    [CLIFF_GRAVES]: CliffGravesBackdrop
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
