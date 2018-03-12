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

<?php snippet("snippet_back_to_top") ?>

<?php snippet("snippet_js_info") ?>
<?php snippet("snippet_scripts_footer") ?>

</body>
