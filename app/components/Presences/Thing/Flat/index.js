// import nohoHouseLeft from 'assets/svgs/flats/nohoHouseLeft'
// import nohoHouseRight from 'assets/svgs/flats/nohoHouseRight'
// import nohoSchoolhouse from 'assets/svgs/flats/nohoSchoolhouse'
// import bedroomBus from 'assets/svgs/flats/bedroomBus'
// import bedroomSiren from 'assets/svgs/flats/bedroomSiren'
// import familyHouse from 'assets/svgs/flats/familyHouse'
// import taiwanClouds from 'assets/svgs/flats/taiwanClouds'
// import taiwanFog from 'assets/svgs/flats/taiwanFog'
// import taiwanMountainsBridged from 'assets/svgs/flats/taiwanMountainsBridged'
// import taiwanMountainLeft from 'assets/svgs/flats/taiwanMountainLeft'
// import taiwanMountainRight from 'assets/svgs/flats/taiwanMountainRight'
// import taiwanHouseFar from 'assets/svgs/flats/taiwanHouseFar'
// import taiwanHouseNear from 'assets/svgs/flats/taiwanHouseNear'
// import vanNuysSchoolhouseLeft from 'assets/svgs/flats/vanNuysSchoolhouseLeft'
// import vanNuysSchoolhouseRight from 'assets/svgs/flats/vanNuysSchoolhouseRight'
// import rickshawTown from 'assets/svgs/flats/rickshawTown'
// import shoreCarnival from 'assets/svgs/flats/shoreCarnival'
// import oceanBottomMiddle from 'assets/svgs/flats/oceanBottomMiddle'
// import oceanBottomNear from 'assets/svgs/flats/oceanBottomNear'
// import lockerBank from 'assets/svgs/flats/lockerBank'
// import stJosephsAnnex from 'assets/svgs/flats/stJosephsAnnex'
// import stJosephsChurch from 'assets/svgs/flats/stJosephsChurch'
// import campanile from 'assets/svgs/flats/campanile'
// import museumDisplay from 'assets/svgs/flats/museumDisplay'
// import royceHall from 'assets/svgs/flats/royceHall'
// import pharmacyAisle from 'assets/svgs/flats/pharmacyAisle'
// import steamPipes from 'assets/svgs/flats/steamPipes'
// import cemeteryHillsNear from 'assets/svgs/flats/cemeteryHillsNear'
// import oaklandHouseLeft from 'assets/svgs/flats/oaklandHouseLeft'
// import oaklandHouseRight from 'assets/svgs/flats/oaklandHouseRight'
// import residentialFarLeft from 'assets/svgs/flats/residentialFarLeft'
// import residentialMiddleLeft from 'assets/svgs/flats/residentialMiddleLeft'
// import residentialNearLeft from 'assets/svgs/flats/residentialNearLeft'
// import residentialFarRight from 'assets/svgs/flats/residentialFarRight'
// import residentialMiddleRight from 'assets/svgs/flats/residentialMiddleRight'
// import residentialNearRight from 'assets/svgs/flats/residentialNearRight'
// import commercialCentre from 'assets/svgs/flats/commercialCentre'
// import commercialFarLeft from 'assets/svgs/flats/commercialFarLeft'
// import commercialMiddleLeft from 'assets/svgs/flats/commercialMiddleLeft'
// import commercialNearLeft from 'assets/svgs/flats/commercialNearLeft'
// import commercialFarRight from 'assets/svgs/flats/commercialFarRight'
// import commercialMiddleRight from 'assets/svgs/flats/commercialMiddleRight'
// import commercialNearRight from 'assets/svgs/flats/commercialNearRight'
// import publicFarLeft from 'assets/svgs/flats/publicFarLeft'
// import publicNearLeft from 'assets/svgs/flats/publicNearLeft'
// import publicFarRight from 'assets/svgs/flats/publicFarRight'
// import publicNearRight from 'assets/svgs/flats/publicNearRight'
// import roadPast from 'assets/svgs/flats/roadPast'
// import roadPresent from 'assets/svgs/flats/roadPresent'
// import roadFuture from 'assets/svgs/flats/roadFuture'
// import elCerritoFar from 'assets/svgs/flats/elCerritoFar'
// import elCerritoNear from 'assets/svgs/flats/elCerritoNear'
// import forebodingTrees from 'assets/svgs/flats/forebodingTrees'
// import cliffGravesFar from 'assets/svgs/flats/cliffGravesFar'
// import cliffGravesNear from 'assets/svgs/flats/cliffGravesNear'
// import pampasFar from 'assets/svgs/flats/pampasFar'

