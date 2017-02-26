import React from 'react'

/*************
 * CONTAINER *
 *************/

const AudioBanner = (props) => (
    <AudioBannerView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const AudioBannerView = ({

    // From props.
    selectedSongTitle,
    selectedTimePlayed,
    totalTime,
    stanzaTimes,

    audioTimerChild

}) => {
    const playedWidth = selectedTimePlayed / totalTime * 100,
        playedStyle = {
            width: `${playedWidth}%`
        }

    return (
        <div className="audio-block audio-banner-block">
            {stanzaTimes &&
                <div className="audio-banner audio-slider-block">
                    {stanzaTimes.map((stanzaTime, index) => {
                        const stanzaWidth = (totalTime - stanzaTime.time) / totalTime * 100,
                            stanzaStyle = {
                                width: `${stanzaWidth}%`
                            }

                        return (
                            <div
                                key={index}
                                className={`stanza-time-bar stanza-type-${stanzaTime.type}`}
                                style={stanzaStyle}
                            >
                            </div>
                        )
                    })}
                    <div
                        className="audio-time-bar"
                        style={playedStyle}
                    >

                    </div>
                </div>
            }
            <div className="audio-banner audio-display-block">
                <div className="audio-banner-title">
                    {selectedSongTitle}
                </div>
                {audioTimerChild}
            </div>
        </div>
    )
}

export default AudioBanner
