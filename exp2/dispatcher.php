<?php
// Get a global counter from server and update counter
$counter_file = "/tmp/dispatch-counter-triggering";
$counter_val = file_get_contents($counter_file);
file_put_contents($counter_file, $counter_val + 1);

// Possible redirections
$redirects = array("https://psycholinguae.fr/nbade/Triggering/exp2/triggering-control.html",
                  "https://psycholinguae.fr/nbade/Triggering/exp2/triggering-i.html",
                   "https://psycholinguae.fr/nbade/Triggering/exp2/triggering-ii.html",
                   "https://psycholinguae.fr/nbade/Triggering/exp2/triggering-iii.html");
// Redirect user to the next link
header("Location: " . $redirects[$counter_val % count($redirects)]);
?>
