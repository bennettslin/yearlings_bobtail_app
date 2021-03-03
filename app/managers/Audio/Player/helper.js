import { getTimeDifference } from '../../../utils/logger/helpers/time'

export const getShouldDispatchIsPlaying = ({
    nextIsPlaying,
    isSongSelected,
}) => (
    // A promise can succeed only from the selected player.
    nextIsPlaying ||
    (
        /**
         * A promise can fail from any player, so only dispatch if it's the
         * selected player.
         */
        !nextIsPlaying && isSongSelected
    )
)

export const logPlayPromiseSuccess = ({
    songIndex,
    promiseStartTime,
}) => {
    const timeDifference = getTimeDifference(promiseStartTime)

    logSuccess(
        `Player ${songIndex} promised to play after ${timeDifference}s.`,
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
    promiseStartTime,
}) => {
    const timeDifference = getTimeDifference(promiseStartTime)

    logError(
        `Promise to play ${songIndex} failed after ${timeDifference}s: ${errorMessage}`,
        {
            action: 'playPromise',
            label: `song: ${songIndex}, ${errorMessage}`,
            value: timeDifference * 1000,
        },
    )
}
