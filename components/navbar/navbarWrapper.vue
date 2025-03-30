<template>
	<Navbar />
	<NavbarMobileNavbar />
</template>



<script>
	export default {
		name: 'navbarWrapper',
		setup() {
			const isMobile = ref(false);

			provide("isMobile", isMobile);

			return { }
		}
	}

</script>