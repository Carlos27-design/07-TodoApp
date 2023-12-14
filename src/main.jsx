import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import { MainApp } from './11-useContext/MainApp';
// import { TodoApp } from './10-useReducer/TodoApp';
// import { Padre } from './09-tarea-memo/Padre';
// import { CallbackHook } from './08-useCallback/CallbackHook';
// import { MemoHook } from './07-useMemo/MemoHook';
// import { Memorize } from './06-memos/Memorize';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { MultipleCustomHook } from './03-example/MultipleCustomHook';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { HookApp } from './HookApp';
// import { CounterApp } from './01-useState/CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
