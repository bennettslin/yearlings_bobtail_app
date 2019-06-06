import PropTypes from 'prop-types'

import EstherSpeechPanel from './Panels/EstherSpeechPanel'
import Bathtub from './Panels/Bathtub'
import BedroomDesk from './Panels/BedroomDesk'
import CaptainBedPanel from './Panels/CaptainBedPanel'
import BedroomFence from './Panels/BedroomFence'
import SchoolbusInterior from './Panels/SchoolbusInterior'
import SchoolbusExterior from './Panels/SchoolbusExterior'
import OceanCaveInterior from './Panels/OceanCaveInterior'
import OceanCaveExterior from './Panels/OceanCaveExterior'
import BennettMiriamCouchPanel from './Panels/BennettMiriamCouchPanel'
import BennettMiriamCouchArmrestLeft from './Panels/BennettMiriamCouchArmrestLeft'
import BennettMiriamCouchArmrestRight from './Panels/BennettMiriamCouchArmrestRight'
import GoKartExterior from './Panels/GoKartExterior'
import DishroomSink from './Panels/DishroomSink'
import BennettBedPanel from './Panels/BennettBedPanel'
import WaitingArmchairPanel from './Panels/WaitingArmchairPanel'
import WaitingArmchairArmrestLeft from './Panels/WaitingArmchairArmrestLeft'
import WaitingArmchairArmrestRight from './Panels/WaitingArmchairArmrestRight'
import LizBedPanel from './Panels/LizBedPanel'
import SaturnInterior from './Panels/SaturnInterior'
import SaturnExterior from './Panels/SaturnExterior'
import AtticCouchPanel from './Panels/AtticCouchPanel'
import AtticCouchArmrestLeft from './Panels/AtticCouchArmrestLeft'
import AtticCouchArmrestRight from './Panels/AtticCouchArmrestRight'
import Volkswagen from './Panels/Volkswagen'
import LizCouchPanel from './Panels/LizCouchPanel'
import Snowglobe from './Panels/Snowglobe'
import ReattaInterior from './Panels/ReattaInterior'
import ReattaExterior from './Panels/ReattaExterior'
import HospitalBedPanel from './Panels/HospitalBedPanel'
import PhoneCallPanel from './Panels/PhoneCallPanel'
import DeathbedThoughtPanel from './Panels/DeathbedThoughtPanel'
import TennisThoughtPanel from './Panels/TennisThoughtPanel'
import WeddingPlatform from './Panels/WeddingPlatform'
import InverseThoughtPanel from './Panels/InverseThoughtPanel'

import {
    ESTHER_SPEECH_PANEL,
    BATHTUB,
    BEDROOM_DESK,
    CAPTAIN_BED_PANEL,
    BEDROOM_FENCE,
    SCHOOLBUS_EXTERIOR,
    SCHOOLBUS_INTERIOR,
    OCEAN_CAVE_INTERIOR,
    OCEAN_CAVE_EXTERIOR,
    BENNETT_COUCH_PANEL,
    BENNETT_COUCH_ARMREST_LEFT,
    BENNETT_COUCH_ARMREST_RIGHT,
    GO_KART_LEFT_EXTERIOR,
    GO_KART_RIGHT_EXTERIOR,
    DISHROOM_SINK,
    BENNETT_BED_PANEL,
    WAITING_ARMCHAIR_PANEL_BENNETT,
    WAITING_ARMCHAIR_ARMREST_LEFT_BENNETT,
    WAITING_ARMCHAIR_ARMREST_RIGHT_BENNETT,
    WAITING_ARMCHAIR_PANEL_LIZ,
    WAITING_ARMCHAIR_ARMREST_LEFT_LIZ,
    WAITING_ARMCHAIR_ARMREST_RIGHT_LIZ,
    LIZ_BED_PANEL,
    SATURN_EXTERIOR,
    SATURN_INTERIOR,
    ATTIC_COUCH_PANEL,
    ATTIC_COUCH_ARMREST_LEFT,
    ATTIC_COUCH_ARMREST_RIGHT,
    VOLKSWAGEN,
    LIZ_COUCH_PANEL,
    MIRIAM_COUCH_PANEL,
    MIRIAM_COUCH_ARMREST_LEFT,
    MIRIAM_COUCH_ARMREST_RIGHT,
    SNOWGLOBE_TETHERBALL,
    SNOWGLOBE_LIZ_ALONE,
    SNOWGLOBE_BENNETT_MIRIAM,
    SNOWGLOBE_LIZ_KHARI,
    SNOWGLOBE_BENNETT_ALONE,
    REATTA_EXTERIOR,
    REATTA_INTERIOR,
    HOSPITAL_BED_PANEL,
    PHONE_CALL_PANEL,
    DEATHBED_THOUGHT_PANEL,
    TENNIS_THOUGHT_PANEL,
    WEDDING_PLATFORM,
    INVERSE_THOUGHT_PANEL
} from 'scene/things/keys/panels'

