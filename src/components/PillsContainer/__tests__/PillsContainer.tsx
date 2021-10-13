import '@testing-library/jest-dom/extend-expect';
import { render } from '../../../utils/test-utils';
import PillsContainer from '../PillsContainer';

describe('<BaseText />', () => {
  const PETS_LOVE_PILLS = [
    { title: 'React', backgroundColor: '#7FACD9' },
    { title: 'Node.js', backgroundColor: '#338BCC' },
    { title: 'React Native', backgroundColor: '#CC9D33' },
    { title: 'I18n', backgroundColor: '#CC6233' },
    { title: 'Typescript', backgroundColor: '#3339CC' },
    { title: 'JWT', backgroundColor: '#CC3362' },
    { title: 'Next.js', backgroundColor: '#1DC491' },
    { title: 'Redux', backgroundColor: '#4A8B36' },
    { title: 'Heroku', backgroundColor: '#4516AD' },
    { title: 'Sagas', backgroundColor: '#0C4A4A' },
    { title: 'Mobx', backgroundColor: '#004272' },
    { title: 'MongoDB', backgroundColor: '#550E52' },
    { title: 'Express', backgroundColor: '#0091AC' },
  ];

  test('Should component must render correctly', () => {
    const { getByTestId }: any = render(<PillsContainer pills={PETS_LOVE_PILLS} />);

    expect(getByTestId('pills-container')).toBeDefined();
  });
});
