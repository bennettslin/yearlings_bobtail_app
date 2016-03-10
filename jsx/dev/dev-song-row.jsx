var DevSongRow = React.createClass({

    getDefaultProps: function() {
        return {
            songIndex: -1,
            songTitle: '',
            sumTask: {
                workedHours: 0,
                neededHours: 0
            },
            maxTotalNeededHours: 0,
            isSelected: false,
            handleSongChange: function() {}
        };
    },

    _getProgressBar: function() {
        var sumTask = this.props.sumTask,
            filledStyle,
            totalStyle;

        filledStyle = {
            width: (sumTask.workedHours / (sumTask.neededHours || 0.01) * 100) + '%'
        };

        totalStyle = {
            width: (sumTask.neededHours / this.props.maxTotalNeededHours * 100) + '%'
        }

        return (
            <div className="dev-song-total-progress-bar" style={totalStyle}>
                <div className="dev-song-filled-progress-bar" style={filledStyle}></div>
            </div>
        );
    },

    render: function() {
        var sumTask = this.props.sumTask,
            className = 'dev-song-row' + (this.props.isSelected ? ' played' : '');

        return (
            <div className={className}>
                {this._getProgressBar()}
                <div className="dev-song-container">
                    <a className="dev-song-button" onClick={this.props.handleSongChange.bind(null, this.props.songIndex)}>
                        {this.props.songIndex + 1}. {this.props.songTitle}
                    </a>
                    <span className="dev-song-progress-figure">
                        {sumTask.workedHours}/{sumTask.neededHours}
                    </span>
                </div>
            </div>
        );
    }
});