import React, { PureComponent } from 'react'
import cx from 'classnames'
import keys from 'lodash/keys'
import scrollIntoView from 'scroll-into-view'

import PreviewerSvg from '../Previewer/Svg'
import PreviewerDashboard from '../Previewer/Dashboard'

import { getKeyName } from 'managers/Key/helper'

import { capitaliseForClassName } from 'helpers/format'

import { removeLoadingIndicator } from 'utils/window'

import { accessPresence } from '../../utils/access'

import {
    getPresenceFromStorage,
    getPresenceFromQueryStrings,
    setPresenceInStorage,
    setPresenceInQueryStrings
} from '../../utils/storage'

/* eslint-disable */
import { getPreviewerSvgMapForThing } from '../../utils/svg'

class Things2 extends PureComponent {
    constructor(props) {
        super(props)

        // Set presence from storage in query strings.
        const presenceFromStorage = getPresenceFromStorage()
        setPresenceInQueryStrings(presenceFromStorage)

        // Set presence from query strings in storage. Default is first index.
        setPresenceInStorage(getPresenceFromQueryStrings())

        this.state = {
            ...presenceFromStorage,
            kilobytes: 0
        }
    }

    componentDidMount() {
        logMount('Things2')
        removeLoadingIndicator()
        this.focusPreviewerElement()
    }

    focusPreviewerElement = () => {
        this.previewerElement.focus()
    }

    selectPresence = ({ type, key }) => {
        let presenceType = type,
            presenceKey = key
        if (type) {
            presenceKey = keys(getPreviewerSvgMapForThing(type))[0]
        } else if (key) {
            presenceType = this.state.presenceType
        }

        this.setState({
            presenceType,
            presenceKey
        })
        setPresenceInStorage({ presenceType, presenceKey })
        setPresenceInQueryStrings({ presenceType, presenceKey })

        this.scrollPresenceIntoView({
            presenceType,
            presenceKey
        })
    }

    handleProcessSvg = (svgString) => {
        this.setState({
            kilobytes: svgString.length / 1024
        })
    }

    handleKeyDownPress = (e) => {
        const { presenceType, presenceKey } = this.state

        accessPresence({
            keyName: getKeyName(e),
            presenceType,
            presenceKey,
            selectPresence: this.selectPresence
        })
    }

    scrollPresenceIntoView({
        presenceType,
        presenceKey
    }) {
        const element = document.querySelector(
            `.${capitaliseForClassName(presenceType)} .${presenceKey}`
        )

        scrollIntoView(element, { time: 100 })
    }

    setPreviewerElement = node => this.previewerElement = node

    render() {
        const
            {
                presenceType,
                presenceKey,
                kilobytes
            } = this.state,

            svgMap = getPreviewerSvgMapForThing(presenceType)

        console.error('svgMap', svgMap)

        return (
            <div
                {...{
                    ref: this.setPreviewerElement,
                    className: cx(
                        'Things2',
                        'Previewer__actors',
                        'Previewer__heightAspectRatio',
                        'abF',
                        'PtSansNarrow'
                    ),
                    tabIndex: -1,
                    onKeyDown: this.handleKeyDownPress
                }}
            >
                <PreviewerDashboard
                    {...{
                        presenceType,
                        presenceKey,
                        kilobytes,
                        selectPresence: this.selectPresence
                    }}
                />
                <div {...{ className: 'Previewer__scroll' }}>
                    {/* Render all presences for this thing. */}
                    {keys(svgMap).map(presenceKey => (
                        <PreviewerSvg
                            {...{
                                key: presenceKey,
                                presenceType,
                                presenceKey,
                                handleProcessSvg: this.handleProcessSvg
                            }}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Things2
