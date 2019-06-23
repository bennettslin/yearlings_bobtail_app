import PropTypes from 'prop-types'

import Principal from './Instances/Principal'
import Punching from './Instances/Punching'
import Epilogue from './Instances/Epilogue'

import {
    PRINCIPAL,
    PUNCHING
} from 'constants/scene/actors/instances/tristan'

import { EPILOGUE } from 'constants/scene/actors/instances/songs'

export const propTypes = {
    [PRINCIPAL]: PropTypes.bool,
    [PUNCHING]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export default {
    [PRINCIPAL]: Principal,
    [PUNCHING]: Punching,
    [EPILOGUE]: Epilogue
}
