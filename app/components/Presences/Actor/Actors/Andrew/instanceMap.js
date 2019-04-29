import PropTypes from 'prop-types'

import FeigningFear from './Instances/FeigningFear'
import Throwing from './Instances/Throwing'
import Noodling from './Instances/Noodling'
import Epilogue from './Instances/Epilogue'

import {
    FEIGNING_FEAR,
    THROWING,
    NOODLING
} from 'scene/actors/keys/instances/andrew'

import { EPILOGUE } from 'scene/actors/keys/instances/songs'

export const propTypes = {
    [FEIGNING_FEAR]: PropTypes.bool,
    [THROWING]: PropTypes.bool,
    [NOODLING]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export default {
    [FEIGNING_FEAR]: FeigningFear,
    [THROWING]: Throwing,
    [NOODLING]: Noodling,
    [EPILOGUE]: Epilogue
}
