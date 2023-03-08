import './App.css';
import Transfer from './Transfer';
import Receipt from './Receipt';

// Defining the mock data
// With only one object for testing
const recieptData =
  {
      transactionHash: "0x1367409cddde9a7c8571d34f935adcb2a50214f2afbb151bb16eaf8847dda2ff",
      blockHash: "0xf32c44c730609dbbf6d5ba0ab7d9747460b8ab4f3d1c81d822cc10a6e48f2613",
      blockNumber: "10",
      from: "0x6dC70bEa16f1ef94A7350989ca5413a2E180860f",
      to: "0x03d0cf3f4A832C8E2c224BaA4a049110F39E630F",
      gasUsed: "21000"
  }

function App() {
  return (
    <div className="App">
      <Transfer/>
      <Receipt mockData={recieptData}/>
    </div>
  );
}

export default App;