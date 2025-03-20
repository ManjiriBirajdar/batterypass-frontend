<!-- HOMEPAGE -->
<script lang="ts">
	import bplogo from '$lib/assets/bp-landing-page.png';
		//css
		import '../app.postcss'

//logos and images
import arxumlogo from '$lib/assets/Arxum_logo_white.png'

//components
import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell class="bg-white">
	<!-- Top Navigation Bar -->
	<svelte:fragment slot="header">		
		<AppBar background="bg-primary-600">
			<svelte:fragment slot="lead">
				<img class="h-auto max-w-full" width="70px" src="{arxumlogo}" alt="Battery Passport Logo">
				<!-- <strong class="text-xl uppercase">Arxum</strong> -->
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-lg text-white" href="/">
					Home
				</a>
				<a class="btn btn-lg text-white" href="/about">
					About
				</a>
				<a class="btn btn-lg bg-white" href="/login">
					Login
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<div class="container h-full mx-auto flex justify-center items-center">
		<div class="space-y-10 text-center flex flex-col items-center">
			<h1 class="h1">
				<span class="bg-gradient-to-br from-blue-800 to-cyan-700 bg-clip-text text-transparent box-decoration-clone">Battery Passport Portal</span>
			</h1>
			<figure class="text-center flex flex-col items-center">
				<img class="rounded-lg w-9/12" 
				src={bplogo} 
				alt="Battery Passport Logo">
			</figure>
		</div>
	</div>
	<!-- Insert remaining content here -->
	<slot></slot>

	<!-- (footer) -->
	<svelte:fragment slot="pageFooter">
		<AppBar background="bg-white" class="items-center">
			<h5 class="h6">Copyright © 2023 | Arxum GmbH</h5>
		</AppBar>
	</svelte:fragment>

</AppShell>

