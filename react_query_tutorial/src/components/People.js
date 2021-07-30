import React from 'react';

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Person from './Person';
//No QueryClient set, use QueryClientProvider to set one
const queryClient = new QueryClient()

const fetchPeople = async () => {
  const res = await fetch('http://swapi.dev/api/people/');
  return res.json();
}

const People = () => {
  const { data, status } = useQuery('people', fetchPeople);
  console.log(data);

  return (
    <div>
      <h2>People</h2>
      {/* { status } */}

      {status === 'loading' && (
        <div>Loading data</div>
      )}

      {status === 'error' && (
        <div>Error fetching data</div>
      )}

      {status === 'success' && (
        <div>
          { data.results.map(person => <Person key={person.name} person={person} /> ) }
        </div>
      )} 
    </div>
  );
}
export default function Wraped(){
    return(<QueryClientProvider client={queryClient} contextSharing={true}>
          <People/>
      </QueryClientProvider>
    );
  }
// export default People;