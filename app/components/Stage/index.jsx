import React, { useEffect, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getStageHoc from '../../hocs/StageHoc'
import Scene from '../Scene'
import Sky from '../Scene/Sky'
import Wood from '../Scene/Wood'

const Stage = ({ style }) => {
    useEffect(() => {
        logMount('Stage')
    }, [])

    return (
        <div
            {...{
                className: cx(
                    'Stage',
                    'abF',
                    'ovH',
                ),
                style,
            }}
        >
            <Sky />
            <Wood />
            <Scene />
        </div>
    )
}

Stage.propTypes = {
    // Passed by stage HOC.
    style: PropTypes.object,
}

export default memo(getStageHoc(Stage))
