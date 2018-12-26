import PropTypes from 'prop-types'

import Gesturing from './Instances/Gesturing'
import Snacking from './Instances/Snacking'
import Epilogue from './Instances/Epilogue'

import {
    GESTURING,
    SNACKING
} from 'scene/instanceKeys/brad'

import { EPILOGUE } from 'scene/instanceKeys/songs'

const propTypes = {
    [GESTURING]: PropTypes.bool,
    [SNACKING]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export { propTypes }

export default {
    [GESTURING]: Gesturing,
    [SNACKING]: Snacking,
    [EPILOGUE]: Epilogue
}
