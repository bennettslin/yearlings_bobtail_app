export const getAllTimedVerses = (unit) => {
    const {
        lyricUnit,
        unitMap: { subCard }
    } = unit

    return [
        ...lyricUnit || [],
        ...subCard || []
    ]
}
