import Footer from "./components/Footer";
import Header from "./components/header";
import Food from "./shared/Food";
import Card from "./components/Card";
import Student from "./components/Student";
import UserGreeting from "./components/UserGreeting";

function App() {
  return (
    <>
      <Header />
      <Food />
      <Card />

      <div>
        <h1>React Props</h1>
          <Student name="Maria Albao" age={22} isStudent={true} />
          <Student name="Jude Edison Dicen" age={22} isStudent={false} />
          <Student />
      </div>

      <UserGreeting isLoggedIn={true} username = "Maria"/>
      <Footer />
    </>
  );
}

export default App;
