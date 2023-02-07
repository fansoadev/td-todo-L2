import Add from '../Add';
import { render } from '@testing-library/react';

describe('Component Add.tsx', () => {
    it('Add component exist', () => {
      const { getByText } = render(<Add />);
      expect(getByText('Todo')).toBeInTheDocument();
    });
  });

