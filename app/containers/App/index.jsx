import React, { memo } from 'react'

import ListenContainer from '../Listen'
import FocusContainer from '../Focus'
import StylesheetContainer from '../Stylesheet'

const AppContainer = () => (
    <>
        <ListenContainer />
        <FocusContainer />
        <StylesheetContainer />
    </>
)

export default memo(AppContainer)
