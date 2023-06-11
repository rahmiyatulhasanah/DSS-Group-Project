import Image from 'next/image'
import Head from 'next/head'
import Layout from 'src/app/layout'
import '@/app/globals.css'

export default function inputan() {
  return (
    <Head>
      <title>DSS: Input Kriteria</title>
      <meta name="description" content="----" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <section className="flex min-h-screen flex-row items-center justify-between p-12
                          bg-[url('../assets/img/background-halaman-input.png')] bg-black bg-cover">
        <div className='w-1/2 m-1 min-h-screen'> 
          <h1 className='text-orange m-0 text-xl'> DSS</h1>
          <h1 className='text-white'> Pemilihan Laptop </h1>
        </div>

        <div className='min-h-screen rounded-md bg-cream m-1 w-1/2 border-orange border'>
          <div class="m-12">
            <div class="">
              <h3 className="font-bold">RENTANG HARGA</h3>
              <div className="mb-6 mt-2 flex flex-row items-center justify-between">
                <div className='w-1/2'>
                  <p className='mb-1'> Minimal </p>
                  <input
                    id="minimal"
                    type="number"
                    className="transition-200 w-4/5 border-b-2 border-orange 
                                  p-2 text-sm text-black transition hover:outline-none
                                  hover:drop-shadow-lg focus:outline-none"
                    required
                  />
                </div>

                <div className='w-1/2'>
                  <p className='mb-1'> Maksimal </p>
                  <input
                    id="minimal"
                    type="number"
                    className="transition-200 w-4/5 border-b-2 border-orange 
                                  p-2 text-sm text-black transition hover:outline-none
                                  hover:drop-shadow-lg focus:outline-none"
                    required
                  />
                </div>            
              </div>  
            </div>

            <div class="">
              <h3 className="font-bold">LAYAR</h3>
              <div className="mb-6 mt-2 flex flex-row items-center justify-between">
                <div className='w-1/2'>
                  <p className='mb-1'> Ukuran </p>
                  <select
                    id="ukuran"
                    className="transition-200 w-4/5 border-b-2 border-orange 
                    p-2 text-sm text-black transition hover:outline-none
                    hover:drop-shadow-lg focus:outline-none"
                    required
                  >
                    <option value="kecil">Kecil</option>
                    <option value="sedang">Sedang</option>
                    <option value="besar">Besar</option>
                  </select>
                </div>

                <div className='w-1/2'>
                  <p className='mb-1'> Layar sentuh? </p>
                  <div class="flex items-center bg-orange rounded-full w-2/3 justify-between pt-1 pb-1 pl-4 pr-4">
                    <div class="flex items-center">
                      <input  id="layar-sentuh-opt"
                              type="radio"
                              name="layar-sentuh"
                              value="ya"
                              class="h-4 w-4 mr-2 border-orange"
                              />
                      <p className='font-bold text-white'> Ya </p>
                    </div>
                    
                    <div class="flex items-center">
                      <input  id="layar-sentuh-opt"
                              type="radio"
                              name="layar-sentuh"
                              value="tidak"
                              class="h-4 w-4 mr-2 border-orange"
                              />
                      <p className='font-bold text-white'> Tidak </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-row items-center justify-between'>
              <div className='w-1/2'>
                <h3 className="font-bold">PENYIMPANAN</h3>
                <div className="mb-6 mt-2 flex flex-row items-center justify-between">
                  <div className='w-full'>
                    <input
                      id="penyimpanan"
                      type="Text"
                      className="transition-200 w-4/5 border-b-2 border-orange 
                                    p-2 text-sm text-black transition hover:outline-none
                                    hover:drop-shadow-lg focus:outline-none"
                      required
                    />
                  </div>          
                </div>  
              </div>
              
              <div className='w-1/2'>
                <h3 className="font-bold">RAM</h3>
                <div className="mb-6 mt-2 flex flex-row items-center justify-between">
                  <div className='w-full'>
                    <input
                      id="ram"
                      type="Text"
                      className="transition-200 w-4/5 border-b-2 border-orange 
                                    p-2 text-sm text-black transition hover:outline-none
                                    hover:drop-shadow-lg focus:outline-none"
                      required
                    />
                  </div>          
                </div>  
              </div>
            </div>

            <div className='flex flex-row items-center justify-between'>
              <div className='w-1/2'>
                <h3 className="font-bold">PROCESSOR</h3>
                <div className="mb-6 mt-2 flex flex-row items-center justify-between">
                  <div className='w-full'>
                    <input
                      id="processor"
                      type="Text"
                      className="transition-200 w-4/5 border-b-2 border-orange 
                                    p-2 text-sm text-black transition hover:outline-none
                                    hover:drop-shadow-lg focus:outline-none"
                    />
                  </div>          
                </div>  
              </div>
              
              <div className='w-1/2'>
                <h3 className="font-bold">MEREK</h3>
                <div className="mb-6 mt-2 flex flex-row items-center justify-between">
                  <div className='w-full'>
                    <input
                      id="merek"
                      type="Text"
                      className="transition-200 w-4/5 border-b-2 border-orange 
                                    p-2 text-sm text-black transition hover:outline-none
                                    hover:drop-shadow-lg focus:outline-none"
                    />
                  </div>          
                </div>  
              </div>
            </div>

            <div className="grid place-items-center">
              <a href='./outputan' className="pt-2 pb-2 w-1/2">
                <button className="bg-orange text-white pt-2 pb-2 min-w-full
                rounded rounded-full transition transition-200 hover:drop-shadow-lg">
                  <h3>Lihat Hasil</h3>
                </button>
              </a>
              <button className="text-black rounded rounded-full transition transition-200
                  hover:drop-shadow-lg hover:text-orange">
                    <h4>Hapus Kriteria</h4>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Head>   
    
    
  )
}

