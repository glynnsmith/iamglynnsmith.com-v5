<section id="hero__container" class="hero__container">
	<div id="hero__background" class="hero__background"></div>
	<div data-modifier="80" class="parallax-layer">
		<canvas id="hero__canvas-layer--01" class="hero__canvas-layer--01"></canvas>
	</div>
	<div data-modifier="70" class="parallax-layer">
		<canvas id="hero__canvas-layer--02" class="hero__canvas-layer--02"></canvas>
	</div>
	<div data-modifier="60" class="parallax-layer">
		<canvas id="hero__canvas-layer--03" class="hero__canvas-layer--03"></canvas>
	</div>

	<div id="hero__logo--group" data-modifier="50" class="parallax-layer parallax__logo-group">
		<div id="hero__logo--container" class="hero__logo--container">
			<div id="hero__logo-shadow" class="hero__logo-shadow"></div>
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="48" viewBox="0 0 32 48" id="hero__logo" class="hero__logo">
				<g><path d="M16 40a8 8 0 0 1-8-8H0a16 16 0 0 0 32 0h-8a8 8 0 0 1-8 8z"/><path d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm0 24a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/></g>
			</svg>
		</div>
	</div>

	<div data-modifier="40" class="parallax-layer">
		<canvas id="hero__canvas-layer--04" class="hero__canvas-layer--04"></canvas>
	</div>
	<div data-modifier="30" class="parallax-layer">
		<canvas id="hero__canvas-layer--05" class="hero__canvas-layer--05"></canvas>
	</div>
	<div data-modifier="20" class="parallax-layer">
		<canvas id="hero__canvas-layer--06" class="hero__canvas-layer--06"></canvas>
	</div>
	<div data-modifier="10" class="parallax-layer">
		<canvas id="hero__canvas-layer--07" class="hero__canvas-layer--07"></canvas>
	</div>

	<div id="hero__foreground" class="hero__foreground"></div>
</section>

<section class="section">
	<section class="section__hero">

		<!-- Masthead Snippet -->
		<!-- Mobile menu - Unhidden with JS -->
		<nav class="navigation__menu" id="navMenu">
			<a href="#" class="navigation__menu--closer" id="navMenuClose"><svg xmlns="http://www.w3.org/2000/svg" class="navigation__menu--closer--icon">
					<rect x="0" y="14" width="100%" height="3px" class="navigation__menu--closer--icon-rect01" />
					<rect x="0" y="14" width="100%" height="3px" class="navigation__menu--closer--icon-rect02" />
				</svg></a>
			<div class="navigation__menu__inner navigation__menu__inner--spacer"></div>
			<?php foreach($pages->visible() as $p): ?>
			<div class="navigation__menu__inner"><a <?php e($p->isOpen(), ' class="navigation__link navigation__link--active"') ?> href="<?php echo $p->url() ?>" class="navigation__link"><?php echo $p->title()->html() ?></a></div><?php endforeach ?>
			<div class="navigation__menu__inner navigation__menu__inner--spacer"></div>
		</nav>

		<section role="banner" id="section__header" class="section__masthead">

		<!-- Start of actual header -->
		  <a href="<?php echo url() ?>" alt="" class="logo">
		    <div class="logo__icon logo__icon--dark">
					<?php snippet("svg_logo") ?>
				</div>
				<h1 class="logo__text"><span class="logo__text--title"><?php echo $site->title()->html() ?></span><span class="logo__text--dash"> - </span><span class="logo__text--role"><?php echo $site->role()->html() ?></span></h1>
		  </a>

			<nav role="navigation" class="navigation">
				<!-- Desktop Menu -->
				<div class="navigation--desktop">
					<?php foreach($pages->visible() as $p): ?><a <?php e($p->isOpen(), ' class="navigation__link navigation__link--active"') ?> href="<?php echo $p->url() ?>" class="navigation__link"><?php echo $p->title()->html() ?></a><?php endforeach ?>
				</div>

				<!-- Responsive Menu Toggle Button-->
				<a href="#" class="navigation__link navigation__menu-opener" id="navMenuOpen">Menu<svg xmlns="http://www.w3.org/2000/svg" class="navigation__menu-opener__icon">
					<rect x="0" y="0" width="100%" height="3px" class="navigation__menu-opener__icon-rect01" />
					<rect x="0" y="7" width="100%" height="3px" class="navigation__menu-opener__icon-rect02" />
					<rect x="0" y="14" width="100%" height="3px" class="navigation__menu-opener__icon-rect03" />
				</svg></a>
			</nav>
		</section>

		<section id="hero__footer" class="section__hero__footer">
		  <?php snippet("snippet_network_full") ?>
		</section>
	</section>
</section>
