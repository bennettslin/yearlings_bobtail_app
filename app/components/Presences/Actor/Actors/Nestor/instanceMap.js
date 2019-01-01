import PropTypes from 'prop-types'

import Jogger from './Instances/Jogger'
import Injured from './Instances/Injured'
import Greeting from './Instances/Greeting'
import Epilogue from './Instances/Epilogue'

import {
    JOGGER,
    INJURED
} from 'scene/instanceKeys/nestor'

import {
    GREETING,
    EPILOGUE
} from 'scene/instanceKeys/songs'

export const propTypes = {
    [JOGGER]: PropTypes.bool,
    [INJURED]: PropTypes.bool,
    [GREETING]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export { propTypes }

export default {
    [JOGGER]: Jogger,
    [INJURED]: Injured,
    [GREETING]: Greeting,
    [EPILOGUE]: Epilogue
}
