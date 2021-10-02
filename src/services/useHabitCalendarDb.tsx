import React from 'react';
import { HABIT_STATUS } from '../enums/habits';
import moment from 'moment';

import { useDb } from '../hooks/useDb';

const COLLECTION_NAME = "habit_calendar";

interface HabitStatus {
    habit_id: string,
    status: HABIT_STATUS
}

interface HabitsCalendarDocumentData {
    day: string,
    habits: HabitStatus[]
}

interface UseHabitCalendarReturn {
    getDayHabits: (day: string) => Promise<HabitsCalendarDocumentData[]>;
    getTodayHabits: () => Promise<HabitsCalendarDocumentData[]>;
}

const useHabitCalendarDb = (): UseHabitCalendarReturn => {
    const {
        getDocuments,
    } = useDb();

    const getDayHabits = async (day: string) => {
        const documents = await getDocuments(COLLECTION_NAME) as HabitsCalendarDocumentData[];
        // filter day habits calendar

        return documents;
    }

    const getTodayHabits = async () => {
        return await getDayHabits(moment().format('YYYYMMDD'));
    }

    return {
        getDayHabits,
        getTodayHabits
    }
}

export default useHabitCalendarDb;