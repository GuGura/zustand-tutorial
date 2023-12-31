import { StateCreator} from 'zustand'

type State = {
    count: number;
    text: string;
}
type Action = {
    increment: (by: number) => void;
    decrement: (by: number) => void;
    setText: (text: string) => void;
    reset: () => void;
}
const initialState: State = {
    count: 0,
    text: "hello",
}

export interface CountSlice extends State, Action {}

export const createCountSlice: StateCreator<CountSlice, [], [], CountSlice>
        = (set) => ({
    count: 0,
    text: "hello",
    increment: (by) => set(state => ({count: state.count + by})),
    decrement: (by) => set(state => ({count: state.count - by})),
    setText: (text) => set(() => ({text: text})),
    reset: () => set(initialState),
})