import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState('');
  const URL = `https://api.nasa.gov/planetary/apod?api_key=${
    import.meta.env.VITE_APOD_KEY
  }`;

  useEffect(() => {
    axios.get(URL).then((res) => {
      setImage(res.data);
    });
  }, []);

  const getImage = (date) => {
    axios
      .get(`${URL}&date=${date}`)
      .then((res) => {
        setImage(res.data);
      })
      .catch((error) => {
        window.alert('No data!');
      });
  };

  return (
    <div className='flex flex-col mx-10 lg:mx-32 place-items-center'>
      <h1 className='text-3xl font-bold underline font-sans text-center'>
        {image.title}
      </h1>
      <h2 className='font-sans'>{image.date}</h2>
      <img src={image.url} className='lg:w-1/2' />
      <p className='font-mono my-5'>{image.explanation}</p>
      <div>
        <button
          onClick={() => {
            getImage(
              image.date.replace(
                /.$/,
                Number(image.date[image.date.length - 1]) - 1
              )
            );
          }}
          className='text-white bg-blue-700 hover:bg-blue-800 focus:blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        >
          Previous
        </button>
        <button
          onClick={() => {
            getImage(
              image.date.replace(
                /.$/,
                Number(image.date[image.date.length - 1]) + 1
              )
            );
          }}
          className='text-white bg-blue-700 hover:bg-blue-800 focus:blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
