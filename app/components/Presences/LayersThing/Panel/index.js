// import estherSpeechPanel from 'assets/svgs/panels/estherSpeechPanel'
import bathtub from 'assets/svgs/panels/bathtub'
import bedroomDesk from 'assets/svgs/panels/bedroomDesk'
import captainBed from 'assets/svgs/panels/captainBed'
import bedroomFence from 'assets/svgs/panels/bedroomFence'
import caveShadows from 'assets/svgs/panels/caveShadows'
import stalactites from 'assets/svgs/panels/stalactites'
import trollShadowLeft from 'assets/svgs/panels/trollShadowLeft'
import trollShadowRight from 'assets/svgs/panels/trollShadowRight'
import trollShadowFar from 'assets/svgs/panels/trollShadowFar'
// import taiwanClouds from 'assets/svgs/panels/taiwanClouds'
// import taiwanFog from 'assets/svgs/panels/taiwanFog'
import schoolbusInterior from 'assets/svgs/panels/schoolbusInterior'
import schoolbusExterior from 'assets/svgs/panels/schoolbusExterior'
import oceanCaveInterior from 'assets/svgs/panels/oceanCaveInterior'
import oceanCaveExterior from 'assets/svgs/panels/oceanCaveExterior'
import wideCouch from 'assets/svgs/panels/wideCouch'
import wideArmrest from 'assets/svgs/panels/wideArmrest'
import goKartExterior from 'assets/svgs/panels/goKartExterior'
import conveyorBelt from 'assets/svgs/panels/conveyorBelt'
import dishroomSink from 'assets/svgs/panels/dishroomSink'
import bennettBed from 'assets/svgs/panels/bennettBed'
import waitingArmchair from 'assets/svgs/panels/waitingArmchair'
import waitingArmrest from 'assets/svgs/panels/waitingArmrest'
import lizBed from 'assets/svgs/panels/lizBed'
import saturnInterior from 'assets/svgs/panels/saturnInterior'
import saturnExterior from 'assets/svgs/panels/saturnExterior'
import atticCouch from 'assets/svgs/panels/atticCouch'
import atticArmrest from 'assets/svgs/panels/atticArmrest'
import volkswagen from 'assets/svgs/panels/volkswagen'
import crowdSide from 'assets/svgs/panels/crowdSide'
import lizCouch from 'assets/svgs/panels/lizCouch'
import snowglobe from 'assets/svgs/panels/snowglobe'
import reattaInterior from 'assets/svgs/panels/reattaInterior'
import reattaExterior from 'assets/svgs/panels/reattaExterior'
// import hospitalBed from 'assets/svgs/panels/hospitalBed'
import phoneCallPanel from 'assets/svgs/panels/phoneCallPanel'
// import deathbedThoughtPanel from 'assets/svgs/panels/deathbedThoughtPanel'
// import tennisThoughtPanel from 'assets/svgs/panels/tennisThoughtPanel'
import crowdBack from 'assets/svgs/panels/crowdBack'
// import weddingPlatform from 'assets/svgs/panels/weddingPlatform'
// import inverseThoughtPanel from 'assets/svgs/panels/inverseThoughtPanel'

import {
    ESTHER_SPEECH_PANEL,
    BATHTUB,
    BEDROOM_DESK,
    CAPTAIN_BED,
    BEDROOM_FENCE,
    CAVE_SHADOWS,
    STALACTITES,
    TROLL_SHADOW_LEFT,
    TROLL_SHADOW_RIGHT,
    TROLL_SHADOW_FAR,
    TAIWAN_CLOUDS,
    TAIWAN_FOG,
    SCHOOLBUS_EXTERIOR,
    SCHOOLBUS_INTERIOR,
    OCEAN_CAVE_INTERIOR,
    OCEAN_CAVE_EXTERIOR,
    WIDE_COUCH__BENNETT,
    WIDE_ARMREST__BENNETT_LEFT,
    WIDE_ARMREST__BENNETT_RIGHT,
    GO_KART_EXTERIOR__LEFT,
    GO_KART_EXTERIOR__RIGHT,
    CONVEYOR_BELT,
    DISHROOM_SINK,
    BENNETT_BED,
    WAITING_ARMCHAIR__BENNETT,
    WAITING_ARMREST__BENNETT_LEFT,
    WAITING_ARMREST__BENNETT_RIGHT,
    WAITING_ARMCHAIR__LIZ,
    WAITING_ARMREST__LIZ_LEFT,
    WAITING_ARMREST__LIZ_RIGHT,
    LIZ_BED,
    SATURN_EXTERIOR,
    SATURN_INTERIOR,
    ATTIC_COUCH,
    ATTIC_ARMREST__LEFT,
    ATTIC_ARMREST__RIGHT,
    VOLKSWAGEN,
    CROWD_SIDE,
    LIZ_COUCH,
    WIDE_COUCH__MIRIAM,
    WIDE_ARMREST__MIRIAM_LEFT,
    WIDE_ARMREST__MIRIAM_RIGHT,
    SNOWGLOBE__TETHERBALL,
    SNOWGLOBE__LIZ_ALONE,
    SNOWGLOBE__BENNETT_MIRIAM,
    SNOWGLOBE__LIZ_KHARI,
    SNOWGLOBE__BENNETT_ALONE,
    REATTA_EXTERIOR,
    REATTA_INTERIOR,
    HOSPITAL_BED,
    PHONE_CALL_PANEL,
    DEATHBED_THOUGHT_PANEL,
    TENNIS_THOUGHT_PANEL,
    CROWD_BACK,
    WEDDING_PLATFORM,
    INVERSE_THOUGHT_PANEL
} from 'constants/scene/things/panels'

