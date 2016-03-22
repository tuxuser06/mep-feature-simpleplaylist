
mep-feature-simpleplaylist -  A playlist plugin for MediaElement.js
=

Usage:

1 - Download **[MediaElement.js] (http://mediaelementjs.com/)**

2 - Download **[mep-feature-simpleplaylist] (https://github.com/tuxuser06/mep-feature-simpleplaylist/archive/master.zip)**

3 - Include

- **mediaelement-and-player.js**
- **mediaelementplayer.min.css**
- **mep-feature-simpleplaylist.js**
- **mep-feature-simpleplaylist.css**
- **controls-simpleplaylist.svg**
- **controls-simpleplaylist.png**


4 - Mark video or audio tag including a dummy source:
    
    <audio id="mp3sUsingPlayList" controls="controls" style="width: 100%">
        <!-- we need a dummy source -->
        <source src="//dummy.mp3">
    </audio>	


5 - Add this code including playlist to your page:

    <script>
var playerUsingPlayList = new MediaElementPlayer("#mp3sUsingPlayList", {
            features: ['playlistfeature', 'prevtrack', 'playpause', 'nexttrack', 'current', 'progress', 'duration', 'volume'],
	    playlistElements: [{source: 'file1.mp3'}, {source: 'file2.mp3'}, {source: 'file3.mp3'}]
            });
    </script>

Options:

Features:
- **playlistfeature** - general feature to enable playlist functionality; it just builds the internal playlist layer, it should be present if you want to use playlist
- **playlistElements** - sets list of files
- **prevtrack** - button to play the previous track in the playlist
- **nexttrack** - button to play the next track in the playlist
- **setPlayList** - sets new list of files (on an existing player)
- **playPlaylistPosition** - plays title of given number (starting with 0)




More options and installation instructions related to MediaElement.js can be found [here] (http://mediaelementjs.com/#installation).
