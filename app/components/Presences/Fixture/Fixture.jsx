import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PlaygroundBall from './Fixtures/NohoSchool/PlaygroundBall'
import RecordPlayerStool from './Fixtures/FamilyBathroom/RecordPlayerStool'

import {
    PLAYGROUND_BALL,
    RECORD_PLAYER_STOOL
} from 'scene/fixtureKeys'


const FIXTURES_MAP = {
    [PLAYGROUND_BALL]: PlaygroundBall,
    [RECORD_PLAYER_STOOL]: RecordPlayerStool
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
