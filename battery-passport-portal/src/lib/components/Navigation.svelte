<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
</script>
<nav class="list-nav p-4 h-full mx-auto flex justify-center">
	<ul>
		<li class="btn w-auto"><Avatar rounded="rounded-full"/></li>
		<li class="btn w-auto"><h2 class="w-auto text-xl">Dashboard</h2></li>
		<hr />
		<li class="btn w-auto"><a href="/dashboard">Home</a></li>
		<li class="btn w-auto"><a href="/batteries">Batteries</a></li>
		<li class="btn w-auto"><a href="/logout">Logout</a></li>
	</ul>
</nav>