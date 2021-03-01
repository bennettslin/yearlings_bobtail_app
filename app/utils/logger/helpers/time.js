const START_TIME = Date.now()

export const getTimeDifference = (startTime = START_TIME) => {
    const difference = Date.now() - startTime
    return (difference * 0.001).toFixed(3)
}
