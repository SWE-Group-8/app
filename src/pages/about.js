import MediaCard from '../components/MediaCard.tsx';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import AngeloPic from '../images/Angelo-M.png';
import BondPic from '../images/Bond-Blanton.jpg';
import EricPic from '../images/Eric-P.jpg';
import JavierPic from '../images/Javier-Rosa.jpg';
import ZaqPic from '../images/zaquariah-holland.jpg';
const mediaCards = [
  {
    image: AngeloPic,
    title: "Angelo Middleton",
    description: `Database Management Lead`,
  },
  {
    image: BondPic,
    title: "Bond Blanton",
    description: `Items & Inventory Manager`,
  },
  {
    image: EricPic,
    title: "Eric Por",
    description: `Lead UI Designer`,
  },
  {
    image: JavierPic,
    title: "Javier Delarosa Quiros",
    description: `Accounts & Carts Manager`,
  },
  {
    image: ZaqPic,
    title: "Jose Torres",
    description: `Lead UX Designer`,
  },
  {
    image: ZaqPic,
    title: "Zaquariah Holland",
    description: `Project Manager`,
  },
];

export default function About() {
  return (
    <Box p={20}>
    <Grid container spacing={10}>
      {mediaCards.map((mediaCard, i) => {
        return( 
          <Grid key ={i} item>
            <MediaCard  {...mediaCard} /> 
          </Grid> 
        );
      })}
    </Grid>
    </Box>
  );
}