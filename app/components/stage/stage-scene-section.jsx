// Section to show the stage illustrations.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getSceneObject } from '../../helpers/data-helper'

const mapStateToProps = ({
    renderReadySongIndex,
    currentSceneIndex
}) => ({
    renderReadySongIndex,
    currentSceneIndex
})

class StageSceneSection extends Component {

    static propTypes = {
        renderReadySongIndex: PropTypes.number.isRequired,
        currentSceneIndex: PropTypes.number.isRequired
    }

    render() {
        const { renderReadySongIndex,
                currentSceneIndex } = this.props,

            sceneObject = getSceneObject(renderReadySongIndex, currentSceneIndex)

        console.error('sceneObject', sceneObject);

        return (
            <div className="section stage-scene-section">

            </div>
        )
    }
}

export default connect(mapStateToProps)(StageSceneSection)
