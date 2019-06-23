import PropTypes from 'prop-types'

import CatholicGuy from './Instances/CatholicGuy'
import Watching from './Instances/Watching'
import Mingling from './Instances/Mingling'
import Protester from './Instances/Protester'
import Epilogue from './Instances/Epilogue'

import {
    CATHOLIC_GUY,
    WATCHING
} from 'constants/scene/actors/instances/wade'

import {
    MINGLING,
    PROTESTER,
    EPILOGUE
} from 'constants/scene/actors/instances/songs'

export const propTypes = {
    [CATHOLIC_GUY]: PropTypes.bool,
    [WATCHING]: PropTypes.bool,
    [MINGLING]: PropTypes.bool,
    [PROTESTER]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export default {
    [CATHOLIC_GUY]: CatholicGuy,
    [WATCHING]: Watching,
    [MINGLING]: Mingling,
    [PROTESTER]: Protester,
    [EPILOGUE]: Epilogue
}
