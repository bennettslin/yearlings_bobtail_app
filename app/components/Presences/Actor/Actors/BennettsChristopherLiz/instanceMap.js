import PropTypes from 'prop-types'

import Epilogue from './Instances/Epilogue'

import {
    EPILOGUE
} from 'scene/instanceKeys/songs'

export const propTypes = {
    [EPILOGUE]: PropTypes.bool
}

export default {
    [EPILOGUE]: Epilogue
}
