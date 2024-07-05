import React from 'react';
import Sidebaar, { SidebarItem } from './components/Sidebaar';
import {
  LifeBuoy,
  Receipt,
  Boxes,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
  Package
} from 'lucide-react';
import Topbaar from './components/Topbaar';
import Content from './components/Content';

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebaar>
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active alert />
        <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" />
        <SidebarItem icon={<UserCircle size={20} />} text="User" />
        <SidebarItem icon={<Boxes size={20} />} text="Inventory" />
        <SidebarItem icon={<Package size={20} />} text="Orders" alert/>
        <SidebarItem icon={<Receipt size={20} />} text="Billings" />
        <hr className='my-3' />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
      </Sidebaar>
      <div className="flex flex-col flex-1">
        <Topbaar />
        <Content />
      </div>
    </div>
  );
}

export default App;
