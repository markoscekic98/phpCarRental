<?php
try{
	require_once ('simple_html_dom.php');
	$html = file_get_html('https://www.yahoo.com/news/weather/serbia/beograd/belgrade-532697/');
	$html->find('description', 0)->plaintext;
	$html->find('span[class="description Va(m) Px(2px) Fz(1.3em)--sm Fz(1.6em)"]',0)->plaintext;
	if($html != 'null'){
		echo $html;
	}
} catch (PDOException $ex){

}