// Component to show buttons for audio navigation.
import React from 'react'
import { useSelector } from 'react-redux'
import NextButton from './NextButton'
import PlayButton from './PlayButton'
import RepeatButton from './RepeatButton'
import PreviousButton from './PreviousButton'
import { mapIsTwoRowMenu } from '../../redux/viewport/selector'
import './style'

const Audio = () => {
    const isTwoRowMenu = useSelector(mapIsTwoRowMenu)

    return (
        <div {...{ className: 'Audio' }}>
            {/* Placeholder to create space. */}
            {isTwoRowMenu && (
                <div {...{ className: 'Audio__flexPlaceholder' }} />
            )}
            <RepeatButton />
            <NextButton />
            <PlayButton />
            <PreviousButton />
            {/* Placeholder to create space. */}
            {isTwoRowMenu && (
                <div {...{ className: 'Audio__flexPlaceholder' }} />
            )}
        </div>
    )
}

export default Audio
