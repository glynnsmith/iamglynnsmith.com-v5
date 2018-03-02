<section class="section">
	<header class="container section__header container--side-padding">
		<h2 class="section__header__text">Work</h2>
		<span class="section__header__subheader">
			<span class="section__header__description"><?php echo page('work')->description() ?></span>
			<span class="section__header__dash"> - </span>
			<span class="section__header__link__wrapper">
				<a href="<?php echo page("work")->url() ?>" class="section__header__link">View All Work</a>
			</span>
		</span>
	</header>
</section>

<section class="section">
	<section class="container container__work-filter">
		<span class="widget widget--work-filter">
			<span class="widget__title">Filter by Discipline: </span>

			<?php $p = kirby()->request()->params()->tag(); ?>
			<?php $tags = page("work")->children()->visible()->pluck('tags', ',', true); ?>
			<?php foreach($tags as $tag): ?>

			<a href="<?php echo url(page("work")->url() . '/' . url::paramsToString(['tag' => $tag])) ?>" class="widget__link">
				<span class="widget__tag--hash">#</span><?php echo html($tag) ?>
			</a>

			<?php endforeach ?>
		</span>
	</section>
	</section>

<section class="section--wide">
	<section class="grid grid--large">

		<?php
 foreach(page('work')->children()->visible()->limit(6) as $article): $image_s = $article->images()->find("thumb300.png"); $image_m = $article->images()->find("thumb400.png"); $image_l = $article->images()->find("thumb600.png"); ?>

		<a href="<?php echo $article->url() ?>" class="grid__item grid__item-link">
			<div class="grid__item__text-slider">
				<div class="grid__item__text--top">
					<span class="grid__item__text"><strong><?php echo $article->title()->html() ?></strong></span>
					<span class="grid__item__text"><?php echo $article->description()->html() ?></span>
				</div>
			</div>

			<picture>
			  <source
			    media="(min-width: 1512px)"
			    srcset="<?php echo $image_l->url() ?>"
				  class="grid__img">
			  <source
			    media="(min-width: 1212px)"
			    srcset="<?php echo $image_m->url() ?>"
				  class="grid__img">
			  <source
			    media="(min-width: 1200px)"
			    srcset="<?php echo $image_s->url() ?>"
				  class="grid__img">
			  <source
			    media="(min-width: 1024px)"
			    srcset="<?php echo $image_l->url() ?>"
				  class="grid__img">
			  <source
			    media="(min-width: 784px)"
			    srcset="<?php echo $image_m->url() ?>"
				  class="grid__img">
			  <source
			    media="(min-width: 717px)"
			    srcset="<?php echo $image_m->url() ?>"
				  class="grid__img">
			  <source
			    media="(min-width: 581px)"
			    srcset="<?php echo $image_s->url() ?>"
				  class="grid__img">
			  <source
			    media="(min-width: 488px)"
			    srcset="<?php echo $image_l->url() ?>"
				  class="grid__img">
			  <source
			    media="(min-width: 352px)"
			    srcset="<?php echo $image_m->url() ?>"
				  class="grid__img">
			  <source
			    media="(min-width: 16px)"
			    srcset="<?php echo $image_s->url() ?>"
				  class="grid__img">
			  <img
			    src="<?php echo $image_s->url() ?>"
			    alt="a cute kitten"
				  class="grid__img">
			</picture>

			<div class="grid__img--shade"></div>
		</a>

		<?php endforeach ?>
	</section>

	<div class="container container--top-spacing utility--center">
		<a href="<?php echo page("work")->url() ?>" class="button">View All Work</a>
	</div>
</section>