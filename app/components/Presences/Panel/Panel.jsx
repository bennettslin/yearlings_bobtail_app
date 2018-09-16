import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import SnowglobeTetherball from './Panels/SnowglobeTetherball'
import SnowglobeLizAlone from './Panels/SnowglobeLizAlone'
import SnowglobeBennettMiriam from './Panels/SnowglobeBennettMiriam'
import SnowglobeLizKhari from './Panels/SnowglobeLizKhari'
import SnowglobeBennettAlone from './Panels/SnowglobeBennettAlone'

import {
    SNOWGLOBE_TETHERBALL,
    SNOWGLOBE_LIZ_ALONE,
    SNOWGLOBE_BENNETT_MIRIAM,
    SNOWGLOBE_LIZ_KHARI,
    SNOWGLOBE_BENNETT_ALONE
} from 'scene/panelKeys'

const PANELS_MAP = {
    [SNOWGLOBE_TETHERBALL]: SnowglobeTetherball,
    [SNOWGLOBE_LIZ_ALONE]: SnowglobeLizAlone,
    [SNOWGLOBE_BENNETT_MIRIAM]: SnowglobeBennettMiriam,
    [SNOWGLOBE_LIZ_KHARI]: SnowglobeLizKhari,
    [SNOWGLOBE_BENNETT_ALONE]: SnowglobeBennettAlone
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
        PANELS_MAP[nameKey] || DEFAULT_COMPONENT

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
