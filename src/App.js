import './App.css';
import Form from './Components/Form';
import Details from './Components/Details';
import Header from './Components/Header';
import { useState } from 'react';
import axios from 'axios';


function App() {
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  function fetchDetails() {
    setLoading(true);
    axios.get(`http://api.zippopotam.us/${country}/${zip}`)
    .then(res => {
      console.log(res.data);
      setData(res.data);
      setLoading(false);
      setError(null);
    })
    .catch((error) => {
      // Error
      if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.status);
          setError("We couldn't find the details for the specified location. Please try again.")
      } else if (error.request) {
          // The request was made but no response was received
          setError("We couldn't find the details for the specified location. Please try again.")
      } else {
          setError("There is a problem with connecting to the server. Please try again.")
      }
      setLoading(false);
      console.log(error.message)
      // console.log(error.config);
  });
  }

  return (
    <div className='container'>
      <Header />
      <Form country ={country} setCountry= {setCountry} zip ={zip} fetchDetails={fetchDetails} setZip={setZip} />
      <Details data={data} loading={loading} error={error} setLoading={setLoading}/>
    </div>
  );
}

export default App;
