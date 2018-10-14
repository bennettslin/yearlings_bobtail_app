import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import NohoHouseLeft from './Flats/NohoHouseLeft'
import NohoHouseRight from './Flats/NohoHouseRight'
import NohoSchoolhouse from './Flats/NohoSchoolhouse'
import FamilyHouse from './Flats/FamilyHouse'
import CaveShadows from './Flats/CaveShadows'
import TaiwanClouds from './Flats/TaiwanClouds'
import TaiwanFog from './Flats/TaiwanFog'
import TaiwanMountainsBridged from './Flats/TaiwanMountainsBridged'
import TaiwanMountainLeft from './Flats/TaiwanMountainLeft'
import TaiwanMountainRight from './Flats/TaiwanMountainRight'
import TaiwanHouseFar from './Flats/TaiwanHouseFar'
import TaiwanHouseNear from './Flats/TaiwanHouseNear'
import VanNuysSchoolhouse from './Flats/VanNuysSchoolhouse'
import ShoreBack from './Flats/ShoreBack'
import OceanDepthsBack from './Flats/OceanDepthsBack'
import OceanBottomFar from './Flats/OceanBottomFar'
import LockerBank from './Flats/LockerBank'
import StJosephsAnnex from './Flats/StJosephsAnnex'
import StJosephsChurch from './Flats/StJosephsChurch'
import Campanile from './Flats/Campanile'
import MuseumDisplay from './Flats/MuseumDisplay'
import RoyceHall from './Flats/RoyceHall'
import PharmacyAisle from './Flats/PharmacyAisle'
import SteamPipes from './Flats/SteamPipes'
import CemeteryHillsNear from './Flats/CemeteryHillsNear'
import CrowdSideNear from './Flats/CrowdSideNear'
import CrowdSideFar from './Flats/CrowdSideFar'
import OaklandHouseLeft from './Flats/OaklandHouseLeft'
import OaklandHouseRight from './Flats/OaklandHouseRight'
import ResidentialFarLeft from './Flats/ResidentialFarLeft'
import ResidentialMiddleLeft from './Flats/ResidentialMiddleLeft'
import ResidentialNearLeft from './Flats/ResidentialNearLeft'
import ResidentialFarRight from './Flats/ResidentialFarRight'
import ResidentialMiddleRight from './Flats/ResidentialMiddleRight'
import ResidentialNearRight from './Flats/ResidentialNearRight'
import CommercialCentre from './Flats/CommercialCentre'
import CommercialFarLeft from './Flats/CommercialFarLeft'
import CommercialMiddleLeft from './Flats/CommercialMiddleLeft'
import CommercialNearLeft from './Flats/CommercialNearLeft'
import CommercialFarRight from './Flats/CommercialFarRight'
import CommercialMiddleRight from './Flats/CommercialMiddleRight'
import CommercialNearRight from './Flats/CommercialNearRight'
import PublicFarLeft from './Flats/PublicFarLeft'
import PublicNearLeft from './Flats/PublicNearLeft'
import PublicFarRight from './Flats/PublicFarRight'
import PublicNearRight from './Flats/PublicNearRight'
import RoadPast from './Flats/RoadPast'
import RoadPresent from './Flats/RoadPresent'
import RoadFuture from './Flats/RoadFuture'
import ElCerritoTree from './Flats/ElCerritoTree'
import ElCerritoFar from './Flats/ElCerritoFar'
import ElCerritoNear from './Flats/ElCerritoNear'
import CrowdBackNear from './Flats/CrowdBackNear'
import CrowdBackFar from './Flats/CrowdBackFar'
import CliffTree from './Flats/CliffTree'
import CliffGravesFar from './Flats/CliffGravesFar'
import CliffGravesNear from './Flats/CliffGravesNear'

import {
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT,
    NOHO_SCHOOLHOUSE,
    FAMILY_HOUSE,
    CAVE_SHADOWS,
    TAIWAN_CLOUDS,
    TAIWAN_FOG,
    TAIWAN_MOUNTAINS_BRIDGED,
    TAIWAN_MOUNTAIN_LEFT,
    TAIWAN_MOUNTAIN_RIGHT,
    TAIWAN_HOUSE_FAR,
    TAIWAN_HOUSE_NEAR,
    VAN_NUYS_SCHOOLHOUSE,
    SHORE_BACK,
    OCEAN_DEPTHS_BACK,
    OCEAN_BOTTOM_FAR,
    LOCKER_BANK,
    ST_JOSEPHS_ANNEX,
    ST_JOSEPHS_CHURCH,
    CAMPANILE,
    MUSEUM_DISPLAY,
    ROYCE_HALL,
    PHARMACY_AISLE,
    STEAM_PIPES,
    CEMETERY_HILLS_NEAR,
    CROWD_SIDE_NEAR,
    CROWD_SIDE_FAR,
    OAKLAND_HOUSE_LEFT,
    OAKLAND_HOUSE_RIGHT,
    RESIDENTIAL_FAR_LEFT,
    RESIDENTIAL_MIDDLE_LEFT,
    RESIDENTIAL_NEAR_LEFT,
    RESIDENTIAL_FAR_RIGHT,
    RESIDENTIAL_MIDDLE_RIGHT,
    RESIDENTIAL_NEAR_RIGHT,
    COMMERCIAL_CENTRE,
    COMMERCIAL_FAR_LEFT,
    COMMERCIAL_MIDDLE_LEFT,
    COMMERCIAL_NEAR_LEFT,
    COMMERCIAL_FAR_RIGHT,
    COMMERCIAL_MIDDLE_RIGHT,
    COMMERCIAL_NEAR_RIGHT,
    PUBLIC_FAR_LEFT,
    PUBLIC_NEAR_LEFT,
    PUBLIC_FAR_RIGHT,
    PUBLIC_NEAR_RIGHT,
    ROAD_PAST,
    ROAD_PRESENT,
    ROAD_FUTURE,
    EL_CERRITO_TREE,
    EL_CERRITO_FAR,
    EL_CERRITO_NEAR,
    CROWD_BACK_NEAR,
    CROWD_BACK_FAR,
    CLIFF_TREE,
    CLIFF_GRAVES_FAR,
    CLIFF_GRAVES_NEAR
} from 'scene/flatKeys'

