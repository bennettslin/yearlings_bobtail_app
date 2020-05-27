/**
 * The three environments are local, delivery, and production.
 */
export const getIsLocalDevelopment = () => (
    process.env.YB_ENV === 'local'
)

export const getIsStagingEnvironment = () => (
    process.env.YB_ENV !== 'production'
)
