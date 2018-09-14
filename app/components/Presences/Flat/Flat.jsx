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
import TaiwanMountainsFar from './Flats/PuppetShow/TaiwanMountainsFar'
import TaiwanMountainsBridged from './Flats/PuppetShow/TaiwanMountainsBridged'
import TaiwanMountainsNear from './Flats/PuppetShow/TaiwanMountainsNear'
import TaiwanClouds from './Flats/PuppetShow/TaiwanClouds'
import TogetherSketchbook from './Flats/PuppetShow/TogetherSketchbook'
import SchoolbusStreetThought from './Flats/Schoolbus/SchoolbusStreetThought'
import VanNuysSchoolThought from './Flats/TetherballCourt/VanNuysSchoolThought'
import VanNuysSchoolhouse from './Flats/TetherballCourt/VanNuysSchoolhouse'
import ApartSketchbook from './Flats/PuppetShow/ApartSketchbook'
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
import BennettCouchThought from './Flats/BennettCouch/BennettCouchThought'
import WestBerkeleyBackdrop from './Flats/CatholicChurch/WestBerkeleyBackdrop'
import StJosephsChurch from './Flats/CatholicChurch/StJosephsChurch'
import UcBerkeleyBackdrop from './Flats/UcBerkeley/UcBerkeleyBackdrop'
import Campanile from './Flats/UcBerkeley/Campanile'
import BayAreaBackdrop from './Flats/Cinema/BayAreaBackdrop'
import CinemaThoughts from './Flats/Cinema/CinemaThoughts'
import MuseumDisplay from './Flats/Museum/MuseumDisplay'
import GoKartThought from './Flats/GoKarts/GoKartThought'
import UclaBackdrop from './Flats/RoyceHall/UclaBackdrop'
import RoyceHall from './Flats/RoyceHall/RoyceHall'
import PharmacyThought from './Flats/Walgreens/PharmacyThought'
import PharmacyAisle from './Flats/Walgreens/PharmacyAisle'
import SteamPipes from './Flats/SteamTunnel/SteamPipes'
import CemeteryHillsNear from './Flats/Cemetery/CemeteryHillsNear'
import CemeteryHillsFar from './Flats/Cemetery/CemeteryHillsFar'
import LosAngelesBackdrop from './Flats/StationWagon/LosAngelesBackdrop'
import TarpitThought from './Flats/StationWagon/TarpitThought'
import SiblingThought from './Flats/StationWagon/SiblingThought'
import OaklandBackdrop from './Flats/OaklandHouses/OaklandBackdrop'
import OaklandHouseLeft from './Flats/OaklandHouses/OaklandHouseLeft'
import OaklandHouseRight from './Flats/OaklandHouses/OaklandHouseRight'
import LizCouchThought from './Flats/LizCouch/LizCouchThought'
import ResidenceBackdrop from './Flats/OaklandResidential/ResidenceBackdrop'
import ResidentialLeft from './Flats/OaklandResidential/ResidentialLeft'
import ResidentialRight from './Flats/OaklandResidential/ResidentialRight'
import CommercialBackdrop from './Flats/OaklandCommercial/CommercialBackdrop'
import CommercialLeft from './Flats/OaklandCommercial/CommercialLeft'
import CommercialRight from './Flats/OaklandCommercial/CommercialRight'
import PublicBackdrop from './Flats/OaklandPublic/PublicBackdrop'
import PublicLeft from './Flats/OaklandPublic/PublicLeft'
import PublicRight from './Flats/OaklandPublic/PublicRight'
import SnowglobesPast from './Flats/SnowglobesPast/SnowglobesPast'
import SnowglobeTetherball from './Flats/SnowglobesPast/SnowglobeTetherball'
import SnowglobesPresent from './Flats/SnowglobesPresent/SnowglobesPresent'
import SnowglobeLizBlinds from './Flats/SnowglobesPresent/SnowglobeLizBlinds'
import SnowglobeMiriam from './Flats/SnowglobesPresent/SnowglobeMiriam'
import SnowglobesFuture from './Flats/SnowglobesFuture/SnowglobesFuture'
import SnowglobeLizCouch from './Flats/SnowglobesFuture/SnowglobeLizCouch'
import SnowglobeBennett from './Flats/SnowglobesFuture/SnowglobeBennett'
import ElCerritoBackdrop from './Flats/ElCerrito/ElCerritoBackdrop'
import ElCerritoRoad from './Flats/ElCerrito/ElCerritoRoad'
import ConvertibleFront from './Flats/ElCerrito/ConvertibleFront'
import ConvertibleBack from './Flats/ElCerrito/ConvertibleBack'
import PampasBackdrop from './Flats/Pampas/PampasBackdrop'
import WeddingBackdrop from './Flats/OutdoorWedding/WeddingBackdrop'
import CliffBackdrop from './Flats/Cliff/CliffBackdrop'
import CliffGravesBackdrop from './Flats/Cliff/CliffGravesBackdrop'
import HospitalThought from './Flats/Deathbed/HospitalThought'
import TennisThought from './Flats/Deathbed/TennisThought'
import InverseThought from './Flats/Deathbed/InverseThought'

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
    TAIWAN_MOUNTAINS_FAR,
    TAIWAN_MOUNTAINS_BRIDGED,
    TAIWAN_MOUNTAINS_NEAR,
    TAIWAN_CLOUDS,
    TOGETHER_SKETCHBOOK,
    SCHOOLBUS_STREET_THOUGHT,
    VAN_NUYS_SCHOOL_THOUGHT,
    VAN_NUYS_SCHOOLHOUSE,
    APART_SKETCHBOOK,
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
    VAN_NUYS_SCHOOL_BACKDROP,
    BENNETT_COUCH_THOUGHT,
    WEST_BERKELEY_BACKDROP,
    ST_JOSEPHS_CHURCH,
    UC_BERKELEY_BACKDROP,
    CAMPANILE,
    BAY_AREA_BACKDROP,
    CINEMA_THOUGHTS,
    MUSEUM_DISPLAY,
    GO_KART_THOUGHT,
    UCLA_BACKDROP,
    ROYCE_HALL,
    PHARMACY_THOUGHT,
    PHARMACY_AISLE,
    STEAM_PIPES,
    CEMETERY_HILLS_NEAR,
    CEMETERY_HILLS_FAR,
    LOS_ANGELES_BACKDROP,
    TARPIT_THOUGHT,
    SIBLING_THOUGHT,
    OAKLAND_BACKDROP,
    OAKLAND_HOUSE_LEFT,
    OAKLAND_HOUSE_RIGHT,
    LIZ_COUCH_THOUGHT,
    RESIDENCE_BACKDROP,
    RESIDENTIAL_LEFT,
    RESIDENTIAL_RIGHT,
    COMMERCIAL_BACKDROP,
    COMMERCIAL_LEFT,
    COMMERCIAL_RIGHT,
    PUBLIC_BACKDROP,
    PUBLIC_LEFT,
    PUBLIC_RIGHT,
    SNOWGLOBES_PAST,
    SNOWGLOBE_TETHERBALL,
    SNOWGLOBES_PRESENT,
    SNOWGLOBE_LIZ_BLINDS,
    SNOWGLOBE_MIRIAM,
    SNOWGLOBES_FUTURE,
    SNOWGLOBE_LIZ_COUCH,
    SNOWGLOBE_BENNETT,
    EL_CERRITO_BACKDROP,
    EL_CERRITO_ROAD,
    CONVERTIBLE_FRONT,
    CONVERTIBLE_BACK,
    PAMPAS_BACKDROP,
    WEDDING_BACKDROP,
    CLIFF_BACKDROP,
    CLIFF_GRAVES_BACKDROP,
    HOSPITAL_THOUGHT,
    TENNIS_THOUGHT,
    INVERSE_THOUGHT
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
    [TAIWAN_MOUNTAINS_FAR]: TaiwanMountainsFar,
    [TAIWAN_MOUNTAINS_BRIDGED]: TaiwanMountainsBridged,
    [TAIWAN_MOUNTAINS_NEAR]: TaiwanMountainsNear,
    [TAIWAN_CLOUDS]: TaiwanClouds,
    [TOGETHER_SKETCHBOOK]: TogetherSketchbook,
    [SCHOOLBUS_STREET_THOUGHT]: SchoolbusStreetThought,
    [VAN_NUYS_SCHOOL_THOUGHT]: VanNuysSchoolThought,
    [VAN_NUYS_SCHOOLHOUSE]: VanNuysSchoolhouse,
    [APART_SKETCHBOOK]: ApartSketchbook,
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
    [VAN_NUYS_SCHOOL_BACKDROP]: VanNuysSchoolBackdrop,
    [BENNETT_COUCH_THOUGHT]: BennettCouchThought,
    [WEST_BERKELEY_BACKDROP]: WestBerkeleyBackdrop,
    [ST_JOSEPHS_CHURCH]: StJosephsChurch,
    [UC_BERKELEY_BACKDROP]: UcBerkeleyBackdrop,
    [CAMPANILE]: Campanile,
    [BAY_AREA_BACKDROP]: BayAreaBackdrop,
    [CINEMA_THOUGHTS]: CinemaThoughts,
    [MUSEUM_DISPLAY]: MuseumDisplay,
    [GO_KART_THOUGHT]: GoKartThought,
    [UCLA_BACKDROP]: UclaBackdrop,
    [ROYCE_HALL]: RoyceHall,
    [PHARMACY_THOUGHT]: PharmacyThought,
    [PHARMACY_AISLE]: PharmacyAisle,
    [STEAM_PIPES]: SteamPipes,
    [CEMETERY_HILLS_NEAR]: CemeteryHillsNear,
    [CEMETERY_HILLS_FAR]: CemeteryHillsFar,
    [LOS_ANGELES_BACKDROP]: LosAngelesBackdrop,
    [TARPIT_THOUGHT]: TarpitThought,
    [SIBLING_THOUGHT]: SiblingThought,
    [OAKLAND_BACKDROP]: OaklandBackdrop,
    [OAKLAND_HOUSE_LEFT]: OaklandHouseLeft,
    [OAKLAND_HOUSE_RIGHT]: OaklandHouseRight,
    [LIZ_COUCH_THOUGHT]: LizCouchThought,
    [RESIDENCE_BACKDROP]: ResidenceBackdrop,
    [RESIDENTIAL_LEFT]: ResidentialLeft,
    [RESIDENTIAL_RIGHT]: ResidentialRight,
    [COMMERCIAL_BACKDROP]: CommercialBackdrop,
    [COMMERCIAL_LEFT]: CommercialLeft,
    [COMMERCIAL_RIGHT]: CommercialRight,
    [PUBLIC_BACKDROP]: PublicBackdrop,
    [PUBLIC_LEFT]: PublicLeft,
    [PUBLIC_RIGHT]: PublicRight,
    [SNOWGLOBES_PAST]: SnowglobesPast,
    [SNOWGLOBE_TETHERBALL]: SnowglobeTetherball,
    [SNOWGLOBES_PRESENT]: SnowglobesPresent,
    [SNOWGLOBE_LIZ_BLINDS]: SnowglobeLizBlinds,
    [SNOWGLOBE_MIRIAM]: SnowglobeMiriam,
    [SNOWGLOBES_FUTURE]: SnowglobesFuture,
    [SNOWGLOBE_LIZ_COUCH]: SnowglobeLizCouch,
    [SNOWGLOBE_BENNETT]: SnowglobeBennett,
    [EL_CERRITO_BACKDROP]: ElCerritoBackdrop,
    [EL_CERRITO_ROAD]: ElCerritoRoad,
    [CONVERTIBLE_FRONT]: ConvertibleFront,
    [CONVERTIBLE_BACK]: ConvertibleBack,
    [PAMPAS_BACKDROP]: PampasBackdrop,
    [WEDDING_BACKDROP]: WeddingBackdrop,
    [CLIFF_BACKDROP]: CliffBackdrop,
    [CLIFF_GRAVES_BACKDROP]: CliffGravesBackdrop,
    [HOSPITAL_THOUGHT]: HospitalThought,
    [TENNIS_THOUGHT]: TennisThought,
    [INVERSE_THOUGHT]: InverseThought
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
