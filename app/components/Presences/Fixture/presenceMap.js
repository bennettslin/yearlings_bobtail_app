import PropTypes from 'prop-types'

import PlaygroundBall from './Fixtures/PlaygroundBall'
import SafewayBag from './Fixtures/SafewayBag'
import RecordPlayerStool from './Fixtures/RecordPlayerStool'
import JohnnyHortonAlbum from './Fixtures/JohnnyHortonAlbum'
import ShoppingCart from './Fixtures/ShoppingCart'
import HaircutScissors from './Fixtures/HaircutScissors'
import BeethovenBust from './Fixtures/BeethovenBust'
import ChristopherLetters from './Fixtures/ChristopherLetters'
import GarbageBag from './Fixtures/GarbageBag'
import ShoppingCartFull from './Fixtures/ShoppingCartFull'
import BackpackBennett from './Fixtures/BackpackBennett'
import BackpackSasha from './Fixtures/BackpackSasha'
import BackpackJewishBoy from './Fixtures/BackpackJewishBoy'
import FridgeDrawings from './Fixtures/FridgeDrawings'
import CaptainBedLamp from './Fixtures/CaptainBedLamp'
import RedEnvelopeMoney from './Fixtures/RedEnvelopeMoney'
import BeyonderEnvelope from './Fixtures/BeyonderEnvelope'
import BennettLetters from './Fixtures/BennettLetters'
import ThrownFruit from './Fixtures/ThrownFruit'
import PoliceAlbum from './Fixtures/PoliceAlbum'
import BennettRecordPlayer from './Fixtures/BennettRecordPlayer'
import BennettCouchLamp from './Fixtures/BennettCouchLamp'
import AshCan from './Fixtures/AshCan'
import TelevisionAlbum from './Fixtures/TelevisionAlbum'
import Keyboard from './Fixtures/Keyboard'
import CashBox from './Fixtures/CashBox'
import Guitar from './Fixtures/Guitar'
import BassCaseOpen from './Fixtures/BassCaseOpen'
import DrumKit from './Fixtures/DrumKit'
import BassCaseUpright from './Fixtures/BassCaseUpright'
import GuitarCaseUpright from './Fixtures/GuitarCaseUpright'
import BasementBeerCase from './Fixtures/BasementBeerCase'
import BasementBeerMara from './Fixtures/BasementBeerMara'
import BasementBeerBennett from './Fixtures/BasementBeerBennett'
import CavemanBones from './Fixtures/CavemanBones'
import PushBroom from './Fixtures/PushBroom'
import Stepladder from './Fixtures/Stepladder'
import Mannequin from './Fixtures/Mannequin'
import ConveyorBelt from './Fixtures/ConveyorBelt'
import GlassCart from './Fixtures/GlassCart'
import TrayCart from './Fixtures/TrayCart'
import GlassRack from './Fixtures/GlassRack'
import DishPile from './Fixtures/DishPile'
import NudeDrawings from './Fixtures/NudeDrawings'
import Vaseline from './Fixtures/Vaseline'
import LizPhone from './Fixtures/LizPhone'
import LizPhoneReflection from './Fixtures/LizPhoneReflection'
import BloodyTowel from './Fixtures/BloodyTowel'
import Gravestone from './Fixtures/Gravestone'
import EvianBottles from './Fixtures/EvianBottles'
import StageMicSide from './Fixtures/StageMicSide'
import KickDrum from './Fixtures/KickDrum'
import GuitarCaseOpen from './Fixtures/GuitarCaseOpen'
import BassCaseSide from './Fixtures/BassCaseSide'
import DrumsStacked from './Fixtures/DrumsStacked'
import BennettShoe from './Fixtures/BennettShoe'
import BennettShoeReflection from './Fixtures/BennettShoeReflection'
import NasAlbum from './Fixtures/NasAlbum'
import Tchotchkes from './Fixtures/Tchotchkes'
import TetherballPole from './Fixtures/TetherballPole'
import RecordingConsole from './Fixtures/RecordingConsole'
import RecordingMic from './Fixtures/RecordingMic'
import RecordingBeers from './Fixtures/RecordingBeers'
import CrackedPicture from './Fixtures/CrackedPicture'
import StageMicFar from './Fixtures/StageMicFar'
import BurgerWrapper from './Fixtures/BurgerWrapper'
import LizPhoneBase from './Fixtures/LizPhoneBase'
import LizPhoneBaseReflection from './Fixtures/LizPhoneBaseReflection'
import HospitalRecordPlayer from './Fixtures/HospitalRecordPlayer'

