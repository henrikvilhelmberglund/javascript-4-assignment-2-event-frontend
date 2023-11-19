import { IBaseResponse } from "./IBaseResponse";

export interface IShortAreaData {
	id: number;
	name: string;
	image_url: string;
}

export interface ILoaderAreasResponse extends IBaseResponse {
	data: IShortAreaData[];
}