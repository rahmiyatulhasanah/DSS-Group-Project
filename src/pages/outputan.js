import Image from 'next/image'
import Head from 'next/head'
import Layout from 'src/app/layout'
import '@/app/globals.css'

export default function outputan() {
  return (
    <Head>
      <title>DSS: Laptop yang Cocok untuk Kamu</title>
      <meta name="description" content="----" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <section className="flex min-h-screen flex-col items-center justify-between p-12
      bg-[url('../assets/img/halaman-output.png')] bg-cream bg-cover">
        <h1>Rekomendasi Laptop untuk Kamu</h1>
        <p>Berikut adalah xx rekomendasi laptop yang cocok untuk kamu</p>

        <div>
            {/* diisi tabel */}
        </div>

        <p>Laptop yang paling cocok untuk kamu adalah ASUS ZENBOOK 14X
            dengan nilai kecocokan atau nilai prevelansi sebesar 0.77231</p>
        
        <a href='./inputan'>
            <button className="bg-orange text-white pt-2 pb-2 pr-20 pl-20
            rounded rounded-full transition tarnsition-200 hover:drop-shadow-lg">
            <h3>Lakukan Input Lagi </h3></button>
        </a>
      </section>

    </Head>  
    
  )
}

