import React from 'react'
import PropTypes from 'prop-types'
import AudioManager from '../../managers/Audio'

const AudioContainer = ({ children }) => (
    <>
        <AudioManager />
        {children}
    </>
)

AudioContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AudioContainer
