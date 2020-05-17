import React, { PureComponent } from 'react'
import cx from 'classnames'

import Drawing from './Drawing'
import AdminNav from './AdminNav'

import { logSvgCount } from '../../utils/log'
import { removeLoadingIndicator } from '../../../app/utils/window'

import './style.scss'

class Progress extends PureComponent {

    componentDidMount() {
        logMount('Progress')
        logSvgCount()
        removeLoadingIndicator()
    }

    render() {
        return (
            <div
                className={cx(
                    'Admin',
                    'PtSansNarrow'
                )}
            >
                <div className="Admin__column">
                    <div className="Admin__field album">
                        <AdminNav />
                    </div>
                    <Drawing />
                </div>
            </div>
        )
    }
}

export default Progress
