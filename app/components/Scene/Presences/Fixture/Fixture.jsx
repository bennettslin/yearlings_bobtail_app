import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import FireHydrant from './Fixtures/NorthHollywood/FireHydrant'
import PlaygroundBall from './Fixtures/NorthHollywood/PlaygroundBall'
import PlaygroundSlide from './Fixtures/NorthHollywood/PlaygroundSlide'

import {
    FIRE_HYDRANT,
    PLAYGROUND_BALL,
    PLAYGROUND_SLIDE
} from 'constants/fixtureKeys'

const FIXTURES_MAP = {
    [FIRE_HYDRANT]: FireHydrant,
    [PLAYGROUND_BALL]: PlaygroundBall,
    [PLAYGROUND_SLIDE]: PlaygroundSlide
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
