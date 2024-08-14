<script lang="ts">
	//components
	import { AppShell } from '@skeletonlabs/skeleton'
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton'
	import { ConicGradient } from '@skeletonlabs/skeleton'
	import type { ConicStop } from '@skeletonlabs/skeleton'
	import cert from '$lib/assets/pageID/certificate.png'
	import carbonfootprint from '$lib/assets/pageID/carbon-footprint.png'
	import supplychain from '$lib/assets/pageID/supply chain.png'
	import material from '$lib/assets/pageID/industry.png'
	import circularity from '$lib/assets/pageID/logistic.png'
	import perf from '$lib/assets/pageID/performance.png'
	import type { PageData } from './$types'

	//Labels
	const section1 = 'General Information'
	const section2 = 'Labels and certifications'
	const section3 = 'Carbon footprint'
	const section4 = 'Supply chain due deligence'
	const section5 = 'Materials and composition'
	const section6 = 'Circularity and resource efficiency'
	const section7 = 'Performance and durability'

	const conicStops: ConicStop[] = [
		{ label: 'One', color: 'rgba(5, 195, 255, 1)', start: 0, end: 10 },
		{ label: 'Two', color: 'rgba(5, 117, 255, 1)', start: 10, end: 35 }
	]

	export let data: PageData
	let tabSet: number = 0

	//battery_information : battery_identifier & manufacturer_identification
	const battery_identifier = data.post.meta[0].battery_information.battery_identifier
	const manufacturer_name =  data.post.meta[0].battery_information.manufacturer_identification.manufacturer_name
	const manufacturer_contact = data.post.meta[0].battery_information.manufacturer_identification.manufacturer_contact
	const manufacturer_address = data.post.meta[0].battery_information.manufacturer_identification.manufacturer_address
	const manufacturer_email = data.post.meta[0].battery_information.manufacturer_identification.manufacturer_email
	const manufacturer_website = data.post.meta[0].battery_information.manufacturer_identification.manufacturer_website
	const manufacturing_date = data.post.meta[0].battery_information.manufacturer_identification.manufacturing_date
	const manufacturing_place = data.post.meta[0].battery_information.manufacturer_identification.manufacturing_place
	const battery_category = data.post.meta[0].battery_information.manufacturer_identification.battery_category
	const battery_weight = data.post.meta[0].battery_information.manufacturer_identification.battery_weight
	const battery_status = data.post.meta[0].battery_information.manufacturer_identification.battery_status

	//labels_and_certifications

	//carbon_footprint

	//battery_material_composition

	//circularity_and_resource_efficiency

	//performance_and_durability

	//supply_chain_due_diligence
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-1">
	<svelte:fragment slot="pageHeader">
		<div class="container h-full mx-auto flex justify-center items-center pt-10 pb-2">
			<div class="justify-center items-center">
				<h1 class="h2 pb-4">
					<span class="bg-gradient-to-br from-blue-900 to-cyan-800 bg-clip-text text-transparent box-decoration-clone">
						Battery Passport
					</span>
				</h1>
				<h1 class="h4">
					<span class="bg-gradient-to-br from-blue-900 to-cyan-800 bg-clip-text text-transparent box-decoration-clone pl-5">
						Battery ID : <span>{battery_identifier}</span>
					</span>
				</h1>
			</div>
		</div>
	</svelte:fragment>
	<section class="grid grid-cols-2 md:grid-cols-2 gap-4 p-6">
		<div class="container h-full mx-auto flex-1 border-2 border-blue-100 p-4 bg-primary-50">
			<h2 class="h3 w-max mx-auto pb-5">General Information</h2>
			<main class="max-w-md m-auto text-lg">
				<!-- Manufacturing Details: -->
				<dl class="list-dl">
					<span class="flex-auto">
						<dt class="font-bold">Manufacturer Name</dt>
						<dd class="text-sm opacity-60">{manufacturer_name}</dd>
					</span>
					<span class="flex-auto">
						<dt class="font-bold">Manufacturer Address</dt>
						<dd class="text-sm opacity-60">{manufacturer_address}</dd>
					</span>
					<span class="flex-auto">
						<dt class="font-bold">Manufacturing Date</dt>
						<dd class="text-sm opacity-60">{manufacturing_date}</dd>
					</span>
					<span class="flex-auto">
						<dt class="font-bold">Manufacturing Place</dt>
						<dd class="text-sm opacity-60">{manufacturing_place}</dd>
					</span>
				</dl>
			</main>
		</div>
		<div
			class="container h-full mx-auto flex-1 justify-center items-center border-2 border-blue-100 p-4 bg-primary-50"
		>
			<h2 class="h3 w-max mx-auto pb-5">Battery Information</h2>
			<main class="max-w-md m-auto"></main>
		</div>
		<!-- <div class="grid grid-cols-2 border-2 border-rose-600 text-center">
			<h3>General Information</h3>
			<div class="col-start-1 col-end-2">
				<div class="text-lg text-left m-20">
					Battery Category:
					<dl class="list-dl">
						<div>
							<div>
							<span class="badge-icon p-4 variant-soft-primary">
								<i class="fa-solid fa-book" /></span
							>
							<span class="flex-auto">
								<dt class="font-bold">Type</dt>
								<dd class="text-sm opacity-50">{data.post.level1Tags[4].split(":")[1]}</dd>
							</span>
							<span class="flex-auto">
								<dt class="font-bold">Capacity</dt>
								<dd class="text-sm opacity-50">{data.post.level1Tags[1].split(":")[1]}</dd>
							</span>
							<span class="flex-auto">
								<dt class="font-bold">Voltage</dt>
								<dd class="text-sm opacity-50">{data.post.level1Tags[3].split(":")[1]}</dd>
							</span>
						</div>
						</div>
						
					</dl>
				</div>
			</div>
			<div class="col-start-2 col-end-3 p-20">
				<div class="text-lg text-left m-20">
					Battery Weight:
					<dl class="list-dl">
						<div>
							<div>
								<span class="badge-icon p-4 variant-soft-primary">
									<i class="fa-solid fa-book" /></span
								>
								<span class="flex-auto">
									<dt class="font-bold">Total Weight</dt>
									<dd class="text-sm opacity-50">450 kg</dd>
								</span>
								<span class="flex-auto">
									<dt class="font-bold">Dimensions (L x W x H)</dt>
									<dd class="text-sm opacity-50">1.2 m x 0.8 m x 0.4 m</dd>
								</span>
								<span class="flex-auto">
									<dt class="font-bold">Weight of Battery Modules</dt>
									<dd class="text-sm opacity-50">400 kg</dd>
								</span>
								<span class="flex-auto">
									<dt class="font-bold">Weight of BMS</dt>
									<dd class="text-sm opacity-50">50 kg</dd>
								</span>
							</div>
						</div>
					</dl>
				</div>
				<div class="text-lg text-left m-20">
					Battery Status:
					<ConicGradient stops={conicStops}></ConicGradient>
				</div>
			</div>
		</div> -->
	</section>
	<section class="grid m-6 p-6 border-2 border-blue-100">
		<div class="container h-full mx-auto flex-1 justify-center items-center">
			<div><h3>Detailed Information</h3></div>
			<TabGroup>
				<Tab bind:group={tabSet} name="section2" value={0}>
					<svelte:fragment slot="lead">
						<img class="icon-size h-6 w-6 flex" src={cert} alt="" />
					</svelte:fragment>
					<span>{section2}</span>
				</Tab>
				<Tab bind:group={tabSet} name="section3" value={1}>
					<svelte:fragment slot="lead">
						<img class="icon-size h-6 w-6 flex" src={carbonfootprint} alt="" />
					</svelte:fragment>
					<span>{section3}</span>
				</Tab>
				<Tab bind:group={tabSet} name="section4" value={2}>
					<svelte:fragment slot="lead">
						<img class="icon-size h-6 w-6 flex" src={supplychain} alt="" />
					</svelte:fragment>
					<span>{section4}</span>
				</Tab>
				<Tab bind:group={tabSet} name="section5" value={3}>
					<svelte:fragment slot="lead">
						<img class="icon-size h-6 w-6 flex" src={material} alt="" />
					</svelte:fragment>
					<span>{section5}</span>
				</Tab>
				<Tab bind:group={tabSet} name="section6" value={4}>
					<svelte:fragment slot="lead">
						<img class="icon-size h-6 w-6 flex" src={circularity} alt="" />
					</svelte:fragment>
					<span>{section6}</span>
				</Tab>
				<Tab bind:group={tabSet} name="section7" value={5}>
					<svelte:fragment slot="lead">
						<img class="icon-size h-6 w-6 flex" src={perf} alt="" />
					</svelte:fragment>
					<span>{section7}</span>
				</Tab>
				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					<div class="container mx-auto flex-1 justify-center items-center">
						{#if tabSet === 0}
							<div class="subheadings">
								Certificates:
								<dl class="list-dl">
									<div>
										<span class="badge-icon p-4 variant-soft-primary">
											<i class="fa-solid fa-book" />
										</span>
										<span class="flex-auto">
											<dt class="font-bold">UN 38.3 Certification</dt>
											<dd class="text-sm opacity-50">450 kg</dd>
										</span>
										<span class="flex-auto">
											<dt class="font-bold">ISO 26262 Functional Safety Certification</dt>
											<dd class="text-sm opacity-50">1.2 m x 0.8 m x 0.4 m</dd>
										</span>
										<span class="flex-auto">
											<dt class="font-bold">CE Marking</dt>
											<dd class="text-sm opacity-50">400 kg</dd>
										</span>
										<span class="flex-auto">
											<dt class="font-bold">UL 1642 Safety Certification</dt>
											<dd class="text-sm opacity-50">50 kg</dd>
										</span>
										<span class="flex-auto">
											<dt class="font-bold">E-Mark Certification</dt>
											<dd class="text-sm opacity-50">50 kg</dd>
										</span>
										<span class="flex-auto">
											<dt class="font-bold">Energy Star Certification</dt>
											<dd class="text-sm opacity-50">50 kg</dd>
										</span>
									</div>
									<!-- ... -->
								</dl>
							</div>
						{:else if tabSet === 1}
							(Carbon footprint)
						{:else if tabSet === 2}
							(Supply chain due deligence)
						{:else if tabSet === 3}
							(Materials and composition)
						{:else if tabSet === 4}
							(Circularity and resource efficienc)
						{:else if tabSet === 5}
							(Performance and durability)
						{/if}
					</div>
				</svelte:fragment>
			</TabGroup>
		</div>
	</section>
</AppShell>
