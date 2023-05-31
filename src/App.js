
import Input from "./component/input/Input";
import Banck from "./component/banck/Banck";
import Home from "./component/home/Home";
import Page from "./component/page/Page";
import Receiver from "./component/receiver/Receiver";
import Rimetance from "./component/remitance/Rimetance";
import Service from "./component/service/Service";
import Store from "./component/store/Store";
import Track from "./component/track/Track";
import World from "./component/world/World";
import Contact from "./component/contact/Contact";
import Footer from "./component/fotor/Footer";


function App() {
  return (
    <div className="App">
      
      <Home />
      <Page />
      <Store />
      <Banck />
      <World />
      <Track />
      <Rimetance />
      <Receiver />
      <Service />
       <Input />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
