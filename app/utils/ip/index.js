import { getWindow } from '../browser'

import publicIp from 'public-ip'

async function blah() {
    console.log(await publicIp.v4(), 'v4')
    //=> '46.5.21.123'

    console.log(await publicIp.v6(), 'v6')
    //=> 'fe80::200:f8ff:fe21:67cf'

    // TODO: Use Promise.any
}

if (getWindow()) {
    blah()
}

export const IP_ADDRESS = ''
