import overviewShown from '../../../../../../assets/svgs/app/overview/overviewShown'
import overviewHidden from '../../../../../../assets/svgs/app/overview/overviewHidden'
import overviewDisabled from '../../../../../../assets/svgs/app/overview/overviewDisabled'

import {
    SHOWN,
    HIDDEN,
    DISABLED
} from '../../../../../constants/options'

const OVERVIEW_MAP = {
    [SHOWN]: overviewShown,
    [HIDDEN]: overviewHidden,
    [DISABLED]: overviewDisabled
}

export default ({ buttonIdentifier }) => {
    return OVERVIEW_MAP[buttonIdentifier]
}
