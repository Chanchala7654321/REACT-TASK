import { Profiler } from "react";


export async function fatchProfile() {
    const resProfile = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!resProfile.ok) {
        throw new Error("profile fatch faild")
    }
    return resProfile.json()
}



export async function fatchState() {
    const resState = await fetch('https://api.github.com/repos/facebook/react')
    if (!resState.ok) {
        throw new Error("States fatch faild")
    }

    return resState.json()
}