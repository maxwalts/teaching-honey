import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import FilterableProductTable from '../components/FilterableProductTable'
import TrackingCircle from '../components/TrackingCircle'

export default function Home() {
  const [showHoney, setShowHoney] = useState(false)
  const [showTable, setShowTable] = useState(false)
  const [showCircle, setShowCircle] = useState(false)

  function handleClick() {
    setShowHoney(!showHoney)
  }
  function handleClickTable() {
    setShowTable(!showTable)
  }
  function handleClickCircle() {
    setShowCircle(!showCircle)
  }


  return (
    <>

      <Head>
        <title>Teaching Honey</title>
        <meta name="description" content="Some interactive things built with React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <a onClick={handleClick} >Honey is</a>
        <a onClick={handleClickTable} >Table</a>
        <a onClick={handleClickCircle}>Tracking Circle</a>
      </nav>

      <TrackingCircle delay={12} />

      <main className={styles.main}>
        {showHoney && <Name adjectives={ADJECTIVES} />}
        {showTable && <FilterableProductTable products={PRODUCTS} />}
      </main>
    </>
  )
}

function Name({ adjectives }) {
  const [adjective, setAdjective] = useState(adjectives[0]);

  function handleClick() {
    setAdjective(adjectives[Math.floor(Math.random() * adjectives.length)]);
  }

  return (
    <div>
      <button>
        <h1 onClick={handleClick}> Honey is </h1>
      </button>
      <h1>{adjective}</h1>
    </div>

  )
}


const ADJECTIVES = ['cool', 'sweet', 'cute', 'funny', 'kind', 'caring', 'beautiful', 'smart']
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];
const DELAYS = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
