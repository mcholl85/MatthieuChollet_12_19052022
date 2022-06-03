import { useContext } from 'react';
import iconCalorie from '../../assets/img/icon-calories.png';
import iconGlucide from '../../assets/img/icon-glucides.png';
import iconLipide from '../../assets/img/icon-lipides.png';
import iconProtein from '../../assets/img/icon-proteines.png';
import UserContext from '../../utils/context';

/**
 * Component for showing Statistic User.
 * @component
 */

function CountChart() {
  const { userData } = useContext(UserContext);
  const numberOfCalorie = userData.data.keyData.calorieCount;
  const numberOfProtein = userData.data.keyData.proteinCount;
  const numberOfCarbohydrate = userData.data.keyData.carbohydrateCount;
  const numberOfLipid = userData.data.keyData.lipidCount;

  return (
    <section className="count">
      <div className="count__article">
        <div className="count__article__icon count__article__icon--calorie">
          <img src={iconCalorie} alt="icon calorie" />
        </div>
        <div>
          <p className="count__article__data">{`${numberOfCalorie}kCal`}</p>
          <p className="count__article__unit">Calories</p>
        </div>
      </div>
      <div className="count__article">
        <div className="count__article__icon count__article__icon--protein">
          <img src={iconProtein} alt="icon proteine" />
        </div>
        <div>
          <p className="count__article__data">{`${numberOfProtein}g`}</p>
          <p className="count__article__unit">Proteines</p>
        </div>
      </div>
      <div className="count__article">
        <div className="count__article__icon count__article__icon--glucide">
          <img src={iconGlucide} alt="icon glucide" />
        </div>
        <div>
          <p className="count__article__data">{`${numberOfCarbohydrate}g`}</p>
          <p className="count__article__unit">Glucides</p>
        </div>
      </div>
      <div className="count__article">
        <div className="count__article__icon count__article__icon--lipide">
          <img src={iconLipide} alt="icon lipide" />
        </div>
        <div>
          <p className="count__article__data">{`${numberOfLipid}g`}</p>
          <p className="count__article__unit">Lipides</p>
        </div>
      </div>
    </section>
  );
}

export default CountChart;
