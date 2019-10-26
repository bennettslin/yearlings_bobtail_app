import React, { PureComponent } from 'react'
import cx from 'classnames'

import Shared from './Shared'
import AdminNav from './AdminNav'

import { logSvgCount } from '../../utils/svg'
import { removeLoadingIndicator } from 'utils/window'

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
                    <Shared {...this.props} />
                </div>
            </div>
        )
    }
}

export default Progress
