<script lang="ts">
	//components
	import { AppShell } from '@skeletonlabs/skeleton'
	import '../../../app.postcss'
	import jsonData from '../../../lib/data/sample-data.json'
</script>

<AppShell slotSidebarLeft="bg-surface-500/5">
	<svelte:fragment slot="pageHeader">
		<div class="container h-full mx-auto flex justify-center items-center pt-10 pb-10">
			<div>
				<h1 class="h1">
					<span
						class="bg-gradient-to-br from-blue-800 to-cyan-700 bg-clip-text text-transparent box-decoration-clone"
					>
						Create Battery Passport (Demo)
					</span>
				</h1>
				<label class="block mb-2 mt-10" for="battery-unique-identifier"
					>Battery Unique Identifier:</label
				>
				<input
					type="text"
					bind:value={jsonData.battery_information.battery_identifier}
					class="w-full p-2 mb-4 rounded-md border-gray-300 shadow-sm focus:border-primary-300"
					id="battery-unique-identifier"
					name="battery-unique-identifier"
					placeholder="Enter Battery Id"
				/>
			</div>
		</div>
	</svelte:fragment>

	<form method="POST">
		<section class="grid grid-cols-2 md:grid-cols-2 gap-4 p-4">
			<div
				class="container h-full mx-auto flex-1 justify-center items-center border-2 border-blue-100 p-4"
			>
				<h2 class="h3 w-max mx-auto pb-5">General Information</h2>
				<main class="max-w-md m-auto">
					<label class="block mb-2" for="ManufacturerIdentification"
						>Manufacturer’s Identification:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4 rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						id="ManufacturerName"
						name="ManufacturerName"
						placeholder="Enter Manufacturer Name"
						bind:value={jsonData.battery_information.manufacturer_identification.manufacturer_name}
					/>

					<input
						type="text"
						class="w-full p-2 mb-4 rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						id="ManufacturerContact"
						name="ManufacturerContact"
						placeholder="Enter Manufacturer Contact"
						bind:value={jsonData.battery_information.manufacturer_identification
							.manufacturer_contact}
					/>
					<input
						type="text"
						class="w-full p-2 mb-4 rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						id="ManufacturerAddress"
						name="ManufacturerAddress"
						placeholder="Enter Manufacturer Address"
						bind:value={jsonData.battery_information.manufacturer_identification
							.manufacturer_address}
					/>
					<input
						type="email"
						class="w-full p-2 mb-4 rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						id="ManufacturerEmail"
						name="ManufacturerEmail"
						placeholder="Enter Manufacturer Email"
						bind:value={jsonData.battery_information.manufacturer_identification.manufacturer_email}
					/>
					<input
						type="url"
						class="w-full p-2 mb-4 rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						id="ManufacturerWebsite"
						name="ManufacturerWebsite"
						placeholder="Enter Manufacturer Website"
						bind:value={jsonData.battery_information.manufacturer_identification
							.manufacturer_website}
					/>

					<label class="block mb-2" for="ManufacturingDate">Manufacturing Date:</label>
					<input
						type="date"
						class="w-full p-2 mb-4 rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						id="ManufacturingDate"
						name="ManufacturingDate"
						bind:value={jsonData.battery_information.manufacturer_identification.manufacturing_date}
					/>

					<label class="block mb-2" for="ManufacturingPlace">Manufacturing Place</label>
					<input
						type="text"
						class="w-full p-2 mb-4 rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						id="ManufacturingPlace"
						name="ManufacturingPlace"
						bind:value={jsonData.battery_information.manufacturer_identification
							.manufacturing_place}
					/>

					<label class="block mb-2" for="BatteryCategory">Battery Category:</label>
					<select
						class="w-full p-2 mb-4 rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						id="BatteryCategory"
						name="BatteryCategory"
					>
						<option value="1">LMT battery</option>
						<option value="2" selected>Electric Vehicle (EV) Battery</option>
						<option value="3">Industrial Battery</option>
						<option value="4">Other</option>
					</select>

					<label class="block mb-2" for="BatteryWeight">Battery Weight:</label>
					<input
						class="grid-cols-[auto_1fr_auto] w-200 p-2 mb-4 rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						type="text"
						id="BatteryWeight"
						name="BatteryWeight"
						bind:value={jsonData.battery_information.manufacturer_identification.battery_weight}
					/>
					<span>KG</span>

					<label class="block mb-2" for="BatteryStatus">Battery Status:</label>
					<select
						class="w-full p-2 mb-4 rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						id="BatteryStatus"
						name="BatteryStatus"
					>
						<option value="original" selected>Original</option>
						<option value="repurposed">Repurposed</option>
						<option value="reused">Reused</option>
						<option value="remanufactured">Remanufactured</option>
						<option value="waste">Waste</option>
					</select>
				</main>
			</div>
			<div
				class="container h-full mx-auto flex-1 justify-center items-center border-2 border-blue-100 p-4"
			>
				<h2 class="h3 w-max mx-auto pb-5">Labels and Certifications</h2>
				<main class="max-w-md m-auto">
					<label class="block mb-2" for="EUDeclarationOfConformity"
						>EU Declaration Of Conformity(Document):</label
					>
					<input
						type="file"
						class="input w-full p-2 mb-4 bg-white rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						id="EUDeclarationOfConformity"
						accept=".pdf"						
					/>

					<label class="block mb-2" for="IDofEUDeclarationOfConformity"
						>ID of EU Declaration Of Conformity:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4 rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						id="IDofEUDeclarationOfConformity"
						name="IDofEUDeclarationOfConformity"
						bind:value={jsonData.labels_and_certifications.id_declaration_of_conformity}
					/>

					<label class="block mb-2" for="ResultsofTestsReports"
						>Results of Tests Reports (Document):</label
					>
					<input
						type="file"
						class="input w-full p-2 mb-4 bg-white rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						id="ResultsofTestsReports"
					/>

					<label class="block mb-2" for="SeparateCollectionSymbol"
						>Separate Collection Symbol(Images):</label
					>
					<input
						type="file"
						class="input w-full p-2 mb-4 bg-white rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						id="SeparateCollectionSymbol"
					/>

					<label class="block mb-2" for="MeaningofLabelsandSymbols"
						>Meaning of Labels and Symbols:</label
					>
					<textarea
						class="w-full p-2 mb-4 rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						id="MeaningofLabelsandSymbols"
						name="MeaningofLabelsandSymbols"
						placeholder="Meaning of the labels and symbols marked on batteries"
						bind:value={jsonData.labels_and_certifications.meaning_labels_and_symbols}
					/>

					<label class="block mb-2" for="CadmiumandLeadSymbols"
						>Cadmium and Lead Symbols(Document):</label
					>
					<input
						type="file"
						class="input w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						id="CadmiumandLeadSymbols"
					/>
				</main>
			</div>

			<div
				class="container h-full mx-auto flex-1 justify-center items-center border-2 border-blue-100 p-4"
			>
				<h2 class="h3 w-max mx-auto pb-5">Carbon Footprint Information</h2>
				<main class="max-w-md m-auto">
					<label class="block mb-2" for="BatteryCarbonFootprint">Battery Carbon Footprint:</label>
					<input type="text" class="w-full p-2 mb-4" id="fileName" placeholder="kg/kWh" 
					bind:value={jsonData.carbon_footprint.total_battery_carbon_footprint}
					/>

					<h2 class="h5 w-max-w-md mx-auto pb-5 pt-2">
						Share of battery carbon footprint per lifecycle stage:
					</h2>

					<label class="block mb-2" for="RawMaterialAcquisitionandPreprocessing"
						>Raw Material Acquisition and Pre-processing:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="RawMaterialAcquisitionandPreprocessing"
						name="RawMaterialAcquisitionandPreprocessing"
						bind:value={jsonData.carbon_footprint.carbon_footprint_per_lifecycle_stage.raw_material_acquisition_and_pre_processing}
					/>

					<label class="block mb-2" for="MainProductProduction">Main Product Production:</label>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="MainProductProduction"
						name="MainProductProduction"
						bind:value={jsonData.carbon_footprint.carbon_footprint_per_lifecycle_stage.main_product_production}
					/>

					<label class="block mb-2" for="Distribution">Distribution:</label>
					<input type="text" class="w-full p-2 mb-4" id="Distribution" name="Distribution" 
					bind:value={jsonData.carbon_footprint.carbon_footprint_per_lifecycle_stage.distribution}/>

					<label class="block mb-2" for="EndofLifeandRecycling">End of Life and Recycling:</label>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="EndofLifeandRecycling"
						name="EndofLifeandRecycling"
						bind:value={jsonData.carbon_footprint.carbon_footprint_per_lifecycle_stage.end_of_life_and_recycling}
					/>

					<label class="block mb-2" for="CarbonFootprintPerformanceClass"
						>Carbon footprint performance class:</label
					>
					<select
						class="w-full p-2 mb-4 rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						id="CarbonFootprintPerformanceClass"
						name="CarbonFootprintPerformanceClass"
					>
						<option value="A">A</option>
						<option value="B" selected>B</option>
						<option value="C">C</option>
						<option value="D">D</option>
						<option value="none">None</option>
					</select>

					<label class="block mb-2" for="WeblinkToPublicCarbonFootprintStudy"
						>Web link to public carbon footprint study (Document):</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="WeblinkToPublicCarbonFootprintStudy"
						name="WeblinkToPublicCarbonFootprintStudy"
						placeholder="www.example.com/sample.pdf"
						bind:value={jsonData.carbon_footprint.carbon_footprint_study_link}
					/>
				</main>
			</div>
			<div
				class="container h-full mx-auto flex-1 justify-center items-center border-2 border-blue-100 p-4"
			>
				<h2 class="h3 w-max mx-auto pb-5">Battery Materials and Composition</h2>
				<main class="max-w-md m-auto">
					<label class="block mb-2" for="CriticalRawMaterials">Critical Raw Materials:</label>
					<!-- <input type="text" class="w-full p-2 mb-4" id="CriticalRawMaterials" /> -->
					<div class="space-y-2 mb-2">
						<label class="flex items-center space-x-2">
							<input class="checkbox" type="checkbox" checked />
							<p>Cobalt</p>
						</label>
						<label class="flex items-center space-x-2">
							<input class="checkbox" type="checkbox" checked />
							<p>Lithium</p>
						</label>
						<label class="flex items-center space-x-2">
							<input class="checkbox" type="checkbox" />
							<p>Lead</p>
						</label>
						<label class="flex items-center space-x-2">
							<input class="checkbox" type="checkbox" checked />
							<p>Nickel</p>
						</label>
						<label class="flex items-center space-x-2">
							<input class="checkbox" type="checkbox" />
							<p>Zinc</p>
						</label>
						<label class="flex items-center space-x-2">
							<input class="checkbox" type="checkbox" />
							<p>Natural Graphite</p>
						</label>
					</div>

					<label class="block mb-2" for="BatteryChemistry">Battery Chemistry:</label>
					<select
						class="w-full p-2 mb-4 rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						id="BatteryChemistry"
						name="BatteryChemistry"
					>
						<option value="original">Cathode, Anode and Electrolyte</option>
					</select>

					<label class="block mb-2" for="cathode anode electrolyte"
						>Name of the Cathode Anode Electrolyte Materials:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="NameCathode"
						name="NameCathode"
						placeholder="Enter Cathode Material"
						bind:value={jsonData.battery_material_composition.materials_information.cathode.name}
					/>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="NameAnode"
						name="NameAnode"
						placeholder="Enter Anode Material"
						bind:value={jsonData.battery_material_composition.materials_information.anode.name}
					/>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="NameElectrolyte"
						name="NameElectrolyte"
						placeholder="Enter Electrolyte Material"
						bind:value={jsonData.battery_material_composition.materials_information.electrolyte.name}
					/>

					<label class="block mb-2" for="IdCathode IdAnode IdElectrolyte"
						>Related Identifiers of the Cathode Anode Electrolyte Materials:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="IdCathode"
						name="IdCathode"
						placeholder="Enter ID for Cathode Material"
						bind:value={jsonData.battery_material_composition.materials_information.cathode.related_identifiers}
					/>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="IdAnode"
						name="IdAnode"
						placeholder="Enter ID for Anode Material"
						bind:value={jsonData.battery_material_composition.materials_information.anode.related_identifiers}
					/>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="IdElectrolyte"
						name="IdElectrolyte"
						placeholder="Enter ID for Electrolyte Material"
						bind:value={jsonData.battery_material_composition.materials_information.electrolyte.related_identifiers}
					/>

					<label class="block mb-2" for="NameoftheCathodeAnodeElectrolyteMaterials"
						>Weight of the cathode, anode, electrolyte materials:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="WeightCathode"
						name="WeightCathode"
						placeholder="Enter Weight of Cathode Material in grams"
						bind:value={jsonData.battery_material_composition.materials_information.cathode.weight}
					/>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="WeightAnode"
						name="WeightAnode"
						placeholder="Enter Weight of Anode Material in grams"
						bind:value={jsonData.battery_material_composition.materials_information.anode.weight}
					/>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="WeightElectrolyte"
						name="WeightElectrolyte"
						placeholder="Enter Weight of Electrolyte Material in grams"
						bind:value={jsonData.battery_material_composition.materials_information.electrolyte.weight}
					/>

					<label class="block mb-2" for="NameofHazardousSubstances"
						>Name of hazardous substances (other than mercury, cadmium or lead):</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="NameofHazardousSubstances"
						name="NameofHazardousSubstances"
						bind:value={jsonData.battery_material_composition.hazardous_substances.name}
					/>

					<label class="block mb-2" for="NameofHazardousSubstances"
						>Hazard classes and/or categories of hazardous substances:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="WeightCathode"
						name="WeightCathode"
						placeholder="Enter Weight of Cathode Material in grams"
						bind:value={jsonData.battery_material_composition.hazardous_substances.classes_and_categories}
					/>

					<label class="block mb-2" for="NameofHazardousSubstances"
						>Related identifiers of hazardous substances:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="WeightAnode"
						name="WeightAnode"
						placeholder="Enter Weight of Anode Material in grams"
						bind:value={jsonData.battery_material_composition.hazardous_substances.related_identifiers}
					/>

					<label class="block mb-2" for="NameofHazardousSubstances"
						>Location of hazardous substances</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="WeightElectrolyte"
						name="WeightElectrolyte"
						placeholder="Enter Weight of Electrolyte Material in grams"
						bind:value={jsonData.battery_material_composition.hazardous_substances.location}
					/>

					<label class="block mb-2" for="NameofHazardousSubstances"
						>Concentration range of hazardous substances:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="WeightCathode"
						name="WeightCathode"
						placeholder="Enter Weight of Cathode Material in grams"
						bind:value={jsonData.battery_material_composition.hazardous_substances.concentration_range}
					/>

					<label class="block mb-2" for="NameofHazardousSubstances"
						>Impact of substances on the environment, human health, safety:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="WeightAnode"
						name="WeightAnode"
						placeholder="Enter Weight of Anode Material in grams"
						bind:value={jsonData.battery_material_composition.hazardous_substances.impact}
					/>
				</main>
			</div>
			<div
				class="container h-full mx-auto flex-1 justify-center items-center border-2 border-blue-100 p-4"
			>
				<h2 class="h3 w-max mx-auto pb-5">Circularity and Resource Efficiency</h2>
				<main class="max-w-md m-auto">
					<label class="block mb-2" for="manual-removal-battery"
						>Manual for removal of the battery from the appliance (Document):</label
					>
					<input
						type="file"
						class="input w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						id="manual-removal-battery"
					/>

					<label class="block mb-2" for="manual-disassembly-battery-pack"
						>Manual for disassembly and dismantling of the battery pack (Document):</label
					>
					<input
						type="file"
						class="input w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						id="manual-disassembly-battery-pack"
					/>

					<label class="block mb-2" for="postal-address-spare-parts"
						>Postal address of sources for spare parts :</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="postal-address-spare-parts"
						name="postal-address-spare-parts"
						bind:value={jsonData.circularity_and_resource_efficiency.spare_parts_information.postal_address}
					/>

					<label class="block mb-2" for="email-address-spare-parts"
						>E-mail address of sources for spare parts :</label
					>
					<input
						type="email"
						class="w-full p-2 mb-4"
						id="email-address-spare-parts"
						name="email-address-spare-parts"
						bind:value={jsonData.circularity_and_resource_efficiency.spare_parts_information.email_address}
					/>

					<label class="block mb-2" for="web-address-spare-parts"
						>Web address of sources for spare parts (Document Link):</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="web-address-spare-parts"
						name="web-address-spare-parts"
						placeholder="www.example.com/sample.pdf"
						bind:value={jsonData.circularity_and_resource_efficiency.spare_parts_information.web_address}
					/>

					<label class="block mb-2" for="part-numbers-components"
						>Part numbers for components (Document):</label
					>
					<input
						type="file"
						class="input w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						id="part-numbers-components"
					/>

					<label class="block mb-2" for="extinguishing-agent">Extinguishing agent :</label>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="extinguishing-agent"
						name="extinguishing-agent"
						bind:value={jsonData.circularity_and_resource_efficiency.safety_information.extinguishing_agent}
					/>

					<label class="block mb-2" for="safety-measures-instructions"
						>Safety measures/instructions (Document):</label
					>
					<input
						type="file"
						class="input w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						id="safety-measures-instructions"
					/>

					<label class="block mb-2" for="pre-consumer-recycled-nickel-share"
						>Pre-consumer recycled nickel share :</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="pre-consumer-recycled-nickel-share"
						name="pre-consumer-recycled-nickel-share"
						placeholder="in %"
						bind:value={jsonData.circularity_and_resource_efficiency.pre_consumer_recycled_material_shares.nickel}
					/>

					<label class="block mb-2" for="pre-consumer-recycled-cobalt-share"
						>Pre-consumer recycled cobalt share :</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="pre-consumer-recycled-cobalt-share"
						name="kepre-consumer-recycled-cobalt-sharey2"
						placeholder="in %"
						bind:value={jsonData.circularity_and_resource_efficiency.pre_consumer_recycled_material_shares.cobalt}
					/>

					<label class="block mb-2" for="pre-consumer-recycled-lithium-share"
						>Pre-consumer recycled lithium share :</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="pre-consumer-recycled-lithium-share"
						name="pre-consumer-recycled-lithium-share"
						placeholder="in %"
						bind:value={jsonData.circularity_and_resource_efficiency.pre_consumer_recycled_material_shares.lithium}
					/>

					<label class="block mb-2" for="pre-consumer-recycled-lead-share"
						>Pre-consumer recycled lead share :</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="pre-consumer-recycled-lead-share"
						name="pre-consumer-recycled-lead-share"
						placeholder="in %"
						bind:value={jsonData.circularity_and_resource_efficiency.pre_consumer_recycled_material_shares.lead}
					/>

					<label class="block mb-2" for="post-consumer-recycled-nickel-share"
						>Post-consumer recycled nickel share :</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="post-consumer-recycled-nickel-share"
						name="post-consumer-recycled-nickel-share"
						placeholder="in %"
						bind:value={jsonData.circularity_and_resource_efficiency.post_consumer_recycled_material_shares.nickel}
					/>

					<label class="block mb-2" for="post-consumer-recycled-cobalt-share"
						>Post-consumer recycled cobalt share :</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="post-consumer-recycled-cobalt-share"
						name="post-consumer-recycled-cobalt-share"
						placeholder="in %"
						bind:value={jsonData.circularity_and_resource_efficiency.post_consumer_recycled_material_shares.cobalt}
					/>

					<label class="block mb-2" for="post-consumer-recycled-lithium-share"
						>Post-consumer recycled lithium share :</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="post-consumer-recycled-lithium-share"
						name="post-consumer-recycled-lithium-share"
						placeholder="in %"
						bind:value={jsonData.circularity_and_resource_efficiency.post_consumer_recycled_material_shares.lithium}
					/>

					<label class="block mb-2" for="post-consumer-recycled-lead-share"
						>Post-consumer recycled lead share :</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="post-consumer-recycled-lead-share"
						name="post-consumer-recycled-lead-share"
						placeholder="in %"
						bind:value={jsonData.circularity_and_resource_efficiency.post_consumer_recycled_material_shares.lead}
					/>

					<label class="block mb-2" for="renewable-content-share">Renewable content share :</label>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="renewable-content-share"
						name="renewable-content-share"
						bind:value={jsonData.circularity_and_resource_efficiency.renewable_content_share}
					/>

					<label class="block mb-2" for="role-end-users-waste-prevention"
						>Role of end-users in contributing to waste prevention (Document):</label
					>
					<input
						type="file"
						class="input w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-primary-300 mb-4"
						id="role-end-users-waste-prevention"
					/>

					<label class="block mb-2" for="role-end-users-separate-collection"
						>Role of end- users in contributing to the separate collection of waste batteries
						(Document):</label
					>
					<input
						type="file"
						class="input w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-primary-300 mb-4"
						id="role-end-users-separate-collection"
					/>

					<label
						class="block mb-2"
						for="info-separate-collection-take-back-reuse-repurposing-recycling"
						>Information on separate collection, take back, collection points and preparing for
						re-use, preparing for repurposing and recycling operations (Document):</label
					>
					<input
						type="file"
						class="input w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-primary-300 mb-4"
						id="info-separate-collection-take-back-reuse-repurposing-recycling"
					/>
				</main>
			</div>
			<div
				class="container h-full mx-auto flex-1 justify-center items-center border-2 border-blue-100 p-4"
			>
				<h2 class="h3 w-max mx-auto pb-5">Performance and Durability</h2>
				<main class="max-w-md m-auto">
					<label class="block mb-2" for="soce-state">State of certified energy (SOCE) :</label>
					<input type="text" class="w-full p-2 mb-4" id="soce-state" name="soce-state" 
					bind:value={jsonData.performance_and_durability.state_of_certified_energy}/>

					<label class="block mb-2" for="rated-capacity">Rated capacity :</label>
					<input type="text" class="w-full p-2 mb-4" id="rated-capacity" name="rated-capacity"
					bind:value={jsonData.performance_and_durability.rated_capacity} />

					<label class="block mb-2" for="remaining-capacity">Remaining capacity :</label>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="remaining-capacity"
						name="remaining-capacity"
						bind:value={jsonData.performance_and_durability.remaining_capacity}
					/>

					<label class="block mb-2" for="capacity-fade">Capacity fade :</label>
					<input type="text" class="w-full p-2 mb-4" id="capacity-fade" name="capacity-fade" 
					bind:value={jsonData.performance_and_durability.capacity_fade}/>

					<label class="block mb-2" for="soc-state">State of Charge (SoC) :</label>
					<input type="text" class="w-full p-2 mb-4" id="soc-state" name="soc-state" 
					bind:value={jsonData.performance_and_durability.state_of_charge}/>

					<label class="block mb-2" for="nominal-voltage">Nominal voltage :</label>
					<input type="text" class="w-full p-2 mb-4" id="nominal-voltage" name="nominal-voltage" 
					bind:value={jsonData.performance_and_durability.nominal_voltage}/>

					<label class="block mb-2" for="minimum-voltage">Minimum voltage :</label>
					<input type="text" class="w-full p-2 mb-4" id="minimum-voltage" name="minimum-voltage" 
					bind:value={jsonData.performance_and_durability.minimum_voltage}/>

					<label class="block mb-2" for="maximum-voltage">Maximum voltage :</label>
					<input type="text" class="w-full p-2 mb-4" id="maximum-voltage" name="maximum-voltage" 
					bind:value={jsonData.performance_and_durability.maximum_voltage}/>

					<label class="block mb-2" for="original-power-capability"
						>Original power capability :</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="original-power-capability"
						name="original-power-capability"
						bind:value={jsonData.performance_and_durability.original_power_capability}
					/>

					<label class="block mb-2" for="remaining-power-capability"
						>Remaining power capability:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="remaining-power-capability"
						name="remaining-power-capability"
						bind:value={jsonData.performance_and_durability.remaining_power_capability}
					/>

					<label class="block mb-2" for="power-capability-fade">Power capability fade :</label>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="power-capability-fade"
						name="power-capability-fade"
						bind:value={jsonData.performance_and_durability.power_capability_fade}
					/>

					<label class="block mb-2" for="max-permitted-battery-power"
						>Maximum permitted battery power:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="max-permitted-battery-power"
						name="max-permitted-battery-power"
						bind:value={jsonData.performance_and_durability.max_permitted_battery_power}
					/>

					<label class="block mb-2" for="initial-round-trip-efficiency"
						>Initial round trip energy efficiency:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="initial-round-trip-efficiency"
						name="initial-round-trip-efficiency"
						bind:value={jsonData.performance_and_durability.initial_round_trip_energy_efficiency}
					/>

					<label class="block mb-2" for="round-trip-efficiency-at-50-percent"
						>Round trip energy efficiency at 50% of cycle life:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="round-trip-efficiency-at-50-percent"
						name="round-trip-efficiency-at-50-percent"
						bind:value={jsonData.performance_and_durability.round_trip_energy_efficiency_at_50_percent_cycle_life}
					/>

					<label class="block mb-2" for="remaining-round-trip-efficiency"
						>Remaining round trip energy efficiency:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="remaining-round-trip-efficiency"
						name="remaining-round-trip-efficiency"
						bind:value={jsonData.performance_and_durability.remaining_round_trip_energy_efficiency}
					/>

					<label class="block mb-2" for="round-trip-efficiency-fade"
						>Round trip energy efficiency fade:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="round-trip-efficiency-fade"
						name="round-trip-efficiency-fade"
						bind:value={jsonData.performance_and_durability.round_trip_energy_efficiency_fade}
					/>

					<label class="block mb-2" for="initial-internal-resistance-cell"
						>Initial internal resistance on battery cell level:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="initial-internal-resistance-cell"
						name="initial-internal-resistance-cell"
						bind:value={jsonData.performance_and_durability.initial_internal_resistance_on_battery_cell_level}
					/>

					<label class="block mb-2" for="initial-internal-resistance-pack"
						>Initial internal resistance on battery pack level:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="initial-internal-resistance-pack"
						name="initial-internal-resistance-pack"
						bind:value={jsonData.performance_and_durability.initial_internal_resistance_on_battery_pack_level}
					/>

					<label class="block mb-2" for="expected-lifetime-cycles"
						>Expected lifetime: Number of charge-discharge cycles:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="expected-lifetime-cycles"
						name="expected-lifetime-cycles"
						bind:value={jsonData.performance_and_durability.expected_lifetime}
					/>

					<label class="block mb-2" for="num-full-cycles"
						>Number of (full) charge-discharge cycles:</label
					>
					<input type="text" class="w-full p-2 mb-4" id="num-full-cycles" name="num-full-cycles" 
					bind:value={jsonData.performance_and_durability.number_of_charge_discharge_cycles}/>

					<label class="block mb-2" for="cycle-life-reference-test"
						>Cycle-life reference test:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="cycle-life-reference-test"
						name="cycle-life-reference-test"
						bind:value={jsonData.performance_and_durability.cycle_life_reference_test}
					/>

					<label class="block mb-2" for="c-rate-cycle-life-test"
						>C-rate of relevant cycle-life test:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="c-rate-cycle-life-test"
						name="c-rate-cycle-life-test"
						bind:value={jsonData.performance_and_durability.c_rate_of_relevant_cycle_life_test}
					/>

					<label class="block mb-2" for="capacity-threshold-exhaustion"
						>Capacity threshold for exhaustion:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="capacity-threshold-exhaustion"
						name="capacity-threshold-exhaustion"
						bind:value={jsonData.performance_and_durability.capacity_threshold_for_exhaustion}
					/>

					<label class="block mb-2" for="battery-warranty-period"
						>Warranty period of the battery:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="battery-warranty-period"
						name="battery-warranty-period"
						bind:value={jsonData.performance_and_durability.warranty_period_of_the_battery}
					/>

					<label class="block mb-2" for="battery-put-into-service-date"
						>Date of putting the battery into service:</label
					>
					<input
						type="date"
						class="w-full p-2 mb-4"
						id="battery-put-into-service-date"
						name="battery-put-into-service-date"
						bind:value={jsonData.performance_and_durability.date_of_putting_the_battery_into_service}
					/>

					<label class="block mb-2" for="temp-range-idle-lower"
						>Temperature range idle state (lower boundary):</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="temp-range-idle-lower"
						name="temp-range-idle-lower"
						bind:value={jsonData.performance_and_durability.temperature_range_idle_state.lower_boundary}
					/>

					<label class="block mb-2" for="temp-range-idle-upper"
						>Temperature range idle state (upper boundary):</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="temp-range-idle-upper"
						name="temp-range-idle-upper"
						bind:value={jsonData.performance_and_durability.temperature_range_idle_state.upper_boundary}
					/>

					<label class="block mb-2" for="time-extreme-temp-above"
						>Time spent in extreme temperatures above boundary:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="time-extreme-temp-above"
						name="time-extreme-temp-above"
						bind:value={jsonData.performance_and_durability.time_spent_in_extreme_temps.above_boundary}
					/>

					<label class="block mb-2" for="time-extreme-temp-below"
						>Time spent in extreme temperatures below boundary:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="time-extreme-temp-below"
						name="time-extreme-temp-below"
						bind:value={jsonData.performance_and_durability.time_spent_in_extreme_temps.below_boundary}
					/>

					<label class="block mb-2" for="time-charging-extreme-temp-above"
						>Time spent charging during extreme temperatures above boundary:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="time-charging-extreme-temp-above"
						name="time-charging-extreme-temp-above"
						bind:value={jsonData.performance_and_durability.time_spent_charging_in_extreme_temps.above_boundary}
					/>

					<label class="block mb-2" for="time-charging-extreme-temp-below"
						>Time spent charging during extreme temperatures below boundary:</label
					>
					<input
						type="text"
						class="w-full p-2 mb-4"
						id="time-charging-extreme-temp-below"
						name="time-charging-extreme-temp-below"
						bind:value={jsonData.performance_and_durability.time_spent_charging_in_extreme_temps.below_boundary}
					/>

					<label class="block mb-2" for="accident-info">Information on accidents:</label>
					<input type="text" class="w-full p-2 mb-4" id="accident-info" name="accident-info" 
					bind:value={jsonData.performance_and_durability.information_on_accidents}/>
				</main>
			</div>
			<div
				class="container h-full mx-auto flex-1 justify-center items-center border-2 border-blue-100 p-4"
			>
				<h2 class="h3 w-max mx-auto pb-5">Supply Chain Due Diligence</h2>
				<main class="max-w-md m-auto">
					<label class="block mb-2" for="InformationoftheDueDiligenceReport"
						>Information of the Due Diligence Report (Document):</label
					>
					<input
						type="file"
						class="input w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-primary-300"
						id="InformationoftheDueDiligenceReport"
					/>
				</main>
			</div>
		</section>
		<section class="container h-full mx-auto flex justify-center pt-10">
			<button class="btn bg-primary-600 text-white text-lg w-50" type="submit"
				>Create Battery Passport</button
			>
		</section>
	</form>
</AppShell>
