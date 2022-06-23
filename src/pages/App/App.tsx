import { BrowserRouter as Router } from 'react-router-dom'

import styled from 'styled-components';
import GlobalStyles from '../../styles/Global.style';


import { Header } from './components/Header'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    max-height: 100vh;
`;

const App = (): JSX.Element => (
    <Container>
    <GlobalStyles />
    <Router>
    <Header />
    <div>oi</div>
    </Router>
    </Container>
)

export default App