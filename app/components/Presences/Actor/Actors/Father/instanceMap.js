import PropTypes from 'prop-types'

import Roaring from './Instances/Roaring'
import Accusatory from './Instances/Accusatory'
import Past from './Instances/Past'
import Future from './Instances/Future'
import Reeling from './Instances/Reeling'
import Epilogue from './Instances/Epilogue'

import {
    ROARING,
    ACCUSATORY,
    REELING
} from 'constants/scene/actors/instances/father'

import {
    PAST,
    FUTURE,
    EPILOGUE
} from 'constants/scene/actors/instances/songs'

export const propTypes = {
    [ROARING]: PropTypes.bool,
    [ACCUSATORY]: PropTypes.bool,
    [PAST]: PropTypes.bool,
    [FUTURE]: PropTypes.bool,
    [REELING]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export default {
    [ROARING]: Roaring,
    [ACCUSATORY]: Accusatory,
    [PAST]: Past,
    [FUTURE]: Future,
    [REELING]: Reeling,
    [EPILOGUE]: Epilogue
}
