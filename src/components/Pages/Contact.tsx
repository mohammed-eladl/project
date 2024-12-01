import { Header } from "../layout/Header";
import { Footer } from '../Footer/Footer';
import { Map } from '../Map';
import { ContactForm } from '../ContactForm';
const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
       
        <ContactForm />
        <Map />
  
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
