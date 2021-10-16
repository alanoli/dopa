import { HABIT_STATUS } from "../enums/habits";

export interface Habit {
    id: string;
    title: string;
    imageUrl?: string;
    status?: HABIT_STATUS;
}

export interface HabitsFormInput {
    onClose: (withRefetch?: boolean) => void;
    habitState?: Habit
}