// Section to show the stage illustrations.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Scene from '../Scene/Scene'
import StageProscenium from './StageProscenium';

const mapStateToProps = ({
    stageCoordinates
}) => ({
    stageCoordinates
})

class Stage extends Component {

    static propTypes = {
        stageCoordinates: PropTypes.shape({
            top: PropTypes.number.isRequired,
            left: PropTypes.number.isRequired,
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired
        })
    }

    render() {

        const { stageCoordinates } = this.props,

            { top,
              left,
              width,
              height } = stageCoordinates

        return (
            <div className={cx(
                'Stage',
                'absoluteFullContainer'
            )}>
                <div
                    className={cx(
                        'Stage__aspectRatioContainer',
                        'absoluteFullContainer'
                    )}
                    style={{
                        top: `${top}px`,
                        left: `${left}px`,
                        width: `${width}px`,
                        height: `${height}px`
                    }}
                >
                    <Scene
                        stageWidth={width}
                        stageHeight={height}
                    />
                    <StageProscenium />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Stage)
