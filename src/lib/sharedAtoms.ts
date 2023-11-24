import { atom } from "jotai";

export interface IMessageTextObject {
	text: string;
	id: number;
}
export const messageTextAtom = atom<IMessageTextObject[]>([]);
