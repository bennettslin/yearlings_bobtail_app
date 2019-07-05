// import nohoHouseLeft from 'assets/svgs/flats/nohoHouseLeft.svg'
// import nohoHouseRight from 'assets/svgs/flats/nohoHouseRight.svg'
// import nohoSchoolhouse from 'assets/svgs/flats/nohoSchoolhouse.svg'
// import valleyFreeway from 'assets/svgs/flats/valleyFreeway.svg'
// import bedroomBus from 'assets/svgs/flats/bedroomBus.svg'
// import bedroomSiren from 'assets/svgs/flats/bedroomSiren.svg'
// import familyHouse from 'assets/svgs/flats/familyHouse.svg'
// import taiwanMountainsBridged from 'assets/svgs/flats/taiwanMountainsBridged.svg'
// import taiwanMountainLeft from 'assets/svgs/flats/taiwanMountainLeft.svg'
// import taiwanMountainRight from 'assets/svgs/flats/taiwanMountainRight.svg'
// import taiwanHouseFar from 'assets/svgs/flats/taiwanHouseFar.svg'
// import taiwanHouseNear from 'assets/svgs/flats/taiwanHouseNear.svg'
// import vanNuysSchoolhouseLeft from 'assets/svgs/flats/vanNuysSchoolhouseLeft.svg'
// import vanNuysSchoolhouseRight from 'assets/svgs/flats/vanNuysSchoolhouseRight.svg'
// import rickshawTown from 'assets/svgs/flats/rickshawTown.svg'
// import ferrisWheel from 'assets/svgs/flats/ferrisWheel.svg'
// import rollerCoaster from 'assets/svgs/flats/rollerCoaster.svg'
// import oceanBottomMiddle from 'assets/svgs/flats/oceanBottomMiddle.svg'
// import oceanBottomNear from 'assets/svgs/flats/oceanBottomNear.svg'
// import stJosephsAnnex from 'assets/svgs/flats/stJosephsAnnex.svg'
// import stJosephsChurch from 'assets/svgs/flats/stJosephsChurch.svg'
// import campanile from 'assets/svgs/flats/campanile.svg'
// import royceHall from 'assets/svgs/flats/royceHall.svg'
// import cemeteryHillsNear from 'assets/svgs/flats/cemeteryHillsNear.svg'
// import oaklandHouseLeft from 'assets/svgs/flats/oaklandHouseLeft.svg'
// import oaklandHouseRight from 'assets/svgs/flats/oaklandHouseRight.svg'
// import residentialFarLeft from 'assets/svgs/flats/residentialFarLeft.svg'
// import residentialMiddleLeft from 'assets/svgs/flats/residentialMiddleLeft.svg'
// import residentialNearLeft from 'assets/svgs/flats/residentialNearLeft.svg'
// import residentialFarRight from 'assets/svgs/flats/residentialFarRight.svg'
// import residentialMiddleRight from 'assets/svgs/flats/residentialMiddleRight.svg'
// import residentialNearRight from 'assets/svgs/flats/residentialNearRight.svg'
// import commercialCentre from 'assets/svgs/flats/commercialCentre.svg'
// import commercialFarLeft from 'assets/svgs/flats/commercialFarLeft.svg'
// import commercialMiddleLeft from 'assets/svgs/flats/commercialMiddleLeft.svg'
// import commercialNearLeft from 'assets/svgs/flats/commercialNearLeft.svg'
// import commercialFarRight from 'assets/svgs/flats/commercialFarRight.svg'
// import commercialMiddleRight from 'assets/svgs/flats/commercialMiddleRight.svg'
// import commercialNearRight from 'assets/svgs/flats/commercialNearRight.svg'
// import publicFarLeft from 'assets/svgs/flats/publicFarLeft.svg'
// import publicNearLeft from 'assets/svgs/flats/publicNearLeft.svg'
// import publicFarRight from 'assets/svgs/flats/publicFarRight.svg'
// import publicNearRight from 'assets/svgs/flats/publicNearRight.svg'
// import elCerritoFar from 'assets/svgs/flats/elCerritoFar.svg'
// import elCerritoNear from 'assets/svgs/flats/elCerritoNear.svg'
// import forebodingTrees from 'assets/svgs/flats/forebodingTrees.svg'
// import cliffGravesFar from 'assets/svgs/flats/cliffGravesFar.svg'
// import cliffGravesNear from 'assets/svgs/flats/cliffGravesNear.svg'
// import pampasFar from 'assets/svgs/flats/pampasFar.svg'

import {
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT,
    NOHO_SCHOOLHOUSE,
    VALLEY_FREEWAY,
    BEDROOM_BUS,
    BEDROOM_SIREN,
    FAMILY_HOUSE,
    TAIWAN_MOUNTAINS_BRIDGED,
    TAIWAN_MOUNTAIN_LEFT,
    TAIWAN_MOUNTAIN_RIGHT,
    TAIWAN_HOUSE_FAR,
    TAIWAN_HOUSE_NEAR,
    VAN_NUYS_SCHOOLHOUSE_LEFT,
    VAN_NUYS_SCHOOLHOUSE_RIGHT,
    RICKSHAW_TOWN,
    FERRIS_WHEEL,
    ROLLER_COASTER,
    OCEAN_BOTTOM_MIDDLE,
    OCEAN_BOTTOM_NEAR,
    ST_JOSEPHS_ANNEX,
    ST_JOSEPHS_CHURCH,
    CAMPANILE,
    ROYCE_HALL,
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
    [VALLEY_FREEWAY]: false,
    [BEDROOM_BUS]: false,
    [BEDROOM_SIREN]: false,
    [FAMILY_HOUSE]: false,
    [TAIWAN_MOUNTAINS_BRIDGED]: false,
    [TAIWAN_MOUNTAIN_LEFT]: false,
    [TAIWAN_MOUNTAIN_RIGHT]: false,
    [TAIWAN_HOUSE_FAR]: false,
    [TAIWAN_HOUSE_NEAR]: false,
    [VAN_NUYS_SCHOOLHOUSE_LEFT]: false,
    [VAN_NUYS_SCHOOLHOUSE_RIGHT]: false,
    [RICKSHAW_TOWN]: false,
    [FERRIS_WHEEL]: false,
    [ROLLER_COASTER]: false,
    [OCEAN_BOTTOM_MIDDLE]: false,
    [OCEAN_BOTTOM_NEAR]: false,
    [ST_JOSEPHS_ANNEX]: false,
    [ST_JOSEPHS_CHURCH]: false,
    [CAMPANILE]: false,
    [ROYCE_HALL]: false,
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
    [EL_CERRITO_FAR]: false,
    [EL_CERRITO_NEAR]: false,
    [FOREBODING_TREES]: false,
    [CLIFF_GRAVES_FAR]: false,
    [CLIFF_GRAVES_NEAR]: false,
    [PAMPAS_FAR]: false
}
