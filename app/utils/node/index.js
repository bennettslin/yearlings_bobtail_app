export const getIsRuntimeBuild = () => (
    process.env.BUILD === 'runtime'
)

export const getIsProductionBuild = () => (
    process.env.BUILD === 'production'
)

export const getFaviconFileName = () => {
    switch (process.env.FAVICON) {
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
