<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Table from './Table.svelte';
</script>


<!-- 👇 Creates specific parameters for the story -->
<Meta
	title="Components/Table"
	component={Table}
	argTypes={{
		name: { control: 'text' },
		textColor: { control: 'color' },
	}}
/>

<Template let:args>
	<Table {...args} />
</Template>


<Story
	name="Jane"
	args={{
		name: 'Jane',
		textColor: 'rgb(173, 216, 230)',
	}}
/>