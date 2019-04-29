import PropTypes from 'prop-types'

import Curious from './Instances/Curious'
import Snickering from './Instances/Snickering'
import YoungChild from './Instances/YoungChild'
import Epilogue from './Instances/Epilogue'

import {
    CURIOUS,
    SNICKERING
} from 'scene/actors/keys/instances/esther'

import {
    YOUNG_CHILD,
    EPILOGUE
} from 'scene/actors/keys/instances/songs'

export const propTypes = {
    [CURIOUS]: PropTypes.bool,
    [SNICKERING]: PropTypes.bool,
    [YOUNG_CHILD]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export default {
    [CURIOUS]: Curious,
    [SNICKERING]: Snickering,
    [YOUNG_CHILD]: YoungChild,
    [EPILOGUE]: Epilogue
}
