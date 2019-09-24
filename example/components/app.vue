<template>
  <div class="container mx-auto flex flex-wrap px-6 py-10">
    <div class="w-full lg:w-1/4">
      <div class="col-height border rounded p-5 lg:mr-6 mb-10 lg:mb-0">

        <!-- pdf drop -->
        <label for="file" class="h-48 flex items-center justify-center w-full rounded border-dashed border-2 border-gray-300 bg-gray-200 hover:border-gray-400 hover:bg-gray-300 p-5 text-center mb-10">
          <span class="text-gray-600">Arraste seu pdf aqui</span>
          <input type="file" name="file" id="file" class="hidden">
        </label>
        <!-- pdf drop -->

        <!-- list pdf -->
        <div class="text-sm font-semibold mb-2 text-gray-500">ENVIOS</div>

        <div class="flex flex-col">

          <div class="border-b py-3 px-2 hover:bg-gray-100">
            <div class="text-md font-semibold mb-1">pdf234234.pdf</div>
            <div class="text-sm font-semibold text-gray-500">ERRO</div>
          </div>

          <div class="border-b py-3 px-2 hover:bg-gray-100">
            <div class="text-md font-semibold mb-1">pdf234234.pdf</div>
            <div class="text-sm font-semibold text-gray-500">ERRO</div>
          </div>

          <div class="border-b py-3 px-2 hover:bg-gray-100">
            <div class="text-md font-semibold mb-1">pdf234234.pdf</div>
            <div class="text-sm font-semibold text-gray-500">ERRO</div>
          </div>

        </div>
        <!-- list pdf -->

      </div>
    </div>

    <div class="w-full lg:w-3/4">
      <div class="col-height border rounded p-4 md:p-10">

        <div class="text-2xl font-semibold mb-8">Setembro</div>

        <div class="mb-10">
          <div class="text-sm font-semibold mb-2 text-gray-500">STATUS</div>
          <div class="flex flex-wrap text-center">
            <div class="w-full md:w-2/4 xl:w-1/4 p-1">
              <div class="border hover:bg-gray-100 h-full p-6 flex items-center justify-center flex-col">
                <span class="text-lg font-semibold mb-2 block">Tranquilo</span>
                <span class="text-md text-gray-500">Status</span>
              </div>
            </div>

            <div class="w-full md:w-2/4 xl:w-1/4 p-1">
              <div class="border hover:bg-gray-100 h-full p-6 flex items-center justify-center flex-col">
                <span class="text-lg font-semibold mb-2 block">1/2</span>
                <span class="text-md text-gray-500">Boletos pagos</span>
              </div>
            </div>

            <div class="w-full md:w-2/4 xl:w-1/4 p-1">
              <div class="border hover:bg-green-100 h-full p-6 flex items-center justify-center flex-col">
                <span class="text-lg font-semibold text-green-500 mb-2 block">R$ 800,00</span>
                <span class="text-md text-gray-500">Pago</span>
              </div>
            </div>

            <div class="w-full md:w-2/4 xl:w-1/4 p-1">
              <div class="border hover:bg-red-100 h-full p-6 flex items-center justify-center flex-col">
                <span class="text-lg font-semibold text-red-500 mb-2 block">R$ 200,00</span>
                <span class="text-md text-gray-500">Restante</span>
              </div>
            </div>
          </div>
        </div>

        <div class="">
          <div class="text-sm font-semibold mb-4 text-gray-500">BOLETOS REGISTRADOS</div>

          <div class="">
            <div class="border rounded bg-gray-100 p-4 flex text-sm font-semibold text-gray-600">
              <div class="flex-grow">Item</div>
              <div class="w-1/5">Valor</div>
              <div class="w-1/5">Data de vencimento</div>
              <div class="w-24">Status</div>
              <div class="w-20">Visualizar</div>
            </div>

            <div class="mh-table w-full overflow-y-auto mt-3 pr-2">
              <div class="border rounded px-4 py-6 flex text-md mb-3 hover:bg-gray-100" v-for="x in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ]">
                <div class="flex-grow">Internet {{x}}</div>
                <div class="w-1/5">R$ 300,00</div>
                <div class="w-1/5">07/06/1996</div>
                <div class="w-24"><span class="rounded-full bg-green-500 text-white uppercase px-2 py-1 text-xs font-bold mr-3">New</span></div>
                <div class="w-20">Visualizar</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  @media (min-width: 1024px) {
    .col-height {
      height: calc(100vh - 164px);
    }
  }

  .mh-table {
    height: calc(100vh - 600px);
  }
</style>
