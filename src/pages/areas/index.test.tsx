import { render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import Index, { Loader } from '.';
import { ILoaderAreasResponse, IShortAreaData } from '../../lib/interfaces/IAreas';

describe('Areas loader', async () => {
	// const router = createMemoryRouter([{ path: '/', element: <Index /> }], { initialEntries: ['/'] });

	// const { container } = render(<RouterProvider router={router} />);

	// expect('Photo area').toBeInTheDocument();
	// expect(container.getByText(/Photo area/i)).toBeInTheDocument();

	const data = await Loader();
	const json: ILoaderAreasResponse = await data.json();
	const areas: IShortAreaData[] = json.data;

	it.each(areas)(`$name has id, name and image_url`, async (area: IShortAreaData) => {
		expect(area.id).toBeDefined();
		expect(area.name).toBeDefined();
		expect(area.image_url).toBeDefined();
	});
});
