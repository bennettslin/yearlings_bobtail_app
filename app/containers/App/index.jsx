import React from 'react'
import DeprecatedContainer from '../Deprecated'
import ListenContainer from '../Listen'

import { IS_DEPRECATED_BROWSER } from '../../constants/device'

const AppContainer = () => (
    IS_DEPRECATED_BROWSER ? (
        <DeprecatedContainer />
    ) : (
        <ListenContainer />
    )
)

export default AppContainer
