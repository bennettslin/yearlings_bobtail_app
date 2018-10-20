import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import EstherSpeechPanel from './Panels/EstherSpeechPanel'
import Bathtub from './Panels/Bathtub'
import CaptainBedDrawers from './Panels/CaptainBedDrawers'
import SchoolbusInterior from './Panels/SchoolbusInterior'
import SchoolbusExterior from './Panels/SchoolbusExterior'
import OceanCaveInterior from './Panels/OceanCaveInterior'
import OceanCaveExterior from './Panels/OceanCaveExterior'
import GoKartExteriorLeft from './Panels/GoKartExteriorLeft'
import GoKartExteriorRight from './Panels/GoKartExteriorRight'
import DishroomSink from './Panels/DishroomSink'
import SaturnInterior from './Panels/SaturnInterior'
import SaturnExterior from './Panels/SaturnExterior'
import Volkswagen from './Panels/Volkswagen'
import Snowglobe from './Panels/Snowglobe'
import ReattaInterior from './Panels/ReattaInterior'
import ReattaExterior from './Panels/ReattaExterior'
import PhoneCallPanel from './Panels/PhoneCallPanel'
import DeathbedThoughtPanel from './Panels/DeathbedThoughtPanel'
import TennisThoughtPanel from './Panels/TennisThoughtPanel'
import WeddingPlatform from './Panels/WeddingPlatform'

import {
    ESTHER_SPEECH_PANEL,
    BATHTUB,
    CAPTAIN_BED_DRAWERS,
    SCHOOLBUS_EXTERIOR,
    SCHOOLBUS_INTERIOR,
    OCEAN_CAVE_INTERIOR,
    OCEAN_CAVE_EXTERIOR,
    GO_KART_EXTERIOR_LEFT,
    GO_KART_EXTERIOR_RIGHT,
    DISHROOM_SINK,
    SATURN_EXTERIOR,
    SATURN_INTERIOR,
    VOLKSWAGEN,
    SNOWGLOBE,
    REATTA_EXTERIOR,
    REATTA_INTERIOR,
    PHONE_CALL_PANEL,
    DEATHBED_THOUGHT_PANEL,
    TENNIS_THOUGHT_PANEL,
    WEDDING_PLATFORM
} from 'scene/panelKeys'

const PANELS_MAP = {
    [ESTHER_SPEECH_PANEL]: EstherSpeechPanel,
    [BATHTUB]: Bathtub,
    [CAPTAIN_BED_DRAWERS]: CaptainBedDrawers,
    [SCHOOLBUS_INTERIOR]: SchoolbusInterior,
    [SCHOOLBUS_EXTERIOR]: SchoolbusExterior,
    [OCEAN_CAVE_INTERIOR]: OceanCaveInterior,
    [OCEAN_CAVE_EXTERIOR]: OceanCaveExterior,
    [GO_KART_EXTERIOR_LEFT]: GoKartExteriorLeft,
    [GO_KART_EXTERIOR_RIGHT]: GoKartExteriorRight,
    [DISHROOM_SINK]: DishroomSink,
    [SATURN_INTERIOR]: SaturnInterior,
    [SATURN_EXTERIOR]: SaturnExterior,
    [VOLKSWAGEN]: Volkswagen,
    [SNOWGLOBE]: Snowglobe,
    [REATTA_INTERIOR]: ReattaInterior,
    [REATTA_EXTERIOR]: ReattaExterior,
    [PHONE_CALL_PANEL]: PhoneCallPanel,
    [DEATHBED_THOUGHT_PANEL]: DeathbedThoughtPanel,
    [TENNIS_THOUGHT_PANEL]: TennisThoughtPanel,
    [WEDDING_PLATFORM]: WeddingPlatform
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

const Puppet = ({

    className,
    nameKey,

...other }) => {

    const PuppetComponent =
        PANELS_MAP[nameKey] || DEFAULT_COMPONENT

    return (
        <PuppetComponent {...other}
            className={cx(
                'Puppet',
                className
            )}
        />
    )
}

Puppet.propTypes = propTypes;

export default Puppet
