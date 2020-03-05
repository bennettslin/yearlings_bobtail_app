// Section to show song tip.

import React from 'react'
// import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'

import TipsToggle from './Toggle'
import Texts from '../Texts'

import { getSongTip } from './helper'

const mapStateToProps = ({
    lyricStore: { lyricSongIndex }
}) => ({
    lyricSongIndex
})

const Tips = () => {
    const { lyricSongIndex } = useSelector(mapStateToProps)

    return (

        <div className={cx(
            'Tips',
            'fontSize__verse'
        )}>
            <TipsToggle />
            <Texts {...{ text: getSongTip(lyricSongIndex) }} />
        </div>
    )
}

Tips.propTypes = {
    // Through Redux.
    // lyricSongIndex: PropTypes.number.isRequired
}

export default Tips
