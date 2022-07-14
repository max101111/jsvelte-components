<script>
	import { createEventDispatcher } from 'svelte';
	export let total = 0;
	export let current = 1;
	const a = 4,
		b = 6;

	const dispatch = createEventDispatcher();

	// 最大与最小取值
	$: current = current > total ? total : current < 1 ? 1 : current;

	const get = (current, total) => {
		let arr = [];
		if (current < a) {
			// 头部
			arr = [2, 3, 4, 5, 6];
			if (total <= b) {
				arr = arr.slice(0, total - 1);
			}
		} else if (current > total - a) {
			// 尾部
			arr = [total - 4, total - 3, total - 2, total - 1, total];
		} else {
			// 中间
			arr = [current - 2, current - 1, current, current + 1, current + 2];
		}
    if(!total) arr = []
		return arr;
	};

	//  控制中间的数字
	$: arr = get(current, total);

	const paginationChange = (cur) => {
		current = cur;
		dispatch('paginationChange', {
			current,
		});
	};
</script>

<div class="btn-group">
	<button
		class="btn"
		class:text-sky-400={1 == current}
		on:click={() => paginationChange(1)}>1</button
	>

	{#if current > a}
		<button class="btn btn-disabled">...</button>
	{/if}

	{#each arr as item}
		<button
			class="btn"
			class:text-sky-400={item == current}
			on:click={() => paginationChange(item)}>{item}</button
		>
	{/each}

	{#if current <= total - a}
		{#if total > b + 1}
			<button class="btn btn-disabled">...</button>
		{/if}

		{#if total > b}
			<button
				class:text-sky-400={total == current}
				class="btn"
				on:click={() => paginationChange(total)}>{total}</button
			>
		{/if}
	{/if}
</div>
