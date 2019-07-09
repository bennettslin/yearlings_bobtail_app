import {
    BACKDROP,
    BUBBLE,
    FLAT,
    PANEL,
    PUPPET
} from 'constants/scene'
import { TAIWAN_MOUNTAINS_BACKDROP } from 'constants/scene/things/backdrops'
import {
    TOGETHER_SKETCH,
    SKETCHBOOK__TOGETHER,
    APART_SKETCH,
    SKETCHBOOK__APART
} from 'constants/scene/things/bubbles'
import {
    TAIWAN_MOUNTAINS_BRIDGED,
    TAIWAN_MOUNTAIN_LEFT,
    TAIWAN_MOUNTAIN_RIGHT
} from 'constants/scene/things/flats'
import {
    TAIWAN_CLOUDS,
    TAIWAN_FOG
} from 'constants/scene/things/panels'
import {
    PUPPET_BENNETT_BEGIN,
    PUPPET_FAMILY_BEGIN,
    PUPPET_BENNETT_MIDDLE,
    PUPPET_FAMILY_MIDDLE,
    PUPPET_BENNETT_END,
    PUPPET_FAMILY_END
} from 'constants/scene/things/puppets'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [TAIWAN_MOUNTAINS_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 8
            }
        }
    },
    [FLAT]: {
        [TAIWAN_MOUNTAINS_BRIDGED]: {
            yIndex: 3,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 6
            }
        },
        [TAIWAN_MOUNTAIN_LEFT]: {
            yIndex: 4,
            xPosition: -0.5,
            scaleFactor: 0.3,
            alignLeft: true
        },
        [TAIWAN_MOUNTAIN_RIGHT]: {
            yIndex: 4,
            xPosition: 11.5,
            scaleFactor: 0.3,
            alignRight: true
        }
    },
    [PANEL]: {
        [TAIWAN_CLOUDS]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 3,
                zOffset: 5
            }
        },
        [TAIWAN_FOG]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    }
}

export const THINGS_PUPPET_SHOW_BEGIN = {
    [PUPPET]: {
        [PUPPET_BENNETT_BEGIN]: {
            yIndex: 2,
            arrangement: {
                xPosition: 2,
                xWidth: 0.5,
                zHeight: 1
            }
        },
        [PUPPET_FAMILY_BEGIN]: {
            yIndex: 2,
            arrangement: {
                xPosition: 3,
                xWidth: 0.5,
                zHeight: 1
            }
        }
    }
}

export const THINGS_PUPPET_SHOW_MIDDLE = {
    [BUBBLE]: {
        [TOGETHER_SKETCH]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4.5
            }
        },
        [SKETCHBOOK__TOGETHER]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4.5
            }
        }
    },
    [PUPPET]: {
        [PUPPET_BENNETT_MIDDLE]: {
            yIndex: 2,
            arrangement: {
                xPosition: 2.5,
                xWidth: 0.5,
                zHeight: 1
            }
        },
        [PUPPET_FAMILY_MIDDLE]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 0.5,
                zHeight: 1
            }
        }
    }
}

export const THINGS_PUPPET_SHOW_END = {
    [BUBBLE]: {
        [APART_SKETCH]: {
            yIndex: 5,
            arrangement: {
                xPosition: 2.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4.5
            }
        },
        [SKETCHBOOK__APART]: {
            yIndex: 5,
            arrangement: {
                xPosition: 2.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4.5
            }
        }
    },
    [PUPPET]: {
        [PUPPET_BENNETT_END]: {
            yIndex: 2,
            arrangement: {
                xPosition: 6.5,
                xWidth: 0.5,
                zHeight: 1
            }
        },
        [PUPPET_FAMILY_END]: {
            yIndex: 2,
            arrangement: {
                xPosition: 10,
                xWidth: 0.5,
                zHeight: 1
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
