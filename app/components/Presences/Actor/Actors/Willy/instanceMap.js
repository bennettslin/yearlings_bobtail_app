import PropTypes from 'prop-types'

import Collecting from './Instances/Collecting'
import Ducking from './Instances/Ducking'
import CrossingGuard from './Instances/CrossingGuard'
import Epilogue from './Instances/Epilogue'

import {
    COLLECTING,
    DUCKING,
    CROSSING_GUARD
} from 'constants/scene/actors/instances/willy'

import {
    EPILOGUE
} from 'constants/scene/actors/instances/songs'

export const propTypes = {
    [COLLECTING]: PropTypes.bool,
    [DUCKING]: PropTypes.bool,
    [CROSSING_GUARD]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export default {
    [COLLECTING]: Collecting,
    [DUCKING]: Ducking,
    [CROSSING_GUARD]: CrossingGuard,
    [EPILOGUE]: Epilogue
}
