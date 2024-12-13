<?php
// Output JavaScript to open a new tab and redirect
echo "<script type='text/javascript'>window.open('https://www.homeworkit.rf.gd', '_blank');</script>";

// Optionally, you can include a fallback redirect for browsers that may block JavaScript
header("Location: https://www.homeworkit.rf.gd");
exit();
?>
