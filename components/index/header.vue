<template>
	<IndexBackground />

	<div class="absolute w-full top-[10%]">
		<div class="relative flex justify-center flex-wrap w-full top-[-20%] overflow-x-hidden py-[300px]">
			<div class="absolute w-[200px] h-[600px] bg-blue-500/50 z-40 top-[30%] right-[-350px] rounded-full inline-block pointer-events-none blur-[150px] !rotate-[-35deg] blob-animation"></div>

			<h1 class="max-w-[750px] max-lg:mx-[30px] max-lg:w-full text-gray-300 text-[3.35rem] max-md:text-[2.85rem] max-sm:text-[2.55rem] font-bold text-center leading-normal font-poppins" data-aos="fade-up">The <span class="text-blue-600">easiest</span> way to protect your Discord server!</h1>
			<div class="w-full flex justify-center mt-7">
				<p class="text-gray-400 max-lg:mx-[30px] max-w-[750px] max-lg:w-full text-center text-lg max-sm:text-md text-shadow leading-8 max-sm:text-[1rem] font-poppins" data-aos="fade-up" data-aos-delay="100">Have your server ever been termed or nuked by someone? Never again! With our solution, you can easily restore everything you lost by clicking just one button. Don't delay and check us out now!</p>
			</div>

			<div class="mt-8 flex gap-4">
				<div data-aos="fade-up" data-aos-delay="150">
					<router-link to="/dashboard">
						<vs-button type="flat" class="!text-sm !px-3">
							Create backup!
						</vs-button>
					</router-link>
				</div>

				<div data-aos="fade-up" data-aos-delay="200">
					<vs-button type="flat" class="!text-sm !px-3">
						Discord
					</vs-button>
				</div>
			</div>
		</div>
	</div>

	
</template>