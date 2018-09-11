import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PlaygroundBall from './Fixtures/NohoSchool/PlaygroundBall'
import RecordPlayerStool from './Fixtures/FamilyBathroom/RecordPlayerStool'
import ShoppingCart from './Fixtures/Freeway/ShoppingCart'
import ChristopherLetters from './Fixtures/Bedroom/ChristopherLetters'
import BackpackBennett from './Fixtures/Schoolbus/BackpackBennett'
import BackpackSasha from './Fixtures/Schoolbus/BackpackSasha'
import FridgeDrawings from './Fixtures/TaiwanStairs/FridgeDrawings'
import CaptainBedLamp from './Fixtures/Bedroom/CaptainBedLamp'
import BennettLetters from './Fixtures/Bedroom/BennettLetters'
import ThrownFruit from './Fixtures/VanNuysLockers/ThrownFruit'
import BennettRecordPlayer from './Fixtures/BennettCouch/BennettRecordPlayer'
import BennettCouchLamp from './Fixtures/BennettCouch/BennettCouchLamp'
import MicrophoneStand from './Fixtures/ClubFront/MicrophoneStand'
import AlbumsMilkCrate from './Fixtures/ClubFront/AlbumsMilkCrate'
import BassCaseOpen from './Fixtures/ClubFront/BassCaseOpen'
import DrumKit from './Fixtures/ClubFront/DrumKit'
import BassCase from './Fixtures/Basement/BassCase'
import GuitarCase from './Fixtures/Basement/GuitarCase'
import CavemanBones from './Fixtures/Museum/CavemanBones'
import PushBroom from './Fixtures/Backstage/PushBroom'
import Stepladder from './Fixtures/Backstage/Stepladder'
import Mannequin from './Fixtures/Backstage/Mannequin'
import ConveyorBelt from './Fixtures/Dishroom/ConveyorBelt'
import GlassCart from './Fixtures/Dishroom/GlassCart'
import TrayCart from './Fixtures/Dishroom/TrayCart'
import GlassRack from './Fixtures/Dishroom/GlassRack'
import TrayRack from './Fixtures/Dishroom/TrayRack'
import DishPile from './Fixtures/Dishroom/DishPile'
import NudeDrawings from './Fixtures/BennettBed/NudeDrawings'
import Vaseline from './Fixtures/BennettBed/Vaseline'
import CeilingMirror from './Fixtures/LizBed/CeilingMirror'
import LizNightstand from './Fixtures/LizBed/LizNightstand'
import LizNightstandReflection from './Fixtures/LizBed/LizNightstandReflection'
import LizPhone from './Fixtures/LizBed/LizPhone'
import LizPhoneBase from './Fixtures/LizBed/LizPhoneBase'
import LizPhoneReflection from './Fixtures/LizBed/LizPhoneReflection'
import LizPhoneBaseReflection from './Fixtures/LizBed/LizPhoneBaseReflection'
import Gravestone from './Fixtures/Cemetery/Gravestone'
import EvianBottles from './Fixtures/StationWagon/EvianBottles'
import GuitarStand from './Fixtures/ClubSide/GuitarStand'
import GuitarAmp from './Fixtures/ClubSide/GuitarAmp'
import DrumsStacked from './Fixtures/ClubSide/DrumsStacked'
import BassAmp from './Fixtures/ClubSide/BassAmp'

