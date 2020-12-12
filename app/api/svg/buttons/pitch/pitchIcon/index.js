// TODO: Eventually have the right svgs, of course.
import popupClose from '../../../../../../assets/svgs/app/direction/popupClose'
import carouselShown from '../../../../../../assets/svgs/app/carouselNav/carouselShown'
import navShown from '../../../../../../assets/svgs/app/carouselNav/navShown'
import neitherShown from '../../../../../../assets/svgs/app/carouselNav/neitherShown'

import {
    TEMP_PITCH_ICON_1,
    TEMP_PITCH_ICON_2,
    TEMP_PITCH_ICON_3,
    TEMP_PITCH_ICON_4,
    TEMP_PITCH_ICON_5,
    TEMP_PITCH_ICON_6,
    TEMP_PITCH_ICON_7,
    TEMP_PITCH_ICON_8,
    TEMP_PITCH_ICON_9,
    TEMP_PITCH_ICON_10,
    TEMP_PITCH_ICON_11,
    TEMP_PITCH_ICON_12,
    TEMP_PITCH_ICON_13
} from '../../../../../constants/pitch'

const PITCH_ICONS = {
    [TEMP_PITCH_ICON_1]: carouselShown,
    [TEMP_PITCH_ICON_2]: navShown,
    [TEMP_PITCH_ICON_3]: neitherShown,
    [TEMP_PITCH_ICON_4]: popupClose,
    [TEMP_PITCH_ICON_5]: carouselShown,
    [TEMP_PITCH_ICON_6]: navShown,
    [TEMP_PITCH_ICON_7]: neitherShown,
    [TEMP_PITCH_ICON_8]: popupClose,
    [TEMP_PITCH_ICON_9]: carouselShown,
    [TEMP_PITCH_ICON_10]: navShown,
    [TEMP_PITCH_ICON_11]: neitherShown,
    [TEMP_PITCH_ICON_12]: popupClose,
    [TEMP_PITCH_ICON_13]: carouselShown
}

export default ({ buttonIdentifier }) => {
    return PITCH_ICONS[buttonIdentifier]
}
