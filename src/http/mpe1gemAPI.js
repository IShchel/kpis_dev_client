import {$host} from "./index";

export const fetchFromR1022 = async () => {
    const {data} = await $host.get('api/r1022/getFederalSubjectsInstance_0_13')

    return data
}

export const fetchMpe1gemSelected = async (input) => {
    const {data} = await $host.get('api/mpe1gem/get', {params: {
            r1022_fk: input
        }})
    return data
}

export const addMpe1gem = async (input) => {

    const data = await $host.post('api/mpe1gem/create', input)
    return data
}

export const updateMpe1gem = async (input) => {

    const {data} = await $host.post('api/mpe1gem/update', input)
    return data
}
