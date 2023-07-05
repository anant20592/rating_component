import * as React from 'react';
import Rating from './Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './style.css';

export default function App() {
  const [value, setValue] = React.useState<null | number>(2);
  const IconComponent = (props: any) => {
    return (
      <span {...props}>
        <FavoriteIcon />
      </span>
    );
  };
  return (
    <div>
      <h1>Rating Component</h1>
      <Rating
        value={value}
        onChange={(
          event: React.ChangeEvent<HTMLInputElement>,
          newValue: number
        ) => {
          setValue(newValue);
        }}
        icon={IconComponent}
      />
    </div>
  );
}
