import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = (props, increment, decrement) => {
  const { name, image, status, gender } = !!props.data && props.data;

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 1, height: 1 });

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [name]);

  return (
    <>
      <div className='d-flex justify-content-center'>
        <div className='text-center'>
          <h3 className='mb-5' style={{ display: 'flex' }}>
            {name}
          </h3>
          <img className='img-fluid' src={image} alt={name} />
          <p ref={pRef}>{status === 'Alive' ? 'Esta Vivo' : 'Esta Muerto'}</p>
          <p className='mb-2'>{gender === 'Male' ? 'Hombre' : 'Mujer'}</p>
        </div>
      </div>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
