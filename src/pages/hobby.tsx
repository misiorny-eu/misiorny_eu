import { Dashboard } from '../components/templates/Dashboards/Dashboard';
import { Travels } from '../components/templates/Dashboards/Travels';
import { Web } from '../components/templates/Dashboards/Web';
import { Forex } from '../components/templates/Dashboards/Forex';

const Hobby = () => {
  return (
    <div className="mx-auto min-h-full w-full text-center shadow-2xl  md:w-10/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2">
      <Dashboard contain={[Travels(), Web(), Forex()]} />
    </div>
  );
};

export default Hobby;
