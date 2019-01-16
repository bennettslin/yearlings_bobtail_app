// Section for dots and overview toggle buttons.

import React, { PureComponent } from 'react'
import cx from 'classnames'

import ScoresTips from '../../ScoresTips'
import DotsSlideToggle from '../DotsSlideToggle'
import OverviewToggle from '../OverviewToggle'

class LeftShelf extends PureComponent {

    render() {

        return (
            <div className={cx(
                'LeftShelf'
            )}>
                <OverviewToggle inLeftShelf />
                <DotsSlideToggle />
                <ScoresTips />
            </div>
        )
    }
}

export default LeftShelf
