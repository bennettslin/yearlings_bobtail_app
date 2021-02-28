import PublicIp from 'public-ip'

export const getPublicIp = () => (
    // This is just for analytics to measure unique users.
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
            return 0
        })
)
