// Section to show the stage illustrations.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Scene from '../Scene/Scene'
import Proscenium from './Proscenium/Proscenium';

const mapStateToProps = ({
    canTheatreRender,
    stageCoordinates
}) => ({
    canTheatreRender,
    stageCoordinates
})

class Stage extends Component {

    static propTypes = {
        // Through Redux.
        canTheatreRender: PropTypes.bool.isRequired,
        stageCoordinates: PropTypes.shape({
            top: PropTypes.number.isRequired,
            left: PropTypes.number.isRequired,
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired
        })
    }


    shouldComponentUpdate(nextProps) {
        return nextProps.canTheatreRender
    }

    componentDidUpdate(prevProps) {
        if (this.props.canTheatreRender && !prevProps.canTheatreRender) {
            console.warn('Stage rendered.')
        }
    }

    render() {

        const {
            stageCoordinates,
            ...other
        } = this.props,

            { top,
              left,
              width,
              height } = stageCoordinates

        return (
            <div className={cx(
                'Stage',

                /**
                 * Not the most elegant solution. Moving stage from Main to
                 * Live means it is no longer positioned to accommodate the
                 * menu. This positions it as if it were still a child of Main.
                 */
                'position__mainColumn'
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
                    <Scene {...other}
                        stageWidth={width}
                        stageHeight={height}
                    />
                    <Proscenium />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Stage)
