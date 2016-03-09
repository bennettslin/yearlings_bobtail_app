var SPEECH_BUBBLE_NAMES = ['narrative', 'backstory'];

var DevSpeech = React.createClass({

    getDefaultProps: function() {
        return {
            playedSongSpeechBubbles: {}
        };
    },

    render: function() {
        return (
            <div className="dev-speech">
                <div className="speech-bubbles">
                    {SPEECH_BUBBLE_NAMES.map(function(bubbleName, index) {
                        return (
                            <div
                                key={index}
                                className={'speech-bubble ' + bubbleName}
                            >
                                <h2>{bubbleName}</h2>
                                {TextFormatter.getMappedTextElement(this.props.playedSongSpeechBubbles[SPEECH_BUBBLE_NAMES[index]])}
                            </div>
                        );
                    }.bind(this))}
                </div>
            </div>
        );
    }
});