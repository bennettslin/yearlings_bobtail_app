// FIXME: Uncomment or delete.

// // render server-side
// if (isNode) {
//   exports.App = App;

// // render client-side
// } else {
    // FIXME: Clean this up!
    var wrapper = ReactDOM.render(React.createElement(App, album), document.getElementById('container'));

    var stickyNav = document.getElementsByClassName('sticky-nav')[0],
        lyricsColumnWrapper = document.getElementsByClassName('sticky-lyrics')[0],
        leftLyricsColumn = document.getElementsByClassName('lyrics-column-left')[0];
        rightLyricsColumn = document.getElementsByClassName('lyrics-column-right')[0];

    window.onscroll = function() {
        console.log('New window Y position: ' + window.pageYOffset);

        if (stickyNav) {
            if (window.pageYOffset > 384 / 2) {
                stickyNav.classList.add('stuck');
            } else {
                stickyNav.classList.remove('stuck');
            }
        }

        if (lyricsColumnWrapper) {
            if (window.pageYOffset > 384) {
                lyricsColumnWrapper.classList.add('stuck');
            } else {
                lyricsColumnWrapper.classList.remove('stuck');
            }
        }
    }

    // FIXME: Make this more efficient?
    leftLyricsColumn.addEventListener('wheel', function(e) {
        console.log("Left column scrolling to: " + leftLyricsColumn.scrollTop);
        rightLyricsColumn.scrollTop = leftLyricsColumn.scrollTop;
    });

    rightLyricsColumn.addEventListener('wheel', function(e) {
        console.log("Right column scrolling to: " + rightLyricsColumn.scrollTop);
        leftLyricsColumn.scrollTop = rightLyricsColumn.scrollTop;
    });

    // For dev purposes only
    window.onresize = function() {
        console.log('New window size: ' + window.innerWidth + ', ' + window.innerHeight);
    }


// }
