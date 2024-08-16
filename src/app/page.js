import Navbar from '../components/Navbar'
import Footer from '@/components/Footer';
import MainPage from '@/components/MainPage';
export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Navbar/>
      <MainPage/>
    </main>
  );
}
