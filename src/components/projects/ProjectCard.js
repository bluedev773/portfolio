import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    marginTop: '30px',
    width: '75%',
    //minWidth: '500px',
    maxWidth: '900px',
    maxHeight: '300px',

  },
  media: {
    width: 300,
    height: 300,
    objectFit: 'contain',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
  },
  buttons: {
    justifyContent: 'flex-end',
    marginTop: 'auto',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  cardTitle: {
    fontFamily: 'Roboto',
    color: '#DC4371',
    fontSize: 20,
    fontWeight: 500,
    paddingBottom: 45,
  },
  cardDescription: {
    fontFamily: 'Roboto',
    color: '#888',
    fontSize: 16,
    fontWeight: 500,
  },
});

export default function ProjectCard({ image, title, description, link }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
      
        <div className={classes.details}>
        <div>
        <CardActionArea href={link}>
          <CardMedia

            className={classes.media}
            image={image}
            title='Project Image'
            component="img"
            

          />
          </CardActionArea>
          </div>
          
          <div className={classes.content}>
          
            <CardContent>
              <Typography className={classes.cardTitle}>{title}</Typography>
              <Typography className={classes.cardDescription}>
                {description}
              </Typography>
            </CardContent>
            <CardActions className={classes.buttons}>
              <Button href={link} target="_blank" rel="noopener noreferrer">Github</Button>
            </CardActions>
          </div>
        </div>
      </Card>
    </div>
  );
}
