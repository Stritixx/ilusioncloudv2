<template>
	<nav class="w-full h-[70px] flex justify-center border-b-2 border-gray-900/60 border-solid bg-backgroundColor z-10 bg-opacity-70 absolute" data-aos="zoom-in">
		<div class="w-full max-w-[1800px] px-[100px] max-[1000px]:px-[70px] max-[500px]:px-[30px] flex justify-between items-center media-animate">
			<h1 class="font-bold text-lg text-white font-poppins">IlusionCloud</h1>
			
			<ul class="flex font-normal text-gray-400 gap-6 text-sm font-poppins max-[850px]:hidden">
				<li>Home</li>
				<li>Features</li>
				<li>Support</li>
				<li>Statistics</li>
			</ul>

			<div>
				<div class="max-[850px]:hidden">
					<VsButton class="">Dashboard</VsButton>
				</div>

				<span class="hidden max-[850px]:block cursor-pointer" @click="isMobile = !isMobile">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu text-gray-300"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
				</span>
			</div>
		</div>
	</nav>
</template>



<script>
	export default {
		name: 'navbar',
		setup() {
			const isMobile = inject("isMobile");

			return { isMobile }
		}
	}
</script>