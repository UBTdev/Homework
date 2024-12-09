<?php
function mySecondFunction ($htmlTagN, $numberN, $count) {
    for ($i = $count; $i > 0; $i--) {
        echo "<br><$htmlTagN> $numberN </$htmlTagN>";
    }
    
};
mySecondFunction("span",'s 3', 10);
?>