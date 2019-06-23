import PropTypes from 'prop-types'

import Carrying from './Instances/Carrying'
import Flirting from './Instances/Flirting'
import Epilogue from './Instances/Epilogue'

import {
    FLIRTING,
    CARRYING,
    EPILOGUE
} from 'constants/scene/actors/instances/songs'

export const propTypes = {
    [CARRYING]: PropTypes.bool,
    [FLIRTING]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export default {
    [CARRYING]: Carrying,
    [FLIRTING]: Flirting,
    [EPILOGUE]: Epilogue
}