import {
    PLAYGROUND_BALL,
    SAFEWAY_BAG,
    RECORD_PLAYER_STOOL,
    JOHNNY_HORTON_ALBUM,
    SHOPPING_CART,
    HAIRCUT_SCISSORS,
    BEETHOVEN_BUST,
    CHRISTOPHER_LETTERS,
    GARBAGE_BAG,
    SHOPPING_CART_FULL,
    BACKPACK_BENNETT,
    BACKPACK_SASHA,
    BACKPACK_JEWISH_BOY,
    FRIDGE_DRAWINGS,
    BENNETT_LETTERS,
    CAPTAIN_BED_LAMP,
    RED_ENVELOPE_MONEY,
    BEYONDER_ENVELOPE,
    THROWN_FRUIT,
    POLICE_ALBUM,
    BENNETT_RECORD_PLAYER,
    BENNETT_COUCH_LAMP,
    ASH_CAN,
    TELEVISION_ALBUM,
    KEYBOARD,
    CASH_BOX,
    GUITAR,
    BASS_CASE_OPEN,
    DRUMKIT,
    BASS_CASE_UPRIGHT,
    GUITAR_CASE_UPRIGHT,
    BASEMENT_BEER_CASE,
    BASEMENT_BEER_MARA,
    BASEMENT_BEER_BENNETT,
    CAVEMAN_BONES,
    PUSH_BROOM_BACKSTAGE,
    PUSH_BROOM_TUNNEL,
    STEPLADDER,
    MANNEQUIN,
    CONVEYOR_BELT,
    GLASS_CART,
    TRAY_CART,
    GLASS_RACK,
    DISH_PILE,
    NUDE_DRAWINGS,
    VASELINE,
    LIZ_PHONE,
    LIZ_PHONE_REFLECTION,
    BLOODY_TOWEL,
    GRAVESTONE,
    EVIAN_BOTTLES,
    STAGE_MIC_SIDE,
    KICK_DRUM,
    GUITAR_CASE_OPEN,
    BASS_CASE_SIDE,
    DRUMS_STACKED_BASEMENT,
    DRUMS_STACKED_CLUB,
    BENNETT_SHOE,
    BENNETT_SHOE_REFLECTION,
    NAS_ALBUM,
    TCHOTCHKES,
    TETHERBALL_POLE,
    RECORDING_MIC,
    RECORDING_CONSOLE,
    RECORDING_BEERS,
    CRACKED_PICTURE,
    STAGE_MIC_FAR,
    BURGER_WRAPPER,
    LIZ_PHONE_BASE,
    LIZ_PHONE_BASE_REFLECTION,
    HOSPITAL_RECORD_PLAYER
} from 'scene/fixtureKeys'

