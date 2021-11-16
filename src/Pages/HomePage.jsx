import { List } from 'Ui';
import { mockNews } from 'mockData';
import { UserCard } from 'Entities';

export default function HomePage() {
  return (
    <>
      <h2>Dernières News</h2>
      <List data={mockNews} type="NewsCard" />
      <UserCard
        pseudo="Loic"
        id={1}
        avatar="https://i1.wp.com/www.lhommetendance.fr/wp-content/uploads/2014/05/betheartist.png?fit=717%2C467&ssl=1"
      />
    </>
  );
}
