import PropTypes from 'prop-types'

import Weeping from './Instances/Weeping'
import Quipping from './Instances/Quipping'
import Puzzled from './Instances/Puzzled'
import Gopi from './Instances/Gopi'
import Epilogue from './Instances/Epilogue'

import {
    WEEPING,
    QUIPPING,
    PUZZLED
} from 'scene/instanceKeys/catherine'

import {
    GOPI,
    EPILOGUE
} from 'scene/instanceKeys/songs'

const propTypes = {
    [WEEPING]: PropTypes.bool,
    [QUIPPING]: PropTypes.bool,
    [PUZZLED]: PropTypes.bool,
    [GOPI]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export { propTypes }

export default {
    [WEEPING]: Weeping,
    [QUIPPING]: Quipping,
    [PUZZLED]: Puzzled,
    [GOPI]: Gopi,
    [EPILOGUE]: Epilogue
}
