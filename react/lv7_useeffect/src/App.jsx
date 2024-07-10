import { useState } from 'react'
import Counter from './counter';
import './App.css';
import QuoteFetcher from './QuotesFetcher';
import QuoteFetcherLoader from './QuotesFetcherLoader';

function App() {

  return (
    <>
      {/* <Counter/>
      <div>hihi</div>
      <QuoteFetcher/> */}
      <QuoteFetcherLoader/>
    </>
  )
}

export default App
