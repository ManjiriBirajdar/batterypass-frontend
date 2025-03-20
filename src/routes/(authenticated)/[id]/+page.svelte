<script lang="ts">
	//components
	import { AppShell } from '@skeletonlabs/skeleton'
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton'
	import { ConicGradient } from '@skeletonlabs/skeleton'
	import type { ConicStop } from '@skeletonlabs/skeleton'
	import information from '$lib/assets/pageID/information.png'
	import cert from '$lib/assets/pageID/certificate.png'
	import carbonfootprint from '$lib/assets/pageID/carbon-footprint.png'
	import supplychain from '$lib/assets/pageID/supply chain.png'
	import material from '$lib/assets/pageID/industry.png'
	import circularity from '$lib/assets/pageID/logistic.png'
	import perf from '$lib/assets/pageID/performance.png'
	import download from '$lib/assets/pageID/download.png'
	import type { PageData } from './$types'

	//Labels
	const section1 = 'General Information'
	const section2 = 'Labels and Certifications'
	const section3 = 'Carbon Footprint'	
	const section4 = 'Materials and Composition'
	const section5 = 'Circularity and Resource Efficiency'
	const section6 = 'Performance and Durability'
	const section7 = 'Supply Chain Due Deligence'

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
	const eu_declaration_of_conformity = data.post.meta[0].labels_and_certifications.eu_declaration_of_conformity
	const id_declaration_of_conformity = data.post.meta[0].labels_and_certifications.id_declaration_of_conformity
	const results_test_reports = data.post.meta[0].labels_and_certifications.results_test_reports
	const separate_collection_symbol = data.post.meta[0].labels_and_certifications.separate_collection_symbol
	const meaning_labels_and_symbols = data.post.meta[0].labels_and_certifications.meaning_labels_and_symbols
	const cadmium_and_lead_symbols = data.post.meta[0].labels_and_certifications.cadmium_and_lead_symbols

	//carbon_footprint
	const total_battery_carbon_footprint = data.post.meta[0].carbon_footprint.total_battery_carbon_footprint
	const raw_material_acquisition_and_pre_processing = data.post.meta[0].carbon_footprint.carbon_footprint_per_lifecycle_stage.raw_material_acquisition_and_pre_processing
	const main_product_production = data.post.meta[0].carbon_footprint.carbon_footprint_per_lifecycle_stage.main_product_production
	const distribution = data.post.meta[0].carbon_footprint.carbon_footprint_per_lifecycle_stage.distribution
	const end_of_life_and_recycling = data.post.meta[0].carbon_footprint.carbon_footprint_per_lifecycle_stage.end_of_life_and_recycling
	const performance_class = data.post.meta[0].carbon_footprint.performance_class
	const carbon_footprint_study_link = data.post.meta[0].carbon_footprint.carbon_footprint_study_link

	//battery_material_composition
	const critical_raw_materials = data.post.meta[0].battery_material_composition.critical_raw_materials
	const battery_chemistry = data.post.meta[0].battery_material_composition.battery_chemistry
	const cathode_name = data.post.meta[0].battery_material_composition.materials_information.cathode.name
	const cathode_related_identifiers = data.post.meta[0].battery_material_composition.materials_information.cathode.related_identifiers
	const cathode_weight = data.post.meta[0].battery_material_composition.materials_information.cathode.weight
	const anode_name = data.post.meta[0].battery_material_composition.materials_information.anode.name
	const anode_related_identifiers = data.post.meta[0].battery_material_composition.materials_information.anode.related_identifiers
	const anode_weight = data.post.meta[0].battery_material_composition.materials_information.anode.weight
	const electrolyte_name = data.post.meta[0].battery_material_composition.materials_information.electrolyte.name
	const electrolyte_related_identifiers = data.post.meta[0].battery_material_composition.materials_information.electrolyte.related_identifiers
	const electrolyte_weight = data.post.meta[0].battery_material_composition.materials_information.electrolyte.weight
	const hazardous_substances_name = data.post.meta[0].battery_material_composition.hazardous_substances.name
	const hazardous_substances_classes_and_categories = data.post.meta[0].battery_material_composition.hazardous_substances.classes_and_categories
	const hazardous_substances_name_related_identifiers = data.post.meta[0].battery_material_composition.hazardous_substances.related_identifiers
	const hazardous_substances_name_location = data.post.meta[0].battery_material_composition.hazardous_substances.location
	const hazardous_substances_concentration_range = data.post.meta[0].battery_material_composition.hazardous_substances.concentration_range
	const hazardous_substances_impact = data.post.meta[0].battery_material_composition.hazardous_substances.impact

	//circularity_and_resource_efficiency
	const manual_for_removal_of_battery_from_appliance = data.post.meta[0].circularity_and_resource_efficiency.spare_parts_information.manual_for_removal_of_battery_from_appliance
	const manual_for_disassembly_and_dismantling_of_battery_pack = data.post.meta[0].circularity_and_resource_efficiency.spare_parts_information.manual_for_disassembly_and_dismantling_of_battery_pack
	const postal_address = data.post.meta[0].circularity_and_resource_efficiency.spare_parts_information.postal_address
	const email_address = data.post.meta[0].circularity_and_resource_efficiency.spare_parts_information.email_address
	const web_address = data.post.meta[0].circularity_and_resource_efficiency.spare_parts_information.web_address
	const part_numbers_for_components = data.post.meta[0].circularity_and_resource_efficiency.spare_parts_information.part_numbers_for_components

	const extinguishing_agent = data.post.meta[0].circularity_and_resource_efficiency.safety_information.extinguishing_agent
	const safety_measures_and_instructions = data.post.meta[0].circularity_and_resource_efficiency.safety_information.safety_measures_and_instructions

	const pre_consum_nickel = data.post.meta[0].circularity_and_resource_efficiency.pre_consumer_recycled_material_shares.nickel
	const pre_consum_cobalt = data.post.meta[0].circularity_and_resource_efficiency.pre_consumer_recycled_material_shares.cobalt
	const pre_consum_lithium = data.post.meta[0].circularity_and_resource_efficiency.pre_consumer_recycled_material_shares.lithium
	const pre_consum_lead = data.post.meta[0].circularity_and_resource_efficiency.pre_consumer_recycled_material_shares.lead

	const post_consum_nickel = data.post.meta[0].circularity_and_resource_efficiency.post_consumer_recycled_material_shares.nickel
	const post_consum_cobalt = data.post.meta[0].circularity_and_resource_efficiency.post_consumer_recycled_material_shares.cobalt
	const post_consum_lithium = data.post.meta[0].circularity_and_resource_efficiency.post_consumer_recycled_material_shares.lithium
	const post_consum_lead = data.post.meta[0].circularity_and_resource_efficiency.post_consumer_recycled_material_shares.lead

	const renewable_content_share = data.post.meta[0].circularity_and_resource_efficiency.renewable_content_share

	const waste_prevention = data.post.meta[0].circularity_and_resource_efficiency.end_user_roles.waste_prevention
	const separate_collection = data.post.meta[0].circularity_and_resource_efficiency.end_user_roles.separate_collection

	const info_seperate_collection_and_recycling_operations = data.post.meta[0].circularity_and_resource_efficiency.info_seperate_collection_and_recycling_operations

	//performance_and_durability
	const state_of_certified_energy = data.post.meta[0].performance_and_durability.state_of_certified_energy
	const rated_capacity = data.post.meta[0].performance_and_durability.rated_capacity
	const remaining_capacity = data.post.meta[0].performance_and_durability.remaining_capacity
	const capacity_fade = data.post.meta[0].performance_and_durability.capacity_fade
	const state_of_charge = data.post.meta[0].performance_and_durability.state_of_charge
	const nominal_voltage = data.post.meta[0].performance_and_durability.nominal_voltage
	const minimum_voltage = data.post.meta[0].performance_and_durability.minimum_voltage
	const maximum_voltage = data.post.meta[0].performance_and_durability.maximum_voltage
	const original_power_capability = data.post.meta[0].performance_and_durability.original_power_capability
	const remaining_power_capability = data.post.meta[0].performance_and_durability.remaining_power_capability
	const power_capability_fade = data.post.meta[0].performance_and_durability.power_capability_fade
	const max_permitted_battery_power = data.post.meta[0].performance_and_durability.max_permitted_battery_power
	const initial_round_trip_energy_efficiency = data.post.meta[0].performance_and_durability.initial_round_trip_energy_efficiency
	const round_trip_energy_efficiency_at_50_percent_cycle_life = data.post.meta[0].performance_and_durability.round_trip_energy_efficiency_at_50_percent_cycle_life
	const remaining_round_trip_energy_efficiency = data.post.meta[0].performance_and_durability.remaining_round_trip_energy_efficiency
	const round_trip_energy_efficiency_fade = data.post.meta[0].performance_and_durability.round_trip_energy_efficiency_fade
	const initial_internal_resistance_on_battery_cell_level = data.post.meta[0].performance_and_durability.initial_internal_resistance_on_battery_cell_level
	const initial_internal_resistance_on_battery_pack_level = data.post.meta[0].performance_and_durability.initial_internal_resistance_on_battery_pack_level
	const expected_lifetime = data.post.meta[0].performance_and_durability.expected_lifetime
	const number_of_charge_discharge_cycles = data.post.meta[0].performance_and_durability.number_of_charge_discharge_cycles
	const cycle_life_reference_test = data.post.meta[0].performance_and_durability.cycle_life_reference_test
	const c_rate_of_relevant_cycle_life_test = data.post.meta[0].performance_and_durability.c_rate_of_relevant_cycle_life_test
	const capacity_threshold_for_exhaustion = data.post.meta[0].performance_and_durability.capacity_threshold_for_exhaustion
	const warranty_period_of_the_battery = data.post.meta[0].performance_and_durability.warranty_period_of_the_battery
	const date_of_putting_the_battery_into_service = data.post.meta[0].performance_and_durability.date_of_putting_the_battery_into_service

	const temperature_range_idle_state_lower_boundary = data.post.meta[0].performance_and_durability.temperature_range_idle_state.lower_boundary
	const temperature_range_idle_state_upper_boundary = data.post.meta[0].performance_and_durability.temperature_range_idle_state.upper_boundary

	const time_spent_in_extreme_temps_above_boundary = data.post.meta[0].performance_and_durability.time_spent_in_extreme_temps.above_boundary
	const time_spent_in_extreme_temps_below_boundary = data.post.meta[0].performance_and_durability.time_spent_in_extreme_temps.below_boundary

	const time_spent_charging_in_extreme_temps_above_boundary = data.post.meta[0].performance_and_durability.time_spent_charging_in_extreme_temps.above_boundary
	const time_spent_charging_in_extreme_temps_below_boundary = data.post.meta[0].performance_and_durability.time_spent_charging_in_extreme_temps.below_boundary

	const information_on_accidents = data.post.meta[0].performance_and_durability.information_on_accidents

	//supply_chain_due_diligence
	const information_of_due_diligence_report = data.post.meta[0].supply_chain_due_diligence.information_of_due_diligence_report
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
	<section class="grid grid-cols-4 md:grid-cols-4 gap-4 p-6">
		<div class="container h-full mx-auto flex-1 border-2 border-grey p-4 rounded-lg">
			<h2 class="text-sm bg-primary-50 w-max">General</h2>			
			<main class="max-w-md m-auto text-lg">
				<dl class="list-dl">
					<span class="flex-auto">
						<dt class="text-sm opacity-60 mt-3">Manufacturer Name</dt>
						<dd class="font-bold m-2">{manufacturer_name}</dd>
					</span>
					<hr/>
					<span class="flex-auto">
						<dt class="text-sm opacity-60 mt-3">Manufacturer Address</dt>
						<dd class="font-bold m-2">{manufacturer_address}</dd>
					</span>
				</dl>
			</main>
		</div>
		<div class="container h-full mx-auto flex-1 border-2 border-grey p-4 rounded-lg">
			<h2 class="text-sm bg-primary-50 w-max">Performance</h2>
			<main class="max-w-md m-auto text-lg">
				<dl class="list-dl">
					<span class="flex-auto">
						<dt class="text-sm opacity-60 mt-3">Rated Capacity</dt>
						<dd class="font-bold m-2">{rated_capacity}</dd>
					</span>
					<hr/>
					<span class="flex-auto">
						<dt class="text-sm opacity-60 mt-3">Original Power</dt>
						<dd class="font-bold m-2">{original_power_capability}</dd>
					</span>
				</dl>
			</main>
		</div>
		<div class="container h-full mx-auto flex-1 border-2 border-grey p-4 rounded-lg">
			<h2 class="text-sm bg-primary-50 w-max">Health</h2>
			<main class="max-w-md m-auto text-lg">
				<dl class="list-dl">
					<span class="flex-auto">
						<dt class="text-sm opacity-60 mt-3">State of Health (SoH)</dt>
						<dd class="font-bold m-2">{state_of_charge}</dd>
					</span>
					<hr/>
					<span class="flex-auto">
						<dt class="text-sm opacity-60 mt-3">Charging Cycle</dt>
						<dd class="font-bold m-2">{number_of_charge_discharge_cycles}</dd>
					</span>
				</dl>
			</main>
		</div>
	
		<div class="container h-full mx-auto border-2 border-grey p-4 rounded-lg">
			<h2 class="text-sm bg-primary-50 w-max">Sustainability</h2>
			<main class="max-w-md m-auto text-lg">
				<div class="grid-cols-3 flex space-x-4 gap-1">
					<div>						
						<dt class="text-sm opacity-60 mt-3">
							<div class="card p-4">
								<span class="flex-auto">
									<dt class="text-sm opacity-60">Ni</dt>
									<dd class="font-bold">{pre_consum_nickel}</dd>
								</span>
							</div>
						</dt>
						<dt class="text-sm opacity-60 mt-3">
							<div class="card p-4">
								<span class="flex-auto">
									<dt class="text-sm opacity-60">Co</dt>
									<dd class="font-bold">{pre_consum_cobalt}</dd>
								</span>
							</div>
						</dt>
					</div>
					<div class="pr-5">						
						<dt class="text-sm opacity-60 mt-3">
							<div class="card p-4">
								<span class="flex-auto">
									<dt class="text-sm opacity-60">Li</dt>
									<dd class="font-bold">{pre_consum_lithium}</dd>
								</span>
							</div>
						</dt>
						<dt class="text-sm opacity-60 mt-3">
							<div class="card p-4">
								<span class="flex-auto">
									<dt class="text-sm opacity-60">Pb</dt>
									<dd class="font-bold">{pre_consum_lead}</dd>
								</span>
							</div>
						</dt>
					</div>
					<span class="divider-vertical h-auto"></span>
					<div class="text-center justify-center">						
						<dt class="ml-4 opacity-60 mt-14">
							<span class="flex-auto">
								<dt class="text-sm opacity-60 mt-3">Carbon Footprint</dt>
								<dd class="font-bold mt-2">{total_battery_carbon_footprint}</dd>
								<dd class="text-xs opacity-60">kg CO2e</dd>
							</span>
						</dt>
					</div>
				</div>
			</main>			
		</div>
	</section>
	<section class="grid m-6 p-6 border-2 border-grey rounded-md">
		<div class="container h-full mx-auto flex-1 justify-center items-center w-full">			
			<TabGroup>
				<Tab bind:group={tabSet} name="section1" value={0}>
					<svelte:fragment slot="lead">
						<img class="icon-size h-6 w-6 flex" src={information} alt="" />
					</svelte:fragment>
					<span>{section1}</span>
				</Tab>
				<Tab bind:group={tabSet} name="section2" value={1}>
					<svelte:fragment slot="lead">
						<img class="icon-size h-6 w-6 flex" src={cert} alt="" />
					</svelte:fragment>
					<span>{section2}</span>
				</Tab>
				<Tab bind:group={tabSet} name="section3" value={2}>
					<svelte:fragment slot="lead">
						<img class="icon-size h-6 w-6 flex" src={carbonfootprint} alt="" />
					</svelte:fragment>
					<span>{section3}</span>
				</Tab>
				<Tab bind:group={tabSet} name="section4" value={3}>
					<svelte:fragment slot="lead">
						<img class="icon-size h-6 w-6 flex" src={material} alt="" />
					</svelte:fragment>
					<span>{section4}</span>
				</Tab>
				<Tab bind:group={tabSet} name="section5" value={4}>
					<svelte:fragment slot="lead">
						<img class="icon-size h-6 w-6 flex" src={circularity} alt="" />
					</svelte:fragment>
					<span>{section5}</span>
				</Tab>
				<Tab bind:group={tabSet} name="section6" value={5}>
					<svelte:fragment slot="lead">
						<img class="icon-size h-6 w-6 flex" src={perf} alt="" />
					</svelte:fragment>
					<span>{section6}</span>
				</Tab>
				<Tab bind:group={tabSet} name="section7" value={6}>
					<svelte:fragment slot="lead">
						<img class="icon-size h-6 w-6 flex" src={supplychain} alt="" />
					</svelte:fragment>
					<span>{section7}</span>
				</Tab>
				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					<div class="container mx-auto flex">
						{#if tabSet === 0} <!-- battery_information-->
							<div class="subheadings">
								<section class="grid grid-cols-4 md:grid-cols-4 gap-3 p-6 ">
									<div class="container h-full mx-auto flex-1 border-2 border-grey p-4 rounded-lg bg-gray-50">											
										<main class="max-w-md m-auto text-lg">
											<dl class="list-dl">
												<span class="flex-auto">
													<dt class="text-sm opacity-60 mt-3">Manufacturer Name</dt>
													<dd class="font-bold m-2">{manufacturer_name}</dd>
												</span>
												<hr/>
												<span class="flex-auto">
													<dt class="text-sm opacity-60 mt-3">Manufacturer Contact</dt>
													<dd class="font-bold m-2">{manufacturer_contact}</dd>
												</span>
												<hr/>
												<span class="flex-auto">
													<dt class="text-sm opacity-60 mt-3">Manufacturer Address</dt>
													<dd class="font-bold m-2">{manufacturer_address}</dd>
												</span>
											</dl>
										</main>
									</div>
									<div class="container h-full mx-auto flex-1 border-2 border-grey p-4 rounded-lg bg-gray-50">												
										<main class="max-w-md m-auto text-lg">
											<dl class="list-dl">
												<span class="flex-auto">
													<dt class="text-sm opacity-60 mt-3">Manufacturer Address</dt>
													<dd class="font-bold m-2">{manufacturer_address}</dd>
												</span>
												<hr/>
												<span class="flex-auto">
													<dt class="text-sm opacity-60 mt-3">Manufacturer Email</dt>
													<dd class="font-bold m-2">{manufacturer_email}</dd>
												</span>
												<hr/>
												<span class="flex-auto">
													<dt class="text-sm opacity-60 mt-3">Manufacturer Website</dt>
													<dd class="font-bold m-2">{manufacturer_website}</dd>
												</span>
											</dl>
										</main>
									</div>
									<div class="container h-full mx-auto flex-1 border-2 border-grey p-4 rounded-lg bg-gray-50">
												
										<main class="max-w-md m-auto text-lg">
											<dl class="list-dl">
												<span class="flex-auto">
													<dt class="text-sm opacity-60 mt-3">Manufacturer Place</dt>
													<dd class="font-bold m-2">{manufacturing_place}</dd>
												</span>
												<hr/>
												<span class="flex-auto">
													<dt class="text-sm opacity-60 mt-3">Manufacturer Date</dt>
													<dd class="font-bold m-2">{manufacturing_date}</dd>
												</span>
											</dl>
										</main>
									</div>
									<div class="container h-full mx-auto flex-1 border-2 border-grey p-4 rounded-lg bg-gray-50">											
										<main class="max-w-md m-auto text-lg">
											<dl class="list-dl">
												<span class="flex-auto">
													<dt class="text-sm opacity-60 mt-3">Battery Category</dt>
													<dd class="font-bold m-2">{battery_category}</dd>
												</span>
												<hr/>
												<span class="flex-auto">
													<dt class="text-sm opacity-60 mt-3">Battery Weight</dt>
													<dd class="font-bold m-2">{battery_weight}</dd>
												</span>
												<hr/>
												<span class="flex-auto">
													<dt class="text-sm opacity-60 mt-3">Battery Status</dt>
													<dd class="font-bold m-2">{battery_status}</dd>
												</span>
											</dl>
										</main>
									</div>
								</section>
							</div>
						{:else if tabSet === 1} <!-- labels_and_certifications-->
						<div class="subheadings">
							<section class="grid grid-cols-3 md:grid-cols-3 gap-2 p-6 w-fit">
								<div class="container w-fitflex-1 border-2 border-grey p-4 rounded-lg bg-gray-50">											
									<main class="max-w-md m-auto text-lg">
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">EU Declaration Of Conformity(Document)</dt>
												<dd class="m-2 text-xs"><a href="_target"><img class="icon-size h-6 w-6 flex" src={download} alt="" /></a></dd>
											</span>
											<hr/>
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">ID of EU Declaration Of Conformity</dt>
												<dd class="font-bold m-2">{id_declaration_of_conformity}</dd>
											</span>										
										</dl>
									</main>
								</div>
								<div class="container h-fit w-fit mx-auto flex-1 border-2 border-grey p-4 rounded-lg bg-gray-50">												
									<main class="max-w-md m-auto text-lg">
										<dl class="list-dl">											
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Results of Tests Reports (Document)</dt>
												<dd class="m-2 text-xs"><a href="_target"><img class="icon-size h-6 w-6 flex" src={download} alt="" /></a></dd>
											</span>
											<hr/>
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Separate Collection Symbol(Images)</dt>
												<dd class="m-2 text-xs"><a href="_target"><img class="icon-size h-6 w-6 flex" src={download} alt="" /></a></dd>
											</span>
										</dl>
									</main>
								</div>
								<div class="container h-fit w-fit mx-auto flex-1 border-2 border-grey p-4 rounded-lg bg-gray-50">											
									<main class="max-w-md m-auto text-lg">
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Meaning of Labels and Symbols</dt>
												<dd class=""><textarea class="text-xs w-full bg-transparent" disabled>{meaning_labels_and_symbols}</textarea></dd>
											</span>
											<hr/>
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Cadmium and Lead Symbols(Document)</dt>
												<dd class="m-2 text-xs"><a href="_target"><img class="icon-size h-6 w-6 flex" src={download} alt="" /></a></dd>
											</span>
										</dl>
									</main>
								</div>
							</section>
						</div>
						{:else if tabSet === 2}  <!-- carbon_footprint-->
						<div class="subheadings">
							<section class="grid grid-cols-3 md:grid-cols-3 gap-3 p-6 w-fit">
								<div class="container h-fit mx-auto flex-1 border-2 border-grey p-4 rounded-lg bg-gray-50">											
									<main class="max-w-md m-auto text-lg">
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Battery Carbon Footprint (kg CO2e)</dt>
												<dd class="font-bold m-2">{total_battery_carbon_footprint}</dd>
											</span>
										</dl>
									</main>
								</div>
								
								<div class="container h-fit mx-auto flex-1 border-2 border-grey p-4 rounded-lg bg-gray-50">	
									<h2 class="h6 w-max-w-md mx-auto pb-5 pt-2">
										Share of battery carbon footprint per lifecycle stage
									</h2>											
									<main class="max-w-md m-auto text-lg">
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Raw Material Acquisition and Pre-processing:</dt>
												<dd class="font-bold m-2">{raw_material_acquisition_and_pre_processing}</dd>
											</span>
											<hr/>
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Main Product Production</dt>
												<dd class="font-bold m-2">{main_product_production}</dd>
											</span>
											<hr/>
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Distribution</dt>
												<dd class="font-bold m-2">{distribution}</dd>
											</span>
											<hr/>
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">End of Life and Recycling:</dt>
												<dd class="font-bold m-2">{end_of_life_and_recycling}</dd>
											</span>
										</dl>
									</main>
								</div>
								<div class="container h-fit mx-auto flex-1 border-2 border-grey p-4 rounded-lg bg-gray-50">											
									<main class="max-w-md m-auto text-lg">
										<dl class="list-dl">
											
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Carbon footprint performance class</dt>
												<dd class="font-bold m-2">{performance_class}</dd>
											</span>
											<hr/>
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Web link to public carbon footprint study (Document):</dt>
												<dd class="m-2 text-xs"><a href="_target"><img class="icon-size h-6 w-6 flex" src={download} alt="" /></a></dd>
											</span>
										</dl>
									</main>
								</div>
							</section>
						</div>
						{:else if tabSet === 3}  <!-- battery_material_composition-->
						<div class="subheadings">
							<section class="grid grid-cols-3 md:grid-cols-3 gap-3 p-6 w-fit">
								<div class="container h-fit mx-auto flex-1 border-2 border-grey p-4 rounded-lg bg-gray-50">											
									<main class="max-w-md m-auto text-lg">
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Critical Raw Materials</dt>
												<dd class="font-bold m-2">{critical_raw_materials}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Battery Chemistry</dt>
												<dd class="font-bold m-2">{battery_chemistry}</dd>
											</span>
										</dl>
									</main>
								</div>
								
								<div class="container h-fit mx-auto flex-1 border-2 border-grey p-4 rounded-lg bg-gray-50">	
									<h2 class="h6 w-max-w-md mx-auto pb-2 pt-2">
										Material Information
									</h2>											
									<main class="max-w-md m-auto text-lg">
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-lg opacity-60 mt-3">Cathode</dt>
												<dd class="text-sm m-2">Name : {cathode_name}</dd>
												<dd class="text-sm m-2">Identifier : {cathode_related_identifiers}</dd>
												<dd class="text-sm m-2">Weight : {cathode_weight}</dd>
											</span>
											<hr/>
											<span class="flex-auto">
												<dt class="text-lg opacity-60 mt-3">Anode</dt>
												<dd class="text-sm m-2">Name : {anode_name}</dd>
												<dd class="text-sm m-2">Identifier : {anode_related_identifiers}</dd>
												<dd class="text-sm m-2">Weight : {anode_weight}</dd>
											</span>
											<hr/>
											<span class="flex-auto">
												<dt class="text-lg opacity-60 mt-3">Electrolyte</dt>
												<dd class="text-sm m-2">Name : {electrolyte_name}</dd>
												<dd class="text-sm m-2">Identifier : {electrolyte_related_identifiers}</dd>
												<dd class="text-sm m-2">Weight : {electrolyte_weight}</dd>
											</span>
										</dl>
									</main>
								</div>
								<div class="container h-fit mx-auto flex-1 border-2 border-grey p-4 rounded-lg bg-gray-50">											
									<main class="max-w-md m-auto text-lg">
										<dl class="list-dl">
											<span class="flex-auto">
												<h2 class="h6 w-max-w-md mx-auto pb-2 pt-2">
													Hazardous Substances
												</h2>		
												<!-- <dt class="text-lg opacity-60 mt-3">Hazardous Substances</dt> -->
												<dd class="text-sm m-2">Name : {hazardous_substances_name}</dd>
												<dd class="text-sm m-2">Hazard classes : {hazardous_substances_classes_and_categories}</dd>
												<dd class="text-sm m-2">Related identifiers : {hazardous_substances_name_related_identifiers}</dd>
												<dd class="text-sm m-2">Location : {hazardous_substances_name_location}</dd>
												<dd class="text-sm m-2">Concentration range : {hazardous_substances_concentration_range}</dd>
												<dd class="text-sm m-2">Impact of substances on the environment, human health, safety : {hazardous_substances_impact}</dd>
											</span>
										</dl>
									</main>
								</div>
							</section>
						</div>
						{:else if tabSet === 4} <!-- circularity_and_resource_efficiency-->
						<div class="subheadings">
							<section class="grid grid-cols-4 md:grid-cols-4 gap-3 p-6 ">
								<div class="container h-full mx-auto flex-1 border-2 border-grey p-4 rounded-lg bg-gray-50">											
									<main class="max-w-md m-auto text-lg">
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Manual for removal of the battery from the appliance (Document)</dt>
												<dd class="m-2 text-xs"><a href="_target"><img class="icon-size h-6 w-6 flex" src={download} alt="" /></a></dd>
											</span>
											<hr/>
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Manual for disassembly and dismantling of the battery pack (Document)</dt>
												<dd class="m-2 text-xs"><a href="_target"><img class="icon-size h-6 w-6 flex" src={download} alt="" /></a></dd>
											</span>
											<hr/>
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Postal address of sources for spare parts</dt>
												<dd class="font-bold m-2">{postal_address}</dd>
											</span>
											<hr/>
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">E-mail address of sources for spare parts</dt>
												<dd class="font-bold m-2">{email_address}</dd>
											</span>
											<hr/>
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Web address of sources for spare parts (Document Link)</dt>
												<dd class="m-2 text-xs"><a href="_target"><img class="icon-size h-6 w-6 flex" src={download} alt="" /></a></dd>
											</span>
											<hr/>
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Part numbers for components (Document)</dt>
												<dd class="m-2 text-xs"><a href="_target"><img class="icon-size h-6 w-6 flex" src={download} alt="" /></a></dd>
											</span>
										</dl>
									</main>
								</div>
								<div class="container h-fit mx-auto flex-1 border-2 border-grey p-4 rounded-lg bg-gray-50">											
									<main class="max-w-md m-auto text-lg">
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Extinguishing agent</dt>
												<dd class="font-bold m-2">{extinguishing_agent}</dd>
											</span>
											<hr/>
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Safety measures/instructions (Document)</dt>
												<dd class="m-2 text-xs"><a href="_target"><img class="icon-size h-6 w-6 flex" src={download} alt="" /></a></dd>
											</span>
										</dl>
									</main>
								</div>
								<div class="container h-fit mx-auto flex-1 border-2 border-grey p-4 rounded-lg bg-gray-50">												
									<main class="max-w-md m-auto text-lg">
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-lg opacity-60 mt-3">Pre-consumer recycled material shares</dt>
												<dd class="text-sm m-2">Nickel : {pre_consum_nickel}</dd>
												<dd class="text-sm m-2">Cobalt : {pre_consum_cobalt}</dd>
												<dd class="text-sm m-2">Lithium : {pre_consum_lithium}</dd>
												<dd class="text-sm m-2">Lead : {pre_consum_lead}</dd>
											</span>
											<hr/>
											<span class="flex-auto">
												<dt class="text-lg opacity-60 mt-3">Post-consumer recycled material shares</dt>
												<dd class="text-sm m-2">Nickel : {post_consum_nickel}</dd>
												<dd class="text-sm m-2">Cobalt : {post_consum_cobalt}</dd>
												<dd class="text-sm m-2">Lithium : {post_consum_lithium}</dd>
												<dd class="text-sm m-2">Lead : {post_consum_lead}</dd>
											</span>
										</dl>
									</main>
								</div>
								<div class="container h-fit mx-auto flex-1 border-2 border-grey p-4 rounded-lg bg-gray-50">
									<main class="max-w-md m-auto text-lg">
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Renewable content share</dt>
												<dd class="font-bold m-2">{renewable_content_share}</dd>
											</span>
											<hr/>
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Role of end-users in contributing to waste prevention (Document)</dt>
												<dd class="m-2 text-xs"><a href="_target"><img class="icon-size h-6 w-6 flex" src={download} alt="" /></a></dd>
											</span>
											<hr/>
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Role of end- users in contributing to the separate collection of waste batteries
													(Document)</dt>
												<dd class="m-2 text-xs"><a href="_target"><img class="icon-size h-6 w-6 flex" src={download} alt="" /></a></dd>
											</span>
											<hr/>
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Information on separate collection, take back, collection points and preparing for
													re-use, preparing for repurposing and recycling operations (Document)</dt>
												<dd class="m-2 text-xs"><a href="_target"><img class="icon-size h-6 w-6 flex" src={download} alt="" /></a></dd>
											</span>
										</dl>
									</main>
								</div>
							</section>
						</div>
						{:else if tabSet === 5} 	<!-- performance_and_durability-->
						<div class="subheadings">
							<section class="grid grid-cols-4 md:grid-cols-4 gap-3 p-6 w-fit">
								<div class="container h-fit mx-auto flex-1 border-2 border-grey p-4 rounded-lg bg-gray-50">											
									<main class="max-w-md m-auto text-lg">
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">State of certified energy (SOCE)</dt>
												<dd class="font-bold m-2">{state_of_certified_energy}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Rated capacity</dt>
												<dd class="font-bold m-2">{rated_capacity}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Remaining capacity</dt>
												<dd class="font-bold m-2">{remaining_capacity}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Capacity fade</dt>
												<dd class="font-bold m-2">{capacity_fade}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">State of Charge (SoC)</dt>
												<dd class="font-bold m-2">{state_of_charge}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Nominal voltage</dt>
												<dd class="font-bold m-2">{nominal_voltage}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Minimum voltage</dt>
												<dd class="font-bold m-2">{minimum_voltage}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Maximum voltage</dt>
												<dd class="font-bold m-2">{maximum_voltage}</dd>
											</span>
										</dl>
									</main>
								</div>		
								<div class="container h-fit mx-auto flex-1 border-2 border-grey p-4 rounded-lg bg-gray-50">											
									<main class="max-w-md m-auto text-lg">
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Original power capability</dt>
												<dd class="font-bold m-2">{original_power_capability}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Remaining power capability</dt>
												<dd class="font-bold m-2">{remaining_power_capability}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Power capability fade</dt>
												<dd class="font-bold m-2">{power_capability_fade}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Maximum permitted battery power</dt>
												<dd class="font-bold m-2">{max_permitted_battery_power}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Initial round trip energy efficiency</dt>
												<dd class="font-bold m-2">{initial_round_trip_energy_efficiency}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Round trip energy efficiency at 50% of cycle life</dt>
												<dd class="font-bold m-2">{round_trip_energy_efficiency_at_50_percent_cycle_life}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Remaining round trip energy efficiency</dt>
												<dd class="font-bold m-2">{remaining_round_trip_energy_efficiency}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Round trip energy efficiency fade</dt>
												<dd class="font-bold m-2">{round_trip_energy_efficiency_fade}</dd>
											</span>
										</dl>
									</main>
								</div>	
								<div class="container h-fit mx-auto flex-1 border-2 border-grey p-4 rounded-lg bg-gray-50">											
									<main class="max-w-md m-auto text-lg">
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Initial internal resistance on battery cell level</dt>
												<dd class="font-bold m-2">{initial_internal_resistance_on_battery_cell_level}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Initial internal resistance on battery pack level</dt>
												<dd class="font-bold m-2">{initial_internal_resistance_on_battery_pack_level}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Expected lifetime (Number of charge-discharge cycles)</dt>
												<dd class="font-bold m-2">{expected_lifetime}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Number of (full) charge-discharge cycles</dt>
												<dd class="font-bold m-2">{number_of_charge_discharge_cycles}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Cycle-life reference test</dt>
												<dd class="font-bold m-2">{cycle_life_reference_test}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">C-rate of relevant cycle-life test</dt>
												<dd class="font-bold m-2">{c_rate_of_relevant_cycle_life_test}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Capacity threshold for exhaustion</dt>
												<dd class="font-bold m-2">{capacity_threshold_for_exhaustion}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Warranty period of the battery</dt>
												<dd class="font-bold m-2">{warranty_period_of_the_battery}</dd>
											</span>
										</dl>
									</main>
								</div>		
								<div class="container h-fit mx-auto flex-1 border-2 border-grey p-4 rounded-lg bg-gray-50">											
									<main class="max-w-md m-auto text-lg">
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Date of putting the battery into service</dt>
												<dd class="font-bold m-2">{date_of_putting_the_battery_into_service}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Temperature range idle state (lower boundary)</dt>
												<dd class="font-bold m-2">{temperature_range_idle_state_lower_boundary}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Temperature range idle state (upper boundary)</dt>
												<dd class="font-bold m-2">{temperature_range_idle_state_upper_boundary}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Time spent in extreme temperatures above boundary</dt>
												<dd class="font-bold m-2">{time_spent_in_extreme_temps_above_boundary}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Time spent in extreme temperatures below boundary</dt>
												<dd class="font-bold m-2">{time_spent_in_extreme_temps_below_boundary}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Time spent charging during extreme temperatures above boundary</dt>
												<dd class="font-bold m-2">{time_spent_charging_in_extreme_temps_above_boundary}</dd>
											</span>
										</dl>
										<hr/>
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Time spent charging during extreme temperatures below boundary</dt>
												<dd class="font-bold m-2">{time_spent_charging_in_extreme_temps_below_boundary}</dd>
											</span>
										</dl>
										<hr class="mb-6"/>
										<dl class="list-dl alert variant-filled-warning">
											<span class="flex-auto">
												<dt class="text-sm opacity-60">Information on accidents</dt>
												<dd class="font-bold m-2">{information_on_accidents}</dd>
											</span>
										</dl>
									</main>
								</div>								
							</section>
						</div>
						{:else if tabSet === 6} <!-- battery_material_composition-->
						<div class="subheadings">
							<section class="grid grid-cols-3 md:grid-cols-3 gap-3 p-6 w-fit">
								<div class="container h-fit mx-auto flex-1 border-2 border-grey p-4 rounded-lg bg-gray-50">											
									<main class="max-w-md m-auto text-lg">
										<dl class="list-dl">
											<span class="flex-auto">
												<dt class="text-sm opacity-60 mt-3">Information of the Due Diligence Report (Document)</dt>
												<dd class="m-2 text-xs"><a href="_target"><img class="icon-size h-6 w-6 flex" src={download} alt="" /></a></dd>
											</span>
										</dl>
									</main>
								</div>							
							</section>
						</div>
						{/if}
					</div>
				</svelte:fragment>
			</TabGroup>
		</div>
	</section>
</AppShell>