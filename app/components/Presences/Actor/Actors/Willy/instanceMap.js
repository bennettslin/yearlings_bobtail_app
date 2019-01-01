import PropTypes from 'prop-types'

import Collecting from './Instances/Collecting'
import Ducking from './Instances/Ducking'
import Fighting from './Instances/Fighting'
import Greeting from './Instances/Greeting'
import CrossingGuard from './Instances/CrossingGuard'
import Epilogue from './Instances/Epilogue'

import {
    COLLECTING,
    DUCKING,
    FIGHTING,
    CROSSING_GUARD
} from 'scene/instanceKeys/willy'

import {
    GREETING,
    EPILOGUE
} from 'scene/instanceKeys/songs'

export const propTypes = {
    [COLLECTING]: PropTypes.bool,
    [DUCKING]: PropTypes.bool,
    [FIGHTING]: PropTypes.bool,
    [GREETING]: PropTypes.bool,
    [CROSSING_GUARD]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export { propTypes }

export default {
    [COLLECTING]: Collecting,
    [DUCKING]: Ducking,
    [FIGHTING]: Fighting,
    [GREETING]: Greeting,
    [CROSSING_GUARD]: CrossingGuard,
    [EPILOGUE]: Epilogue
}
