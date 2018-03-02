<section class="grid grid--large">

	<?php foreach($articles as $article): $image_s = $article->images()->find("thumb300.png"); $image_m = $article->images()->find("thumb400.png"); $image_l = $article->images()->find("thumb600.png"); ?>

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
			    alt="Project thumbnail"
				  class="grid__img">
			</picture>

			<div class="grid__img--shade"></div>
		</a>

<?php endforeach ?>
</section>
