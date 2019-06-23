import PropTypes from 'prop-types'

import GingerbreadPrison from './Instances/GingerbreadPrison'
import CheekUnveiled from './Instances/CheekUnveiled'
import HardOn from './Instances/HardOn'
import Missionary from './Instances/Missionary'
import Afterglow from './Instances/Afterglow'
import BrushOff from './Instances/BrushOff'
import CelibateFreezing from './Instances/CelibateFreezing'
import AwkwardConsolation from './Instances/AwkwardConsolation'
import Pampas from './Instances/Pampas'
import GettingDark from './Instances/GettingDark'
import Cliff from './Instances/Cliff'
import FinalDream from './Instances/FinalDream'

import {
    GINGERBREAD_PRISON,
    CHEEK_UNVEILED,
    HARD_ON,
    MISSIONARY,
    AFTERGLOW,
    BRUSH_OFF,
    CELIBATE_FREEZING,
    AWKWARD_CONSOLATION,
    PAMPAS,
    GETTING_DARK,
    CLIFF,
    FINAL_DREAM
} from 'constants/scene/actors/instances/bennettLiz'

export const propTypes = {
    [GINGERBREAD_PRISON]: PropTypes.bool,
    [CHEEK_UNVEILED]: PropTypes.bool,
    [HARD_ON]: PropTypes.bool,
    [MISSIONARY]: PropTypes.bool,
    [AFTERGLOW]: PropTypes.bool,
    [BRUSH_OFF]: PropTypes.bool,
    [CELIBATE_FREEZING]: PropTypes.bool,
    [AWKWARD_CONSOLATION]: PropTypes.bool,
    [PAMPAS]: PropTypes.bool,
    [GETTING_DARK]: PropTypes.bool,
    [CLIFF]: PropTypes.bool,
    [FINAL_DREAM]: PropTypes.bool
}

export default {
    [GINGERBREAD_PRISON]: GingerbreadPrison,
    [CHEEK_UNVEILED]: CheekUnveiled,
    [HARD_ON]: HardOn,
    [MISSIONARY]: Missionary,
    [AFTERGLOW]: Afterglow,
    [BRUSH_OFF]: BrushOff,
    [CELIBATE_FREEZING]: CelibateFreezing,
    [AWKWARD_CONSOLATION]: AwkwardConsolation,
    [PAMPAS]: Pampas,
    [GETTING_DARK]: GettingDark,
    [CLIFF]: Cliff,
    [FINAL_DREAM]: FinalDream
}
