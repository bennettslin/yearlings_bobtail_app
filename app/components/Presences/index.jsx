import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import LayersActor from './LayersActor'
import LayersThing from './LayersThing'

const Presences = ({ yIndex }) => {
    return (
        <div
            {...{
                className: cx(
                    'Presences',
                    `y${yIndex}`,
                    'abF',
                ),
            }}
        >
            <LayersThing {...{ yIndex }} />
            <LayersActor {...{ yIndex }} />
        </div>
    )
}

Presences.propTypes = {
    yIndex: PropTypes.number.isRequired,
}

export default memo(Presences)
