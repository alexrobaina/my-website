import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import JobExperience from '../JobExperience';

describe('<JobExperience />', () => {
  test('Should component must render correctly', () => {
    const { getByTestId }: any = render(<JobExperience />);

    expect(getByTestId('job-experience')).toBeDefined();
  });
});
