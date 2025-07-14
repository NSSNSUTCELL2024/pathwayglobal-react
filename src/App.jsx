import WhyWeStandOut from "./WhyWeStandOut";
import Hero from "./pages/Hero";
import Header from "./components/header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero/>
        <WhyWeStandOut />
        <Footer/>
      </main>
    </>
  );
}

export default App;
