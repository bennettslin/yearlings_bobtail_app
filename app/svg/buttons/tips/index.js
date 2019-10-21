import tipsShown from 'assets/svgs/app/tipsShown'
import tipsHidden from 'assets/svgs/app/tipsHidden'
import tipsDisabled from 'assets/svgs/app/tipsDisabled'

import {
    SHOWN,
    HIDDEN,
    DISABLED
} from 'constants/options'

const TIPS_MAP = {
    [SHOWN]: tipsShown,
    [HIDDEN]: tipsHidden,
    [DISABLED]: tipsDisabled
}

const getIcon = ({ buttonIdentifier: tipsOptionKey }) => {
    return TIPS_MAP[tipsOptionKey]
}

export default getIcon

