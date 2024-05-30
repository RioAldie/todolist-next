import { redirect } from 'next/navigation';

const Home = async () => {
  return redirect('/main');
};

export default Home;
