import Navbar from "../components/Navbar";
import ProductSection from "./ProductSection";
import Hero from "./Hero";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <main className="container mx-auto max-w-6xl mt-20">
        <ProductSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
