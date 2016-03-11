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
            isHeader: false,
            isFooter: false,
            isSelected: false,
            handleSongChange: function() {}
        };
    },

    _getSongContent: function(sumTask) {
        return (
            <div className="dev-song-text-wrapper">
                <a className="text-cell button" onClick={this.props.handleSongChange.bind(null, this.props.songIndex)}>
                    {this.props.songIndex + 1}. {this.props.songTitle}
                </a>
                <span className="text-cell progress">
                    {sumTask.workedHours}/{sumTask.neededHours}
                </span>
            </div>
        );
    },

    _getHeaderContent: function() {
        return (
            <div className="dev-song-text-wrapper">
                <h3 className="text-cell button-label">Song</h3>
                <h3 className="text-cell progress">Progress</h3>
            </div>
        );
    },

    _getFooterContent: function(sumTask) {
        return (
            <div className="dev-song-text-wrapper">
                <span className="button-placeholder"></span>
                <h3 className="text-cell progress">{sumTask.workedHours}/{sumTask.neededHours}</h3>
            </div>
        );
    },

    render: function() {
        var sumTask = this.props.sumTask,
            className = 'dev-song-row' + (this.props.isSelected ? ' played' : ''),
            progressBar = (!this.props.isHeader && !this.props.isFooter ?
                <DevProgressBar
                    sumTask={sumTask}
                    maxTotalNeededHours={this.props.maxTotalNeededHours}
                /> : null
            ),
            wrappedTextContent;

        if (this.props.isHeader) {
            wrappedTextContent = this._getHeaderContent();

        } else if (this.props.isFooter) {
            wrappedTextContent = this._getFooterContent(sumTask);

        } else {
            wrappedTextContent = this._getSongContent(sumTask);
        }

        return (
            <div className={className}>
                {progressBar}
                {wrappedTextContent}
            </div>
        );
    }
});