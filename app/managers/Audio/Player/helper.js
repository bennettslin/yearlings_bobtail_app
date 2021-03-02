import { getTimeDifference } from '../../../utils/logger/helpers/time'

export const logPlayPromiseSuccess = ({
    songIndex,
    timePromisedToPlay,
}) => {
    const timeDifference = getTimeDifference(timePromisedToPlay)

    logSuccess(
        `Promise to play ${songIndex} succeeded after ${timeDifference}s.`,
        {
            action: 'playPromise',
            label: songIndex,
            value: timeDifference * 1000,
        },
    )
}

export const logPlayPromiseFailure = ({
    songIndex,
    errorMessage,
    timePromisedToPlay,
}) => {
    const timeDifference = getTimeDifference(timePromisedToPlay)

    logError(
        `Promise to play ${songIndex} failed after ${timeDifference}s: ${errorMessage}`,
        {
            action: 'playPromise',
            label: `song: ${songIndex}, ${errorMessage}`,
            value: timeDifference * 1000,
        },
    )
}
