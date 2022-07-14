<script>
	import Pagination from '$lib/pagination/Pagination.svelte';
	export let data = [];
	export let column = [];
	export let pagination;
</script>

<div class="overflow-x-auto">
	<table class="table w-full">
		<!-- head -->
		<thead>
			<tr>
				{#each column as item}
					<th>{item.title || ''}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data as item}
				<tr>
					{#each column as it}
						<td>{item[it.dataIndex] || ''}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
	{#if pagination}
		<Pagination on:paginationChange {...pagination} />
	{/if}
</div>
