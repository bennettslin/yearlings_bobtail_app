/**
 * The three environments are local, delivery, and production.
 */
export const getIsLocalDevelopment = () => (
    process.env.YB_ENV === 'local'
)

export const getIsStagingEnvironment = () => (
    process.env.YB_ENV !== 'production'
)

export const getIsServerSide = () => (
    typeof window === 'undefined'
)

export const getFinalSideKey = () => (
    getIsServerSide() ? 'isServerSide' : 'isClientSide'
)

export const getFinalSongIndex = ({
    lyricSongIndex,
    pageSongIndex
}) => (
    getIsServerSide() ? pageSongIndex : lyricSongIndex
)
