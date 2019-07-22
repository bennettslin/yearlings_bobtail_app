import React, { PureComponent } from 'react'
import cx from 'classnames'
import keys from 'lodash/keys'

import PreviewerSvg from './PreviewerSvg'

import { getViewBoxSize } from 'modules/ConfiguredPresenceSvg/helper/size'
import {
    getFromStorage,
    setInStorage,
    getBoolFromStorage,
    setBoolInStorage
} from 'utils/window'

import {
    BACKDROP,
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
    PUPPET,
    PRESENCE_TYPES
} from 'constants/scene'
import ALL_BACKDROPS from 'components/Presences/LayersThing/Backdrop'
import ALL_BUBBLES from 'components/Presences/LayersThing/Bubble'
import ALL_CARDBOARDS from 'components/Presences/LayersThing/Cardboard'
import ALL_CUTOUTS from 'components/Presences/LayersThing/Cutout'
import ALL_FIXTURES from 'components/Presences/LayersThing/Fixture'
import ALL_FLATS from 'components/Presences/LayersThing/Flat'
import ALL_FURNITURE from 'components/Presences/LayersThing/Furniture'
import ALL_PANELS from 'components/Presences/LayersThing/Panel'
import ALL_PUPPETS from 'components/Presences/LayersThing/Puppet'

const PRESENCE_MAP = {
    [BACKDROP]: ALL_BACKDROPS,
    [BUBBLE]: ALL_BUBBLES,
    [CARDBOARD]: ALL_CARDBOARDS,
    [CUTOUT]: ALL_CUTOUTS,
    [FIXTURE]: ALL_FIXTURES,
    [FLAT]: ALL_FLATS,
    [FURNITURE]: ALL_FURNITURE,
    [PANEL]: ALL_PANELS,
    [PUPPET]: ALL_PUPPETS
}

import './style.scss'

class Previewer extends PureComponent {
    constructor(props) {
        super(props)

        const queryStringPresence = this.setPresenceFromQueryStrings()

        this.state = {
            ...queryStringPresence,
            heightAspectRatio: getBoolFromStorage('heightAspectRatio'),
            transitionalPresenceType: '',
            presenceType: getFromStorage('presenceType'),
            presenceKey: getFromStorage('presenceKey'),
            kilobytes: 0
        }
    }

    componentDidMount() {
        logMount('Previewer')
    }

    setPresenceFromQueryStrings() {
        const urlParams = new URLSearchParams(window.location.search),
            unsafePresenceType = urlParams.get('type'),
            unsafePresenceKey = urlParams.get('key'),

            // Make sure it's a valid presence type.
            presenceType =
                Boolean(PRESENCE_MAP[unsafePresenceType]) &&
                unsafePresenceType

        if (presenceType) {
            // Make sure it's a valid presence key.
            const presenceKey =
                Boolean(PRESENCE_MAP[presenceType][unsafePresenceKey]) &&
                unsafePresenceKey

            if (presenceKey) {
                this.setPresenceInStorage({ presenceType, presenceKey })
                return {
                    presenceType,
                    presenceKey
                }
            }
        }

        return null
    }

    selectPresenceType = ({ target: { value: transitionalPresenceType } }) => {
        this.setState({ transitionalPresenceType })
    }

    selectPresenceKey = ({ target: { value: presenceKey } }) => {
        const {
                transitionalPresenceType,
                presenceType: prevPresenceType
            } = this.state,
            presenceType = transitionalPresenceType || prevPresenceType
        this.setState({
            transitionalPresenceType: '',
            presenceType,
            presenceKey
        })
        this.setPresenceInStorage({ presenceType, presenceKey })
    }

    setPresenceInStorage({ presenceType, presenceKey }) {
        if (presenceType) {
            setInStorage('presenceType', presenceType)
        }
        if (presenceKey) {
            setInStorage('presenceKey', presenceKey)
        }
    }

    toggleAspectRatio = () => {
        const { heightAspectRatio: prevHeightAspectRatio } = this.state,
            heightAspectRatio = !prevHeightAspectRatio

        this.setState({ heightAspectRatio })
        setBoolInStorage('heightAspectRatio', heightAspectRatio)
    }

    handleProcessSvg = (svgString) => {
        const {
                viewBoxWidth,
                viewBoxHeight
            } = getViewBoxSize(svgString),
            windowWidth = window.innerWidth,
            windowHeight = window.innerHeight,

            // Set height aspect ratio.
            heightAspectRatio =
                viewBoxWidth / viewBoxHeight <
                windowWidth / windowHeight,

            // Show kilobytes.
            kilobytes = (svgString.length / 1024).toFixed(2)

        this.setState({
            heightAspectRatio,
            kilobytes
        })
    }

    render() {
        const
            {
                transitionalPresenceType,
                presenceType,
                presenceKey,
                kilobytes
            } = this.state,
            { heightAspectRatio } = this.state,
            selectedPresenceType = transitionalPresenceType || presenceType,

            allPresenceKeys = PRESENCE_MAP[selectedPresenceType] || {}

        return (
            <div
                {...{
                    className: cx(
                        'Previewer',
                        heightAspectRatio && 'Previewer__heightAspectRatio',
                        'abF'
                    )
                }}
            >
                <div
                    {...{
                        className: cx(
                            'Previewer__dashboard'
                        )
                    }}
                >
                    <button
                        {...{
                            onClick: this.toggleAspectRatio
                        }}
                    >
                        Toggle aspect ratio
                    </button>
                    <select
                        {...{
                            value: selectedPresenceType,
                            onChange: this.selectPresenceType
                        }}
                    >
                        <option {...{ value: '' }}>Pick a presence type</option>
                        {PRESENCE_TYPES.map(selectedPresenceType => (
                            <option
                                {...{
                                    key: selectedPresenceType,
                                    value: selectedPresenceType
                                }}
                            >
                                {selectedPresenceType}
                            </option>
                        ))}
                    </select>
                    <select
                        {...{
                            value: presenceKey,
                            onChange: this.selectPresenceKey
                        }}
                    >
                        <option {...{ value: '' }}>Pick a presence key</option>
                        {keys(allPresenceKeys)
                            .filter(presenceKey => (
                                Boolean(allPresenceKeys[presenceKey])
                            ))
                            .map(presenceKey => (
                                <option
                                    {...{
                                        key: presenceKey,
                                        value: presenceKey
                                    }}
                                >
                                    {presenceKey}
                                </option>
                            ))}
                    </select>
                    <div
                        {...{
                            className: 'Previewer__kilobytes'
                        }}
                    >
                        {kilobytes} kiB
                    </div>
                </div>
                {Boolean(selectedPresenceType) && Boolean(presenceKey) && (
                    <div
                        {...{
                            className: cx(
                                'Previewer__scroll'
                            )
                        }}
                    >
                        <PreviewerSvg
                            {...{
                                presenceType,
                                presenceKey,
                                handleProcessSvg: this.handleProcessSvg
                            }}
                        />
                    </div>
                )}
            </div>
        )
    }
}

export default Previewer
