import { getTimeDifference } from '../../../utils/logger/helpers/time'

export const logPlayPromiseSuccess = promiseStartTime => {
    const timeDifference = getTimeDifference(promiseStartTime)

    logSuccess(
        `Player promised to play after ${timeDifference}s.`,
        {
            action: 'player',
            label: 'play',
            value: timeDifference * 1000,
        },
    )
}

export const logPlayPromiseFailure = (promiseStartTime, errorMessage) => {
    const timeDifference = getTimeDifference(promiseStartTime)

    logError(
        `Promise to play failed after ${timeDifference}s: ${errorMessage}`,
        {
            action: 'playerPromise',
            label: errorMessage,
            value: timeDifference * 1000,
        },
    )
}
