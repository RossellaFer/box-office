import { Link } from 'react-router-dom';

const LINKS = [
  {
    text: 'HOME',
    to: '/',
  },
  {
    text: 'Starred',
    to: '/starred',
  },
];

const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map(item => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <Link to="/starred">Go to starred page</Link>
    </div>
  );
};

export default Navs;
