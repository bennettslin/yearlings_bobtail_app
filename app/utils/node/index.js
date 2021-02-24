export const getIsRuntimeBuild = () => (
    process.env.YB_ENV === 'runtime'
)

export const getIsProductionBuild = () => (
    process.env.YB_ENV === 'production'
)

export const getFaviconFileName = () => {
    switch (process.env.YB_FAVICON) {
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
