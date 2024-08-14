<script lang="ts">
	//logos and images
	import { Paginator, Table } from '@skeletonlabs/skeleton'
	import type { PaginationSettings } from '@skeletonlabs/skeleton'
	import type { TableSource } from '@skeletonlabs/skeleton'
	import { tableMapperValues } from '@skeletonlabs/skeleton'
	import type { PageData } from './$types'
	//components
	import { AppShell } from '@skeletonlabs/skeleton'
	import Magnify from '~icons/mdi/magnify'
	export let data: PageData

	const passportList = data.listOfPassports
	let sourceData = passportList.map((source) => {
		source.id = source.id || '-'
		source.oem = source.oem || '-'
		source.details = source.details || '-'
		return source
  	})
	const tableHeaders = ['BatteryId', 'Manufacturer', 'Details']

	$: transformedSourceData = tableMapperValues(sourceData, [
		'id', 
		'oem',
		'details'
  	])

	let paginationSettings = {
		page: 0,
		limit: 5,
		size: sourceData.length,
		amounts: [1, 5, 10, 20, 50]
	} satisfies PaginationSettings

	$: paginatedMappedSource = transformedSourceData.slice(
		paginationSettings.page * paginationSettings.limit,
		paginationSettings.page * paginationSettings.limit + paginationSettings.limit
  	)

	let searchField: string = ''

	function search() {
    if (searchField.trim() === '') {
      sourceData = data.listOfPassports
    } else {
      const regex = new RegExp(searchField, 'i')
      sourceData = data.listOfPassports.filter((item) => {
        return (
          regex.test(item.id) ||
          regex.test(item.oem) ||
		  regex.test(item.details)
        )
      })
    }
  }
</script>

<AppShell>
	<div class="container h-full mx-auto flex-1 justify-center items-center m-10">
		<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] w-fit float-right mb-4">
			<div class="input-group-shim"><Magnify /></div>
			<input type="search" placeholder="Search..." bind:value={searchField} on:keyup={search} />
		</div>
		<Table source={{ head: tableHeaders, body: paginatedMappedSource}} />
		<Paginator
			bind:settings={paginationSettings}
			showFirstLastButtons={false}
			showPreviousNextButtons={true}
			class="mt-4"
			showNumerals
			maxNumerals={1}
		/>
	</div>
</AppShell>
