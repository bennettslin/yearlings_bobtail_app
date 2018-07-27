import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ProloguePanelIcon from './Fields/00_Prologue'
import DidiPanelIcon from './Fields/01_Didi'
import WillyPanelIcon from './Fields/02_WillyTheCocoa'
import SaskiaPanelIcon from './Fields/03_DearSaskia'
import OdinPanelIcon from './Fields/04_Odin'
import PchelkaPanelIcon from './Fields/05_PchelkasStarryJourney'
import AshWednesdayPanelIcon from './Fields/06_AshWednesday'
import MPanelIcon from './Fields/07_M'
import GoodNightPanelIcon from './Fields/08_GoodNightSita'
import GrasshoppersPanelIcon from './Fields/09_GrasshoppersLieHeavy'
import ConstellationsPanelIcon from './Fields/10_Constellations'
import LookBackPanelIcon from './Fields/11_LookBackInAnger'
import GarryowenPanelIcon from './Fields/12_Garryowen'
import GoldenCordPanelIcon from './Fields/13_OnAGoldenCord'
import KyonPanelIcon from './Fields/14_Kyon'
import UncannyValleyPanelIcon from './Fields/15_UncannyValleyBoy'
import CrematedPanelIcon from './Fields/16_Cremated'
import VeganPanelIcon from './Fields/17_VeganProclamation'
import DreamPanelIcon from './Fields/18_My100000thDream'
import EpiloguePanelIcon from './Fields/19_Epilogue'

const PANEL_ICONS_MAP = [
        ProloguePanelIcon,
        DidiPanelIcon,
        WillyPanelIcon,
        SaskiaPanelIcon,
        OdinPanelIcon,
        PchelkaPanelIcon,
        AshWednesdayPanelIcon,
        MPanelIcon,
        GoodNightPanelIcon,
        GrasshoppersPanelIcon,
        ConstellationsPanelIcon,
        LookBackPanelIcon,
        GarryowenPanelIcon,
        GoldenCordPanelIcon,
        KyonPanelIcon,
        UncannyValleyPanelIcon,
        CrematedPanelIcon,
        VeganPanelIcon,
        DreamPanelIcon,
        EpiloguePanelIcon
    ],
    DEFAULT_COMPONENT = () => (null)

const propTypes = {
    // From parent.
    songIndex: PropTypes.number.isRequired
}

const NavPanelIcon = ({

    songIndex

}) => {

    const IconComponent = PANEL_ICONS_MAP[songIndex] || DEFAULT_COMPONENT

    return (
        <IconComponent
            className={cx(
                'NavPanelIcon'
            )}
        />
    )
}

NavPanelIcon.propTypes = propTypes

export default NavPanelIcon
