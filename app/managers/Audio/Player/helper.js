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

export const logPlayPromiseSuccess = songIndex => {
    logSuccess(
        `Promise to play ${songIndex} succeeded.`,
        {
            action: 'playPromise',
            label: songIndex,
        }
    )
}

export const logPlayPromiseFailure = (songIndex, errorMessage) => {
    logError(
        `Promise to play ${songIndex} failed: ${errorMessage}`,
        {
            action: 'playPromise',
            label: `song: ${songIndex}, ${errorMessage}`,
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