export const propTypes = {
    [ESTHER_SPEECH_PANEL]: PropTypes.bool,
    [BATHTUB]: PropTypes.bool,
    [BEDROOM_DESK]: PropTypes.bool,
    [CAPTAIN_BED_PANEL]: PropTypes.bool,
    [BEDROOM_FENCE]: PropTypes.bool,
    [SCHOOLBUS_INTERIOR]: PropTypes.bool,
    [SCHOOLBUS_EXTERIOR]: PropTypes.bool,
    [OCEAN_CAVE_INTERIOR]: PropTypes.bool,
    [OCEAN_CAVE_EXTERIOR]: PropTypes.bool,
    [BENNETT_COUCH_PANEL]: PropTypes.bool,
    [BENNETT_COUCH_ARMREST_LEFT]: PropTypes.bool,
    [BENNETT_COUCH_ARMREST_RIGHT]: PropTypes.bool,
    [GO_KART_LEFT_EXTERIOR]: PropTypes.bool,
    [GO_KART_RIGHT_EXTERIOR]: PropTypes.bool,
    [DISHROOM_SINK]: PropTypes.bool,
    [BENNETT_BED_PANEL]: PropTypes.bool,
    [WAITING_ARMCHAIR_PANEL_BENNETT]: PropTypes.bool,
    [WAITING_ARMCHAIR_ARMREST_LEFT_BENNETT]: PropTypes.bool,
    [WAITING_ARMCHAIR_ARMREST_RIGHT_BENNETT]: PropTypes.bool,
    [WAITING_ARMCHAIR_PANEL_LIZ]: PropTypes.bool,
    [WAITING_ARMCHAIR_ARMREST_LEFT_LIZ]: PropTypes.bool,
    [WAITING_ARMCHAIR_ARMREST_RIGHT_LIZ]: PropTypes.bool,
    [LIZ_BED_PANEL]: PropTypes.bool,
    [SATURN_INTERIOR]: PropTypes.bool,
    [SATURN_EXTERIOR]: PropTypes.bool,
    [ATTIC_COUCH_PANEL]: PropTypes.bool,
    [ATTIC_COUCH_ARMREST_LEFT]: PropTypes.bool,
    [ATTIC_COUCH_ARMREST_RIGHT]: PropTypes.bool,
    [VOLKSWAGEN]: PropTypes.bool,
    [LIZ_COUCH_PANEL]: PropTypes.bool,
    [MIRIAM_COUCH_PANEL]: PropTypes.bool,
    [MIRIAM_COUCH_ARMREST_LEFT]: PropTypes.bool,
    [MIRIAM_COUCH_ARMREST_RIGHT]: PropTypes.bool,
    [SNOWGLOBE_TETHERBALL]: PropTypes.bool,
    [SNOWGLOBE_LIZ_ALONE]: PropTypes.bool,
    [SNOWGLOBE_BENNETT_MIRIAM]: PropTypes.bool,
    [SNOWGLOBE_LIZ_KHARI]: PropTypes.bool,
    [SNOWGLOBE_BENNETT_ALONE]: PropTypes.bool,
    [REATTA_INTERIOR]: PropTypes.bool,
    [REATTA_EXTERIOR]: PropTypes.bool,
    [HOSPITAL_BED_PANEL]: PropTypes.bool,
    [PHONE_CALL_PANEL]: PropTypes.bool,
    [DEATHBED_THOUGHT_PANEL]: PropTypes.bool,
    [TENNIS_THOUGHT_PANEL]: PropTypes.bool,
    [WEDDING_PLATFORM]: PropTypes.bool,
    [INVERSE_THOUGHT_PANEL]: PropTypes.bool
}

