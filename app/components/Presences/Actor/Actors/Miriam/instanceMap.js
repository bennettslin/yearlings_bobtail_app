import PropTypes from 'prop-types'

import InfantCurious from './Instances/InfantCurious'
import InfantNursing from './Instances/InfantNursing'
import Perfuming from './Instances/Perfuming'
import Tennis from './Instances/Tennis'
import Reversing from './Instances/Reversing'
import Gopi from './Instances/Gopi'
import Epilogue from '../MiriamTristan/Instances/Greeting'

import {
    INFANT_CURIOUS,
    INFANT_NURSING,
    PERFUMING,
    TENNIS,
    REVERSING
} from 'scene/actors/keys/instances/miriam'

import {
    GOPI,
    EPILOGUE
} from 'scene/actors/keys/instances/songs'

export const propTypes = {
    [INFANT_CURIOUS]: PropTypes.bool,
    [INFANT_NURSING]: PropTypes.bool,
    [PERFUMING]: PropTypes.bool,
    [TENNIS]: PropTypes.bool,
    [REVERSING]: PropTypes.bool,
    [GOPI]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export default {
    [INFANT_CURIOUS]: InfantCurious,
    [INFANT_NURSING]: InfantNursing,
    [PERFUMING]: Perfuming,
    [TENNIS]: Tennis,
    [REVERSING]: Reversing,
    [GOPI]: Gopi,
    [EPILOGUE]: Epilogue
}
