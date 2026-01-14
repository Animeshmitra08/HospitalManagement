import { useParams } from 'react-router-dom'
import Breadcrumbs from '../Components/Breadcrumbs'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Doctors = () => {

  const parms = useParams();
  
  return (
    <>
    <Header/>
    <section
    className="relative min-h-screen pt-18 pb-20 overflow-hidden"
    >
      <Breadcrumbs 
      items={[
        { label: "Doctor"}
      ]}
      />
    </section>
    <Footer/>
    </>
  )
}

export default Doctors