var SPEECH_BUBBLE_NAMES = ['narrative', 'backstory'];

var DevSpeechBubblesField = React.createClass({

    getDefaultProps: function() {
        return {
            playedSongSpeechBubbles: {}
        };
    },

    render: function() {
        var speechBubbles = SPEECH_BUBBLE_NAMES.map(function(bubbleName, index) {
                return (
                    <div
                        key={index}
                        className={'speech-bubble ' + bubbleName}
                    >
                        <h2>{bubbleName}</h2>
                        {TextFormatter.getFormattedSpan(this.props.playedSongSpeechBubbles[SPEECH_BUBBLE_NAMES[index]])}
                    </div>
                );
            }.bind(this));

        return (
            <div className="dev-speech-bubbles">
                {speechBubbles}
            </div>
        );
    }
});