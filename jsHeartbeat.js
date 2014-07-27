/*
* jsHeartbeat 1.1
*Updated and maintained by Joseph Philbert
* Orginal author Jason Levine
*/

var jheartbeat = {

    init: function() {
    //function that will initialize the script and do all the bindings

    },
options: {
		url: "heartbeat_default.php",
		delay: 10000
    },
beatfunction:  function(){
	
	},
	
	timeoutobj:  {
		id: -1
	},

    set: function(options, onbeatfunction) {
		if (this.timeoutobj.id > -1) {
			clearTimeout(this.timeoutobj);
		}
        if (options) {
            $.extend(this.options, options);
        }
        if (onbeatfunction) {
            this.beatfunction = onbeatfunction;
        }

		// Add the HeartBeatDIV to the page
		$("body").append("<div id=\"HeartBeatDIV\" style=\"display: none;\"></div>");
		this.timeoutobj.id = setTimeout("jheartbeat.beat();", this.options.delay);
    },

    beat: function() {
		$("#HeartBeatDIV").load(this.options.url);
		this.timeoutobj.id = setTimeout("jheartbeat.beat();", this.options.delay);
        this.beatfunction();
    }
};
