import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Pchelka from './Puppets/Bedroom/Pchelka'
import Mushka from './Puppets/Bedroom/Mushka'
import Rocket from './Puppets/Bedroom/Rocket'

import {
    PCHELKA,
    MUSHKA,
    ROCKET
} from 'scene/puppetKeys'

const PUPPETS_MAP = {
    [PCHELKA]: Pchelka,
    [MUSHKA]: Mushka,
    [ROCKET]: Rocket
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

const Puppet = ({

    className,
    nameKey,

...other }) => {

    const PuppetComponent =
        PUPPETS_MAP[nameKey] || DEFAULT_COMPONENT

    return (
        <PuppetComponent {...other}
            className={cx(
                'Puppet',
                className
            )}
        />
    )
}

Puppet.propTypes = propTypes;

export default Puppet
