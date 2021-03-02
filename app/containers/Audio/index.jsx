import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import AudioManager from '../../managers/Audio'

const AudioContainer = forwardRef(({ children }, ref) => (
    <>
        <AudioManager {...{ ref }} />
        {children}
    </>
))

AudioContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AudioContainer
