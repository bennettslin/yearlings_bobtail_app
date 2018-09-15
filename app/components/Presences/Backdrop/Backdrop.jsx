import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import NohoHousesBackdrop from './Backdrops/NohoHousesBackdrop'
import NohoSchoolBackdrop from './Backdrops/NohoSchoolBackdrop'
import ValleyBackdrop from './Backdrops/ValleyBackdrop'
import BedroomBackdrop from './Backdrops/BedroomBackdrop'
import BedroomSirenBackdrop from './Backdrops/BedroomSirenBackdrop'
import TaiwanMountsBackdrop from './Backdrops/TaiwanMountsBackdrop'
import SchoolbusThoughtBackdrop from './Backdrops/SchoolbusThoughtBackdrop'
import VanNuysThoughtBackdrop from './Backdrops/VanNuysThoughtBackdrop'
import TaiwanStreetsBackdrop from './Backdrops/TaiwanStreetsBackdrop'
import ShoreRickshawBackdrop from './Backdrops/ShoreRickshawBackdrop'
import ShoreBuoyBackdrop from './Backdrops/ShoreBuoyBackdrop'
import OceanBuoyBackdrop from './Backdrops/OceanBuoyBackdrop'
import OceanDepthsBackdrop from './Backdrops/OceanDepthsBackdrop'
import OceanFloorBackdrop from './Backdrops/OceanFloorBackdrop'
import BedroomBusBackdrop from './Backdrops/BedroomBusBackdrop'
import VanNuysSchoolBackdrop from './Backdrops/VanNuysSchoolBackdrop'
import BennettCouchThoughtBackdrop from './Backdrops/BennettCouchThoughtBackdrop'
import WestBerkeleyBackdrop from './Backdrops/WestBerkeleyBackdrop'
import UcBerkeleyBackdrop from './Backdrops/UcBerkeleyBackdrop'
import BayAreaBackdrop from './Backdrops/BayAreaBackdrop'
import GoKartThought from './Backdrops/GoKartThought'
import UclaBackdrop from './Backdrops/UclaBackdrop'
import PharmacyThought from './Backdrops/PharmacyThought'
import CemeteryBackdrop from './Backdrops/CemeteryBackdrop'
import LosAngelesBackdrop from './Backdrops/LosAngelesBackdrop'
import OaklandBackdrop from './Backdrops/OaklandBackdrop'
import LizCouchThought from './Backdrops/LizCouchThought'
import ResidenceBackdrop from './Backdrops/ResidenceBackdrop'
import CommercialBackdrop from './Backdrops/CommercialBackdrop'
import PublicBackdrop from './Backdrops/PublicBackdrop'
import ElCerritoBackdrop from './Backdrops/ElCerritoBackdrop'
import PampasBackdrop from './Backdrops/PampasBackdrop'
import WeddingBackdrop from './Backdrops/WeddingBackdrop'
import CliffBackdrop from './Backdrops/CliffBackdrop'
import InverseThoughtBackdrop from './Backdrops/InverseThoughtBackdrop'

import {
    NOHO_HOUSES_BACKDROP,
    NOHO_SCHOOL_BACKDROP,
    VALLEY_BACKDROP,
    BEDROOM_BACKDROP,
    BEDROOM_SIREN_BACKDROP,
    TAIWAN_MOUNTAINS_BACKDROP,
    SCHOOLBUS_THOUGHT_BACKDROP,
    VAN_NUYS_THOUGHT_BACKDROP,
    TAIWAN_STREETS_BACKDROP,
    SHORE_RICKSHAW_BACKDROP,
    SHORE_BUOY_BACKDROP,
    OCEAN_BUOY_BACKDROP,
    OCEAN_DEPTHS_BACKDROP,
    OCEAN_FLOOR_BACKDROP,
    BEDROOM_BUS_BACKDROP,
    VAN_NUYS_SCHOOL_BACKDROP,
    BENNETT_COUCH_THOUGHT_BACKDROP,
    WEST_BERKELEY_BACKDROP,
    UC_BERKELEY_BACKDROP,
    BAY_AREA_BACKDROP,
    GO_KART_THOUGHT,
    UCLA_BACKDROP,
    PHARMACY_THOUGHT,
    CEMETERY_BACKDROP,
    LOS_ANGELES_BACKDROP,
    OAKLAND_BACKDROP,
    LIZ_COUCH_THOUGHT,
    RESIDENCE_BACKDROP,
    COMMERCIAL_BACKDROP,
    PUBLIC_BACKDROP,
    EL_CERRITO_BACKDROP,
    PAMPAS_BACKDROP,
    WEDDING_BACKDROP,
    CLIFF_BACKDROP,
    INVERSE_THOUGHT_BACKDROP
} from 'scene/backdropKeys'

