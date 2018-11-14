import {
    PUPPET_BENNETT_BEGIN,
    PUPPET_FAMILY_BEGIN,
    PUPPET_BENNETT_MIDDLE,
    PUPPET_FAMILY_MIDDLE,
    PUPPET_BENNETT_END,
    PUPPET_FAMILY_END
} from '../../../puppetKeys'

const ARRANGEMENTS_MAP = {
    [PUPPET_BENNETT_BEGIN]: {
        yIndex: 2,
        arrangement: {
            xFloat: 2,
            xWidth: 0.5,
            zHeight: 1
        }
    },
    [PUPPET_FAMILY_BEGIN]: {
        yIndex: 2,
        arrangement: {
            xFloat: 3,
            xWidth: 0.5,
            zHeight: 1
        }
    },
    [PUPPET_BENNETT_MIDDLE]: {
        yIndex: 2,
        arrangement: {
            xFloat: 2.5,
            xWidth: 0.5,
            zHeight: 1
        }
    },
    [PUPPET_FAMILY_MIDDLE]: {
        yIndex: 2,
        arrangement: {
            xFloat: 4,
            xWidth: 0.5,
            zHeight: 1
        }
    },
    [PUPPET_BENNETT_END]: {
        yIndex: 2,
        arrangement: {
            xFloat: 6.5,
            xWidth: 0.5,
            zHeight: 1
        }
    },
    [PUPPET_FAMILY_END]: {
        yIndex: 2,
        arrangement: {
            xFloat: 10,
            xWidth: 0.5,
            zHeight: 1
        }
    }
}

export default ARRANGEMENTS_MAP
