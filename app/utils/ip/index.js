import PublicIp from 'public-ip'

export const getPublicIp = () => (
    Promise.any([
        PublicIp.v4(),
        PublicIp.v6(),
    ])
        .then(ip => ip)
        .catch(error => {
            logError(
                error,
                {
                    action: 'ip',
                    label: error.message,
                }
            )
            return null
        })
)
