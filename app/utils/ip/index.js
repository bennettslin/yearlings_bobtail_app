import publicIp from 'public-ip'

function getPublicIp() {
    Promise.any([
        publicIp.v4(),
        publicIp.v6(),
    ])
        .then(ip => {
            console.log(ip)
        })
        .catch(error => {
            logError(
                error,
                {
                    action: 'ip',
                    label: error.message,
                }
            )
        })
}

getPublicIp()

export const IP_ADDRESS = ''
