var config = album,
    wrapper,
    lyricsColumns;

config.windowHeight = window.innerHeight;
config.windowWidth = window.innerWidth;

wrapper = ReactDOM.render(React.createElement(DevApp, config), document.getElementById('container'));