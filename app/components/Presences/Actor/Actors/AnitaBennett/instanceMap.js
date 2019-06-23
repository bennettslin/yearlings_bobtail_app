import PropTypes from 'prop-types'

import Epilogue from './Instances/Epilogue'

import {
    EPILOGUE
} from 'constants/scene/actors/instances/songs'

export const propTypes = {
    [EPILOGUE]: PropTypes.bool
}

export default {
    [EPILOGUE]: Epilogue
}
