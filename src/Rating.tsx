import * as React from 'react';
import StarIcon from '@mui/icons-material/Star';
interface RatingProps {
  name: string;
  icon?: any;
  value?: number;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    newValue: number
  ) => void;
}

const Rating: React.FC = ({
  name,
  icon,
  value = 0,
  onChange,
  ...restProps
}: RatingProps) => {
  const StarIconC = () => {
    if (icon) return <>{[1, 2, 3, 4, 5].map((el) => icon)}</>;
    return (
      <>
        {[1, 2, 3, 4, 5].map((el, indx) => (
          <label key={el}>
            <StarIcon
              style={el <= value ? { color: 'darksalmon' } : {}}
              key={indx}
            />
            <input
              type={'checkbox'}
              id={`rating-radio_${el}`}
              value={el}
              checked={el <= value ? true : false}
              onChange={handleChange}
              style={{ display: 'none' }}
            />
          </label>
        ))}
      </>
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    if (e.target.checked) {
      onChange(e, value === newValue ? newValue + 1 : newValue);
    }
    if (!e.target.checked)
      onChange(e, value === newValue ? newValue - 1 : newValue);
  };

  return (
    <div {...restProps} id={name}>
      {<StarIconC />}
    </div>
  );
};

export default Rating;
