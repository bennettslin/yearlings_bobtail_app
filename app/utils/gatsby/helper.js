const VALID_ROUTES = [
    // Admin.
    'Actors',
    'Annotations',
    'Previewer',
    'Things',
    'Skies',
    'Progress'

    // Production.
    // 'Pitch'
]

export const getIsNonAppRoute = pathname => (
    IS_STAGING ?
        VALID_ROUTES.some(
            route => route === pathname.replace(/\//g, '')
        ) : false
)
