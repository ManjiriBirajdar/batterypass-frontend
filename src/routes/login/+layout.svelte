<script lang="ts">
	//css
	import '../../app.postcss'

    //logos and images
    import arxumlogo from '$lib/assets/Arxum_logo_white.png'

    //components
    import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- TOP Navigation -->
<AppShell class="bg-white">
	<!-- Top Navigation Bar -->
	<svelte:fragment slot="header">		
		<AppBar background="bg-primary-600">
			<svelte:fragment slot="lead">
				<img class="h-auto max-w-full" width="70px" src="{arxumlogo}" alt="Battery Passport Logo">
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-lg text-white" href="/">
					Home
				</a>
				<a class="btn btn-lg text-white" href="/about">
					About
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	
	<!-- Insert remaining content here -->
	<slot></slot>

	<!-- (footer) -->
	<svelte:fragment slot="pageFooter">
		<AppBar background="bg-white" class="items-center">
			<h5 class="h6">Copyright © 2023 | Arxum GmbH</h5>
		</AppBar>
	</svelte:fragment>

</AppShell>


