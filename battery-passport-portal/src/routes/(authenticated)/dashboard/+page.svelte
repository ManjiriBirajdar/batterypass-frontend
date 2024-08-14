<!-- LAYOUT FOR ALL THE PAGES -->
<script lang="ts">
	//logos and images
	import update from '$lib/assets/dashboard/change.png';
	import myBatteries from '$lib/assets/dashboard/charging-status.png';
	import search from '$lib/assets/dashboard/search.png';

	//components
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell>

	<div class="container h-full mx-auto flex justify-center items-center p-40">
		<div class="logo-cloud gap-20 flex-1 al m-4">
			<a class="logo-item h-10 w-45" href="/batteries">
				<img class="h-10 w-10" src={myBatteries} alt="" />
				<h1 class="h3">
					<span
						class="bg-gradient-to-br from-primary-600 to-primary-500 bg-clip-text text-transparent box-decoration-clone"
						>My Batteries
					</span>
				</h1>
			</a>
			<a class="logo-item h-10 w-45" href="/create">
				<img class="h-10 w-10" src={search} alt="" />
				<h1 class="h3">
					<span
						class="bg-gradient-to-br from-primary-600 to-primary-500 bg-clip-text text-transparent box-decoration-clone"
						>Create</span
					>
				</h1>
			</a>
			<a class="logo-item h-10 w-45" href="/">
				<img class="h-10 w-10" src={search} alt="" />
				<h1 class="h3">
					<span
						class="bg-gradient-to-br from-primary-600 to-primary-500 bg-clip-text text-transparent box-decoration-clone"
						>Search</span
					>
				</h1>
			</a>
			<a class="logo-item h-10 w-45" href="/">
				<img class="h-10 w-10" src={update} alt="" />
				<h1 class="h3">
					<span
						class="bg-gradient-to-br from-primary-600 to-primary-500 bg-clip-text text-transparent box-decoration-clone"
						>Update</span
					>
				</h1>
			</a>
		</div>
	</div>
	
</AppShell>
