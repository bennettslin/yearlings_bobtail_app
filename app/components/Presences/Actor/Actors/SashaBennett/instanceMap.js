import PropTypes from 'prop-types'

import Mermaid from './Instances/Mermaid'
import ComfortingHumiliated from './Instances/ComfortingHumiliated'
import Epilogue from './Instances/Epilogue'

import {
    MERMAID,
    COMFORTING_HUMILIATED
} from 'scene/instanceKeys/sashaBennett'

import { EPILOGUE } from 'scene/instanceKeys/songs'

export const propTypes = {
    [MERMAID]: PropTypes.bool,
    [COMFORTING_HUMILIATED]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export default {
    [MERMAID]: Mermaid,
    [COMFORTING_HUMILIATED]: ComfortingHumiliated,
    [EPILOGUE]: Epilogue
}
