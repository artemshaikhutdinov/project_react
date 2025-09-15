import "./App.css";
import Counter from "./components/Counter/Counter";
// import AgeInfo from "./components/AgeInfo/AgeInfo";
import DogCard from "./components/DogCard/DogCard";
// import Goodbye from "./components/Goodbye/Goodbye";

import PersonalGreeting from "./components/PersonalGreeting/PersonalGreeting";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";

function App() {
  return (
    <div>
      <SpaceMissionForm/>
      {/* <PersonalGreeting />

      <Counter />
      <DogCard /> */}
      {/* <Goodbye />
      <AgeInfo age={23} />
      <AgeInfo age={26} />
      <p>Live</p> */}

      {/* <ProfileCard
        avatar={"https://static.posters.cz/image/1300/202629.jpg"}
        name={"Sub-zero"}
        description={
          "Legal status: none, however resides somewhere in china. Occupation: life long member of the lin kuei, a rare clan of chinese, ninja-type, assassins"
        }
      /> */}
    </div>
  );
}

export default App;