const BACKDROPS_MAP = {
    [NOHO_HOUSES_BACKDROP]: NohoHousesBackdrop,
    [NOHO_SCHOOL_BACKDROP]: NohoSchoolBackdrop,
    [VALLEY_BACKDROP]: ValleyBackdrop,
    [BEDROOM_BACKDROP]: BedroomBackdrop,
    [BEDROOM_SIREN_BACKDROP]: BedroomSirenBackdrop,
    [TAIWAN_MOUNTAINS_BACKDROP]: TaiwanMountsBackdrop,
    [SCHOOLBUS_THOUGHT_BACKDROP]: SchoolbusThoughtBackdrop,
    [VAN_NUYS_THOUGHT_BACKDROP]: VanNuysThoughtBackdrop,
    [TAIWAN_STREETS_BACKDROP]: TaiwanStreetsBackdrop,
    [SHORE_RICKSHAW_BACKDROP]: ShoreRickshawBackdrop,
    [SHORE_BUOY_BACKDROP]: ShoreBuoyBackdrop,
    [OCEAN_BUOY_BACKDROP]: OceanBuoyBackdrop,
    [OCEAN_DEPTHS_BACKDROP]: OceanDepthsBackdrop,
    [OCEAN_FLOOR_BACKDROP]: OceanFloorBackdrop,
    [BEDROOM_BUS_BACKDROP]: BedroomBusBackdrop,
    [VAN_NUYS_SCHOOL_BACKDROP]: VanNuysSchoolBackdrop,
    [BENNETT_COUCH_THOUGHT_BACKDROP]: BennettCouchThoughtBackdrop,
    [WEST_BERKELEY_BACKDROP]: WestBerkeleyBackdrop,
    [UC_BERKELEY_BACKDROP]: UcBerkeleyBackdrop,
    [BAY_AREA_BACKDROP]: BayAreaBackdrop,
    [GO_KART_THOUGHT]: GoKartThought,
    [UCLA_BACKDROP]: UclaBackdrop,
    [PHARMACY_THOUGHT]: PharmacyThought,
    [CEMETERY_BACKDROP]: CemeteryBackdrop,
    [LOS_ANGELES_BACKDROP]: LosAngelesBackdrop,
    [OAKLAND_BACKDROP]: OaklandBackdrop,
    [LIZ_COUCH_THOUGHT]: LizCouchThought,
    [RESIDENCE_BACKDROP]: ResidenceBackdrop,
    [COMMERCIAL_BACKDROP]: CommercialBackdrop,
    [PUBLIC_BACKDROP]: PublicBackdrop,
    [EL_CERRITO_BACKDROP]: ElCerritoBackdrop,
    [PAMPAS_BACKDROP]: PampasBackdrop,
    [WEDDING_BACKDROP]: WeddingBackdrop,
    [CLIFF_BACKDROP]: CliffBackdrop,
    [INVERSE_THOUGHT_BACKDROP]: InverseThoughtBackdrop
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

const Backdrop = ({

    className,
    nameKey,

...other }) => {

    const BackdropComponent =
        BACKDROPS_MAP[nameKey] || DEFAULT_COMPONENT

    return (
        <BackdropComponent {...other}
            className={cx(
                'Backdrop',
                className
            )}
        />
    )
}

Backdrop.propTypes = propTypes;

export default Backdrop
