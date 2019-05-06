import PropTypes from 'prop-types'

import NohoHouseLeft from './Flats/NohoHouseLeft'
import NohoHouseRight from './Flats/NohoHouseRight'
import NohoSchoolhouse from './Flats/NohoSchoolhouse'
import BedroomBus from './Flats/BedroomBus'
import BedroomSiren from './Flats/BedroomSiren'
import FamilyHouse from './Flats/FamilyHouse'
import CaveShadows from './Flats/CaveShadows'
import TaiwanClouds from './Flats/TaiwanClouds'
import TaiwanFog from './Flats/TaiwanFog'
import TaiwanMountainsBridged from './Flats/TaiwanMountainsBridged'
import TaiwanMountainLeft from './Flats/TaiwanMountainLeft'
import TaiwanMountainRight from './Flats/TaiwanMountainRight'
import TaiwanHouseFar from './Flats/TaiwanHouseFar'
import TaiwanHouseNear from './Flats/TaiwanHouseNear'
import VanNuysSchoolhouseLeft from './Flats/VanNuysSchoolhouseLeft'
import VanNuysSchoolhouseRight from './Flats/VanNuysSchoolhouseRight'
import RickshawTown from './Flats/RickshawTown'
import ShoreCarnival from './Flats/ShoreCarnival'
import OceanBottomMiddle from './Flats/OceanBottomMiddle'
import OceanBottomNear from './Flats/OceanBottomNear'
import LockerBank from './Flats/LockerBank'
import StJosephsAnnex from './Flats/StJosephsAnnex'
import StJosephsChurch from './Flats/StJosephsChurch'
import Campanile from './Flats/Campanile'
import MuseumDisplay from './Flats/MuseumDisplay'
import RoyceHall from './Flats/RoyceHall'
import PharmacyAisle from './Flats/PharmacyAisle'
import SteamPipes from './Flats/SteamPipes'
import CemeteryHillsNear from './Flats/CemeteryHillsNear'
import CrowdNear from './Flats/CrowdNear'
import CrowdFar from './Flats/CrowdFar'
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
import ElCerritoFar from './Flats/ElCerritoFar'
import ElCerritoNear from './Flats/ElCerritoNear'
import ForebodingTrees from './Flats/ForebodingTrees'
import CliffGravesFar from './Flats/CliffGravesFar'
import CliffGravesNear from './Flats/CliffGravesNear'
import PampasFar from './Flats/PampasFar'

import {
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT,
    NOHO_SCHOOLHOUSE,
    BEDROOM_BUS,
    BEDROOM_SIREN,
    FAMILY_HOUSE,
    CAVE_SHADOWS,
    TAIWAN_CLOUDS,
    TAIWAN_FOG,
    TAIWAN_MOUNTAINS_BRIDGED,
    TAIWAN_MOUNTAIN_LEFT,
    TAIWAN_MOUNTAIN_RIGHT,
    TAIWAN_HOUSE_FAR,
    TAIWAN_HOUSE_NEAR,
    VAN_NUYS_SCHOOLHOUSE_LEFT,
    VAN_NUYS_SCHOOLHOUSE_RIGHT,
    RICKSHAW_TOWN,
    SHORE_CARNIVAL,
    OCEAN_BOTTOM_MIDDLE,
    OCEAN_BOTTOM_NEAR,
    LOCKER_BANK,
    ST_JOSEPHS_ANNEX,
    ST_JOSEPHS_CHURCH,
    CAMPANILE,
    MUSEUM_DISPLAY,
    ROYCE_HALL,
    PHARMACY_AISLE,
    STEAM_PIPES,
    CEMETERY_HILLS_NEAR,
    CROWD_NEAR_SIDE,
    CROWD_FAR_SIDE,
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
    EL_CERRITO_FAR,
    EL_CERRITO_NEAR,
    CROWD_NEAR_BACK,
    CROWD_FAR_BACK,
    FOREBODING_TREES,
    CLIFF_GRAVES_FAR,
    CLIFF_GRAVES_NEAR,
    PAMPAS_FAR
} from 'scene/things/keys/flats'

