import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PrologueThumbIcon from './Icons/00_Prologue'
import DidiThumbIcon from './Icons/01_Didi'
import WillyThumbIcon from './Icons/02_WillyTheCocoa'
import SaskiaThumbIcon from './Icons/03_DearSaskia'
import OdinThumbIcon from './Icons/04_Odin'
import PchelkaThumbIcon from './Icons/05_PchelkasStarryJourney'
import AshWednesdayThumbIcon from './Icons/06_AshWednesday'
import MThumbIcon from './Icons/07_M'
import GoodNightThumbIcon from './Icons/08_GoodNightSita'
import GrasshoppersThumbIcon from './Icons/09_GrasshoppersLieHeavy'
import ConstellationsThumbIcon from './Icons/10_Constellations'
import LookBackThumbIcon from './Icons/11_LookBackInAnger'
import GarryowenThumbIcon from './Icons/12_Garryowen'
import GoldenCordThumbIcon from './Icons/13_OnAGoldenCord'
import KyonThumbIcon from './Icons/14_Kyon'
import UncannyValleyThumbIcon from './Icons/15_UncannyValleyBoy'
import CrematedThumbIcon from './Icons/16_Cremated'
import VeganThumbIcon from './Icons/17_VeganProclamation'
import DreamThumbIcon from './Icons/18_My100000thDream'
import EpilogueThumbIcon from './Icons/19_Epilogue'

const PANEL_ICONS_MAP = [
    PrologueThumbIcon,
    DidiThumbIcon,
    WillyThumbIcon,
    SaskiaThumbIcon,
    OdinThumbIcon,
    PchelkaThumbIcon,
    AshWednesdayThumbIcon,
    MThumbIcon,
    GoodNightThumbIcon,
    GrasshoppersThumbIcon,
    ConstellationsThumbIcon,
    LookBackThumbIcon,
    GarryowenThumbIcon,
    GoldenCordThumbIcon,
    KyonThumbIcon,
    UncannyValleyThumbIcon,
    CrematedThumbIcon,
    VeganThumbIcon,
    DreamThumbIcon,
    EpilogueThumbIcon
]

const propTypes = {
    // From parent.
    songIndex: PropTypes.number.isRequired
}

const ThumbIcon = ({

    songIndex

}) => {

    const IconComponent = PANEL_ICONS_MAP[songIndex]

    return (
        <IconComponent
            className={cx(
                'ThumbIcon'
            )}
        />
    )
}

ThumbIcon.propTypes = propTypes

export default ThumbIcon