const FLATS_MAP = {
    [NOHO_HOUSE_LEFT]: NohoHouseLeft,
    [NOHO_HOUSE_RIGHT]: NohoHouseRight,
    [NOHO_SCHOOLHOUSE]: NohoSchoolhouse,
    [FAMILY_HOUSE]: FamilyHouse,
    [CAVE_SHADOWS]: CaveShadows,
    [TAIWAN_CLOUDS]: TaiwanClouds,
    [TAIWAN_FOG]: TaiwanFog,
    [TAIWAN_MOUNTAINS_BRIDGED]: TaiwanMountainsBridged,
    [TAIWAN_MOUNTAIN_LEFT]: TaiwanMountainLeft,
    [TAIWAN_MOUNTAIN_RIGHT]: TaiwanMountainRight,
    [TAIWAN_HOUSE_FAR]: TaiwanHouseFar,
    [TAIWAN_HOUSE_NEAR]: TaiwanHouseNear,
    [VAN_NUYS_SCHOOLHOUSE]: VanNuysSchoolhouse,
    [SHORE_BACK]: ShoreBack,
    [OCEAN_DEPTHS_BACK]: OceanDepthsBack,
    [OCEAN_BOTTOM_FAR]: OceanBottomFar,
    [LOCKER_BANK]: LockerBank,
    [ST_JOSEPHS_ANNEX]: StJosephsAnnex,
    [ST_JOSEPHS_CHURCH]: StJosephsChurch,
    [CAMPANILE]: Campanile,
    [MUSEUM_DISPLAY]: MuseumDisplay,
    [ROYCE_HALL]: RoyceHall,
    [PHARMACY_AISLE]: PharmacyAisle,
    [STEAM_PIPES]: SteamPipes,
    [CEMETERY_HILLS_NEAR]: CemeteryHillsNear,
    [CROWD_SIDE_NEAR]: CrowdSideNear,
    [CROWD_SIDE_FAR]: CrowdSideFar,
    [OAKLAND_HOUSE_LEFT]: OaklandHouseLeft,
    [OAKLAND_HOUSE_RIGHT]: OaklandHouseRight,
    [RESIDENTIAL_FAR_LEFT]: ResidentialFarLeft,
    [RESIDENTIAL_FAR_RIGHT]: ResidentialFarRight,
    [RESIDENTIAL_MIDDLE_LEFT]: ResidentialMiddleLeft,
    [RESIDENTIAL_MIDDLE_RIGHT]: ResidentialMiddleRight,
    [RESIDENTIAL_NEAR_LEFT]: ResidentialNearLeft,
    [RESIDENTIAL_NEAR_RIGHT]: ResidentialNearRight,
    [COMMERCIAL_CENTRE]: CommercialCentre,
    [COMMERCIAL_FAR_LEFT]: CommercialFarLeft,
    [COMMERCIAL_FAR_RIGHT]: CommercialFarRight,
    [COMMERCIAL_MIDDLE_LEFT]: CommercialMiddleLeft,
    [COMMERCIAL_MIDDLE_RIGHT]: CommercialMiddleRight,
    [COMMERCIAL_NEAR_LEFT]: CommercialNearLeft,
    [COMMERCIAL_NEAR_RIGHT]: CommercialNearRight,
    [PUBLIC_FAR_LEFT]: PublicFarLeft,
    [PUBLIC_FAR_RIGHT]: PublicFarRight,
    [PUBLIC_NEAR_LEFT]: PublicNearLeft,
    [PUBLIC_NEAR_RIGHT]: PublicNearRight,
    [ROAD_PAST]: RoadPast,
    [ROAD_PRESENT]: RoadPresent,
    [ROAD_FUTURE]: RoadFuture,
    [EL_CERRITO_TREE]: ElCerritoTree,
    [EL_CERRITO_FAR]: ElCerritoFar,
    [EL_CERRITO_NEAR]: ElCerritoNear,
    [CROWD_BACK_NEAR]: CrowdBackNear,
    [CROWD_BACK_FAR]: CrowdBackFar,
    [CLIFF_TREE]: CliffTree,
    [CLIFF_GRAVES_FAR]: CliffGravesFar,
    [CLIFF_GRAVES_NEAR]: CliffGravesNear
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
