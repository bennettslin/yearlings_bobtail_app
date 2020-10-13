// Allows development of album data.
export const getIsLocalDevelopment = () => (
    process.env.YB_ENV === 'local'
)

// Allows access to admin pages.
export const getIsStagingEnvironment = () => (
    process.env.YB_ENV !== 'production'
)

/**
 * The four hosts are local, candidate, delivery, and production.
 */
export const getFaviconFileName = () => {
    switch (process.env.YB_HOST) {
        case 'local':
            return 'yearlingsBobtail_local'
        case 'candidate':
            return 'yearlingsBobtail_candidate'
        case 'delivery':
            return 'yearlingsBobtail_delivery'
        default:
            return 'yearlingsBobtail'
    }
}
