import styled from 'styled-components';

type Props = {
  image: string;
  title: string;
  description: string;
};

const TopicCard: React.FC<Props> = ({ image, title, description }) => {
  const Container = styled.div`
    text-align: center;
    border-radius: 0.5rem;

    &:hover {
      background: grey;
      cursor: pointer;
    }
  `;

  return (
    <Container>
      <img src={image} />
      <h2>{title}</h2>
      <h3>{description}</h3>
    </Container>
  );
};

export default TopicCard;
