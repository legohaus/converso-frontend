import TopicCard from './TopicCard';

const Home: React.FC = () => {
  const topics = [
    {
      image: '1',
      title: 'Topic Number 1',
      description: 'This is a short description for topic number 1.',
    },
    {
      image: '2',
      title: 'Topic Number 2',
      description: 'This is a short description for topic number 2.',
    },
    {
      image: '3',
      title: 'Topic Number 3',
      description: 'This is a short description for topic number 3.',
    },
    {
      image: '4',
      title: 'Topic Number 4',
      description: 'This is a short description for topic number 4.',
    },
  ];
  return (
    <>
      <h1 className="text-2xl font-bold text-center">Welcome to Converso</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic, idx) => (
          <TopicCard
            key={idx}
            image={topic.image}
            title={topic.title}
            description={topic.description}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