import {
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT,
    NOHO_SCHOOLHOUSE,
    BEDROOM_BUS,
    BEDROOM_SIREN,
    FAMILY_HOUSE,
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
    FOREBODING_TREES,
    CLIFF_GRAVES_FAR,
    CLIFF_GRAVES_NEAR,
    PAMPAS_FAR
} from 'constants/scene/things/flats'

export default {
    [NOHO_HOUSE_LEFT]: false,
    [NOHO_HOUSE_RIGHT]: false,
    [NOHO_SCHOOLHOUSE]: false,
    [BEDROOM_BUS]: false,
    [BEDROOM_SIREN]: false,
    [FAMILY_HOUSE]: false,
    [TAIWAN_CLOUDS]: false,
    [TAIWAN_FOG]: false,
    [TAIWAN_MOUNTAINS_BRIDGED]: false,
    [TAIWAN_MOUNTAIN_LEFT]: false,
    [TAIWAN_MOUNTAIN_RIGHT]: false,
    [TAIWAN_HOUSE_FAR]: false,
    [TAIWAN_HOUSE_NEAR]: false,
    [VAN_NUYS_SCHOOLHOUSE_LEFT]: false,
    [VAN_NUYS_SCHOOLHOUSE_RIGHT]: false,
    [RICKSHAW_TOWN]: false,
    [SHORE_CARNIVAL]: false,
    [OCEAN_BOTTOM_MIDDLE]: false,
    [OCEAN_BOTTOM_NEAR]: false,
    [LOCKER_BANK]: false,
    [ST_JOSEPHS_ANNEX]: false,
    [ST_JOSEPHS_CHURCH]: false,
    [CAMPANILE]: false,
    [MUSEUM_DISPLAY]: false,
    [ROYCE_HALL]: false,
    [PHARMACY_AISLE]: false,
    [STEAM_PIPES]: false,
    [CEMETERY_HILLS_NEAR]: false,
    [OAKLAND_HOUSE_LEFT]: false,
    [OAKLAND_HOUSE_RIGHT]: false,
    [RESIDENTIAL_FAR_LEFT]: false,
    [RESIDENTIAL_FAR_RIGHT]: false,
    [RESIDENTIAL_MIDDLE_LEFT]: false,
    [RESIDENTIAL_MIDDLE_RIGHT]: false,
    [RESIDENTIAL_NEAR_LEFT]: false,
    [RESIDENTIAL_NEAR_RIGHT]: false,
    [COMMERCIAL_CENTRE]: false,
    [COMMERCIAL_FAR_LEFT]: false,
    [COMMERCIAL_FAR_RIGHT]: false,
    [COMMERCIAL_MIDDLE_LEFT]: false,
    [COMMERCIAL_MIDDLE_RIGHT]: false,
    [COMMERCIAL_NEAR_LEFT]: false,
    [COMMERCIAL_NEAR_RIGHT]: false,
    [PUBLIC_FAR_LEFT]: false,
    [PUBLIC_FAR_RIGHT]: false,
    [PUBLIC_NEAR_LEFT]: false,
    [PUBLIC_NEAR_RIGHT]: false,
    [ROAD_PAST]: false,
    [ROAD_PRESENT]: false,
    [ROAD_FUTURE]: false,
    [EL_CERRITO_FAR]: false,
    [EL_CERRITO_NEAR]: false,
    [FOREBODING_TREES]: false,
    [CLIFF_GRAVES_FAR]: false,
    [CLIFF_GRAVES_NEAR]: false,
    [PAMPAS_FAR]: false
}
