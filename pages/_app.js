import '../styles/globals.css'
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {

  const [showing, setShowing] = useState(false);

      useEffect(() => {
        setShowing(true);
      }, []);
      if (!showing) {
        return null;
      }
      if (typeof window === 'undefined') {
        return <></>;
      } else {
        return (
          <>
              <Component {...pageProps} />
              <ToastContainer />
          </> 
          )
      }
}

export default MyApp
