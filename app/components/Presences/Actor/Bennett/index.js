// import breakupDejected from 'assets/svgs/actors/bennett/breakupDejected'
// import solicitingOpinion from 'assets/svgs/actors/bennett/solicitingOpinion'
// import catholicPensive from 'assets/svgs/actors/bennett/catholicPensive'
// import catholicIdea from 'assets/svgs/actors/bennett/catholicIdea'
// import pious from 'assets/svgs/actors/bennett/pious'
// import pondering from 'assets/svgs/actors/bennett/pondering'
// import couchReading from 'assets/svgs/actors/bennett/couchReading'
// import rubiksCube from 'assets/svgs/actors/bennett/rubiksCube'
// import distracted from 'assets/svgs/actors/bennett/distracted'
// import hopelesslyCrushed from 'assets/svgs/actors/bennett/hopelesslyCrushed'
// import wonderingBaby from 'assets/svgs/actors/bennett/wonderingBaby'
// import merrilyDeranged from 'assets/svgs/actors/bennett/merrilyDeranged'
// import eating from 'assets/svgs/actors/bennett/eating'
// import dateEnding from 'assets/svgs/actors/bennett/dateEnding'
// import museum from 'assets/svgs/actors/bennett/museum'
// import backstage from 'assets/svgs/actors/bennett/backstage'
// import goKarts from 'assets/svgs/actors/bennett/goKarts'
// import dateEnded from 'assets/svgs/actors/bennett/dateEnded'
// import dishroomReading from 'assets/svgs/actors/bennett/dishroomReading'
// import dishroomLancet from 'assets/svgs/actors/bennett/dishroomLancet'
// import mopSopped from 'assets/svgs/actors/bennett/mopSopped'
// import gateCode from 'assets/svgs/actors/bennett/gateCode'
// import rumpledLinens from 'assets/svgs/actors/bennett/rumpledLinens'
// import waitingRoomAsleep from 'assets/svgs/actors/bennett/waitingRoomAsleep'
// import abbeyRoad from 'assets/svgs/actors/bennett/abbeyRoad'
// import walgreens from 'assets/svgs/actors/bennett/walgreens'
// import steamTunnel from 'assets/svgs/actors/bennett/steamTunnel'
// import cemetery from 'assets/svgs/actors/bennett/cemetery'
// import stationWagon from 'assets/svgs/actors/bennett/stationWagon'
// import attic from 'assets/svgs/actors/bennett/attic'
// import performing from 'assets/svgs/actors/bennett/performing'
// import flirting from 'assets/svgs/actors/bennett/flirting'
// import sidelongHesitance from 'assets/svgs/actors/bennett/sidelongHesitance'
// import removingShoes from 'assets/svgs/actors/bennett/removingShoes'
// import droppingMeats from 'assets/svgs/actors/bennett/droppingMeats'
// import greeting from 'assets/svgs/actors/bennett/greeting'
// import leavingCrumbled from 'assets/svgs/actors/bennett/leavingCrumbled'
// import cordSide from 'assets/svgs/actors/bennett/cordSide'
// import cordRear from 'assets/svgs/actors/bennett/cordRear'
// import past from 'assets/svgs/actors/bennett/past'
// import future from 'assets/svgs/actors/bennett/future'
// import removingPants from 'assets/svgs/actors/bennett/removingPants'
// import infirm from 'assets/svgs/actors/bennett/infirm'
// import disposingCondom from 'assets/svgs/actors/bennett/disposingCondom'
// import campusAshamed from 'assets/svgs/actors/bennett/campusAshamed'
// import showAnnoyed from 'assets/svgs/actors/bennett/showAnnoyed'
// import alley from 'assets/svgs/actors/bennett/alley'
// import brokenHearted from 'assets/svgs/actors/bennett/brokenHearted'
// import demonstration from 'assets/svgs/actors/bennett/demonstration'
// import elTorito from 'assets/svgs/actors/bennett/elTorito'

import {
    BREAKUP_DEJECTED,
    SOLICITING_OPINION,
    CATHOLIC_PENSIVE,
    CATHOLIC_IDEA,
    PIOUS,
    PONDERING,
    COUCH_READING,
    RUBIKS_CUBE,
    DISTRACTED,
    HOPELESSLY_CRUSHED,
    WONDERING_BABY,
    MERRILY_DERANGED,
    DISHROOM_READING,
    MOP_SOPPED,
    WAITING_ROOM_ASLEEP,
    SIDELONG_HESITANCE,
    REMOVING_SHOES,
    DROPPING_MEATS,
    CORD_SIDE,
    CORD_REAR,
    REMOVING_PANTS,
    INFIRM,
    DISPOSING_CONDOM,
    CAMPUS_ASHAMED,
    SHOW_ANNOYED,
    ALLEY,
    BROKEN_HEARTED,
    DEMONSTRATION
} from 'constants/scene/actors/instances/bennett'

import {
    EATING,
    DATE_ENDING,
    MUSEUM,
    BACKSTAGE,
    GO_KARTS,
    DATE_ENDED,
    DISHROOM_LANCET,
    GATE_CODE,
    RUMPLED_LINENS,
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    CEMETERY,
    STATION_WAGON,
    ATTIC,
    PERFORMING,
    FLIRTING,
    GREETING,
    LEAVING_CRUMBLED,
    PAST,
    FUTURE,
    EL_TORITO
} from 'constants/scene/actors/instances/songs'

export default {
    [BREAKUP_DEJECTED]: false,
    [SOLICITING_OPINION]: false,
    [CATHOLIC_PENSIVE]: false,
    [CATHOLIC_IDEA]: false,
    [PIOUS]: false,
    [PONDERING]: false,
    [COUCH_READING]: false,
    [RUBIKS_CUBE]: false,
    [DISTRACTED]: false,
    [HOPELESSLY_CRUSHED]: false,
    [WONDERING_BABY]: false,
    [MERRILY_DERANGED]: false,
    [EATING]: false,
    [DATE_ENDING]: false,
    [MUSEUM]: false,
    [BACKSTAGE]: false,
    [GO_KARTS]: false,
    [DATE_ENDED]: false,
    [DISHROOM_READING]: false,
    [DISHROOM_LANCET]: false,
    [MOP_SOPPED]: false,
    [GATE_CODE]: false,
    [RUMPLED_LINENS]: false,
    [WAITING_ROOM_ASLEEP]: false,
    [ABBEY_ROAD]: false,
    [WALGREENS]: false,
    [STEAM_TUNNEL]: false,
    [CEMETERY]: false,
    [STATION_WAGON]: false,
    [ATTIC]: false,
    [PERFORMING]: false,
    [FLIRTING]: false,
    [SIDELONG_HESITANCE]: false,
    [REMOVING_SHOES]: false,
    [DROPPING_MEATS]: false,
    [GREETING]: false,
    [LEAVING_CRUMBLED]: false,
    [CORD_SIDE]: false,
    [CORD_REAR]: false,
    [PAST]: false,
    [FUTURE]: false,
    [REMOVING_PANTS]: false,
    [INFIRM]: false,
    [DISPOSING_CONDOM]: false,
    [CAMPUS_ASHAMED]: false,
    [SHOW_ANNOYED]: false,
    [ALLEY]: false,
    [BROKEN_HEARTED]: false,
    [DEMONSTRATION]: false,
    [EL_TORITO]: false
}
