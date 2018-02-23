<section role="banner" id="masthead" class="masthead">
  <a href="<?php echo url() ?>" alt="" class="logo">
    <div class="logo__icon logo__icon--dark">
			<?php snippet("svg_logo") ?>
		</div>
		<h1 class="logo__text"><span class="logo__text--title"><?php echo $site->title()->html() ?></span><span class="logo__text--dash"> - </span><span class="logo__text--role"><?php echo $site->role()->html() ?></span></h1>
  </a>

	<nav role="navigation" class="navigation">
		<div id="navigation__menu" class="navigation__menu">
			<?php foreach($pages->visible() as $p): ?><a <?php e($p->isOpen(), ' class="navigation__link navigation__link--active"') ?> href="<?php echo $p->url() ?>" class="navigation__link"><?php echo $p->title()->html() ?></a><?php endforeach ?>
		</div>

		<a href="#" id="hamburger" class="navigation__link navigation__hamburger-button">Menu<svg xmlns="http://www.w3.org/2000/svg" class="navigation__hamburger-icon">
			<rect x="0" y="0" width="100%" height="3px" />
			<rect x="0" y="7" width="100%" height="3px" />
			<rect x="0" y="14" width="100%" height="3px" />
		</svg></a>
	</nav>
</section>
