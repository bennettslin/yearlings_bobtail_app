import tipsShown from '../../../../../../assets/svgs/app/tips/tipsShown'
import tipsHidden from '../../../../../../assets/svgs/app/tips/tipsHidden'
import tipsDisabled from '../../../../../../assets/svgs/app/tips/tipsDisabled'

import {
    SHOWN,
    HIDDEN,
    DISABLED,
} from '../../../../../constants/options'

const TIPS_MAP = {
    [SHOWN]: tipsShown,
    [HIDDEN]: tipsHidden,
    [DISABLED]: tipsDisabled,
}

export default ({ buttonIdentifier }) => {
    return TIPS_MAP[buttonIdentifier]
}
