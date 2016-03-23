/**
 * @file MediaElement Playlist Feature (plugin).
 * @author Reimar Imhof <tuxuser06@quantentunnel.de>
 * @author Original author: Andrew Berezovsky <andrew.berezovsky@gmail.com>
 * Twitter handle: duozersk
 * @author Original author: Junaid Qadir Baloch <shekhanzai.baloch@gmail.com>
 * Twitter handle: jeykeu
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */

(function($) {
  $.extend(mejs.MepDefaults, {
    nextText: 'Next Track',
    prevText: 'Previous Track',
    eventListener: {},
    playlistElements: [],
    autoPlayNextTrack: true
  });

  $.extend(MediaElementPlayer.prototype, {
    playlistElements: [],
    playlistPosition: -1,
    getPlaylistElement: function() {
      var t = this;
      if (t.playlistPosition >= 0 && t.playlistPosition < t.playlistElements.length) {
	return t.playlistElements[t.playlistPosition];
      } else {
	return null;
      }
    },
    setPlaylistPosition: function(newPlaylistPosition) {
      var t = this;
      if (newPlaylistPosition >= 0 && newPlaylistPosition < t.playlistElements.length) {
	var playlistEle = t.playlistElements[newPlaylistPosition];
	var newSrc = '';
	
	if (playlistEle.source && playlistEle.source != '') {
	  newSrc = playlistEle.source;
	}
	if (playlistEle.file && playlistEle.file != '') {
	  newSrc = playlistEle.file;
	}
	if (newSrc != '') {
	  t.setSrc(newSrc);
	  t.playlistPosition = newPlaylistPosition;
	  t.container.trigger('mep-position');
	}
      }
    },
    playPlaylistPosition: function(newPlaylistPosition) {
      var t = this;
      t.pause();
      t.setPlaylistPosition(newPlaylistPosition);
      t.load();
      t.play();
    },
    // PREVIOUS TRACK BUTTON
    buildprevtrack: function(player, controls, layers, media) {
      var t = this;

      var prevTrack = $('<div class="mejs-button mejs-prevtrack-button mejs-prevtrack">' +
        '<button type="button" aria-controls="' + player.id + '" title="' + player.options.prevText + '"></button>' +
        '</div>')
        .appendTo(controls)
        .click(function(e){
          $(media).trigger('mep-playprevtrack');
          player.playPrevTrack();
        });

      t.prevTrack = t.controls.find('.mejs-prevtrack-button');
    },
    prevTrackClick: function() {
      var t = this;
      t.prevTrack.trigger('click');
    },
    // NEXT TRACK BUTTON
    buildnexttrack: function(player, controls, layers, media) {
      var t = this;

      var nextTrack = $('<div class="mejs-button mejs-nexttrack-button mejs-nexttrack">' +
        '<button type="button" aria-controls="' + player.id + '" title="' + player.options.nextText + '"></button>' +
        '</div>')
        .appendTo(controls)
        .click(function(e){
          $(media).trigger('mep-playnexttrack');
          player.playNextTrack();
        });

      t.nextTrack = t.controls.find('.mejs-nexttrack-button');
    },
    nextTrackClick: function() {
      var t = this;
      t.nextTrack.trigger('click');
    },
    // PLAYLIST FEATURE
    buildplaylistfeature: function(player, controls, layers, media) {
      if (player.options.eventListener['mep-position']) {
	player.container.on('mep-position', player.options.eventListener['mep-position']);
      }
      // when current track ends - play the next one
      if (player.options.autoPlayNextTrack) {
	media.addEventListener('ended', function(e) {
	  setTimeout(function() {player.playNextTrack();}, 100);
	}, false);
      }
      // set the first track as current
      if (player.options.playlistElements.length>0) {
	player.setPlayList(player.options.playlistElements);
      }
    },
    // setPlayList (Array of HashMaps with elements "source/file" and "title") - Private Function
    setPlayListPrivate: function(newPlayListArray) {
      var t = this;
      t.playlistElements = newPlayListArray;
      t.setPlaylistPosition(0);
    },
    // official Function - including try-catch with retry (needed for IE8)
    setPlayList: function(newPlayListArray, countDownCount) {
      var t = this;
      if (countDownCount == undefined) {
	countDownCount = 5;
      }
      try {
	t.setPlayListPrivate(newPlayListArray);
	countDownCount = 0;
      }
      catch(e) {
	// prepare for next try
	countDownCount = countDownCount - 1;
      }
      if (countDownCount > 0) {
	setTimeout(function(){t.setPlayList(newPlayListArray, countDownCount)}, 100);
      }
    },
    playNextTrack: function() {
      var t = this;
      t.playPlaylistPosition(t.playlistPosition+1);
    },
    playPrevTrack: function() {
      var t = this;
      t.playPlaylistPosition(t.playlistPosition-1);
    }
  });

})(mejs.$);
