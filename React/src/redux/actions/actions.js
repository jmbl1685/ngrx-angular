import { HIDE_MODAL, REQUEST_API } from "../constants/action-types";

export const HideModal = data => ({ type: HIDE_MODAL, payload: data });
export const RequestApi = data => ({ type: REQUEST_API, payload: data });