<template>
  <div class="container mx-auto flex flex-wrap">
    <div class="w-full md:w-2/5">
      <div class="col-height border rounded p-5">

        <!-- pdf drop -->
        <label for="file" class="h-48 flex items-center justify-center w-full rounded border-dashed border-2 border-gray-300 bg-gray-200 hover:border-gray-400 hover:bg-gray-300 p-5 text-center ">
          <span class="text-gray-600">Arraste seu pdf aqui</span>
          <input type="file" name="file" id="file" class="hidden">
        </label>
        <!-- pdf drop -->

      </div>
    </div>

    <div class="w-full md:w-3/5">
      <div class="col-height border rounded p-5 lg:ml-10 md:ml-5">
        2
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .col-height {
    height: calc(100vh - 160px);
  }
</style>
