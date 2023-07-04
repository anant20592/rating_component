import * as React from 'react';
import Rating from './Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './style.css';

export default function App() {
  const [value, setValue] = React.useState<null | number>(2);
  return (
    <div>
      <h1>Rating Component</h1>
      <Rating
        value={value}
        onChange={(event, newValue) => {
          console.log("new value- ", newValue)
          setValue(newValue);
        }}
      />
    </div>
  );
}
