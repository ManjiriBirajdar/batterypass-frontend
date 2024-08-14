<script lang="ts">
	//css
	import '../../app.postcss'

    //logos and images
    import arxumlogo from '$lib/assets/Arxum_logo_white.png'

    //components
    import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';
	import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';

	initializeStores();

	//Side-Menu Drawer component
	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<!-- SIDE NAVIGATION -->
<Drawer>
	<Navigation />
</Drawer>

<AppShell slotSidebarLeft="bg-surface-500/5 w-60 p-1" class="bg-white">
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

	<!-- SIDE NAVIGATION Bar-->	
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
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


