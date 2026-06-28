import InvitationCard from "./components/InvitationCard/InvitationCard";
import Countdown from "./components/Countdown/Countdown";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <InvitationCard>
      <Countdown />
      <Footer />
    </InvitationCard>
  );
}

export default App;
