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

		<a href="#" id="hamburger" class="navigation__hamburger-button">Menu
			<span class="navigation__hamburger-icon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" class="navigation__menu-icon"><path d="M0 0h12v3H0zm0 8.5h12v3H0zM0 17h12v3H0z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" class="navigation__close-icon"><path d="M2.775.078l9.063 18.5-2.694 1.32L.08 1.397z"/><path d="M11.859 1.399l-9.063 18.5-2.694-1.32L9.164.079z"/></svg></span>
		</a>
	</nav>
</section>
