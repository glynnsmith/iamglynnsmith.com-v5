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

