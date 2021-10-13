import '@testing-library/jest-dom/extend-expect';
import { render } from '../../../utils/test-utils';
import Projects from '../Projects';

describe('<Projects />', () => {
  test('Should component must render correctly', () => {
    const { getByTestId }: any = render(<Projects />);

    expect(getByTestId('project')).toBeDefined();
  });
});
