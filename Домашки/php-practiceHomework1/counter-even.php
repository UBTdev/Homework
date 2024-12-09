<?php
require 'index.php';
$array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for ($i = 0; $i < count($array); $i++) {
    if ($i % 2 == 0) {
        echo $i;
    }
};
echo '<br><br>';
// reverse
for ($d = count($array); $d > 0; $d--) {
    if ($d % 2 == 0) {
        echo $d;
    }
}
