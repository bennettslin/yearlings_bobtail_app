import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import YoungBennett from './Actors/YoungBennett/YoungBennett'
import PreteenBennett from './Actors/PreteenBennett/PreteenBennett'
// import Bennett from './Actors/Bennett/Bennett'
import OldBennett from './Actors/OldBennett/OldBennett'
import Anita from './Actors/Anita/Anita'
import Esther from './Actors/Esther/Esther'
import Willy from './Actors/Willy/Willy'
import Mother from './Actors/Mother/Mother'
import Father from './Actors/Father/Father'
import Christopher from './Actors/Christopher/Christopher'
// import Sasha from './Actors/Sasha/Sasha'
// import Brad from './Actors/Brad/Brad'
// import Andrew from './Actors/Andrew/Andrew'
// import Catherine from './Actors/Catherine/Catherine'
// import Mara from './Actors/Mara/Mara'
// import Jacob from './Actors/Jacob/Jacob'
// import Ana from './Actors/Ana/Ana'
import Howie from './Actors/Howie/Howie'
import Tomer from './Actors/Tomer/Tomer'
// import Liz from './Actors/Liz/Liz'
// import Khari from './Actors/Khari/Khari'
// import Miriam from './Actors/Miriam/Miriam'
// import Tristan from './Actors/Tristan/Tristan'
// import Nestor from './Actors/Nestor/Nestor'
// import Amy from './Actors/Amy/Amy'
// import Stephanie from './Actors/Stephanie/Stephanie'
// import Wade from './Actors/Wade/Wade'
// import BennettReflection from './Actors/BennettReflection/BennettReflection'
// import LizReflection from './Actors/LizReflection/LizReflection'
// import KhariReflection from './Actors/KhariReflection/KhariReflection'

import {
    YOUNG_BENNETT,
    PRETEEN_BENNETT,
    // BENNETT,
    OLD_BENNETT,
    ANITA,
    ESTHER,
    WILLY,
    MOTHER,
    FATHER,
    CHRISTOPHER,
    // SASHA,
    // BRAD,
    // ANDREW,
    // CATHERINE,
    // MARA,
    // JACOB,
    // ANA,
    HOWIE,
    TOMER,
    // LIZ,
    // KHARI,
    // MIRIAM,
    // TRISTAN,
    // NESTOR,
    // AMY,
    // STEPHANIE,
    // WADE,
    // BENNETT_REFLECTION,
    // LIZ_REFLECTION,
    // KHARI_REFLECTION
} from 'scene/actorKeys'

const ACTORS_MAP = {
    [YOUNG_BENNETT]: YoungBennett,
    [PRETEEN_BENNETT]: PreteenBennett,
    // [BENNETT]: Bennett,
    [OLD_BENNETT]: OldBennett,
    [ANITA]: Anita,
    [ESTHER]: Esther,
    [WILLY]: Willy,
    [MOTHER]: Mother,
    [FATHER]: Father,
    [CHRISTOPHER]: Christopher,
    [HOWIE]: Howie,
    [TOMER]: Tomer,
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
