import PropTypes from 'prop-types'

import EstherSpeechPanel from './Panels/EstherSpeechPanel'
import Bathtub from './Panels/Bathtub'
import CaptainBedDrawers from './Panels/CaptainBedDrawers'
import SchoolbusInterior from './Panels/SchoolbusInterior'
import SchoolbusExterior from './Panels/SchoolbusExterior'
import OceanCaveInterior from './Panels/OceanCaveInterior'
import OceanCaveExterior from './Panels/OceanCaveExterior'
import GoKartExterior from './Panels/GoKartExterior'
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
    GO_KART_EXTERIOR,
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

const propTypes = {
    [ESTHER_SPEECH_PANEL]: PropTypes.bool,
    [BATHTUB]: PropTypes.bool,
    [CAPTAIN_BED_DRAWERS]: PropTypes.bool,
    [SCHOOLBUS_INTERIOR]: PropTypes.bool,
    [SCHOOLBUS_EXTERIOR]: PropTypes.bool,
    [OCEAN_CAVE_INTERIOR]: PropTypes.bool,
    [OCEAN_CAVE_EXTERIOR]: PropTypes.bool,
    [GO_KART_EXTERIOR]: PropTypes.arrayOf(
        PropTypes.string
    ),
    [DISHROOM_SINK]: PropTypes.bool,
    [SATURN_INTERIOR]: PropTypes.bool,
    [SATURN_EXTERIOR]: PropTypes.bool,
    [VOLKSWAGEN]: PropTypes.bool,
    [SNOWGLOBE]: PropTypes.string,
    [REATTA_INTERIOR]: PropTypes.bool,
    [REATTA_EXTERIOR]: PropTypes.bool,
    [PHONE_CALL_PANEL]: PropTypes.bool,
    [DEATHBED_THOUGHT_PANEL]: PropTypes.bool,
    [TENNIS_THOUGHT_PANEL]: PropTypes.bool,
    [WEDDING_PLATFORM]: PropTypes.bool
}

export { propTypes }

export default {
    [ESTHER_SPEECH_PANEL]: EstherSpeechPanel,
    [BATHTUB]: Bathtub,
    [CAPTAIN_BED_DRAWERS]: CaptainBedDrawers,
    [SCHOOLBUS_INTERIOR]: SchoolbusInterior,
    [SCHOOLBUS_EXTERIOR]: SchoolbusExterior,
    [OCEAN_CAVE_INTERIOR]: OceanCaveInterior,
    [OCEAN_CAVE_EXTERIOR]: OceanCaveExterior,
    [GO_KART_EXTERIOR]: GoKartExterior,
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
}
