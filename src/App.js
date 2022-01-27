import TopNavbar from './components/Nav/TopNavbar';
import ParkingPicture from './components/ParkingPicture';
import Welcome from './components/Welcome';

import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className='min-vh-100'>
      <TopNavbar />
      <Container>
        <ParkingPicture />
      </Container>
      <Welcome />
    </div>
  );
}

export default App;
