import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='title'>SMART ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</h1>
      <p className='subtitle'>Նախքան առաքանու ԱՄՆ կամ Չինաստանի պահեստ հասնելը դուք կարող եք պատվիրել հետևյալ SMART ծառայությունները</p>

      <div className='cards'>
        <img src='https://onex.am/images/smart-service.svg'></img>

        <div className='card'>
          <div className='cards-img'>
            <img src='https://onex.am/images/smart_services/photo-camera.svg'></img><br></br>
            <img src='https://onex.am/images/smart_services/photos-inside.svg'></img><br></br>
            <img src='https://onex.am/images/smart_services/stop.svg'></img><br></br>
            <img src='https://onex.am/images/smart_services/check-order.svg'></img><br></br>
            <img src='https://onex.am/images/smart_services/single-package.svg'></img><br></br>
            <img src='https://onex.am/images/smart_services/repackaging.svg'></img><br></br>
            <img src='https://onex.am/images/smart_services/change-receiver.svg'></img><br></br>
            <img src='https://onex.am/images/smart_services/unboxing.svg'></img><br></br>
          </div>
          <div className='text'>
            <p>Լուսանկարել դրսից</p>
            <p>Լուսանկարել ներսից</p>
            <p>Կանգնեցնել</p>
            <p>Չվերափաթեթավորել</p>
            <p>Հավելյալ վերափաթեթավորում</p>
            <p>Փոխել ստացողին</p>
            <p>Բաժանել մասերի</p>
          </div>
          <div>
            <button className='button'>ԱՎԵԼԻՆ </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