export default {
    [ESTHER_SPEECH_PANEL]: false,
    [BATHTUB]: bathtub,
    [BEDROOM_DESK]: bedroomDesk,
    [CAPTAIN_BED]: captainBed,
    [BEDROOM_FENCE]: bedroomFence,
    [CAVE_SHADOWS]: caveShadows,
    [STALACTITES]: stalactites,
    [TROLL_SHADOW_LEFT]: trollShadowLeft,
    [TROLL_SHADOW_RIGHT]: trollShadowRight,
    [TROLL_SHADOW_FAR]: trollShadowFar,
    [TAIWAN_CLOUDS]: false,
    [TAIWAN_FOG]: false,
    [SCHOOLBUS_INTERIOR]: schoolbusInterior,
    [SCHOOLBUS_EXTERIOR]: schoolbusExterior,
    [OCEAN_CAVE_INTERIOR]: oceanCaveInterior,
    [OCEAN_CAVE_EXTERIOR]: oceanCaveExterior,
    [WIDE_COUCH__BENNETT]: wideCouch,
    [WIDE_ARMREST__BENNETT_LEFT]: wideArmrest,
    [WIDE_ARMREST__BENNETT_RIGHT]: wideArmrest,
    [GO_KART_EXTERIOR__LEFT]: goKartExterior,
    [GO_KART_EXTERIOR__RIGHT]: goKartExterior,
    [CONVEYOR_BELT]: conveyorBelt,
    [DISHROOM_SINK]: dishroomSink,
    [BENNETT_BED]: bennettBed,
    [WAITING_ARMCHAIR__BENNETT]: waitingArmchair,
    [WAITING_ARMREST__BENNETT_LEFT]: waitingArmrest,
    [WAITING_ARMREST__BENNETT_RIGHT]: waitingArmrest,
    [WAITING_ARMCHAIR__LIZ]: waitingArmchair,
    [WAITING_ARMREST__LIZ_LEFT]: waitingArmrest,
    [WAITING_ARMREST__LIZ_RIGHT]: waitingArmrest,
    [LIZ_BED]: lizBed,
    [SATURN_INTERIOR]: saturnInterior,
    [SATURN_EXTERIOR]: saturnExterior,
    [ATTIC_COUCH]: atticCouch,
    [ATTIC_ARMREST__LEFT]: atticArmrest,
    [ATTIC_ARMREST__RIGHT]: atticArmrest,
    [VOLKSWAGEN]: volkswagen,
    [CROWD_SIDE]: crowdSide,
    [LIZ_COUCH]: lizCouch,
    [WIDE_COUCH__MIRIAM]: wideCouch,
    [WIDE_ARMREST__MIRIAM_LEFT]: wideArmrest,
    [WIDE_ARMREST__MIRIAM_RIGHT]: wideArmrest,
    [SNOWGLOBE__TETHERBALL]: snowglobe,
    [SNOWGLOBE__LIZ_ALONE]: snowglobe,
    [SNOWGLOBE__BENNETT_MIRIAM]: snowglobe,
    [SNOWGLOBE__LIZ_KHARI]: snowglobe,
    [SNOWGLOBE__BENNETT_ALONE]: snowglobe,
    [REATTA_INTERIOR]: reattaInterior,
    [REATTA_EXTERIOR]: reattaExterior,
    [HOSPITAL_BED]: false,
    [PHONE_CALL_PANEL]: phoneCallPanel,
    [DEATHBED_THOUGHT_PANEL]: false,
    [TENNIS_THOUGHT_PANEL]: false,
    [CROWD_BACK]: crowdBack,
    [WEDDING_PLATFORM]: false,
    [INVERSE_THOUGHT_PANEL]: false
}
