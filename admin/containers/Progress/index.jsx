import React, { useEffect } from 'react'
import cx from 'classnames'
import Drawing from './Drawing'
import AdminNav from './AdminNav'
import { logSvgCount } from '../../utils/log'
import './style'

const Progress = () => {
    useEffect(() => {
        logMount('Progress')
        logSvgCount()
    }, [])

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

export default Progress
