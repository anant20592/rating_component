import * as React from 'react';
import StarIcon from '@mui/icons-material/Star';
interface RatingProps {
  icon?: any;
  value?: number;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    newValue: number
  ) => void;
}

const Rating: React.FC = ({
  icon,
  value = 0,
  onChange,
  ...restProps
}: RatingProps) => {
  const Icon = icon;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    if (e.target.checked) {
      onChange(e, value === newValue ? newValue + 1 : newValue);
    }
    if (!e.target.checked)
      onChange(e, value === newValue ? newValue - 1 : newValue);
  };

  return (
    <div {...restProps}>
      <>
        {[1, 2, 3, 4, 5].map((el, indx) => (
          <label key={el}>
            {Icon ? (
              <Icon
                style={el <= value ? { color: 'darksalmon' } : {}}
                key={indx}
              />
            ) : (
              <StarIcon
                style={el <= value ? { color: 'darksalmon' } : {}}
                key={indx}
              />
            )}
            <input
              type={'checkbox'}
              id={`rating-cb_${el}`}
              value={el}
              checked={el <= value ? true : false}
              onChange={handleChange}
              style={{ display: 'none' }}
            />
          </label>
        ))}
      </>
    </div>
  );
};

export default Rating;
