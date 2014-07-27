jsHeartbeat
===========

A heartbeat plugin for the jquery library to help keep sessions alive.
```html
<!-- add this some where before or after the body tag -->
<script type="text/javascript" src="jsHeartbeat.js"></script>
```
## Documentation

###Configuration Options & Their Defaults

```javascript
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

```
```php
"checkstuff.php"
<?php
$checkstuff = true;
if ($chkstuff) { 
		echo var_export($chkstuff);
	}
?>
```
## Info

*Updated and maintained by Joseph Philbert

*Orginal author Jason Levine
