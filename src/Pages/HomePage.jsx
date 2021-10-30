import { List } from 'Ui';
import { mockNews } from 'mockData';

export default function HomePage() {
  return <List data={mockNews} type="NewsCard" title="Dernières News" />;
}
