// Section for score and tips toggle buttons.

import React, { PureComponent } from 'react'
import cx from 'classnames'

import ScoreToggle from '../../Score/Toggle'
import TipsToggle from '../../Tips/Toggle'

class ShelfRight extends PureComponent {

    render() {
        return (
            <div className={cx(
                'ShelfRight',
                'flex__mainSideButtons'
            )}>
                <TipsToggle />
                <ScoreToggle />
            </div>
        )
    }
}

export default ShelfRight
