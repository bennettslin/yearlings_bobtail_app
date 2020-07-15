const VALID_ADMIN_ROUTES = [
    'Actors',
    'Annotations',
    'Previewer',
    'Things',
    'Skies',
    'Progress'
]

export const getIsValidAdminRoute = pathname => (
    IS_STAGING ?
        VALID_ADMIN_ROUTES.some(
            route => route === pathname.replace(/\//g, '')
        ) : false
)