const propTypes = {
    [PLAYGROUND_BALL]: PropTypes.bool,
    [SAFEWAY_BAG]: PropTypes.bool,
    [RECORD_PLAYER_STOOL]: PropTypes.bool,
    [JOHNNY_HORTON_ALBUM]: PropTypes.bool,
    [SHOPPING_CART]: PropTypes.bool,
    [HAIRCUT_SCISSORS]: PropTypes.bool,
    [BEETHOVEN_BUST]: PropTypes.bool,
    [CHRISTOPHER_LETTERS]: PropTypes.bool,
    [GARBAGE_BAG]: PropTypes.bool,
    [SHOPPING_CART_FULL]: PropTypes.bool,
    [BACKPACK_BENNETT]: PropTypes.bool,
    [BACKPACK_SASHA]: PropTypes.bool,
    [BACKPACK_JEWISH_BOY]: PropTypes.bool,
    [FRIDGE_DRAWINGS]: PropTypes.bool,
    [CAPTAIN_BED_LAMP]: PropTypes.bool,
    [RED_ENVELOPE_MONEY]: PropTypes.bool,
    [BEYONDER_ENVELOPE]: PropTypes.bool,
    [BENNETT_LETTERS]: PropTypes.bool,
    [THROWN_FRUIT]: PropTypes.bool,
    [POLICE_ALBUM]: PropTypes.bool,
    [BENNETT_RECORD_PLAYER]: PropTypes.string,
    [BENNETT_COUCH_LAMP]: PropTypes.bool,
    [ASH_CAN]: PropTypes.bool,
    [TELEVISION_ALBUM]: PropTypes.bool,
    [KEYBOARD]: PropTypes.bool,
    [CASH_BOX]: PropTypes.bool,
    [GUITAR]: PropTypes.bool,
    [STAGE_MIC_SIDE]: PropTypes.bool,
    [BASS_CASE_OPEN]: PropTypes.bool,
    [DRUMKIT]: PropTypes.bool,
    [BASS_CASE_UPRIGHT]: PropTypes.bool,
    [GUITAR_CASE_UPRIGHT]: PropTypes.bool,
    [BASEMENT_BEER_CASE]: PropTypes.bool,
    [BASEMENT_BEER_MARA]: PropTypes.bool,
    [BASEMENT_BEER_BENNETT]: PropTypes.bool,
    [CAVEMAN_BONES]: PropTypes.bool,
    [PUSH_BROOM_BACKSTAGE]: PropTypes.bool,
    [PUSH_BROOM_TUNNEL]: PropTypes.bool,
    [STEPLADDER]: PropTypes.bool,
    [MANNEQUIN]: PropTypes.bool,
    [CONVEYOR_BELT]: PropTypes.bool,
    [GLASS_CART]: PropTypes.bool,
    [TRAY_CART]: PropTypes.bool,
    [GLASS_RACK]: PropTypes.bool,
    [DISH_PILE]: PropTypes.bool,
    [NUDE_DRAWINGS]: PropTypes.bool,
    [VASELINE]: PropTypes.bool,
    [LIZ_PHONE]: PropTypes.bool,
    [LIZ_PHONE_REFLECTION]: PropTypes.bool,
    [BLOODY_TOWEL]: PropTypes.bool,
    [GRAVESTONE]: PropTypes.bool,
    [EVIAN_BOTTLES]: PropTypes.bool,
    [KICK_DRUM]: PropTypes.bool,
    [GUITAR_CASE_OPEN]: PropTypes.bool,
    [BASS_CASE_SIDE]: PropTypes.bool,
    [DRUMS_STACKED_BASEMENT]: PropTypes.bool,
    [DRUMS_STACKED_CLUB]: PropTypes.bool,
    [BENNETT_SHOE]: PropTypes.bool,
    [BENNETT_SHOE_REFLECTION]: PropTypes.bool,
    [NAS_ALBUM]: PropTypes.bool,
    [TCHOTCHKES]: PropTypes.bool,
    [TETHERBALL_POLE]: PropTypes.bool,
    [RECORDING_MIC]: PropTypes.bool,
    [RECORDING_CONSOLE]: PropTypes.bool,
    [RECORDING_BEERS]: PropTypes.bool,
    [CRACKED_PICTURE]: PropTypes.bool,
    [STAGE_MIC_FAR]: PropTypes.bool,
    [BURGER_WRAPPER]: PropTypes.bool,
    [LIZ_PHONE_BASE]: PropTypes.bool,
    [LIZ_PHONE_BASE_REFLECTION]: PropTypes.bool,
    [HOSPITAL_RECORD_PLAYER]: PropTypes.bool
}

export { propTypes }

