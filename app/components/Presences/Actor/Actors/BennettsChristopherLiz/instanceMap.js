import PropTypes from 'prop-types'

import Epilogue from './Instances/Epilogue'

import {
    EPILOGUE
} from 'scene/instanceKeys/songs'

const propTypes = {
    [EPILOGUE]: PropTypes.bool
}

export { propTypes }

export default {
    [EPILOGUE]: Epilogue
}
