import { getTimeDifference } from '../../../utils/logger/helpers/time'

export const logPause = songIndex => {
    logPlayer(
        `Player ${songIndex} paused.`,
        {
            action: 'pause',
            label: songIndex,
        }
    )
}

export const logPromisePlay = songIndex => {
    logPlayer(
        `Promising to play ${songIndex}\u2026`,
        {
            action: 'promisePlay',
            label: songIndex,
        }
    )
}

export const logIgnoreSubsequentPromise = songIndex => {
    logPlayer(
        `Ignoring subsequent promise to play ${songIndex}.`,
        {
            action: 'ignoreSubsequentPromise',
            label: songIndex,
        }
    )
}

export const logPlayPromiseSuccess = ({
    songIndex,
    timeFromPromiseToPlay,
}) => {
    const timeDifference = getTimeDifference(timeFromPromiseToPlay)

    logSuccess(
        `Promise to play ${songIndex} succeeded after ${timeDifference}s.`,
        {
            action: 'playPromise',
            label: songIndex,
            value: timeDifference * 1000,
        }
    )
}

export const logPlayPromiseFailure = ({
    songIndex,
    errorMessage,
    timeFromPromiseToPlay,
}) => {
    const timeDifference = getTimeDifference(timeFromPromiseToPlay)

    logError(
        `Promise to play ${songIndex} failed after ${timeDifference}s: ${errorMessage}`,
        {
            action: 'playPromise',
            label: `song: ${songIndex}, ${errorMessage}`,
            value: timeDifference * 1000,
        }
    )
}

export const logEndByPlayer = songIndex => {
    logPlayer(
        `Player for ${songIndex} ended itself.`,
        {
            action: 'endByPlayer',
            label: songIndex,
        }
    )
}

export const logEndByFinalVerse = songIndex => {
    logPlayer(
        `Player for ${songIndex} reached end of final verse.`,
        {
            action: 'endByFinalVerse',
            label: songIndex,
        }
    )
}

export const getShownErrorMessage = ({ name, message }) => {
    return `${name}: ${message}`
}
