var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var GlobalManager = {

    hasParentWithTagName: function(child, parentTagName) {
         var node = child.parentNode;

         while (node !== null) {

             if (node.tagName && node.tagName.toLowerCase() === parentTagName) {
                 return true;
             }

             node = node.parentNode;
         }

         return false;
    }
}
var ProgressManager = {

    getMaxTotalNeededHoursFromSongs: function(songs) {
        return songs.reduce(function(maxTotalNeededHours, song) {
            var totalNeededHours = this.calculateSumTask(song.tasks).neededHours;
            return Math.max(totalNeededHours, maxTotalNeededHours);
        }.bind(this), 0);
    },

    getMaxTotalNeededHoursFromTasks: function(tasks) {
        return tasks.reduce(function(maxTotalNeededHours, task) {
            var maxFromTask = task.neededHours;

            if (task.subtasks) {
                var maxFromSubtasks = this.getMaxTotalNeededHoursFromTasks(task.subtasks);
                maxFromTask = Math.max(maxFromSubtasks, maxFromTask);
            }

            return Math.max(maxTotalNeededHours, maxFromTask);
        }.bind(this), 0);
    },

    calculateSumTask: function(tasks) {
        var sumTask = {
                workedHours: 0,
                neededHours: 0
            };

        if (!tasks) {
            return sumTask;

        } else {
            return tasks.reduce(function(sumTask, task) {

                // Calculate sum of subtasks, if there are any.
                if (task.subtasks) {
                    var sumSubtask = this.calculateSumTask(task.subtasks);
                    task = this._addTwoTasks(sumSubtask, task);
                }

                return this._addTwoTasks(sumTask, task);
            }.bind(this), sumTask);
        }
    },

    calculateSumAllTasks: function(songs) {
        var sumAllTasks = {
                workedHours: 0,
                neededHours: 0
            };

        return songs.reduce(function(sumAllTasks, song) {
            return this._addTwoTasks(sumAllTasks, this.calculateSumTask(song.tasks));
        }.bind(this), sumAllTasks);
    },

    _addTwoTasks: function(task1, task2) {
        if (!task1) {
            return task2;

        } else if (!task2) {
            return task1;

        } else {
            return {
                workedHours: task1.workedHours + task2.workedHours,
                neededHours: task1.neededHours + task2.neededHours
            };
        }
    }
};
var TextFormatter = {

    /**
     * Returns a single span element containing nested text elements.
     */
    getFormattedTextElement: function(text, clickHandler, index, nestedIndex) {
        index = index || 0;
        nestedIndex = nestedIndex || 0;

        if (Array.isArray(text)) {
            return (
                <span key={nestedIndex + '-' + index}>
                    {text.map(function(textElement, index) {
                        return this.getFormattedTextElement(textElement, clickHandler, index, nestedIndex + 1);
                    }.bind(this))}
                </span>
            );

        } else if (typeof text === 'string' || typeof text === 'object') {
            return this._getTaggedTextContent(text, clickHandler, index, nestedIndex);
        }
    },

    /**
     * Returns a single element wrapped in a span, italic, or anchor tag.
     */
    _getTaggedTextContent: function(text, clickHandler, index, nestedIndex) {
        if (typeof text === 'string') {
            return (
                <span key={nestedIndex + '-' + index}>
                    {/* Begin subsequent segments of each line with a space. */}
                    {index > 0 ? ' ' : ''}
                    {text}
                </span>
            );

        } else if (typeof text === 'object') {
            if (text.italic) {
                return <i key={nestedIndex + '-' + index}>{this.getFormattedTextElement(text.italic, clickHandler, index, nestedIndex)}</i>;

            } else if (text.emphasis) {
                return <em key={nestedIndex + '-' + index}>{this.getFormattedTextElement(text.emphasis, clickHandler, index, nestedIndex)}</em>;

            } else if (text.anchor) {
                return (
                    <a
                        key={nestedIndex + '-' + index}
                        onClick={clickHandler.bind(null, text.annotationKey)}
                    >
                        {this.getFormattedTextElement(text.anchor, clickHandler, index, nestedIndex)}
                    </a>
                );
            }
        }
    }
};
var PopupMixin = {

    resetUserInteractionWithPopups: function() {
        this.setState({
            clickedOn: false,
            hoveredOn: false,
            touched: false
        });
    },

    enableHoverability: function(hoverable) {
        this.setState({
            hoverable: this.props.popupsAlwaysShown === 'one' ? true : hoverable
        });
    },

    _addToStateForPopup: function(state) {
        state.clickedOn = false;
        state.hoverable = true;
        state.hoveredOn = false;
        state.touched = false;
        return state;
    },

    _handleTouch: function(touched) {
        // prevent mouse events from being fired from click on mobile devices
        this.setState({
            touched: touched
        });
    },

    _handlePopupClick: function(index) {
        if (this.props.popupsAlwaysShown !== 'all') {
            if (this.state.clickedOn && this.state.shownPopupIndex !== index) {
                this.setState({
                    shownPopupIndex: index
                });

            } else {

                // Clicking synopsis bar in scrolling nav still allows hover.
                var newClickedOn = !this.state.clickedOn;

                if (this.props._enableHoverability) {
                    this.props._enableHoverability(!newClickedOn);
                }

                if (this.props._resetAllOtherPopups) {
                    this.props._resetAllOtherPopups();
                }

                this.setState({
                    clickedOn: newClickedOn,
                    shownPopupIndex: index
                });
            }

            if (this.props._updateShownPopupIndex) {
                this.props._updateShownPopupIndex(index);
            }
            this._handleTouch(false);
        }
    },

    _handlePopupHover: function(index) {
        if (this.props.popupsAlwaysShown !== 'all') {
            if (this.state.hoverable && !this.state.touched) {
                if (typeof index === 'number') {
                    this.setState({
                        hoveredOn: true,
                        shownPopupIndex: index
                    });

                    if (this.props._resetAllOtherPopups) {
                        this.props._resetAllOtherPopups();
                    }

                } else {
                    this.setState({
                        hoveredOn: false
                    });
                }
            }
        }
    },

    _showPopup: function(index) {
        if (this.props.popupsAlwaysShown === 'all') {
            return true;
        } else if (this.state.clickedOn || this.state.hoveredOn || this.props.popupsAlwaysShown === 'one') {
            return this.state.shownPopupIndex === index;
        } else {
            return false;
        }
    },

    _getPopup: function(baseClassName, index, shownContentObject, unshownContentObject) {
        var isShown = this._showPopup(index),
            className = baseClassName + '-' + index +
                ' popup' + (isShown ? ' expanded' : '') +
                ((isShown && (this.props.popupsAlwaysShown !== 'none' || this.state.clickedOn)) ? ' engraved' : ''),
            shownContentMappedTextElement = TextFormatter.getFormattedTextElement(shownContentObject),
            unshownContentMappedTextElement = TextFormatter.getFormattedTextElement(unshownContentObject);
        return (
            <li
                className={className}
                key={baseClassName + '-' + index}
                onClick={this._handlePopupClick.bind(null, index)}
                onMouseEnter={this._handlePopupHover.bind(null, index)}
                onMouseLeave={this._handlePopupHover.bind(null, false)}
                onTouchStart={this._handleTouch.bind(null, true)}
            >
                {isShown || !unshownContentObject ? shownContentMappedTextElement : unshownContentMappedTextElement}
            </li>
        );
    }
};
var DevAnnotationField = React.createClass({

    getDefaultProps: function() {
        return {
            annotationSpan: null
        };
    },

    render: function() {
        return (
            <div className="dev-annotation-field">
                <h2>annotation</h2>
                {this.props.annotationSpan}
            </div>
        );
    }
});
var DevApp = React.createClass({

    getDefaultProps: function() {
        return {
            title: 'Yearling\'s Bobtail',
            songs: [],
            overviews: []
        };
    },

    getInitialState: function() {
        var playedSongIndex = window.sessionStorage.playedSongIndex ?
                parseInt(window.sessionStorage.playedSongIndex) : -1;
        return {
            playedSongIndex: playedSongIndex,
            annotationSpan: null
        };
    },

    componentDidMount: function() {
        document.body.addEventListener('click', this._handleBodyClick);
    },

    componentWillUnmount: function() {
        document.body.removeEventListener('click', this._handleBodyClick);
    },

    _handleBodyClick: function(e) {
        var annotation = document.getElementById('annotation');

        /**
         * Close annotation if anywhere outside annotation is clicked, with the
         * exception of another annotation link.
         */
        if (annotation && annotation !== e.target && !annotation.contains(e.target) && !GlobalManager.hasParentWithTagName(e.target, 'a')) {

            this.setState({
                annotationSpan: null
            });
        }
    },

    handleSongChange: function(newPlayedSongIndex) {
        if (newPlayedSongIndex >= 0 && newPlayedSongIndex < this.props.songs.length) {

            // Store song index in session.
            window.sessionStorage.playedSongIndex = newPlayedSongIndex;

            this.setState({
                playedSongIndex: newPlayedSongIndex,
                annotationSpan: null
            });
        }
    },

    handleAnnotationSelect: function(annotationKey) {
        var annotationObject = this.props.songs[this.state.playedSongIndex].annotations[annotationKey].description,
            annotationSpan = TextFormatter.getFormattedTextElement(annotationObject);

        this.setState({
            annotationSpan: annotationSpan
        });
    },

    render: function() {
        var playedSongIndex = this.state.playedSongIndex,
            playedSongTitle = playedSongIndex >= 0 ?
                this.props.songs[playedSongIndex].title : null,
            playedSongOverviews = playedSongIndex >= 0 ?
                this.props.songs[playedSongIndex].overviews :
                this.props.overviews,
            playedSongTasks = playedSongIndex >= 0 ?
                this.props.songs[playedSongIndex].tasks : null,
            playedSongLyrics = playedSongIndex >= 0 ?
                this.props.songs[playedSongIndex].lyrics : null,
            annotationIsShown = !!this.state.annotationSpan;

        return (
            <div className="dev-app">
                <div className="dev-app-column songs-column">
                    <h1>{this.props.title}</h1>
                    <DevSongsField
                        songs={this.props.songs}
                        playedSongIndex={playedSongIndex}
                        handleSongChange={this.handleSongChange}
                    />
                </div>
                <div className="dev-app-column notes-column">
                    <ReactCSSTransitionGroup
                        transitionName="annotation-animation"
                        transitionEnterTimeout={100}
                        transitionLeaveTimeout={100}
                    >
                    {annotationIsShown ?
                        <div key="annotation" id="annotation" className="notes-row annotation-row">
                            <DevAnnotationField
                                annotationSpan={this.state.annotationSpan}
                            />
                        </div> : null
                    }
                    </ReactCSSTransitionGroup>
                    <div className="notes-row speech-bubbles-row">
                        <DevOverviewsField
                            playedSongOverviews={playedSongOverviews}
                        />
                        {playedSongTasks ?
                            <DevProgressField
                                tasks={playedSongTasks}
                            /> : null
                        }
                    </div>
                </div>
                {playedSongIndex >= 0 ?
                     <div className="dev-app-column lyrics-column">
                        <DevLyricsField
                            playedSongLyrics={playedSongLyrics}
                            handleAnnotationSelect={this.handleAnnotationSelect}
                        />
                    </div> : null
                }
            </div>
        );
    }
});
var DevLyricsColumn = React.createClass({

    getDefaultProps: function() {
        return {
            columnIndex: 'left',
            columnTitle: '',
            playedSongLyrics: [],
            handleAnnotationSelect: function() {}
        };
    },

    _parseLyric: function(lyric) {
        var annotation = lyric.annotation;
        return TextFormatter.getFormattedTextElement(lyric.verse, this.props.handleAnnotationSelect);
    },

    render: function() {
        var columnIndex = this.props.columnIndex,
            columnTitleHeader = this.props.columnTitle ? <h3>{this.props.columnTitle}</h3> : null,
            doublespeakerClassName = this.props.columnTitle ? ' doublespeaker' : '',
            alignRightClassName = this.props.columnTitle === 'right speaker' ? ' align-right' : '',
            columnClassName = 'dev-lyrics-column ' + columnIndex + doublespeakerClassName + alignRightClassName,
            lyricsTextArea = (
                <div className={'lyrics-text'}>
                    {this.props.playedSongLyrics.map(function(stanza, stanzaIndex) {
                        return (
                            <div className={'stanza-' + stanzaIndex} key={stanzaIndex}>
                                {stanza.map(function(lyric, verseIndex) {
                                    return (
                                        <div className={'verse-' + verseIndex} key={verseIndex}>
                                            {this._parseLyric(lyric)}
                                        </div>
                                    )
                                }, this)}
                            </div>
                        )
                    }, this)}
                </div>
            );

        return (
            <div className={columnClassName}>
                {columnTitleHeader}
                {lyricsTextArea}
            </div>
        );
    }
});
var LYRICS_COLUMN_NAMES = ['left', 'right'];

