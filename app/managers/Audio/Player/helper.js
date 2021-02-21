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
    logPlayer(
        `Promise to play ${songIndex} succeeded.`,
        {
            action: 'playPromiseSuccess',
            label: songIndex,
            success: true,
        }
    )
}

export const logPlayPromiseFailure = (songIndex, error) => {
    logPlayer(
        `Promise to play ${songIndex} failed: ${error}`,
        {
            action: 'playPromiseFailure',
            label: songIndex,
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
