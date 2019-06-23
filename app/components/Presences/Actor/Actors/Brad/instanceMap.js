import PropTypes from 'prop-types'

import Gesturing from './Instances/Gesturing'
import Snacking from './Instances/Snacking'
import Epilogue from './Instances/Epilogue'

import {
    GESTURING,
    SNACKING
} from 'constants/scene/actors/instances/brad'

import { EPILOGUE } from 'constants/scene/actors/instances/songs'

export const propTypes = {
    [GESTURING]: PropTypes.bool,
    [SNACKING]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export default {
    [GESTURING]: Gesturing,
    [SNACKING]: Snacking,
    [EPILOGUE]: Epilogue
}
