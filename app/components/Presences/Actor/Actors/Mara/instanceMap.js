import PropTypes from 'prop-types'

import Flirting from './Instances/Flirting'
import Carrying from './Instances/Carrying'
import Waiting from './Instances/Waiting'
import Gopi from './Instances/Gopi'
import Epilogue from './Instances/Epilogue'

import {
    FLIRTING,
    CARRYING,
    WAITING,
    GOPI,
    EPILOGUE
} from 'scene/actors/keys/instances/songs'

export const propTypes = {
    [FLIRTING]: PropTypes.bool,
    [CARRYING]: PropTypes.bool,
    [WAITING]: PropTypes.bool,
    [GOPI]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export default {
    [FLIRTING]: Flirting,
    [CARRYING]: Carrying,
    [WAITING]: Waiting,
    [GOPI]: Gopi,
    [EPILOGUE]: Epilogue
}
