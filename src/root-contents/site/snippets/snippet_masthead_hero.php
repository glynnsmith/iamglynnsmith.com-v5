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
