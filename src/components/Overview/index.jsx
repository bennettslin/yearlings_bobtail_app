// Section to show song overview.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import PageSongIndexContext from '../../contexts/PageSongIndex'
import OverviewToggle from '../Main/OverviewToggle'
import OverviewText from './Text'
import OverviewShareButtons from './ShareButtons'
import { mapIsToggleInOverview } from '../../redux/overview/selector'
import './style'

const Overview = ({ pageSongIndex }) => {
    const isToggleInOverview = useSelector(mapIsToggleInOverview)

    return (
        <PageSongIndexContext.Provider {...{ value: pageSongIndex }}>
            <div
                {...{
                    className: cx(
                        'Overview',
                        'fontSize__verse',
                        isToggleInOverview && 'Overview__toggleInOverview',
                    ),
                }}
            >
                {isToggleInOverview &&
                    <OverviewToggle
                        {...{
                            className: 'Overview__toggleFloatContainer',
                        }}
                    />
                }
                <OverviewText />
                <OverviewShareButtons />
            </div>
        </PageSongIndexContext.Provider>
    )
}

Overview.propTypes = {
    pageSongIndex: PropTypes.number,
}

export default memo(Overview)