export const propTypes = {
    [NOHO_HOUSE_LEFT]: PropTypes.bool,
    [NOHO_HOUSE_RIGHT]: PropTypes.bool,
    [NOHO_SCHOOLHOUSE]: PropTypes.bool,
    [BEDROOM_BUS]: PropTypes.bool,
    [BEDROOM_SIREN]: PropTypes.bool,
    [FAMILY_HOUSE]: PropTypes.bool,
    [CAVE_SHADOWS]: PropTypes.bool,
    [TAIWAN_CLOUDS]: PropTypes.bool,
    [TAIWAN_FOG]: PropTypes.bool,
    [TAIWAN_MOUNTAINS_BRIDGED]: PropTypes.bool,
    [TAIWAN_MOUNTAIN_LEFT]: PropTypes.bool,
    [TAIWAN_MOUNTAIN_RIGHT]: PropTypes.bool,
    [TAIWAN_HOUSE_FAR]: PropTypes.bool,
    [TAIWAN_HOUSE_NEAR]: PropTypes.bool,
    [VAN_NUYS_SCHOOLHOUSE_LEFT]: PropTypes.bool,
    [VAN_NUYS_SCHOOLHOUSE_RIGHT]: PropTypes.bool,
    [RICKSHAW_TOWN]: PropTypes.bool,
    [SHORE_CARNIVAL]: PropTypes.bool,
    [OCEAN_BOTTOM_MIDDLE]: PropTypes.bool,
    [OCEAN_BOTTOM_NEAR]: PropTypes.bool,
    [LOCKER_BANK]: PropTypes.bool,
    [ST_JOSEPHS_ANNEX]: PropTypes.bool,
    [ST_JOSEPHS_CHURCH]: PropTypes.bool,
    [CAMPANILE]: PropTypes.bool,
    [MUSEUM_DISPLAY]: PropTypes.bool,
    [ROYCE_HALL]: PropTypes.bool,
    [PHARMACY_AISLE]: PropTypes.bool,
    [STEAM_PIPES]: PropTypes.bool,
    [CEMETERY_HILLS_NEAR]: PropTypes.bool,
    [CROWD_NEAR_SIDE]: PropTypes.bool,
    [CROWD_FAR_SIDE]: PropTypes.bool,
    [OAKLAND_HOUSE_LEFT]: PropTypes.bool,
    [OAKLAND_HOUSE_RIGHT]: PropTypes.bool,
    [RESIDENTIAL_FAR_LEFT]: PropTypes.bool,
    [RESIDENTIAL_FAR_RIGHT]: PropTypes.bool,
    [RESIDENTIAL_MIDDLE_LEFT]: PropTypes.bool,
    [RESIDENTIAL_MIDDLE_RIGHT]: PropTypes.bool,
    [RESIDENTIAL_NEAR_LEFT]: PropTypes.bool,
    [RESIDENTIAL_NEAR_RIGHT]: PropTypes.bool,
    [COMMERCIAL_CENTRE]: PropTypes.bool,
    [COMMERCIAL_FAR_LEFT]: PropTypes.bool,
    [COMMERCIAL_FAR_RIGHT]: PropTypes.bool,
    [COMMERCIAL_MIDDLE_LEFT]: PropTypes.bool,
    [COMMERCIAL_MIDDLE_RIGHT]: PropTypes.bool,
    [COMMERCIAL_NEAR_LEFT]: PropTypes.bool,
    [COMMERCIAL_NEAR_RIGHT]: PropTypes.bool,
    [PUBLIC_FAR_LEFT]: PropTypes.bool,
    [PUBLIC_FAR_RIGHT]: PropTypes.bool,
    [PUBLIC_NEAR_LEFT]: PropTypes.bool,
    [PUBLIC_NEAR_RIGHT]: PropTypes.bool,
    [ROAD_PAST]: PropTypes.bool,
    [ROAD_PRESENT]: PropTypes.bool,
    [ROAD_FUTURE]: PropTypes.bool,
    [EL_CERRITO_FAR]: PropTypes.bool,
    [EL_CERRITO_NEAR]: PropTypes.bool,
    [CROWD_NEAR_BACK]: PropTypes.bool,
    [CROWD_FAR_BACK]: PropTypes.bool,
    [FOREBODING_TREES]: PropTypes.bool,
    [CLIFF_GRAVES_FAR]: PropTypes.bool,
    [CLIFF_GRAVES_NEAR]: PropTypes.bool,
    [PAMPAS_FAR]: PropTypes.bool
}

export default {
    [NOHO_HOUSE_LEFT]: NohoHouseLeft,
    [NOHO_HOUSE_RIGHT]: NohoHouseRight,
    [NOHO_SCHOOLHOUSE]: NohoSchoolhouse,
    [BEDROOM_BUS]: BedroomBus,
    [BEDROOM_SIREN]: BedroomSiren,
    [FAMILY_HOUSE]: FamilyHouse,
    [CAVE_SHADOWS]: CaveShadows,
    [TAIWAN_CLOUDS]: TaiwanClouds,
    [TAIWAN_FOG]: TaiwanFog,
    [TAIWAN_MOUNTAINS_BRIDGED]: TaiwanMountainsBridged,
    [TAIWAN_MOUNTAIN_LEFT]: TaiwanMountainLeft,
    [TAIWAN_MOUNTAIN_RIGHT]: TaiwanMountainRight,
    [TAIWAN_HOUSE_FAR]: TaiwanHouseFar,
    [TAIWAN_HOUSE_NEAR]: TaiwanHouseNear,
    [VAN_NUYS_SCHOOLHOUSE_LEFT]: VanNuysSchoolhouseLeft,
    [VAN_NUYS_SCHOOLHOUSE_RIGHT]: VanNuysSchoolhouseRight,
    [RICKSHAW_TOWN]: RickshawTown,
    [SHORE_CARNIVAL]: ShoreCarnival,
    [OCEAN_BOTTOM_MIDDLE]: OceanBottomMiddle,
    [OCEAN_BOTTOM_NEAR]: OceanBottomNear,
    [LOCKER_BANK]: LockerBank,
    [ST_JOSEPHS_ANNEX]: StJosephsAnnex,
    [ST_JOSEPHS_CHURCH]: StJosephsChurch,
    [CAMPANILE]: Campanile,
    [MUSEUM_DISPLAY]: MuseumDisplay,
    [ROYCE_HALL]: RoyceHall,
    [PHARMACY_AISLE]: PharmacyAisle,
    [STEAM_PIPES]: SteamPipes,
    [CEMETERY_HILLS_NEAR]: CemeteryHillsNear,
    [CROWD_NEAR_SIDE]: CrowdNear,
    [CROWD_FAR_SIDE]: CrowdFar,
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
    [EL_CERRITO_FAR]: ElCerritoFar,
    [EL_CERRITO_NEAR]: ElCerritoNear,
    [CROWD_NEAR_BACK]: CrowdNear,
    [CROWD_FAR_BACK]: CrowdFar,
    [FOREBODING_TREES]: ForebodingTrees,
    [CLIFF_GRAVES_FAR]: CliffGravesFar,
    [CLIFF_GRAVES_NEAR]: CliffGravesNear,
    [PAMPAS_FAR]: PampasFar
}
