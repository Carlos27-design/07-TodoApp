import { useCounter, useFetch } from './../hook';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHook = () => {
  const { counter, increment } = useCounter();

  const { data, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  return (
    <>
      <h1>Rick and Morty</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote data={data} />}

      <div className='d-flex justify-content-center'>
        <button
          className='btn btn-primary'
          onClick={increment}
          disabled={isLoading}
        >
          Siguiente Personaje
        </button>
      </div>
    </>
  );
};
