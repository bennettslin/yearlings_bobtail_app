import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PrologueThumbIcon from './Fields/00_Prologue'
import DidiThumbIcon from './Fields/01_Didi'
import WillyThumbIcon from './Fields/02_WillyTheCocoa'
import SaskiaThumbIcon from './Fields/03_DearSaskia'
import OdinThumbIcon from './Fields/04_Odin'
import PchelkaThumbIcon from './Fields/05_PchelkasStarryJourney'
import AshWednesdayThumbIcon from './Fields/06_AshWednesday'
import MThumbIcon from './Fields/07_M'
import GoodNightThumbIcon from './Fields/08_GoodNightSita'
import GrasshoppersThumbIcon from './Fields/09_GrasshoppersLieHeavy'
import ConstellationsThumbIcon from './Fields/10_Constellations'
import LookBackThumbIcon from './Fields/11_LookBackInAnger'
import GarryowenThumbIcon from './Fields/12_Garryowen'
import GoldenCordThumbIcon from './Fields/13_OnAGoldenCord'
import KyonThumbIcon from './Fields/14_Kyon'
import UncannyValleyThumbIcon from './Fields/15_UncannyValleyBoy'
import CrematedThumbIcon from './Fields/16_Cremated'
import VeganThumbIcon from './Fields/17_VeganProclamation'
import DreamThumbIcon from './Fields/18_My100000thDream'
import EpilogueThumbIcon from './Fields/19_Epilogue'

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
    ],
    DEFAULT_COMPONENT = () => (null)

const propTypes = {
    // From parent.
    songIndex: PropTypes.number.isRequired
}

const ThumbIcon = ({

    songIndex

}) => {

    const IconComponent = PANEL_ICONS_MAP[songIndex] || DEFAULT_COMPONENT

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
