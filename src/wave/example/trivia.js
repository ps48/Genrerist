var GLOBAL_ACTIONS = {
    'play': function () {
        wavesurfer.playPause();
    },

    'back': function () {
        wavesurfer.skipBackward();
    },

    'forth': function () {
        wavesurfer.skipForward();
    },

    'toggle-mute': function () {
        wavesurfer.toggleMute();
    }
};


// Bind actions to buttons and keypresses
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', function (e) {
        var map = {
            32: 'play',       // space
            37: 'back',       // left
            39: 'forth'       // right
        };
        var action = map[e.keyCode];
        if (action in GLOBAL_ACTIONS) {
            e.preventDefault();
            GLOBAL_ACTIONS[action](e);
        }
    });

    [].forEach.call(document.querySelectorAll('[data-action]'), function (el) {
        el.addEventListener('click', function (e) {
            var action = e.currentTarget.dataset.action;
            if (action in GLOBAL_ACTIONS) {
                e.preventDefault();
                GLOBAL_ACTIONS[action](e);
            }
        });
    });
});


// Misc
document.addEventListener('DOMContentLoaded', function () {
    // Web Audio not supported
    if (!window.AudioContext && !window.webkitAudioContext) {
        var demo = document.querySelector('#demo');
        if (demo) {
            demo.innerHTML = '<img src="/example/screenshot.png" />';
        }
    }


    // Navbar links

});
