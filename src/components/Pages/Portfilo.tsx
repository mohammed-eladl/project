import { Header } from "../layout/Header";
import { Footer } from '../Footer/Footer';
import { Gallery } from '../Gallery/Gallery';
const Portfilo = () => {
    return (
        <div className="min-h-screen">
        <Header />
        <main>
        <Gallery />
        </main>
        <Footer />
      </div>
      )
}

export default Portfilo
