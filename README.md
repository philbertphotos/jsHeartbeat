jsHeartbeat
===========

A heartbeat plugin for the jquery library to help keep sessions alive.

<!-- add this some where before or after the body tag -->
<script type="text/javascript" src="js/heartbeat.js"></script>


<!-- example on how to use it just make a file that echos the value in this instance true or false.-->
<script>
				$(document).ready(function($){
					jheartbeat.set({
						url: 'checkstuff.php?action=<?php echo urlencode(trim($myaction)); ?>',
						delay: 5000 
					}, function () {
					mycallback();
					});
				});
	
	
				function mycallback() {
					var isRunning = ($("#HeartBeatDIV").text().search("true")!= -1);
					if (isRunning) {
						alert('running');
					} else {
					alert('not running'); 					
				}
}
</script>


"checkstuff.php"
<?php
if ($chkmeeting) { 
		echo var_export($chkmeeting);
	}
?>
