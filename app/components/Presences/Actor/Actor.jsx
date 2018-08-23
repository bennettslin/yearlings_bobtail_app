import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import YoungBennett from './Actors/YoungBennett/YoungBennett'
import OldBennett from './Actors/OldBennett/OldBennett'
import Anita from './Actors/Anita/Anita'
import Esther from './Actors/Esther/Esther'

import {
    YOUNG_BENNETT,
    OLD_BENNETT,
    ANITA,
    ESTHER
} from 'scene/actorKeys'

const ACTORS_MAP = {
    [YOUNG_BENNETT]: YoungBennett,
    [OLD_BENNETT]: OldBennett,
    [ANITA]: Anita,
    [ESTHER]: Esther
},
DEFAULT_COMPONENT = () => (null)

const propTypes = {
    // From parent.
    className: PropTypes.any,
    nameKey: PropTypes.string.isRequired,
    instanceKey: PropTypes.string.isRequired,
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

const Actor = ({

    className,
    nameKey,
    instanceKey,

...other }) => {

    const ActorComponent =
        ACTORS_MAP[nameKey] || DEFAULT_COMPONENT

    return (
        <ActorComponent {...other}
            className={cx(
                'Actor',
                className
            )}
            {...{
                instanceKey
            }}
        />
    )
}

Actor.propTypes = propTypes;

export default Actor
