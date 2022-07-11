import Navbar from '../components/navbar/Navbar';

export default function Home() {
  return (
    <div className='max-w-screen-lg  flex flex-col w-full h-full'>
      <div className='flex flex-col w-full h-full'>
        <Navbar />
        <div className='flex w-full h-3/5 justify-around items-center font-["Josefin_Sans"]'>
          <div className='flex flex-col'>
            <h3 className='text-3xl'>
              <span className='text-6xl mr-5'>👋</span>
              Hi, my name is
            </h3>
            <div className='flex flex-col items-end mt-12'>
              <h2 className='text-5xl font-bold mb-4'>Mohammed J</h2>
              <h2 className='text-5xl font-bold text-zpurple-900'>Hossain</h2>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='profile-holder flex bg-gray-300 rounded-full items-center justify-center'>
              P
            </div>
            <div className='profile-back bg-gray-600 rounded-full items-center justify-center'>
              Q
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
