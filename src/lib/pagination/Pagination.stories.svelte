<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Pagination from './Pagination.svelte';
</script>

<!-- 👇 Creates specific parameters for the story -->
<Meta title="Components/Pagination" component={Pagination} argTypes={{}} />

<Template let:args>
	<Pagination {...args} />
</Template>

<Story
	name="Default"
	args={{
		total: 100,
		current: 2,
	}}
/>
