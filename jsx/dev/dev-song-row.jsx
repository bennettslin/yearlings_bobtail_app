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

    render: function() {
        var sumTask = this.props.sumTask,
            className = 'dev-song-row' + (this.props.isSelected ? ' played' : '');

        return (
            <div className={className}>
                <DevProgressBar
                    sumTask={sumTask}
                    maxTotalNeededHours={this.props.maxTotalNeededHours}
                />

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