import EstherSpeechPanel from './Panels/EstherSpeechPanel'
import Bathtub from './Panels/Bathtub'
import BedroomDesk from './Panels/BedroomDesk'
import CaptainBed from './Panels/CaptainBed'
import BedroomFence from './Panels/BedroomFence'
import TrollShadowLeft from './Panels/TrollShadowLeft'
import TrollShadowRight from './Panels/TrollShadowRight'
import Stalactites from './Panels/Stalactites'
import SchoolbusInterior from './Panels/SchoolbusInterior'
import SchoolbusExterior from './Panels/SchoolbusExterior'
import OceanCaveInterior from './Panels/OceanCaveInterior'
import OceanCaveExterior from './Panels/OceanCaveExterior'
import BennettCouch from './Panels/BennettCouch'
import BennettLeftArmrest from './Panels/BennettLeftArmrest'
import BennettRightArmrest from './Panels/BennettRightArmrest'
import GoKartExterior from './Panels/GoKartExterior'
import DishroomSink from './Panels/DishroomSink'
import BennettBed from './Panels/BennettBed'
import WaitingArmchair from './Panels/WaitingArmchair'
import WaitingLeftArmrest from './Panels/WaitingLeftArmrest'
import WaitingRightArmrest from './Panels/WaitingRightArmrest'
import LizBed from './Panels/LizBed'
import SaturnInterior from './Panels/SaturnInterior'
import SaturnExterior from './Panels/SaturnExterior'
import AtticCouch from './Panels/AtticCouch'
import AtticLeftArmrest from './Panels/AtticLeftArmrest'
import AtticRightArmrest from './Panels/AtticRightArmrest'
import Volkswagen from './Panels/Volkswagen'
import LizCouch from './Panels/LizCouch'
import Snowglobe from './Panels/Snowglobe'
import ReattaInterior from './Panels/ReattaInterior'
import ReattaExterior from './Panels/ReattaExterior'
import HospitalBed from './Panels/HospitalBed'
import PhoneCallPanel from './Panels/PhoneCallPanel'
import DeathbedThoughtPanel from './Panels/DeathbedThoughtPanel'
import TennisThoughtPanel from './Panels/TennisThoughtPanel'
import WeddingPlatform from './Panels/WeddingPlatform'
import InverseThoughtPanel from './Panels/InverseThoughtPanel'

import {
    ESTHER_SPEECH_PANEL,
    BATHTUB,
    BEDROOM_DESK,
    CAPTAIN_BED,
    BEDROOM_FENCE,
    TROLL_SHADOW_LEFT,
    TROLL_SHADOW_RIGHT,
    STALACTITES,
    SCHOOLBUS_EXTERIOR,
    SCHOOLBUS_INTERIOR,
    OCEAN_CAVE_INTERIOR,
    OCEAN_CAVE_EXTERIOR,
    BENNETT_COUCH,
    BENNETT_LEFT_ARMREST,
    BENNETT_RIGHT_ARMREST,
    GO_KART_EXTERIOR_LEFT,
    GO_KART_EXTERIOR_RIGHT,
    DISHROOM_SINK,
    BENNETT_BED,
    WAITING_ARMCHAIR_BENNETT,
    WAITING_LEFT_ARMREST_BENNETT,
    WAITING_RIGHT_ARMREST_BENNETT,
    WAITING_ARMCHAIR_LIZ,
    WAITING_LEFT_ARMREST_LIZ,
    WAITING_RIGHT_ARMREST_LIZ,
    LIZ_BED,
    SATURN_EXTERIOR,
    SATURN_INTERIOR,
    ATTIC_COUCH,
    ATTIC_LEFT_ARMREST,
    ATTIC_RIGHT_ARMREST,
    VOLKSWAGEN,
    LIZ_COUCH,
    BENNETT_COUCH_BUBBLE,
    BENNETT_LEFT_ARMREST_BUBBLE,
    BENNETT_RIGHT_ARMREST_BUBBLE,
    SNOWGLOBE_TETHERBALL,
    SNOWGLOBE_LIZ_ALONE,
    SNOWGLOBE_BENNETT_MIRIAM,
    SNOWGLOBE_LIZ_KHARI,
    SNOWGLOBE_BENNETT_ALONE,
    REATTA_EXTERIOR,
    REATTA_INTERIOR,
    HOSPITAL_BED,
    PHONE_CALL_PANEL,
    DEATHBED_THOUGHT_PANEL,
    TENNIS_THOUGHT_PANEL,
    WEDDING_PLATFORM,
    INVERSE_THOUGHT_PANEL
} from 'constants/scene/things/panels'

