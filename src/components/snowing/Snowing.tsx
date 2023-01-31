import Snowfall from 'react-snowfall';
import snowLogo from '../../assets/images/bg/snowflake.png';

const snowflake = document.createElement('img');
snowflake.src = snowLogo;
const snowingImg = [snowflake];

const Snowing = () => {
  return (
    <>
      <Snowfall
        snowflakeCount={150}
        radius={[5, 20]}
        speed={[0.2, 0.3]}
        wind={[0.1, 0.2]}
        images={snowingImg}
      />
    </>
  );
};

export default Snowing;
