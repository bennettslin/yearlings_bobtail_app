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
    THROWN_FRUIT
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
    [THROWN_FRUIT]: ThrownFruit
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
