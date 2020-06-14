import { createSelector } from 'reselect'

export const getMapIsVerseTrackerShown = ({
    verseIndex
}) => () => true

export const getMapVerseCursorLength = verseIndex => () => 50
