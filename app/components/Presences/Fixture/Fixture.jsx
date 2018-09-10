import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PlaygroundBall from './Fixtures/NohoSchool/PlaygroundBall'
import RecordPlayerStool from './Fixtures/FamilyBathroom/RecordPlayerStool'
import ShoppingCart from './Fixtures/Freeway/ShoppingCart'
import MagazineLetters from './Fixtures/Bedroom/MagazineLetters'
import CaptainBedLamp from './Fixtures/Bedroom/CaptainBedLamp'

import {
    PLAYGROUND_BALL,
    RECORD_PLAYER_STOOL,
    SHOPPING_CART,
    MAGAZINE_LETTERS,
    CAPTAIN_BED_LAMP
} from 'scene/fixtureKeys'


const FIXTURES_MAP = {
    [PLAYGROUND_BALL]: PlaygroundBall,
    [RECORD_PLAYER_STOOL]: RecordPlayerStool,
    [SHOPPING_CART]: ShoppingCart,
    [MAGAZINE_LETTERS]: MagazineLetters,
    [CAPTAIN_BED_LAMP]: CaptainBedLamp
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
