import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

import YoungBennett from './Actors/YoungBennett/YoungBennett'
import Anita from './Actors/Anita/Anita'
import Esther from './Actors/Esther/Esther'

import {
    YOUNG_BENNETT,
    ANITA,
    ESTHER
} from '../../../../constants/actorKeys'

const ACTORS_MAP = {
    [YOUNG_BENNETT]: YoungBennett,
    [ANITA]: Anita,
    [ESTHER]: Esther
},
DEFAULT_COMPONENT = () => (null)

const propTypes = {
    // From parent.
    presenceKey: PropTypes.string.isRequired,
    instanceKey: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}

const Actor = ({

    presenceKey,
    instanceKey,

...other }) => {

    const ActorComponent =
        ACTORS_MAP[presenceKey] || DEFAULT_COMPONENT

    return (
        <ActorComponent
            {...other}
            {...{
                instanceKey
            }}
        />
    )
}

Actor.propTypes = propTypes;

export default Actor
