import './styles.css'
import Header from './components/Header'
import BlogPost1 from './components/BlogPost1'
import BlogPost2 from './components/BlogPost2'
import Footer from './components/Footer'

export default function App () {
  return (
    <div className='App'>
      <Header />
      <BlogPost1 />
      <BlogPost2 />
      <Footer />
    </div>
  )
}
