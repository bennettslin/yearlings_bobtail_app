import PropTypes from 'prop-types'

import DoubleAlbert from './Instances/DoubleAlbert'
import Arrived from './Instances/Arrived'
import Judgmental from './Instances/Judgmental'
import Concerned from './Instances/Concerned'
import Joking from '../KhariLiz/Instances/JokingLaughing'
import Protective from '../KhariLiz/Instances/ProtectiveConcerned'
import Caressing from '../KhariLiz/Instances/Caress'
import Epilogue from './Instances/Epilogue'

import {
    DOUBLE_ALBERT,
    ARRIVED,
    JUDGMENTAL,
    CONCERNED,
    JOKING_LAUGHING,
    PROTECTIVE_CONCERNED,
    CARESS
} from 'scene/instanceKeys/khari'

import { EPILOGUE } from 'scene/instanceKeys/songs'

export const propTypes = {
    [DOUBLE_ALBERT]: PropTypes.bool,
    [ARRIVED]: PropTypes.bool,
    [JUDGMENTAL]: PropTypes.bool,
    [CONCERNED]: PropTypes.bool,
    [JOKING_LAUGHING]: PropTypes.bool,
    [PROTECTIVE_CONCERNED]: PropTypes.bool,
    [CARESS]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export default {
    [DOUBLE_ALBERT]: DoubleAlbert,
    [ARRIVED]: Arrived,
    [JUDGMENTAL]: Judgmental,
    [CONCERNED]: Concerned,
    [JOKING_LAUGHING]: Joking,
    [PROTECTIVE_CONCERNED]: Protective,
    [CARESS]: Caressing,
    [EPILOGUE]: Epilogue
}
