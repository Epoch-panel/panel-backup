import Header from './components/Header';
import Sidebar from './components/Sidebar';

const Dashboard = () => {
  return (
    <>
        <Header title="Dashboard" />
        <Sidebar />
        <main className="w-[calc(100vw - 96px)] p-6 ml-56">
          <div id="content">
          <div className="flex space-x-4 items-center p-2">
 <h1 className="text-3xl font-bold text-white">Welcome back, Demon</h1>
 </div>
          </div>
        </main>
    </>
  );
};

export default Dashboard;
