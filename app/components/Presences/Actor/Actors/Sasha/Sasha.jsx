import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Indignant from './Instances/Indignant'
import Mermaid from './Instances/Mermaid'
import PopularGirl from './Instances/PopularGirl'
import Comforting from './Instances/Comforting'
import Epilogue from './Instances/Epilogue'

import {
    INDIGNANT,
    MERMAID,
    POPULAR_GIRL,
    COMFORTING
} from '../../../../../scene/instanceKeys/sasha'

import { EPILOGUE } from '../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [INDIGNANT]: Indignant,
    [MERMAID]: Mermaid,
    [POPULAR_GIRL]: PopularGirl,
    [COMFORTING]: Comforting,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Sasha = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Sasha',
                className
            )}
        />
    )
}

Sasha.propTypes = propTypes;

export default Sasha
