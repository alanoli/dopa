import { HABIT_STATUS } from "../enums/habits";

export interface Habit {
    id: string;
    title: string;
    imageUrl?: string;
    status?: HABIT_STATUS;
    createdAt?: string;
    editedAt?: string;
    habitType?: string;
}

export interface HabitsFormInput {
    onClose?: (withRefetch?: boolean) => void;
    habitState?: Habit
}

export interface HabitsCardInput {
    onChange: () => void;
    habitState: Habit
}

export interface Image {
    type: string;
    path: string;
    id: string;
}