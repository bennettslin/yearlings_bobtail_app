import PublicIp from 'public-ip'

export const getPublicIp = () => (
    Promise.any([
        PublicIp.v4(),
        PublicIp.v6(),
    ])
        .then(ip => {
            if (IS_STAGING) {
                logServe(`Public IP address is ${ip}.`)
            }
            return ip
        })
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
