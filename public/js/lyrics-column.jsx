var LyricsColumn = React.createClass({
    render: function() {
        var songIndex = this.props.songIndex,
            columnIndex = this.props.columnIndex;

        return (
            <div className={'lyrics-song-' + songIndex + ' lyrics-column-' + columnIndex}>
            </div>
        );
    }
});
