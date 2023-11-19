import { IShortAreaData } from "./IAreas";
import { IBaseResponse } from "./IBaseResponse";

export interface IDetailsData extends IShortAreaData {
  description: string;
}

export interface ILoaderDetailsResponse extends IBaseResponse {
	data: IDetailsData;
}