var DevLyricsField = React.createClass({

    getDefaultProps: function() {
        return {
            playedSongLyrics: '',
            handleAnnotationSelect: function() {}
        };
    },

    render: function() {

        var lyricsColumnKeys = Object.keys(this.props.playedSongLyrics),
            filteredLyricsColumnKeys = LYRICS_COLUMN_NAMES.filter(function(key) {
                return lyricsColumnKeys.indexOf(key) !== -1;
            }),
            isDoublespeaker = this.props.playedSongLyrics.left && this.props.playedSongLyrics.right;
            lyricsColumns = filteredLyricsColumnKeys.map(function(key, index) {
                return (
                    <DevLyricsColumn
                        key={key}
                        columnIndex={key}
                        columnTitle={isDoublespeaker ? key + ' speaker' : null}
                        playedSongLyrics={this.props.playedSongLyrics[key]}
                        handleAnnotationSelect={this.props.handleAnnotationSelect}
                    />
                );
            }, this);

        return (
            <div className="dev-lyrics-field">
                <h2>lyrics</h2>
                <div className="dev-lyrics-columns">
                    {lyricsColumns}
                </div>
            </div>
        );
    }
});
var DevProgressBar = React.createClass({

    getDefaultProps: function() {
        return {
            sumTask: {
                workedHours: 0,
                neededHours: 0
            },
            maxTotalNeededHours: 0
        };
    },

    render: function() {
        var sumTask = this.props.sumTask,
            filledStyle,
            totalStyle;

        filledStyle = {
            width: (sumTask.workedHours / (sumTask.neededHours || 0.01) * 100) + '%'
        };

        totalStyle = {
            width: (sumTask.neededHours / (this.props.maxTotalNeededHours || 0.01) * 100) + '%'
        }

        return (
            <div className="total-progress-bar" style={totalStyle}>
                <div className="filled-progress-bar" style={filledStyle}></div>
            </div>
        );
    }
});
var DevProgressField = React.createClass({

    _maxTotalNeededHours: 0,

    getDefaultProps: function() {
        return {
            tasks: []
        };
    },

    componentWillMount: function() {
        this._maxTotalNeededHours = ProgressManager.getMaxTotalNeededHoursFromTasks(this.props.tasks);
    },

    componentWillUpdate: function(nextProps) {
        this._maxTotalNeededHours = ProgressManager.getMaxTotalNeededHoursFromTasks(nextProps.tasks);
    },

    _getProgressBar: function(task) {
        return (
            <DevProgressBar
                sumTask={task}
                maxTotalNeededHours={this._maxTotalNeededHours}
            />
        );
    },

    _getTaskSubrow: function(task, taskIndex, isSubtask) {
        var className = isSubtask ? 'dev-subtask-subrow' : 'dev-task-subrow';
        return (
            <div key={taskIndex} className={className}>
                {this._getProgressBar(task)}
                <div className="dev-task-text-wrapper">
                    <span className="text-cell name">
                        {task.taskName}
                    </span>
                    {task.neededHours ?
                        <span className="text-cell progress">
                            {task.workedHours}/{task.neededHours}
                        </span> : null
                    }
                </div>
            </div>
        );
    },

    _getSubtaskRow: function(subtasks) {
        if (subtasks) {
            var subtaskSubrows = subtasks.map(function(subtask, subtaskIndex) {
                    return this._getTaskSubrow(subtask, subtaskIndex, true);
                }, this);

            return (
                <div className="dev-subtask-row">
                    {subtaskSubrows}
                </div>
            );

        } else {
            return null;
        }
    },

    render: function() {
        var tasks = this.props.tasks,
            sumTask = ProgressManager.calculateSumTask(tasks);
            taskRows = tasks.map(function(task, taskIndex) {
                var taskSubrow = this._getTaskSubrow(task, taskIndex, false),
                    subtaskRow = this._getSubtaskRow(task.subtasks);

                return (
                    <div key={taskIndex} className="dev-task-row">
                        {taskSubrow}
                        {subtaskRow}
                    </div>
                );
            }, this),
            sumTask = ProgressManager.calculateSumTask(tasks),
            taskFooter = (
                <div key="footer" className="dev-task-row">
                    <div className="dev-task-subrow">
                        <div className="dev-task-text-wrapper">
                            <span className="task-placeholder"></span>
                            {sumTask.neededHours ?
                                <h3 className="text-cell progress">
                                    {sumTask.workedHours}/{sumTask.neededHours}
                                </h3> : null
                            }
                        </div>
                    </div>
                </div>
            );

        return (
            <div className="dev-progress-field">
                <h2>progress</h2>
                {taskRows}
                {taskFooter}
            </div>
        );
    }
});
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
var DevSongsField = React.createClass({

    _maxTotalNeededHours: 0,

    getDefaultProps: function() {
        return {
            songs: [],
            playedSongIndex: -1,
            handleSongChange: function() {}
        };
    },

    componentWillMount: function() {
        this._maxTotalNeededHours = ProgressManager.getMaxTotalNeededHoursFromSongs(this.props.songs);
    },

    render: function() {
        var songs = this.props.songs,
            songsHeader = (
                <DevSongRow key="header" isHeader={true} />
            ),
            songRows = songs.map(function(song, songIndex) {
                var isSelected = this.props.playedSongIndex === songIndex,
                    sumTask = ProgressManager.calculateSumTask(song.tasks);

                return (
                    <DevSongRow
                        key={songIndex}
                        songIndex={songIndex}
                        songTitle={song.title}
                        sumTask={sumTask}
                        maxTotalNeededHours={this._maxTotalNeededHours}
                        isSelected={isSelected}
                        handleSongChange={this.props.handleSongChange}
                    />
                );
            }, this),
            sumAllTasks = ProgressManager.calculateSumAllTasks(songs),
            songsFooter = (
                <DevSongRow key="footer" isFooter={true} sumTask={sumAllTasks} />
            );

        return (
            <div className="dev-songs-field">
                {songsHeader}
                {songRows}
                {songsFooter}
            </div>
        );
    }
});
var SPEECH_BUBBLE_NAMES = ['narrative', 'backstory'];

var DevOverviewsField = React.createClass({

    getDefaultProps: function() {
        return {
            playedSongOverviews: {}
        };
    },

    render: function() {
        var overviews = SPEECH_BUBBLE_NAMES.map(function(bubbleName, index) {
                return (
                    <div
                        key={index}
                        className={'speech-bubble ' + bubbleName}
                    >
                        <h2>{bubbleName}</h2>
                        {TextFormatter.getFormattedTextElement(this.props.playedSongOverviews[SPEECH_BUBBLE_NAMES[index]])}
                    </div>
                );
            }, this);

        return (
            <div className="dev-speech-bubbles-field">
                {overviews}
            </div>
        );
    }
});
var config = album,
    wrapper,
    lyricsColumns;

config.windowHeight = window.innerHeight;
config.windowWidth = window.innerWidth;

wrapper = ReactDOM.render(React.createElement(DevApp, config), document.getElementById('container'));