export default {
    [ESTHER_SPEECH_PANEL]: EstherSpeechPanel,
    [BATHTUB]: Bathtub,
    [BEDROOM_DESK]: BedroomDesk,
    [CAPTAIN_BED]: CaptainBed,
    [BEDROOM_FENCE]: BedroomFence,
    [TROLL_SHADOW_LEFT]: TrollShadowLeft,
    [TROLL_SHADOW_RIGHT]: TrollShadowRight,
    [STALACTITES]: Stalactites,
    [SCHOOLBUS_INTERIOR]: SchoolbusInterior,
    [SCHOOLBUS_EXTERIOR]: SchoolbusExterior,
    [OCEAN_CAVE_INTERIOR]: OceanCaveInterior,
    [OCEAN_CAVE_EXTERIOR]: OceanCaveExterior,
    [BENNETT_COUCH]: BennettCouch,
    [BENNETT_LEFT_ARMREST]: BennettLeftArmrest,
    [BENNETT_RIGHT_ARMREST]: BennettRightArmrest,
    [GO_KART_EXTERIOR_LEFT]: GoKartExterior,
    [GO_KART_EXTERIOR_RIGHT]: GoKartExterior,
    [DISHROOM_SINK]: DishroomSink,
    [BENNETT_BED]: BennettBed,
    [WAITING_ARMCHAIR_BENNETT]: WaitingArmchair,
    [WAITING_LEFT_ARMREST_BENNETT]: WaitingLeftArmrest,
    [WAITING_RIGHT_ARMREST_BENNETT]: WaitingRightArmrest,
    [WAITING_ARMCHAIR_LIZ]: WaitingArmchair,
    [WAITING_LEFT_ARMREST_LIZ]: WaitingLeftArmrest,
    [WAITING_RIGHT_ARMREST_LIZ]: WaitingRightArmrest,
    [LIZ_BED]: LizBed,
    [SATURN_INTERIOR]: SaturnInterior,
    [SATURN_EXTERIOR]: SaturnExterior,
    [ATTIC_COUCH]: AtticCouch,
    [ATTIC_LEFT_ARMREST]: AtticLeftArmrest,
    [ATTIC_RIGHT_ARMREST]: AtticRightArmrest,
    [VOLKSWAGEN]: Volkswagen,
    [LIZ_COUCH]: LizCouch,
    [BENNETT_COUCH_BUBBLE]: BennettCouch,
    [BENNETT_LEFT_ARMREST_BUBBLE]: BennettLeftArmrest,
    [BENNETT_RIGHT_ARMREST_BUBBLE]: BennettRightArmrest,
    [SNOWGLOBE_TETHERBALL]: Snowglobe,
    [SNOWGLOBE_LIZ_ALONE]: Snowglobe,
    [SNOWGLOBE_BENNETT_MIRIAM]: Snowglobe,
    [SNOWGLOBE_LIZ_KHARI]: Snowglobe,
    [SNOWGLOBE_BENNETT_ALONE]: Snowglobe,
    [REATTA_INTERIOR]: ReattaInterior,
    [REATTA_EXTERIOR]: ReattaExterior,
    [HOSPITAL_BED]: HospitalBed,
    [PHONE_CALL_PANEL]: PhoneCallPanel,
    [DEATHBED_THOUGHT_PANEL]: DeathbedThoughtPanel,
    [TENNIS_THOUGHT_PANEL]: TennisThoughtPanel,
    [WEDDING_PLATFORM]: WeddingPlatform,
    [INVERSE_THOUGHT_PANEL]: InverseThoughtPanel
}
