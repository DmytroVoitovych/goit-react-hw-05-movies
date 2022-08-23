import { Link } from "react-router-dom";
import { List, Bimg, Title, Li } from "./Home.styled";

 const Home = ({trends}) => {
  return (
    <Bimg>
      <Title>Trending today</Title>
          <List>
              {trends.map(({ id, title, name }) => <Li key={id}><Link  to={`/movies/${id}`} >{title??name}</Link></Li>)}
      </List>
    </Bimg>
  );
};

export default Home;