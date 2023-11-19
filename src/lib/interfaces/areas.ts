export interface IShortAreaData {
	id: number;
	name: string;
	image_url: string;
}

export interface ILoaderResponse {
	status: string;
	statusCode: number;
	data: IShortAreaData[];
}