import {
    PLAYGROUND_BALL,
    RECORD_PLAYER_STOOL,
    SHOPPING_CART,
    CHRISTOPHER_LETTERS,
    BACKPACK_BENNETT,
    BACKPACK_SASHA,
    FRIDGE_DRAWINGS,
    CAPTAIN_BED_LAMP,
    BENNETT_LETTERS,
    THROWN_FRUIT,
    BENNETT_RECORD_PLAYER,
    BENNETT_COUCH_LAMP,
    MICROPHONE_STAND,
    ALBUMS_MILK_CRATE,
    BASS_CASE_OPEN,
    DRUMKIT,
    BASS_CASE,
    GUITAR_CASE,
    CAVEMAN_BONES,
    PUSH_BROOM,
    STEPLADDER,
    MANNEQUIN,
    CONVEYOR_BELT,
    GLASS_CART,
    TRAY_CART,
    GLASS_RACK,
    TRAY_RACK,
    DISH_PILE,
    NUDE_DRAWINGS,
    VASELINE,
    CEILING_MIRROR,
    LIZ_NIGHTSTAND,
    LIZ_NIGHTSTAND_REFLECTION,
    LIZ_PHONE,
    LIZ_PHONE_BASE,
    LIZ_PHONE_REFLECTION,
    LIZ_PHONE_BASE_REFLECTION,
    GRAVESTONE,
    EVIAN_BOTTLES,
    GUITAR_STAND,
    GUITAR_AMP,
    DRUMS_STACKED,
    BASS_AMP
} from 'scene/fixtureKeys'

const FIXTURES_MAP = {
    [PLAYGROUND_BALL]: PlaygroundBall,
    [RECORD_PLAYER_STOOL]: RecordPlayerStool,
    [SHOPPING_CART]: ShoppingCart,
    [CHRISTOPHER_LETTERS]: ChristopherLetters,
    [BACKPACK_BENNETT]: BackpackBennett,
    [BACKPACK_SASHA]: BackpackSasha,
    [FRIDGE_DRAWINGS]: FridgeDrawings,
    [CAPTAIN_BED_LAMP]: CaptainBedLamp,
    [BENNETT_LETTERS]: BennettLetters,
    [THROWN_FRUIT]: ThrownFruit,
    [BENNETT_RECORD_PLAYER]: BennettRecordPlayer,
    [BENNETT_COUCH_LAMP]: BennettCouchLamp,
    [MICROPHONE_STAND]: MicrophoneStand,
    [ALBUMS_MILK_CRATE]: AlbumsMilkCrate,
    [BASS_CASE_OPEN]: BassCaseOpen,
    [DRUMKIT]: DrumKit,
    [BASS_CASE]: BassCase,
    [GUITAR_CASE]: GuitarCase,
    [CAVEMAN_BONES]: CavemanBones,
    [PUSH_BROOM]: PushBroom,
    [STEPLADDER]: Stepladder,
    [MANNEQUIN]: Mannequin,
    [CONVEYOR_BELT]: ConveyorBelt,
    [GLASS_CART]: GlassCart,
    [TRAY_CART]: TrayCart,
    [GLASS_RACK]: GlassRack,
    [TRAY_RACK]: TrayRack,
    [DISH_PILE]: DishPile,
    [NUDE_DRAWINGS]: NudeDrawings,
    [VASELINE]: Vaseline,
    [CEILING_MIRROR]: CeilingMirror,
    [LIZ_NIGHTSTAND]: LizNightstand,
    [LIZ_NIGHTSTAND_REFLECTION]: LizNightstandReflection,
    [LIZ_PHONE]: LizPhone,
    [LIZ_PHONE_BASE]: LizPhoneBase,
    [LIZ_PHONE_REFLECTION]: LizPhoneReflection,
    [LIZ_PHONE_BASE_REFLECTION]: LizPhoneBaseReflection,
    [GRAVESTONE]: Gravestone,
    [EVIAN_BOTTLES]: EvianBottles,
    [GUITAR_STAND]: GuitarStand,
    [GUITAR_AMP]: GuitarAmp,
    [DRUMS_STACKED]: DrumsStacked,
    [BASS_AMP]: BassAmp
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

const Fixture = ({

    className,
    nameKey,

...other }) => {

    const FixtureComponent =
        FIXTURES_MAP[nameKey] || DEFAULT_COMPONENT

    return (
        <FixtureComponent {...other}
            className={cx(
                'Fixture',
                className
            )}
        />
    )
}

Fixture.propTypes = propTypes;

export default Fixture
