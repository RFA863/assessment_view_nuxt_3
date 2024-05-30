<template>
  <div class="p-3">
    <div class="bg-red-100 p-3 rounded-md mb-4">
      <div class="text-red-600 font-bold">
        <span class="mr-2">⚠️</span>
        Perhatian! Dimohon untuk pengisian kelengkapan dokumen tersebut sudah
        sesuai dengan ketentuan dan PASTIKAN DOKUMEN YANG DIMASUKKAN ADALAH
        DOKUMEN YANG BENAR!!
      </div>
    </div>

    <div class="flex justify-start p-2">
      <div class="basis-1/4">
        <h2 class="font-bold">2. Dokumen Proses Assessment</h2>
        <div class="bg-aqua-500 p-2 mr-1">
          <p class="max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            inventore, distinctio eos nam impedit unde facilis libero ab
            expedita totam obcaecati sunt a! Qui et deleniti ullam, dolorem
            fugiat laudantium!
          </p>
        </div>
      </div>

      <div class="basis-3/4 w-full ml-20">
        <form class="p-4 rounded-lg max-w-md">
          <div>
            <label class="font-bold">Surat Permohonan Assessment</label>
          </div>

          <div>
            <div class="mt-2">
              <input
                class="file_input border border-gray-400 rounded py-1 px-3"
                type="file"
              />
            </div>
            <div class="mt-2">
              <p
                class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                Accepted file types:(Pdf document, max 6mb)
              </p>
            </div>
          </div>
          <div class="mt-1">
          <button
            class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-2 border border-gray-500 rounded shadow-md text-sm"
          >
            Submit
          </button>
        </div>
        </form>

        <div class="ml-4 mb-3">
          <label class="font-bold">Surat Undangan Assessment</label>
        </div>
        <table class="border-separate border-spacing-1">
          <form class="mb-4">
            <tr>
              <td class="inline-block align-top ml-8">undangan assessment 1</td>
              <td class="inline-block align-top mr-1 ml-1">:</td>
              <td class="m-3">
                <div>
                  <div>
                    <input
                      type="file"
                      class="border border-gray-400 rounded py-1 px-3"
                    />
                  </div>
                  <div class="flex items-center mt-2">
                    <button
                      class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-2 border border-gray-500 rounded shadow-md text-sm"
                    >
                      Submit
                    </button>
                    <span class="text-xs text-gray-600 ml-2">
                      Accepted file types: <br />(Pdf document, max 6mb)
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </form>
          <form class="mb-4">
            <tr>
              <td class="inline-block align-top ml-8">undangan assessment 2</td>
              <td class="inline-block align-top mr-1">:</td>
              <td class="m-3">
                <div>
                  <div>
                    <input
                      type="file"
                      class="border border-gray-400 rounded py-1 px-3"
                    />
                  </div>
                  <div class="flex items-center mt-2">
                    <button
                      class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-2 border border-gray-500 rounded shadow-md text-sm"
                    >
                      Submit
                    </button>
                    <span class="text-xs text-gray-600 ml-2">
                      Accepted file types: <br />(Pdf document, max 6mb)
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </form>
          <form>
            <tr>
              <td class="inline-block align-top ml-8">Undangan Evaluasi</td>
              <td class="inline-block align-top mr-1 ml-11">:</td>
              <td class="m-3">
                <div>
                  <div>
                    <input
                      type="file"
                      class="border border-gray-400 rounded py-1 px-3"
                    />
                  </div>
                  <div class="flex items-center mt-2">
                    <button
                      class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-2 border border-gray-500 rounded shadow-md text-sm"
                    >
                      Submit
                    </button>
                    <span class="text-xs text-gray-600 ml-2">
                      Accepted file types: <br />(Pdf document, max 6mb)
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </form>
        </table>
        <div class="ml-4 mt-3 mb-2">
          <label class="font-bold"
            >Nota Dinas Hasil Assessment dan Pentest</label
          >
        </div>
        <table>
          <form>
            <tr>
              <td class="inline-block align-top ml-8">
                Nota Dinas Assessment 1
              </td>
              <td class="inline-block align-top mr-3 ml-1">:</td>
              <td class="m-3">
                <div>
                  <div>
                    <input
                      type="file"
                      class="border border-gray-400 rounded py-1 px-3"
                    />
                  </div>
                  <div class="flex items-center mt-2">
                    <button
                      class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-2 border border-gray-500 rounded shadow-md text-sm"
                    >
                      Submit
                    </button>
                    <span class="text-xs text-gray-600 ml-2">
                      Accepted file types: <br />(Pdf document, max 6mb)
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </form>
          <form>
            <tr>
              <td class="inline-block align-top ml-8">
                Nota Dinas Assessment 2
              </td>
              <td class="inline-block align-top mr-3">:</td>
              <td class="m-3">
                <div>
                  <div>
                    <input
                      type="file"
                      class="border border-gray-400 rounded py-1 px-3"
                    />
                  </div>
                  <div class="flex items-center mt-2">
                    <button
                      class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-2 border border-gray-500 rounded shadow-md text-sm"
                    >
                      Submit
                    </button>
                    <span class="text-xs text-gray-600 ml-2">
                      Accepted file types: <br />(Pdf document, max 6mb)
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </form>
          <form>
            <tr>
              <td class="inline-block align-top ml-8">Nota Dinas Evaluasi</td>
              <td class="inline-block align-top mr-3 ml-11">:</td>
              <td class="m-3">
                <div>
                  <div>
                    <input
                      type="file"
                      class="border border-gray-400 rounded py-1 px-3"
                    />
                  </div>
                  <div class="flex items-center mt-2">
                    <button
                      class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-2 border border-gray-500 rounded shadow-md text-sm"
                    >
                      Submit
                    </button>
                    <span class="text-xs text-gray-600 ml-2">
                      Accepted file types: <br />(Pdf document, max 6mb)
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </form>
        </table>
        <div class="ml-4 mt-3 mb-2">
          <label class="font-bold">Surat Rekomendasi Hasil Assessment</label>
        </div>
        <table>
          <form>
            <tr>
              <td class="inline-block align-top ml-4">
                Rekomendasi Assessment 1
              </td>
              <td class="inline-block align-top mr-3">:</td>
              <td class="m-3">
                <div>
                  <div>
                    <input
                      type="file"
                      class="border border-gray-400 rounded py-1 px-3"
                    />
                  </div>
                  <div class="flex items-center mt-2">
                    <button
                      class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-2 border border-gray-500 rounded shadow-md text-sm"
                    >
                      Submit
                    </button>
                    <span class="text-xs text-gray-600 ml-2">
                      Accepted file types: <br />(Pdf document, max 6mb)
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </form>

          <form>
            <tr>
              <td class="inline-block align-top ml-4">
                Rekomendasi Assessment 2
              </td>
              <td class="inline-block align-top mr-3">:</td>
              <td class="m-3">
                <div>
                  <div>
                    <input
                      type="file"
                      class="border border-gray-400 rounded py-1 px-3"
                    />
                  </div>
                  <div class="flex items-center mt-2">
                    <button
                      class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-2 border border-gray-500 rounded shadow-md text-sm"
                    >
                      Submit
                    </button>
                    <span class="text-xs text-gray-600 ml-2">
                      Accepted file types: <br />(Pdf document, max 6mb)
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </form>

          <form>
            <tr>
              <td class="inline-block align-top ml-4">Rekomendasi Evaluasi</td>
              <td class="inline-block align-top mr-3 ml-11">:</td>
              <td class="m-3">
                <div>
                  <div>
                    <input
                      type="file"
                      class="border border-gray-400 rounded py-1 px-3"
                    />
                  </div>
                  <div class="flex items-center mt-2">
                    <button
                      class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-2 border border-gray-500 rounded shadow-md text-sm"
                    >
                      Submit
                    </button>
                    <span class="text-xs text-gray-600 ml-2">
                      Accepted file types: <br />(Pdf document, max 6mb)
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </form>
        </table>

        <form class="p-4 rounded-lg max-w-md">
          <div>
            <label class="font-bold">Sertifikat Lulus Assessment</label>
          </div>

          <div>
            <div class="mt-2">
              <input
                class="file_input border border-gray-400 rounded py-1 px-3"
                type="file"
              />
            </div>
            <div class="mt-2">
              <p
                class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                Accepted file types:(Pdf document, max 6mb)
              </p>
            </div>
          </div>
          <div class="mt-1">
            <button
              class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-2 border border-gray-500 rounded shadow-md text-sm"
            >
              Submit
            </button>
          </div>
        </form>

        <div class="ml-4 mt-3 mb-2">
          <label class="font-bold">Foto Dokumentasi Assessment</label>
        </div>

        <table>
          <form>
            <tr>
              <td class="inline-block align-top ml-4">
                Dokumentasi Assessment 1
              </td>
              <td class="inline-block align-top mr-3">:</td>
              <td class="m-3">
                <div>
                  <div>
                    <input
                      type="file"
                      class="border border-gray-400 rounded py-1 px-3"
                    />
                  </div>
                  <div class="flex items-center mt-2">
                    <button
                      class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-2 border border-gray-500 rounded shadow-md text-sm"
                    >
                      Submit
                    </button>
                    <span class="text-xs text-gray-600 ml-2">
                      Accepted file types: <br />(Pdf document, max 6mb)
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </form>

          <form>
            <tr>
              <td class="inline-block align-top ml-4">
                Dokumentasi Assessment 2
              </td>
              <td class="inline-block align-top mr-3">:</td>
              <td class="m-3">
                <div>
                  <div>
                    <input
                      type="file"
                      class="border border-gray-400 rounded py-1 px-3"
                    />
                  </div>
                  <div class="flex items-center mt-2">
                    <button
                      class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-2 border border-gray-500 rounded shadow-md text-sm"
                    >
                      Submit
                    </button>
                    <span class="text-xs text-gray-600 ml-2">
                      Accepted file types: <br />(Pdf document, max 6mb)
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </form>

          <form>
            <tr>
              <td class="inline-block align-top ml-4">Dokumentasi Evaluasi</td>
              <td class="inline-block align-top mr-3 ml-11">:</td>
              <td class="m-3">
                <div>
                  <div>
                    <input
                      type="file"
                      class="border border-gray-400 rounded py-1 px-3"
                    />
                  </div>
                  <div class="flex items-center mt-2">
                    <button
                      class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-2 border border-gray-500 rounded shadow-md text-sm"
                    >
                      Submit
                    </button>
                    <span class="text-xs text-gray-600 ml-2">
                      Accepted file types: <br />(Pdf document, max 6mb)
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </form>
        </table>
        <div class="p-4 flex justify-end items-end">
          <div class="p-4 flex justify-end items-end">
            <button
              class="bg-yellow-500 hover:bg-yellow-600 text-dark font-bold py-2 px-4 text-sm"
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
