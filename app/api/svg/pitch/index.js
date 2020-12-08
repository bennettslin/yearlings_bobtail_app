// TODO: Eventually have the right svgs, of course.
import popupClose from '../../../../assets/svgs/app/direction/popupClose'
import carouselShown from '../../../../assets/svgs/app/carouselNav/carouselShown'
import navShown from '../../../../assets/svgs/app/carouselNav/navShown'
import neitherShown from '../../../../assets/svgs/app/carouselNav/neitherShown'

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
    TEMP_PITCH_ICON_13,
    TEMP_PITCH_ICON_14,
    TEMP_PITCH_ICON_15
} from '../../../constants/pitch'

const PITCH_IMAGES = {
    [TEMP_PITCH_ICON_1]: carouselShown,
    [TEMP_PITCH_ICON_2]: navShown,
    [TEMP_PITCH_ICON_3]: neitherShown,
    [TEMP_PITCH_ICON_4]: popupClose,
    [TEMP_PITCH_ICON_5]: carouselShown,
    [TEMP_PITCH_ICON_6]: navShown,
    [TEMP_PITCH_ICON_7]: neitherShown,
    [TEMP_PITCH_ICON_8]: popupClose,
    [TEMP_PITCH_ICON_9]: popupClose,
    [TEMP_PITCH_ICON_10]: carouselShown,
    [TEMP_PITCH_ICON_11]: navShown,
    [TEMP_PITCH_ICON_12]: neitherShown,
    [TEMP_PITCH_ICON_13]: popupClose,
    [TEMP_PITCH_ICON_14]: carouselShown,
    [TEMP_PITCH_ICON_15]: navShown
}

const getPitchImageForIndex = pitchIndex => {
    return PITCH_IMAGES[pitchIndex]
}

export default getPitchImageForIndex
