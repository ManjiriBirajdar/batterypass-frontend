<script lang="ts">
	const cBase = 'card p-4 w-modal shadow-xl space-y-4 flex justify-center'
	const cForm = 'p-4 space-y-4 rounded-container-token'

	import type { ActionData } from './$types';
</script>

<!-- @component This example creates a simple form modal. -->

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="w-fit {cBase}">
		<form class="modal-form {cForm}" method="POST">
			<h2 class="h3 flex justify-center items-center">Sign in</h2>
			<label class="label">
				<span>Email</span>
				<input name="email" class="input" type="email" placeholder="Enter Email" required />
			</label>
			<label class="label">
				<span>Password</span>
				<input
					name="password"
					class="input"
					type="password"
					placeholder="Enter Password"
					required
				/>
			</label>
			<footer class="modal-footer flex justify-center items-center">
				<button class="btn bg-primary-600 text-white text-lg w-full" type="submit">Login</button>
			</footer>
		</form>
	</div>
</div>
