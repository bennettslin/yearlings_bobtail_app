var TitleBar = React.createClass({
    getDefaultProps: function() {
        return {
            isShown: true,
            isInScrolling: true
        };
    },

    render: function() {
        var bandLogo = this.props.device !== 'phone' ? (
                <div className="band-logo">
                    Band logo
                </div>
            ) : null,
            coverTitle = this.props.isInScrolling ? (
                <div className="cover-title">
                    <h1>Bobtail Yearlings</h1>
                    <span>presents</span>
                    <h2>Yearlings Bobtail</h2>
                </div>
            ) : null;

        return (
            <div className={'nav-component title-bar' + (this.props.isShown ? '' : ' unshown')}>
                {bandLogo}
                {coverTitle}
            </div>
        );
    }
});
