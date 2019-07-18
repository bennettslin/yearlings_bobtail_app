import React, { PureComponent } from 'react'
import cx from 'classnames'

import Shared from './Shared'
import AdminNav from './AdminNav'

import { logSvgCount } from './helper'

import './style.scss'

class Progress extends PureComponent {

    componentDidMount() {
        logMount('Progress')
        logSvgCount()
    }

    render() {
        return (
            <div
                className={cx(
                    'Admin'
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
