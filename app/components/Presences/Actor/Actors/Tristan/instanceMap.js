import PropTypes from 'prop-types'

import Principal from './Instances/Principal'
import Punching from './Instances/Punching'
import Epilogue from './Instances/Epilogue'

import {
    PRINCIPAL,
    PUNCHING
} from 'scene/instanceKeys/tristan'

import { EPILOGUE } from 'scene/instanceKeys/songs'

export const propTypes = {
    [PRINCIPAL]: PropTypes.bool,
    [PUNCHING]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export { propTypes }

export default {
    [PRINCIPAL]: Principal,
    [PUNCHING]: Punching,
    [EPILOGUE]: Epilogue
}
