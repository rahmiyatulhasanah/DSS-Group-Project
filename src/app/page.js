import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 bg-black">
      <div className='w-2/6 mb-10'>
        <h1 className="text-orange"> Decision Support System </h1>
        <h2 className="text-white"> Pemilihan Laptop </h2>
        <p className="mt-5 text-white">
          Penjelasan dikit bla bla bla bla bla
        </p>
      </div>
   
      <a href='./inputan'>
        <button className='text-white pt-2 pb-2 w-2/6 rounded rounded-lg
        transition transition-500 hover:bg-white hover:text-orange'>
          <h3> Jalankan Demo </h3></button>
      </a>
    </main>
  )
}