export default {
    [PLAYGROUND_BALL]: PlaygroundBall,
    [SAFEWAY_BAG]: SafewayBag,
    [RECORD_PLAYER_STOOL]: RecordPlayerStool,
    [JOHNNY_HORTON_ALBUM]: JohnnyHortonAlbum,
    [SHOPPING_CART]: ShoppingCart,
    [HAIRCUT_SCISSORS]: HaircutScissors,
    [BEETHOVEN_BUST]: BeethovenBust,
    [CHRISTOPHER_LETTERS]: ChristopherLetters,
    [GARBAGE_BAG]: GarbageBag,
    [SHOPPING_CART_FULL]: ShoppingCartFull,
    [BACKPACK_BENNETT]: BackpackBennett,
    [BACKPACK_SASHA]: BackpackSasha,
    [BACKPACK_JEWISH_BOY]: BackpackJewishBoy,
    [FRIDGE_DRAWINGS]: FridgeDrawings,
    [CAPTAIN_BED_LAMP]: CaptainBedLamp,
    [RED_ENVELOPE_MONEY]: RedEnvelopeMoney,
    [BEYONDER_ENVELOPE]: BeyonderEnvelope,
    [BENNETT_LETTERS]: BennettLetters,
    [THROWN_FRUIT]: ThrownFruit,
    [POLICE_ALBUM]: PoliceAlbum,
    [BENNETT_RECORD_PLAYER]: BennettRecordPlayer,
    [BENNETT_COUCH_LAMP]: BennettCouchLamp,
    [ASH_CAN]: AshCan,
    [TELEVISION_ALBUM]: TelevisionAlbum,
    [KEYBOARD]: Keyboard,
    [CASH_BOX]: CashBox,
    [GUITAR]: Guitar,
    [STAGE_MIC_SIDE]: StageMicSide,
    [BASS_CASE_OPEN]: BassCaseOpen,
    [DRUMKIT]: DrumKit,
    [BASS_CASE_UPRIGHT]: BassCaseUpright,
    [GUITAR_CASE_UPRIGHT]: GuitarCaseUpright,
    [BASEMENT_BEER_CASE]: BasementBeerCase,
    [BASEMENT_BEER_MARA]: BasementBeerMara,
    [BASEMENT_BEER_BENNETT]: BasementBeerBennett,
    [CAVEMAN_BONES]: CavemanBones,
    [PUSH_BROOM_BACKSTAGE]: PushBroom,
    [PUSH_BROOM_TUNNEL]: PushBroom,
    [STEPLADDER]: Stepladder,
    [MANNEQUIN]: Mannequin,
    [CONVEYOR_BELT]: ConveyorBelt,
    [GLASS_CART]: GlassCart,
    [TRAY_CART]: TrayCart,
    [GLASS_RACK]: GlassRack,
    [DISH_PILE]: DishPile,
    [NUDE_DRAWINGS]: NudeDrawings,
    [VASELINE]: Vaseline,
    [LIZ_PHONE]: LizPhone,
    [LIZ_PHONE_REFLECTION]: LizPhoneReflection,
    [BLOODY_TOWEL]: BloodyTowel,
    [GRAVESTONE]: Gravestone,
    [EVIAN_BOTTLES]: EvianBottles,
    [KICK_DRUM]: KickDrum,
    [GUITAR_CASE_OPEN]: GuitarCaseOpen,
    [BASS_CASE_SIDE]: BassCaseSide,
    [DRUMS_STACKED_BASEMENT]: DrumsStacked,
    [DRUMS_STACKED_CLUB]: DrumsStacked,
    [BENNETT_SHOE]: BennettShoe,
    [BENNETT_SHOE_REFLECTION]: BennettShoeReflection,
    [NAS_ALBUM]: NasAlbum,
    [TCHOTCHKES]: Tchotchkes,
    [TETHERBALL_POLE]: TetherballPole,
    [RECORDING_MIC]: RecordingMic,
    [RECORDING_CONSOLE]: RecordingConsole,
    [RECORDING_BEERS]: RecordingBeers,
    [CRACKED_PICTURE]: CrackedPicture,
    [STAGE_MIC_FAR]: StageMicFar,
    [BURGER_WRAPPER]: BurgerWrapper,
    [LIZ_PHONE_BASE]: LizPhoneBase,
    [LIZ_PHONE_BASE_REFLECTION]: LizPhoneBaseReflection,
    [HOSPITAL_RECORD_PLAYER]: HospitalRecordPlayer
}
