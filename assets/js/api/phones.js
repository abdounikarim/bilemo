import { fetch } from "./api";

export function findPhones () {
    return fetch(`/api/phones`);
}

export function findPhone (id) {
    return fetch(`/api/phones/${id}`);
}
