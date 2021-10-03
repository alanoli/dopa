import React from 'react';
import { HABIT_STATUS } from '../enums/habits';
import moment from 'moment';

import { useDb } from '../hooks/useDb';
import { useAuth } from '../hooks/useAuth';

import { buildConstraint } from '../utils/dbConstraintBuilder';
import { updateDoc } from '@firebase/firestore';

const COLLECTION_NAME = "habit_calendar";
const HABITS_SUBCOLLECTION_NAME = "habits"

interface HabitStatus {
    id: string,
    habit_id: string,
    status: HABIT_STATUS
}

interface HabitsCalendarDocumentData {
    id: string,
    day: string,
    habits: HabitStatus[]
}

interface UseHabitCalendarReturn {
    getDayHabits: (day: string) => Promise<HabitStatus[]>;
    getTodayHabits: () => Promise<HabitStatus[]>;
    updateDayHabits: (day: string, habit_id: string, data: unknown) => void;
}

const useHabitCalendarDb = (): UseHabitCalendarReturn => {
    const { auth } = useAuth();
    const {
        getDocuments,
        updateDocument
    } = useDb();

    const userConstraint = buildConstraint("userid", "==", auth.currentUser.uid);

    const getDayHabits = async (day: string) => {
        const dayConstraint = buildConstraint("day", "==", day);
        const documents = await getDocuments(COLLECTION_NAME, [userConstraint, dayConstraint]) as HabitsCalendarDocumentData[];
        return await getDocuments(`${COLLECTION_NAME}/${documents[0].id}/${HABITS_SUBCOLLECTION_NAME}`) as HabitStatus[];
    }

    const getTodayHabits = async () => {
        return await getDayHabits(moment().format('YYYYMMDD'));
    }

    const updateDayHabits = async (day: string, habit_id: string, data: unknown) => {
        const dayConstraint = buildConstraint("day", "==", day);
        const habitsCalendar = await getDocuments(COLLECTION_NAME, [userConstraint, dayConstraint]) as HabitsCalendarDocumentData[];
        updateDocument(`${COLLECTION_NAME}/${habitsCalendar[0].id}/${HABITS_SUBCOLLECTION_NAME}`, habit_id, data);
    }

    return {
        getDayHabits,
        getTodayHabits,
        updateDayHabits
    }
}

export default useHabitCalendarDb;