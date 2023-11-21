import { IBaseResponse } from './IBaseResponse';

export interface ITicket {
	name: string;
	email: string;
	ticketType: string;
	ticketAmount: number;
	id: number;
}

export interface ITicketsResponse extends IBaseResponse {
	data: ITicket[];
}
