import { Header } from "../layout/Header";
import { Footer } from '../Footer/Footer';
import { Values } from '../../components/Values';
import { Mission } from '../../components/Mission';
import { Vision } from '../../components/Vision';
import { Team } from '../../components/Team';
const AboutUS = () => {
  return (
    <div className="min-h-screen">
    <Header />
    <main>
    <Values />
        <Mission />
        <Vision />
        <Team />
    </main>
    <Footer />
  </div>
  )
}

export default AboutUS
