import poster from './poster'

import {
    BACKDROP,
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
    PUPPET,
} from '../../../app/constants/scene/things'

const POSTER = 'poster'

export default [
    BACKDROP,
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
    PUPPET,

    // Custom lists.
    POSTER,
]

export const CUSTOM_THING_INSTANCES = {
    [POSTER]: poster,
}
