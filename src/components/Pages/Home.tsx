import { Header } from "../layout/Header";
import { Hero } from "../home/Hero";
import { Services } from "../home/Services";
import { WhyChooseUs } from "../home/WhyChooseUs";
import { Partners } from "../home/Partners/Partners";
import { Certificates } from "../home/Certificates/Certificates";
import { Footer } from '../Footer/Footer';
const Home = () => {
  return (
    <div className="min-h-screen">
    <Header />
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Partners />
      <Certificates />
    </main>
    <Footer />
  </div>
  )
}

export default Home
