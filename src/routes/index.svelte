<script>
	import { First, Table, Pagination } from '$lib';

  const paginationChange =(e)=>{
    console.log(e.detail)
  }
</script>

<div data-theme="light">
	<First name="World" textColor="yellowgreen" />

	<Table on:paginationChange={paginationChange} />
</div>
