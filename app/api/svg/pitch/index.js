// TODO: Eventually have the right svgs, of course.
import popupClose from '../../../../assets/svgs/app/direction/popupClose'
import carouselShown from '../../../../assets/svgs/app/carouselNav/carouselShown'
import navShown from '../../../../assets/svgs/app/carouselNav/navShown'
import neitherShown from '../../../../assets/svgs/app/carouselNav/neitherShown'

import {
    TEMP_PITCH_ICON_0,
    TEMP_PITCH_ICON_1,
    TEMP_PITCH_ICON_2,
    TEMP_PITCH_ICON_3,
    TEMP_PITCH_ICON_4,
    TEMP_PITCH_ICON_5,
    TEMP_PITCH_ICON_6,
    TEMP_PITCH_ICON_7,
    TEMP_PITCH_ICON_8
} from '../../../constants/pitch'

const PITCH_IMAGES = {
    [TEMP_PITCH_ICON_0]: popupClose,
    [TEMP_PITCH_ICON_1]: carouselShown,
    [TEMP_PITCH_ICON_2]: navShown,
    [TEMP_PITCH_ICON_3]: neitherShown,
    [TEMP_PITCH_ICON_4]: popupClose,
    [TEMP_PITCH_ICON_5]: carouselShown,
    [TEMP_PITCH_ICON_6]: navShown,
    [TEMP_PITCH_ICON_7]: neitherShown,
    [TEMP_PITCH_ICON_8]: popupClose
}

const getPitchImageForIndex = pitchIndex => {
    return PITCH_IMAGES[pitchIndex]
}

export default getPitchImageForIndex