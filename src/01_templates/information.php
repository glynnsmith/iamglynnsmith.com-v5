<?php snippet("snippet_head") ?>

<section class="section">
	<?php snippet("snippet_masthead") ?>
	<!-- Section Title -->
	<?php snippet("snippet_page_header") ?>

	<!-- Section Main -->
	<main class="section__main clearfix">

	<!-- Section Sidebar -->

		<aside class="section__sidebar">
			<div class="mugshot"></div>
			<?php snippet("snippet_network_side") ?>
		</aside>

		<!-- Section Content -->
		<article class="section__content">
		  <?php echo page("information")->textstart()->kirbytext() ?>

			<?php snippet("snippet_skills_main") ?>

		  <?php echo page("information")->textend()->kirbytext() ?>
		</article>

		<?php snippet("snippet_skills_sidebar") ?>
	</main>
</section>

<?php snippet("snippet_footer") ?>

<button class="to-top-button" id="button-top"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="button-icon"><path d="M0 0h32v8H0zm16 8L.4 23.7 6 29.3l10-10 10 10 5.7-5.6"/></svg></button>

<?php snippet("snippet_js_info") ?>
<?php snippet("snippet_scripts_footer") ?>

</body>
