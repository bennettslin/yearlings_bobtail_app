import { DEVICE_WIDTH_CONFIGS } from '../../constants/responsive/deviceWidth'
import {
    PROSCENIUM_STORE,
    STAGE_STORE,
    THEATRE_STORE
} from '../../constants/store'
import { PROSCENIUM_DEFAULTS } from './proscenium/default'
import { STAGE_DEFAULTS } from './stage/default'
import { THEATRE_DEFAULTS } from './theatre/default'

export const VIEWPORT_DEFAULTS = {
    deviceWidthIndex: DEVICE_WIDTH_CONFIGS.length - 1,
    isPhoneWidth: false,
    isTabletWidth: false,
    isDesktopWidth: false,
    windowHeight: 0,
    windowWidth: 0,

    [PROSCENIUM_STORE]: PROSCENIUM_DEFAULTS,
    [STAGE_STORE]: STAGE_DEFAULTS,
    [THEATRE_STORE]: THEATRE_DEFAULTS
}
