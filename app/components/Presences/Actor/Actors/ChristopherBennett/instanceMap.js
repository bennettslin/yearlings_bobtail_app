import PropTypes from 'prop-types'

import BlissfulGuilty from './Instances/BlissfulGuilty'

import {
    BLISSFUL_GUILTY
} from 'constants/scene/actors/instances/christopherBennett'

export const propTypes = {
    [BLISSFUL_GUILTY]: PropTypes.bool
}

export default {
    [BLISSFUL_GUILTY]: BlissfulGuilty
}
