readme needs rewriting!!

mep-feature-simpleplaylist -  A playlist plugin for MediaElement.js
=

Usage:

1 - Download **[MediaElement.js] (http://mediaelementjs.com/)**

2 - Download **[mep-feature-playlist] (https://github.com/duozersk/mep-feature-playlist/archive/master.zip)**

3 - Include

- **mediaelement-and-player.js**
- **mediaelementplayer.min.css**
- **mep-feature-playlist.js**
- **mep-feature-playlist.css**

4 - Add this code to your page:

    <script>
    $(function(){
        $('audio,video').mediaelementplayer({
            features: ['playlistfeature', 'prevtrack', 'playpause', 'nexttrack', 'current', 'progress', 'duration', 'volume'],
        });
    });
    </script>

Options:

Features:
- **playlistfeature** - general feature to enable playlist functionality; it just builds the internal playlist layer, it should be present if you want to use playlist
- **prevtrack** - button to play the previous track in the playlist
- **nexttrack** - button to play the next track in the playlist

5 - Add the audio tag and your tracks:

    <audio controls="controls" autoplay="autoplay">
        <source src="media/AirReview-Landmarks-02-ChasingCorporate.mp3" title="Chasing Corporate" type="audio/mpeg"/>
        <source src="media/framing.mp3" title="Framing" type="audio/mpeg"/>
    </audio>



More options and installation instructions related to MediaElement.js can be found [here] (http://mediaelementjs.com/#installation).
