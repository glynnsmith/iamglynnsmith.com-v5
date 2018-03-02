<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width,initial-scale=1.0">

	<title><?php echo $page->title()->html() ?> - <?php echo $site->title()->html() ?></title>
	<meta name="description" content="<?php echo $site->description()->html() ?>">
	<meta name="keywords" content="<?php echo $site->keywords()->html() ?>">

	<style>
		html > * {
			opacity: 0;
		}

		html.wf-active > * {
			opacity: 1;
			transition: opacity 1.2s cubic-bezier(0, 1.000, 0.320, 1.000) 0.4s;
		}
	</style>

	<!-- Typekit -->
	<script>
	  (function(d) {
	    let config = {
	      kitId: 'ysa2qbk',
	      scriptTimeout: 3000,
	      async: true
	    },
	    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config);}catch(e){}};s.parentNode.insertBefore(tk,s);
	  })(document);
	</script>

	<!-- Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-32800574-1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-32800574-1');
	</script>


	<!-- Favicons -->
	<link rel="apple-touch-icon" sizes="180x180" href="<?php echo kirby()->urls()->index() ?>/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<?php echo kirby()->urls()->index() ?>/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<?php echo kirby()->urls()->index() ?>/favicon-16x16.png">
	<link rel="manifest" href="<?php echo kirby()->urls()->index() ?>/manifest.json">
	<link rel="mask-icon" href="<?php echo kirby()->urls()->index() ?>/safari-pinned-tab.svg" color="#f31643">
	<meta name="theme-color" content="#ffffff">
</head>
<body>
