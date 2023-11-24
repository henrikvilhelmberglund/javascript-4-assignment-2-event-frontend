import { Loader } from '.';
import { ILoaderAreasResponse, IShortAreaData } from '../../lib/interfaces/IAreas';
import type { LoaderFunctionArgs } from 'react-router';

describe('Areas loader', async () => {
	// const router = createMemoryRouter([{ path: '/', element: <Index /> }], { initialEntries: ['/'] });
	// const { container } = render(<RouterProvider router={router} />);

  const data = await Loader({} as LoaderFunctionArgs<Response>);
  const response = data as Response;
	const json: ILoaderAreasResponse = await response.json();
	const areas: IShortAreaData[] = json.data;

	it.each(areas)(`$name has id, name and image_url`, async (area: IShortAreaData) => {
		expect(area.id).toBeDefined();
		expect(area.name).toBeDefined();
		expect(area.image_url).toBeDefined();
	});
});
