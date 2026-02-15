import Navbar from "../components/Navbar";
import ProductSection from "../sections/ProductSection";
import Hero from "../sections/Hero";
import Footer from "../sections/Footer";

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
