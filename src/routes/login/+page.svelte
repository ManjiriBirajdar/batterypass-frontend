<script lang="ts">
	const cBase = 'card bg-white p-6 w-modal shadow-xl space-y-4 flex justify-center border border-primary-300'
	const cForm = 'p-4 space-y-4 rounded-container-token'

	import { focusTrap } from '@skeletonlabs/skeleton';
	let isFocused: boolean = true;
</script>

<!-- @component This example creates a simple form modal. -->

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="w-fit {cBase}">
		<form use:focusTrap={isFocused} class="modal-form {cForm}" method="POST">
			<h2 class="h3 flex justify-center items-center">Sign in</h2>
			<label class="label">
				<span>Username</span>
				<input name="email" class="input variant-form-material bg-white rounded-lg" type="email" placeholder="Enter Username" required  />
			</label>
			<label class="label">
				<span>Password</span>
				<input
					name="password"
					class="input  variant-form-material bg-white"
					type="password"
					placeholder="Enter Password"
					required
				/>
			</label>
			<footer class="modal-footer flex justify-center items-center pt-4">
				<button class="btn bg-primary-600 text-white text-lg w-full" type="submit">Login</button>
			</footer>
		</form>
	</div>
</div>
