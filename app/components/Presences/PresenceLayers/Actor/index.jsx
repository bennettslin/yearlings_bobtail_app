import React, { Component, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import keys from 'lodash.keys'
import { connect } from 'react-redux'

import YoungBennett from './Actors/YoungBennett/YoungBennett'
import PreteenBennett from './Actors/PreteenBennett/PreteenBennett'
import Bennett from './Actors/Bennett/Bennett'
import BennettLiz from './Actors/BennettLiz/BennettLiz'
import BennettLizReflection from './Actors/BennettLizReflection/BennettLizReflection'
import BennettsChristopherLiz from './Actors/BennettsChristopherLiz/BennettsChristopherLiz'
import BennettStephanie from './Actors/BennettStephanie/BennettStephanie'
import OldBennett from './Actors/OldBennett/OldBennett'
import Anita from './Actors/Anita/Anita'
import AnitaBennett from './Actors/AnitaBennett/AnitaBennett'
import Esther from './Actors/Esther/Esther'
import EstherMother from './Actors/EstherMother/EstherMother'
import Willy from './Actors/Willy/Willy'
import Mother from './Actors/Mother/Mother'
import Father from './Actors/Father/Father'
import Christopher from './Actors/Christopher/Christopher'
import ChristopherBennett from './Actors/ChristopherBennett/ChristopherBennett'
import Sasha from './Actors/Sasha/Sasha'
import SashaBennett from './Actors/SashaBennett/SashaBennett'
import Brad from './Actors/Brad/Brad'
import BradBennett from './Actors/BradBennett/BradBennett'
import BradSasha from './Actors/BradSasha/BradSasha'
import Andrew from './Actors/Andrew/Andrew'
import Catherine from './Actors/Catherine/Catherine'
import Mara from './Actors/Mara/Mara'
import Jacob from './Actors/Jacob/Jacob'
import JacobMara from './Actors/JacobMara/JacobMara'
import Ana from './Actors/Ana/Ana'
import AnaHowie from './Actors/AnaHowie/AnaHowie'
import Howie from './Actors/Howie/Howie'
import Tomer from './Actors/Tomer/Tomer'
import Liz from './Actors/Liz/Liz'
import Khari from './Actors/Khari/Khari'
import KhariLiz from './Actors/KhariLiz/KhariLiz'
import Miriam from './Actors/Miriam/Miriam'
import MiriamBennett from './Actors/MiriamBennett/MiriamBennett'
import MiriamStephanie from './Actors/MiriamStephanie/MiriamStephanie'
import MiriamTristan from './Actors/MiriamTristan/MiriamTristan'
import Tristan from './Actors/Tristan/Tristan'
import Nestor from './Actors/Nestor/Nestor'
import Amy from './Actors/Amy/Amy'
import AmyStephanie from './Actors/AmyStephanie/AmyStephanie'
import AmyNestorTomer from './Actors/AmyNestorTomer/AmyNestorTomer'
import Stephanie from './Actors/Stephanie/Stephanie'
import Wade from './Actors/Wade/Wade'
import BennettReflection from './Actors/BennettReflection/BennettReflection'
import LizReflection from './Actors/LizReflection/LizReflection'
import KhariLizReflection from './Actors/KhariLizReflection/KhariLizReflection'

import { getPropsAreShallowEqual } from 'helpers/general'
import { getPresenceXYWidthAndHeight } from '../../Presence/helper'

import ARRANGEMENTS_ACTORS from 'scene/actors'

import {
    YOUNG_BENNETT,
    PRETEEN_BENNETT,
    BENNETT,
    BENNETT_LIZ,
    BENNETT_LIZ_REFLECTION,
    BENNETTS_CHRISTOPHER_LIZ,
    BENNETT_STEPHANIE,
    OLD_BENNETT,
    ANITA,
    ANITA_BENNETT,
    ESTHER,
    ESTHER_MOTHER,
    WILLY,
    MOTHER,
    FATHER,
    CHRISTOPHER,
    CHRISTOPHER_BENNETT,
    SASHA,
    SASHA_BENNETT,
    BRAD,
    BRAD_BENNETT,
    BRAD_SASHA,
    ANDREW,
    CATHERINE,
    MARA,
    JACOB,
    JACOB_MARA,
    ANA,
    ANA_HOWIE,
    HOWIE,
    TOMER,
    LIZ,
    KHARI,
    KHARI_LIZ,
    MIRIAM,
    MIRIAM_BENNETT,
    MIRIAM_STEPHANIE,
    MIRIAM_TRISTAN,
    TRISTAN,
    NESTOR,
    AMY,
    AMY_STEPHANIE,
    AMY_NESTOR_TOMER,
    STEPHANIE,
    WADE,
    BENNETT_REFLECTION,
    LIZ_REFLECTION,
    KHARI_LIZ_REFLECTION
} from '../../../../scene/actorKeys'

const ACTORS_MAP = {
    [YOUNG_BENNETT]: YoungBennett,
    [PRETEEN_BENNETT]: PreteenBennett,
    [BENNETT]: Bennett,
    [BENNETT_LIZ]: BennettLiz,
    [BENNETT_LIZ_REFLECTION]: BennettLizReflection,
    [BENNETTS_CHRISTOPHER_LIZ]: BennettsChristopherLiz,
    [BENNETT_STEPHANIE]: BennettStephanie,
    [OLD_BENNETT]: OldBennett,
    [ANITA]: Anita,
    [ANITA_BENNETT]: AnitaBennett,
    [ESTHER]: Esther,
    [ESTHER_MOTHER]: EstherMother,
    [WILLY]: Willy,
    [MOTHER]: Mother,
    [FATHER]: Father,
    [CHRISTOPHER]: Christopher,
    [CHRISTOPHER_BENNETT]: ChristopherBennett,
    [SASHA]: Sasha,
    [SASHA_BENNETT]: SashaBennett,
    [BRAD]: Brad,
    [BRAD_BENNETT]: BradBennett,
    [BRAD_SASHA]: BradSasha,
    [ANDREW]: Andrew,
    [CATHERINE]: Catherine,
    [MARA]: Mara,
    [JACOB]: Jacob,
    [JACOB_MARA]: JacobMara,
    [ANA]: Ana,
    [ANA_HOWIE]: AnaHowie,
    [HOWIE]: Howie,
    [TOMER]: Tomer,
    [LIZ]: Liz,
    [KHARI]: Khari,
    [KHARI_LIZ]: KhariLiz,
    [MIRIAM]: Miriam,
    [MIRIAM_BENNETT]: MiriamBennett,
    [MIRIAM_STEPHANIE]: MiriamStephanie,
    [MIRIAM_TRISTAN]: MiriamTristan,
    [TRISTAN]: Tristan,
    [NESTOR]: Nestor,
    [AMY]: Amy,
    [AMY_STEPHANIE]: AmyStephanie,
    [AMY_NESTOR_TOMER]: AmyNestorTomer,
    [STEPHANIE]: Stephanie,
    [WADE]: Wade,
    [BENNETT_REFLECTION]: BennettReflection,
    [LIZ_REFLECTION]: LizReflection,
    [KHARI_LIZ_REFLECTION]: KhariLizReflection
}

const mapStateToProps = ({
    renderStore: { canSceneRender },
    sceneStore: { sceneCubesKey }
}) => ({
    canSceneRender,
    sceneCubesKey
})

class ActorLayer extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        sceneCubesKey: PropTypes.string.isRequired,

        // From parent.
        [YOUNG_BENNETT]: PropTypes.string,
        [PRETEEN_BENNETT]: PropTypes.string,
        [BENNETT]: PropTypes.string,
        [BENNETT_LIZ]: PropTypes.string,
        [BENNETT_LIZ_REFLECTION]: PropTypes.string,
        [BENNETTS_CHRISTOPHER_LIZ]: PropTypes.string,
        [BENNETT_STEPHANIE]: PropTypes.string,
        [OLD_BENNETT]: PropTypes.string,
        [ANITA]: PropTypes.string,
        [ANITA_BENNETT]: PropTypes.string,
        [ESTHER]: PropTypes.string,
        [ESTHER_MOTHER]: PropTypes.string,
        [WILLY]: PropTypes.string,
        [MOTHER]: PropTypes.string,
        [FATHER]: PropTypes.string,
        [CHRISTOPHER]: PropTypes.string,
        [CHRISTOPHER_BENNETT]: PropTypes.string,
        [SASHA]: PropTypes.string,
        [SASHA_BENNETT]: PropTypes.string,
        [BRAD]: PropTypes.string,
        [BRAD_BENNETT]: PropTypes.string,
        [BRAD_SASHA]: PropTypes.string,
        [ANDREW]: PropTypes.string,
        [CATHERINE]: PropTypes.string,
        [MARA]: PropTypes.string,
        [JACOB]: PropTypes.string,
        [JACOB_MARA]: PropTypes.string,
        [ANA]: PropTypes.string,
        [ANA_HOWIE]: PropTypes.string,
        [HOWIE]: PropTypes.string,
        [TOMER]: PropTypes.string,
        [LIZ]: PropTypes.string,
        [KHARI]: PropTypes.string,
        [KHARI_LIZ]: PropTypes.string,
        [MIRIAM]: PropTypes.string,
        [MIRIAM_BENNETT]: PropTypes.string,
        [MIRIAM_STEPHANIE]: PropTypes.string,
        [MIRIAM_TRISTAN]: PropTypes.string,
        [TRISTAN]: PropTypes.string,
        [NESTOR]: PropTypes.string,
        [AMY]: PropTypes.string,
        [AMY_STEPHANIE]: PropTypes.string,
        [AMY_NESTOR_TOMER]: PropTypes.string,
        [STEPHANIE]: PropTypes.string,
        [WADE]: PropTypes.string,
        [BENNETT_REFLECTION]: PropTypes.string,
        [LIZ_REFLECTION]: PropTypes.string,
        [KHARI_LIZ_REFLECTION]: PropTypes.string
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSceneRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {
        const { sceneCubesKey: cubesKey } = this.props

        return (
            <___>
                {keys(ACTORS_MAP).map(actorKey => {
                    const { [actorKey]: instanceKey } = this.props

                    if (instanceKey) {
                        const ActorComponent = ACTORS_MAP[actorKey],
                            {
                                yIndex,
                                arrangement: {
                                    xFloat,
                                    zOffset,
                                    xWidth,
                                    zHeight
                                }
                            } = ARRANGEMENTS_ACTORS[actorKey][instanceKey],

                            xYWidthAndHeight = getPresenceXYWidthAndHeight({
                                cubesKey,
                                yIndex,
                                xFloat,
                                zOffset,
                                xWidth,
                                zHeight
                            })

                        return (
                            <ActorComponent
                                key={actorKey}
                                {...{
                                    className: cx(
                                        'Actor',
                                        'absoluteFullContainer'
                                    ),
                                    instanceKey,
                                    ...xYWidthAndHeight
                                }}
                            />
                        )

                    } else {
                        return null
                    }
                })}
            </___>
        )
    }
}

export default connect(mapStateToProps)(ActorLayer)
