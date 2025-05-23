import { Head, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { contentService } from '../../../services/ContentSevice';
import NavBar from '@/components/website/navigation/NavBar';
import Banner from '@/pages/website/home/Banner';
import Footer from '@/components/website/navigation/Footer';

export default function Home() {
  const { initialContent } = usePage().props as any;

  useEffect(() => {
    if (initialContent) {
      contentService.initialize(initialContent);
    }
  }, [initialContent]);

  return (
    <>
      <Head title="Home" />
      <NavBar />
      <Banner />
      <Footer />
    </>
  );
}
