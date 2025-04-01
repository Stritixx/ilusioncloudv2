<template>
	<Transition name="drop">
		<nav class="w-full p-5 z-[1000] min-[850px]:hidden top-0 fixed" v-show="isMobile">
			<div class="bg-black/70 border-2 border-gray-900 border-solid rounded-xl backdrop-blur-[10px]">
				<div class="w-full h-[100px] text-white font-bold flex justify-between items-center px-[35px]">
					<div class="flex items-center text-xl">
						<h1>IlusionCloud</h1>
					</div>
					<span class="cursor-pointer" @click="isMobile = !isMobile">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
					</span>
				</div>
				<ul class="flex flex-col gap-[20px] pl-[45px] mt-2 text-gray-300 pb-12">
					<li>Home</li>
					<li>Features</li>
					<li>Support</li>
					<li>Statistics</li>
					<li>Dashboard</li>
				</ul>
			</div>
		</nav>
	</Transition>
</template>



<script>
	export default {
		name: 'mobileNavbar',
		setup() {
			const isMobile = inject("isMobile");
			
			return { isMobile }
		}
	}
</script>