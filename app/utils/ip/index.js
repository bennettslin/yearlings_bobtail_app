import PublicIp from 'public-ip'
import crypto from 'crypto'

export const getHashedIp = () => (
    // This is just for analytics to measure unique user sessions.
    Promise.any([
        PublicIp.v4(),
        PublicIp.v6(),
    ])
        .then(ip => (
            // Immediately hash to protect user privacy.
            crypto.createHash('md5').update(ip).digest('hex')
        ))
        .catch(error => {
            logError(
                error,
                {
                    action: 'ip',
                    label: error.message,
                },
            )
            return 0
        })
)
