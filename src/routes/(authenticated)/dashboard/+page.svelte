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
	<section class="grid grid-cols-2 md:grid-cols-2 gap-4 p-6 mt-60">
		<div class="container h-full mx-auto flex-1 p-4 rounded-lg">
			<main class="max-w-md m-auto text-lg">
				<a class="logo-item h-10 w-45 rounded-lg border-2 border-grey" href="/batteries">
					<img class="h-10 w-10" src={myBatteries} alt="" />
					<h1 class="h3">
						<span
							class="bg-gradient-to-br from-primary-600 to-primary-500 bg-clip-text text-transparent box-decoration-clone"
							>Batteries
						</span>
					</h1>
				</a>				
			</main>
		</div>
		<div class="container h-full mx-auto flex-1 p-4">
			<main class="max-w-md m-auto text-lg">
				<a class="logo-item h-10 w-45 rounded-lg border-2 border-grey" href="/create">
					<img class="h-10 w-10" src={search} alt="" />
					<h1 class="h3">
						<span
							class="bg-gradient-to-br from-primary-600 to-primary-500 bg-clip-text text-transparent box-decoration-clone"
							>Create</span
						>
					</h1>
				</a>
			</main>
		</div>
		<div class="container h-full mx-auto flex-1 p-4">			
			<main class="max-w-md m-auto text-lg">
				<a class="logo-item h-10 w-45 rounded-lg border-2 border-grey" href="/">
					<img class="h-10 w-10" src={search} alt="" />
					<h1 class="h3">
						<span
							class="bg-gradient-to-br from-primary-600 to-primary-500 bg-clip-text text-transparent box-decoration-clone"
							>Search</span
						>
					</h1>
				</a>
			</main>
		</div>	
		<div class="container h-full mx-auto p-4">			
			<main class="max-w-md m-auto text-lg">
				<a class="logo-item h-10 w-45 rounded-lg order-2 border-grey" href="/">
					<img class="h-10 w-10" src={update} alt="" />
					<h1 class="h3">
						<span
							class="bg-gradient-to-br from-primary-600 to-primary-500 bg-clip-text text-transparent box-decoration-clone"
							>Update</span
						>
					</h1>
				</a>
			</main>			
		</div>
	</section>	
</AppShell>
