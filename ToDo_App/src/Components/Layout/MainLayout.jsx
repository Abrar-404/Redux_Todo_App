import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="lg:max-w-[1400px] md:max-w-[768px] max-w-[425px] mx-auto">
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
