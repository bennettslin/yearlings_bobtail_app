import React, { Component, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import keys from 'lodash.keys'
import { connect } from 'react-redux'

import NohoHousesBackdrop from './Backdrops/NohoHousesBackdrop'
import NohoSchoolBackdrop from './Backdrops/NohoSchoolBackdrop'
import ValleyBackdrop from './Backdrops/ValleyBackdrop'
import BedroomBackdrop from './Backdrops/BedroomBackdrop'
import BedroomSirenBackdrop from './Backdrops/BedroomSirenBackdrop'
import TaiwanMountainsBackdrop from './Backdrops/TaiwanMountainsBackdrop'
import SchoolbusThoughtBackdrop from './Backdrops/SchoolbusThoughtBackdrop'
import VanNuysThoughtBackdrop from './Backdrops/VanNuysThoughtBackdrop'
import TaiwanStairsBackdrop from './Backdrops/TaiwanStairsBackdrop'
import TaiwanStreetsBackdrop from './Backdrops/TaiwanStreetsBackdrop'
import ShoreRickshawBackdrop from './Backdrops/ShoreRickshawBackdrop'
import ShoreBuoyBackdrop from './Backdrops/ShoreBuoyBackdrop'
import OceanBottomFar from './Backdrops/OceanBottomFar'
import OceanFloorFar from './Backdrops/OceanFloorFar'
import BedroomBusBackdrop from './Backdrops/BedroomBusBackdrop'
import VanNuysSchoolBackdrop from './Backdrops/VanNuysSchoolBackdrop'
import BennettCouchThoughtBackdrop from './Backdrops/BennettCouchThoughtBackdrop'
import WestBerkeleyBackdrop from './Backdrops/WestBerkeleyBackdrop'
import UcBerkeleyBackdrop from './Backdrops/UcBerkeleyBackdrop'
import GoKartThoughtBackdrop from './Backdrops/GoKartThoughtBackdrop'
import UclaBackdrop from './Backdrops/UclaBackdrop'
import PharmacyThoughtBackdrop from './Backdrops/PharmacyThoughtBackdrop'
import CemeteryBackdrop from './Backdrops/CemeteryBackdrop'
import StationWagonBackdrop from './Backdrops/StationWagonBackdrop'
import OaklandSideBackdrop from './Backdrops/OaklandSideBackdrop'
import LizCouchThoughtBackdrop from './Backdrops/LizCouchThoughtBackdrop'
import OaklandFrontBackdrop from './Backdrops/OaklandFrontBackdrop'
import GoldenGateBackdrop from './Backdrops/GoldenGateBackdrop'
import PampasBackdrop from './Backdrops/PampasBackdrop'
import WeddingBackdrop from './Backdrops/WeddingBackdrop'
import InverseThoughtBackdrop from './Backdrops/InverseThoughtBackdrop'

import { getPropsAreShallowEqual } from 'helpers/general'
import { getPresenceXYWidthAndHeight } from '../../Presence/helper'

import ARRANGEMENTS_THINGS from 'scene/things'
import { BACKDROPS } from 'constants/scene'

import {
    NOHO_HOUSES_BACKDROP,
    NOHO_SCHOOL_BACKDROP,
    VALLEY_BACKDROP,
    BEDROOM_BACKDROP,
    BEDROOM_SIREN_BACKDROP,
    TAIWAN_MOUNTAINS_BACKDROP,
    SCHOOLBUS_THOUGHT_BACKDROP,
    VAN_NUYS_THOUGHT_BACKDROP,
    TAIWAN_STAIRS_BACKDROP,
    TAIWAN_STREETS_BACKDROP,
    SHORE_RICKSHAW_BACKDROP,
    SHORE_BUOY_BACKDROP,
    OCEAN_BOTTOM_FAR,
    OCEAN_FLOOR_FAR,
    BEDROOM_BUS_BACKDROP,
    VAN_NUYS_SCHOOL_BACKDROP,
    BENNETT_COUCH_THOUGHT_BACKDROP,
    WEST_BERKELEY_BACKDROP,
    UC_BERKELEY_BACKDROP,
    GO_KART_BACKDROP,
    UCLA_BACKDROP,
    PHARMACY_THOUGHT_BACKDROP,
    CEMETERY_BACKDROP,
    STATION_WAGON_BACKDROP,
    OAKLAND_SIDE_BACKDROP,
    LIZ_COUCH_THOUGHT_BACKDROP,
    OAKLAND_FRONT_BACKDROP,
    GOLDEN_GATE_BACKDROP,
    PAMPAS_BACKDROP,
    WEDDING_BACKDROP,
    INVERSE_THOUGHT_BACKDROP
} from 'scene/backdropKeys'

const BACKDROPS_MAP = {
    [NOHO_HOUSES_BACKDROP]: NohoHousesBackdrop,
    [NOHO_SCHOOL_BACKDROP]: NohoSchoolBackdrop,
    [VALLEY_BACKDROP]: ValleyBackdrop,
    [BEDROOM_BACKDROP]: BedroomBackdrop,
    [BEDROOM_SIREN_BACKDROP]: BedroomSirenBackdrop,
    [TAIWAN_MOUNTAINS_BACKDROP]: TaiwanMountainsBackdrop,
    [SCHOOLBUS_THOUGHT_BACKDROP]: SchoolbusThoughtBackdrop,
    [VAN_NUYS_THOUGHT_BACKDROP]: VanNuysThoughtBackdrop,
    [TAIWAN_STAIRS_BACKDROP]: TaiwanStairsBackdrop,
    [TAIWAN_STREETS_BACKDROP]: TaiwanStreetsBackdrop,
    [SHORE_RICKSHAW_BACKDROP]: ShoreRickshawBackdrop,
    [SHORE_BUOY_BACKDROP]: ShoreBuoyBackdrop,
    [OCEAN_BOTTOM_FAR]: OceanBottomFar,
    [OCEAN_FLOOR_FAR]: OceanFloorFar,
    [BEDROOM_BUS_BACKDROP]: BedroomBusBackdrop,
    [VAN_NUYS_SCHOOL_BACKDROP]: VanNuysSchoolBackdrop,
    [BENNETT_COUCH_THOUGHT_BACKDROP]: BennettCouchThoughtBackdrop,
    [WEST_BERKELEY_BACKDROP]: WestBerkeleyBackdrop,
    [UC_BERKELEY_BACKDROP]: UcBerkeleyBackdrop,
    [GO_KART_BACKDROP]: GoKartThoughtBackdrop,
    [UCLA_BACKDROP]: UclaBackdrop,
    [PHARMACY_THOUGHT_BACKDROP]: PharmacyThoughtBackdrop,
    [CEMETERY_BACKDROP]: CemeteryBackdrop,
    [STATION_WAGON_BACKDROP]: StationWagonBackdrop,
    [OAKLAND_SIDE_BACKDROP]: OaklandSideBackdrop,
    [LIZ_COUCH_THOUGHT_BACKDROP]: LizCouchThoughtBackdrop,
    [OAKLAND_FRONT_BACKDROP]: OaklandFrontBackdrop,
    [GOLDEN_GATE_BACKDROP]: GoldenGateBackdrop,
    [PAMPAS_BACKDROP]: PampasBackdrop,
    [WEDDING_BACKDROP]: WeddingBackdrop,
    [INVERSE_THOUGHT_BACKDROP]: InverseThoughtBackdrop
}

const mapStateToProps = ({
    renderStore: { canSceneRender },
    sceneStore: { sceneCubesKey }
}) => ({
    canSceneRender,
    sceneCubesKey
})

class BackdropLayer extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        sceneCubesKey: PropTypes.string.isRequired,

        // From parent.
        [NOHO_HOUSES_BACKDROP]: PropTypes.bool,
        [NOHO_SCHOOL_BACKDROP]: PropTypes.bool,
        [VALLEY_BACKDROP]: PropTypes.bool,
        [BEDROOM_BACKDROP]: PropTypes.bool,
        [BEDROOM_SIREN_BACKDROP]: PropTypes.bool,
        [TAIWAN_MOUNTAINS_BACKDROP]: PropTypes.bool,
        [SCHOOLBUS_THOUGHT_BACKDROP]: PropTypes.bool,
        [VAN_NUYS_THOUGHT_BACKDROP]: PropTypes.bool,
        [TAIWAN_STAIRS_BACKDROP]: PropTypes.bool,
        [TAIWAN_STREETS_BACKDROP]: PropTypes.bool,
        [SHORE_RICKSHAW_BACKDROP]: PropTypes.bool,
        [SHORE_BUOY_BACKDROP]: PropTypes.bool,
        [OCEAN_BOTTOM_FAR]: PropTypes.bool,
        [OCEAN_FLOOR_FAR]: PropTypes.bool,
        [BEDROOM_BUS_BACKDROP]: PropTypes.bool,
        [VAN_NUYS_SCHOOL_BACKDROP]: PropTypes.bool,
        [BENNETT_COUCH_THOUGHT_BACKDROP]: PropTypes.bool,
        [WEST_BERKELEY_BACKDROP]: PropTypes.bool,
        [UC_BERKELEY_BACKDROP]: PropTypes.bool,
        [GO_KART_BACKDROP]: PropTypes.bool,
        [UCLA_BACKDROP]: PropTypes.bool,
        [PHARMACY_THOUGHT_BACKDROP]: PropTypes.bool,
        [CEMETERY_BACKDROP]: PropTypes.bool,
        [STATION_WAGON_BACKDROP]: PropTypes.bool,
        [OAKLAND_SIDE_BACKDROP]: PropTypes.bool,
        [LIZ_COUCH_THOUGHT_BACKDROP]: PropTypes.bool,
        [OAKLAND_FRONT_BACKDROP]: PropTypes.bool,
        [GOLDEN_GATE_BACKDROP]: PropTypes.bool,
        [PAMPAS_BACKDROP]: PropTypes.bool,
        [WEDDING_BACKDROP]: PropTypes.bool,
        [INVERSE_THOUGHT_BACKDROP]: PropTypes.bool
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSceneRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {
        const { sceneCubesKey: cubesKey } = this.props

        return (
            <___>
                {keys(BACKDROPS_MAP).map(backdropKey => {
                    const { [backdropKey]: value } = this.props

                    if (value) {
                        const BackdropComponent = BACKDROPS_MAP[backdropKey],
                            arrangementObject = value === true ?
                                ARRANGEMENTS_THINGS[BACKDROPS][backdropKey] :
                                ARRANGEMENTS_THINGS[BACKDROPS][backdropKey][value],
                            {
                                yIndex,
                                arrangement: {
                                    xFloat,
                                    zOffset,
                                    xWidth,
                                    zHeight
                                }
                            } = arrangementObject,

                            xYWidthAndHeight = getPresenceXYWidthAndHeight({
                                cubesKey,
                                yIndex,
                                xFloat,
                                zOffset,
                                xWidth,
                                zHeight
                            })

                        return (
                            <BackdropComponent
                                key={backdropKey}
                                {...{
                                    className: cx(
                                        'Backdrop',
                                        'absoluteFullContainer'
                                    ),
                                    ...xYWidthAndHeight
                                }}
                            />
                        )

                    } else {
                        return null
                    }
                })}
            </___>
        )
    }
}

export default connect(mapStateToProps)(BackdropLayer)
