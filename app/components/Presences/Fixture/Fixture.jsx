import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { FIXTURES_NOHO_SCHOOL } from './Fixtures/NohoSchool/nohoSchool'
import { FIXTURES_NOHO_BATHROOM } from './Fixtures/NohoBathroom/nohoBathroom'

const FIXTURES_MAP = {
    ...FIXTURES_NOHO_SCHOOL,
    ...FIXTURES_NOHO_BATHROOM,
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
