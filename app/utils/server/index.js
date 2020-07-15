export const getIsServerSide = () => (
    typeof window === 'undefined'
)

export const getFinalSideKey = () => (
    getIsServerSide() ? 'isServerSide' : 'isClientSide'
)
