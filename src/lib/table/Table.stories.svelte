<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Table from './Table.svelte';
</script>

<!-- 👇 Creates specific parameters for the story -->
<Meta title="Components/Table" component={Table} argTypes={{}} />

<Template let:args>
	<Table {...args} />
</Template>

<Story
	name="Default"
	args={{
		data: [
			{ name: 456, job: 'qq', color: 'red' },
			{ name: 456, job: 'qq', color: 'red' },
		],
		column: [
			{ dataIndex: 'name', title: 'NAME' },
			{ dataIndex: 'job', title: 'JOB' },
			{ dataIndex: 'color', title: 'Favorite Color' },
		],
	}}
/>
