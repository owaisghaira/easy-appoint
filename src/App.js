import './App.css';
import { Row, Col } from 'antd';
import { Login,DoctorsList ,Appointments,Processing} from './screens'

function App() {
  return (
    <div style={{margin:'15px'}}>
      <Row>
        <Col span={24}>
          {/* <Login /> */}
          {/* <DoctorsList/> */}
          {/* <Appointment?s/> */}
          <Processing/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
