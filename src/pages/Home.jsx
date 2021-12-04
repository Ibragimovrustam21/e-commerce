import { About } from '../components/About'
import { Adventage } from '../components/Adventage'
import { Carousel } from '../components/Carousel'
import { Contact } from '../components/Contact'
import { Products } from '../components/Products'

export const Home = () => (
  <>
    <Carousel />
    <Adventage />
    <Products />
    <About />
    <Contact />
  </>
)
