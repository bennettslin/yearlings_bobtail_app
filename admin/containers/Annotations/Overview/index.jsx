/* eslint-disable react/prop-types */
import React from 'react'
import cx from 'classnames'
import Texts from '../../../../src/components/Texts'
import { getOverviewForSong } from '../../../../src/endpoint/album/songs'

const Overview = ({ songIndex }) => {
    const overview = getOverviewForSong(songIndex)

    return (
        <div
            {...{
                className: cx(
                    'PopupView',
                    'OverviewPopupView',
                ),
            }}
        >
            <div
                {...{
                    className: cx(
                        'PopupViewContent',
                        'OverviewPopupViewContent',
                        'PopupViewContent__narrowPadding',
                    ),
                }}
            >
                <div
                    {...{
                        className: cx(
                            'Overview',
                            'fontSize__verse',
                        ),
                    }}
                >
                    <Texts
                        {...{
                            text: overview,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Overview
