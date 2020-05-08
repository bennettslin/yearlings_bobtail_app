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
    PUPPET
} from '../../../app/constants/scene/things'

const POSTER = 'poster'

export default [
    // Custom lists.
    POSTER,

    BACKDROP,
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
    PUPPET
]

export const CUSTOM_THING_INSTANCES = {
    [POSTER]: poster
}
