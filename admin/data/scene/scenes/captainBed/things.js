import {
    BUBBLE,
    FIXTURE,
    PANEL,
} from '../../../../../src/constants/scene/things'
import { SKETCHBOOK__DOGS_ROCKET, SKETCH_DOGS_ROCKET } from '../../../../../src/constants/scene/things/bubbles'
import {
    BEDROOM_LAMP__BED,
    BENNETT_LETTERS,
    LETTER_SCRAPS__BENNETT,
    TORN_MAGAZINES__BENNETT,
} from '../../../../../src/constants/scene/things/fixtures'
import { CAPTAIN_BED_INTERIOR } from '../../../../../src/constants/scene/things/panels'
import { SKETCH_CONFIG } from '../../sharedConfigs'

export default {
    [BUBBLE]: {
        [SKETCHBOOK__DOGS_ROCKET]: {
            yIndex: 5,
            xPosition: 2.25,
            zOffset: 1.25,
        },
        [SKETCH_DOGS_ROCKET]: {
            ...SKETCH_CONFIG,
            xPosition: 2.1,
            zOffset: 1.9,
        },
    },
    [FIXTURE]: {
        [BEDROOM_LAMP__BED]: {
            yIndex: 4,
            xPosition: 8.85,
            zOffset: -0.15,
            layerYIndex: 5,
        },
        [LETTER_SCRAPS__BENNETT]: {
            yIndex: 4,
            xPosition: 5.5,
            zOffset: -0.17,
            layerYIndex: 5,
        },
        [TORN_MAGAZINES__BENNETT]: {
            yIndex: 4,
            xPosition: 5.3,
            zOffset: -0.05,
            layerYIndex: 5,
        },
        [BENNETT_LETTERS]: {
            yIndex: 5,
            xPosition: 7,
            zOffset: -0.025,
        },
    },
    [PANEL]: {
        [CAPTAIN_BED_INTERIOR]: {
            yIndex: 1,
            xPosition: 7.5,
        },
    },
}