export default {
    [ESTHER_SPEECH_PANEL]: EstherSpeechPanel,
    [BATHTUB]: Bathtub,
    [BEDROOM_DESK]: BedroomDesk,
    [CAPTAIN_BED_PANEL]: CaptainBedPanel,
    [BEDROOM_FENCE]: BedroomFence,
    [SCHOOLBUS_INTERIOR]: SchoolbusInterior,
    [SCHOOLBUS_EXTERIOR]: SchoolbusExterior,
    [OCEAN_CAVE_INTERIOR]: OceanCaveInterior,
    [OCEAN_CAVE_EXTERIOR]: OceanCaveExterior,
    [BENNETT_COUCH_PANEL]: BennettMiriamCouchPanel,
    [BENNETT_COUCH_ARMREST_LEFT]: BennettMiriamCouchArmrestLeft,
    [BENNETT_COUCH_ARMREST_RIGHT]: BennettMiriamCouchArmrestRight,
    [GO_KART_LEFT_EXTERIOR]: GoKartExterior,
    [GO_KART_RIGHT_EXTERIOR]: GoKartExterior,
    [DISHROOM_SINK]: DishroomSink,
    [BENNETT_BED_PANEL]: BennettBedPanel,
    [WAITING_ARMCHAIR_PANEL_BENNETT]: WaitingArmchairPanel,
    [WAITING_ARMCHAIR_ARMREST_LEFT_BENNETT]: WaitingArmchairArmrestLeft,
    [WAITING_ARMCHAIR_ARMREST_RIGHT_BENNETT]: WaitingArmchairArmrestRight,
    [WAITING_ARMCHAIR_PANEL_LIZ]: WaitingArmchairPanel,
    [WAITING_ARMCHAIR_ARMREST_LEFT_LIZ]: WaitingArmchairArmrestLeft,
    [WAITING_ARMCHAIR_ARMREST_RIGHT_LIZ]: WaitingArmchairArmrestRight,
    [LIZ_BED_PANEL]: LizBedPanel,
    [SATURN_INTERIOR]: SaturnInterior,
    [SATURN_EXTERIOR]: SaturnExterior,
    [ATTIC_COUCH_PANEL]: AtticCouchPanel,
    [ATTIC_COUCH_ARMREST_LEFT]: AtticCouchArmrestLeft,
    [ATTIC_COUCH_ARMREST_RIGHT]: AtticCouchArmrestRight,
    [VOLKSWAGEN]: Volkswagen,
    [LIZ_COUCH_PANEL]: LizCouchPanel,
    [MIRIAM_COUCH_PANEL]: BennettMiriamCouchPanel,
    [MIRIAM_COUCH_ARMREST_LEFT]: BennettMiriamCouchArmrestLeft,
    [MIRIAM_COUCH_ARMREST_RIGHT]: BennettMiriamCouchArmrestRight,
    [SNOWGLOBE_TETHERBALL]: Snowglobe,
    [SNOWGLOBE_LIZ_ALONE]: Snowglobe,
    [SNOWGLOBE_BENNETT_MIRIAM]: Snowglobe,
    [SNOWGLOBE_LIZ_KHARI]: Snowglobe,
    [SNOWGLOBE_BENNETT_ALONE]: Snowglobe,
    [REATTA_INTERIOR]: ReattaInterior,
    [REATTA_EXTERIOR]: ReattaExterior,
    [HOSPITAL_BED_PANEL]: HospitalBedPanel,
    [PHONE_CALL_PANEL]: PhoneCallPanel,
    [DEATHBED_THOUGHT_PANEL]: DeathbedThoughtPanel,
    [TENNIS_THOUGHT_PANEL]: TennisThoughtPanel,
    [WEDDING_PLATFORM]: WeddingPlatform,
    [INVERSE_THOUGHT_PANEL]: InverseThoughtPanel
}
