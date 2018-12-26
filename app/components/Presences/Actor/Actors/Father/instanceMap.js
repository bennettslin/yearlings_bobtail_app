import PropTypes from 'prop-types'

import Roaring from './Instances/Roaring'
import Accusatory from './Instances/Accusatory'
import Past from './Instances/Past'
import Present from './Instances/Present'
import Future from './Instances/Future'
import Reeling from './Instances/Reeling'
import Epilogue from './Instances/Epilogue'

import {
    ROARING,
    ACCUSATORY,
    REELING
} from 'scene/instanceKeys/father'

import {
    PAST,
    PRESENT,
    FUTURE,
    EPILOGUE
} from 'scene/instanceKeys/songs'

const propTypes = {
    [ROARING]: PropTypes.bool,
    [ACCUSATORY]: PropTypes.bool,
    [PAST]: PropTypes.bool,
    [PRESENT]: PropTypes.bool,
    [FUTURE]: PropTypes.bool,
    [REELING]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export { propTypes }

export default {
    [ROARING]: Roaring,
    [ACCUSATORY]: Accusatory,
    [PAST]: Past,
    [PRESENT]: Present,
    [FUTURE]: Future,
    [REELING]: Reeling,
    [EPILOGUE]: Epilogue
}
