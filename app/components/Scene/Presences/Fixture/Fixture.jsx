import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import FireHydrant from './Fixtures/FireHydrant'

import {
    FIRE_HYDRANT
} from 'constants/fixtureKeys'

const FIXTURES_MAP = {
    [FIRE_HYDRANT]: FireHydrant
},
DEFAULT_COMPONENT = () => (null)

const propTypes = {
    // From parent.
    nameKey: PropTypes.string.isRequired,
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

const Fixture = ({

    nameKey,

...other }) => {

    const FixtureComponent =
        FIXTURES_MAP[nameKey] || DEFAULT_COMPONENT

    return (
        <FixtureComponent {...other}
            className={cx(
                // 'Fixture'
            )}
        />
    )
}

Fixture.propTypes = propTypes;

export default Fixture
