import {render} from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom';
import {SeccionContextProvider} from './store/seccion-context'
import {Auth0Provider} from '@auth0/auth0-react'

const domain=process.env.REACT_APP_AUTH0_DOMAIN;
const clientId=process.env.REACT_APP_AUTH0_CLIENT_ID;


render(
    <SeccionContextProvider>
        <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Auth0Provider>
    </SeccionContextProvider>,
    document.getElementById("app"));