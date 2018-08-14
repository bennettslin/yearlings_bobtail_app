import FireHydrant from './FireHydrant'
import PlaygroundBall from './PlaygroundBall'
import PlaygroundSlide from './PlaygroundSlide'

import {
    FIRE_HYDRANT,
    PLAYGROUND_BALL,
    PLAYGROUND_SLIDE
} from 'constants/fixtureKeys'

const FIXTURES_NOHO = {
    [FIRE_HYDRANT]: FireHydrant,
    [PLAYGROUND_BALL]: PlaygroundBall,
    [PLAYGROUND_SLIDE]: PlaygroundSlide
}

export {
    FIXTURES_NOHO
}
