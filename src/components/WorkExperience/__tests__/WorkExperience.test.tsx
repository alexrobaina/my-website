import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import WorkExperience from '../WorkExperience';

describe('<WorkExperience />', () => {
  test('Should component must render correctly', () => {
    const { getByTestId }: any = render(<WorkExperience />);

    expect(getByTestId('job-experience')).toBeDefined();
  });
});
