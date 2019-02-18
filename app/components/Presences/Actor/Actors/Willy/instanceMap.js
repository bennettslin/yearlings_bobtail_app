import PropTypes from 'prop-types'

import Collecting from './Instances/Collecting'
import Ducking from './Instances/Ducking'
import Greeting from './Instances/Greeting'
import CrossingGuard from './Instances/CrossingGuard'
import Epilogue from './Instances/Epilogue'

import {
    COLLECTING,
    DUCKING,
    CROSSING_GUARD
} from 'scene/instanceKeys/willy'

import {
    GREETING,
    EPILOGUE
} from 'scene/instanceKeys/songs'

export const propTypes = {
    [COLLECTING]: PropTypes.bool,
    [DUCKING]: PropTypes.bool,
    [GREETING]: PropTypes.bool,
    [CROSSING_GUARD]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export default {
    [COLLECTING]: Collecting,
    [DUCKING]: Ducking,
    [GREETING]: Greeting,
    [CROSSING_GUARD]: CrossingGuard,
    [EPILOGUE]: Epilogue
}
