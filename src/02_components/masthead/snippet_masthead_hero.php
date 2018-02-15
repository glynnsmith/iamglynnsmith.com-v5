<!-- Hero BG -->
<section id="hero__background" class="section__hero__background">
	<canvas id="hero__canvas--bg" class="anim__actor hero__canvas--bg"></canvas>

	<div id="hero__radial-gradient--round" class="anim__actor hero__radial-gradient--round"></div>

	<div id="hero__background--fill" class="hero__background--fill"></div>

	<!-- G Logo -->
	<div id="section__hero__logo" class="anim__actor section__hero__logo">
		<div id="hero__logo__shadow" class="hero__logo__shadow"></div>

		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 48" id="hero__logo--grey" class="hero__logo hero__logo--grey">
		  <path d="M16 40c-4.4 0-8-3.6-8-8H0c0 8.8 7.2 16 16 16s16-7.2 16-16h-8c0 4.4-3.6 8-8 8z"/>
		  <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm0 24c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
		</svg>

		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 48" id="hero__logo--main" class="hero__logo hero__logo--main">
		  <path d="M16 40c-4.4 0-8-3.6-8-8H0c0 8.8 7.2 16 16 16s16-7.2 16-16h-8c0 4.4-3.6 8-8 8z"/>
		  <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm0 24c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
		</svg>
	</div>

	<canvas id="hero__canvas--fg" class="anim__actor hero__canvas--fg"></canvas>

	<div id="hero__linear-gradient" class="anim__actor hero__linear-gradient"></div>
</section>

<section class="section">
	<section class="section__hero">

		<!-- Masthead Snippet -->
		<?php snippet("snippet_masthead") ?>

		<section id="hero__footer" class="section__hero__footer">
			<div class="widget widget--icon-block">
			  <a href="<?php echo $site->codepen() ?>" class="widget__icon">
			    <?php snippet("svg_icon_codepen") ?>
			    <!-- <span class="widget__icon-label">CodePen</span> -->
			  </a>

			  <a href="<?php echo $site->dribbble() ?>" class="widget__icon">
			    <?php snippet("svg_icon_dribbble") ?>
			    <!-- <span class="widget__icon-label">Dribbble</span> -->
			  </a>

			  <a href="<?php echo $site->github() ?>" class="widget__icon">
			    <?php snippet("svg_icon_github") ?>
			    <!-- <span class="widget__icon-label">GitHub</span> -->
			  </a>

			  <a href="mailto:<?php echo $site->email() ?>" class="widget__icon">
			    <?php snippet("svg_icon_email") ?>
			    <!-- <span class="widget__icon-label">Email</span> -->
			  </a>
			</div>
		</section>
	</section>
</section>