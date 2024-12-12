// // pages/test-center.js

import React from 'react';
import { ApiConfig } from '../API/ApiConfig';
import TestCenter from './testCenter';

console.log(ApiConfig.getCentre)


export default function TestCenterPage({ initialCentres }) {
  return (
    <TestCenter initialCentres={initialCentres} />
  );
}

// Fetch data server-side at build time
export async function getStaticProps() {
  const res = await fetch(ApiConfig.getCentre); 
  const initialCentres = await res.json();
  console.log(initialCentres)

  return {
    props: {
      initialCentres,
    },
    revalidate: 60 * 60 * 24 * 30, 
  };
}
