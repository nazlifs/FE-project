import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-orange-500 h-screen text-white">
      <ul className="space-y-2 p-4">
        <li className="font-bold text-lg">KAUTSAR</li>
        <li className="w-full">
          <Link to="/hero">Dashboard</Link>
        </li>
        <li className="w-full">
          <Link to="/daftar">Peserta</Link>
        </li>
        <li>
          <Link to="/jadwal">Jadwal</Link>
        </li>
        <li>
          <Link to="/laporan">Laporan</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
