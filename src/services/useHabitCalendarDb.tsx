import React from 'react';
import { HABIT_STATUS } from '../enums/habits';
import moment from 'moment';

import { useDb } from '../hooks/useDb';
import useHabitDb from '../services/useHabitDb';
import { useAuth } from '../hooks/useAuth';

import { HabitsDocumentData } from './useHabitDb';

import { buildConstraint } from '../utils/dbConstraintBuilder';
import { ContactSupportOutlined } from '@material-ui/icons';

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

interface HabitCalendarData extends HabitsDocumentData {
    status: string
}

interface UseHabitCalendarReturn {
    getDayHabits: (day: string) => Promise<HabitStatus[]>;
    getTodayHabits: () => Promise<HabitCalendarData[]>;
    updateDayHabits: (day: string, habit_id: string, data: unknown) => void;
    addNewHabitToCalendar: (habit_id: string) => void;
}

export const TODAY = moment().format('YYYYMMDD');

const useHabitCalendarDb = (): UseHabitCalendarReturn => {
    const { auth } = useAuth();
    const {
        getDocuments,
        updateDocument,
        createDocument
    } = useDb();

    const {
        getAllHabits
    } = useHabitDb();

    const userConstraint = buildConstraint("userid", "==", auth.currentUser.uid);

    const getDayHabits = async (day: string) => {
        const dayConstraint = buildConstraint("day", "==", day);
        try {
            const documents = await getDocuments(COLLECTION_NAME, [userConstraint, dayConstraint]) as HabitsCalendarDocumentData[];
            if (documents.length == 0) {
                return [];
            }
            return await getDocuments(`${COLLECTION_NAME}/${documents[0].id}/${HABITS_SUBCOLLECTION_NAME}`) as HabitStatus[];
        } catch (error) {
            console.log(error);
        }
    }

    const getTodayHabits = async () => {
        // Get day habits calendar and all user habits
        const habitsToday = await getDayHabits(TODAY);
        const habits = await getAllHabits();
        if (habitsToday.length == 0) { // In case there are no calendar for today
            createTodayHabitsRecord(habits);
            // console.log(habitsToday);
        }

        return habits.map((habit) => {
            let habitCalendar = habitsToday.find(htoday => htoday.habit_id == habit.id);
            if (habitCalendar === undefined) {
                // TODO: Add this habit calendar record
                return {
                    ...habit,
                    status: HABIT_STATUS.PENDING
                }
            } else {
                return {
                    ...habit,
                    status: habitCalendar.status
                }
            }
        })
    }

    const updateDayHabits = async (day: string, habit_id: string, data: unknown) => {
        const dayConstraint = buildConstraint("day", "==", day);
        const habitsCalendar = await getDocuments(COLLECTION_NAME, [userConstraint, dayConstraint]) as HabitsCalendarDocumentData[];
        updateDocument(`${COLLECTION_NAME}/${habitsCalendar[0].id}/${HABITS_SUBCOLLECTION_NAME}`, habit_id, data);
    }

    const createTodayHabitsRecord = async (habits: HabitsDocumentData[]) => {
        const createdId = await createDocument(COLLECTION_NAME, {
            day: TODAY,
            userid: auth.currentUser.uid
        });
        console.log(createdId);
        habits.forEach(async (habit) => {
            await createDocument(`${COLLECTION_NAME}/${createdId.id}/${HABITS_SUBCOLLECTION_NAME}`, {
                habit_id: habit.id,
                status: HABIT_STATUS.PENDING
            });
        })
    }

    const addNewHabitToCalendar = async (habit_id: string) => {
        try {
            const dayConstraint = buildConstraint("day", "==", TODAY);
            const document = await getDocuments(COLLECTION_NAME, [userConstraint, dayConstraint]) as HabitsCalendarDocumentData[];
            await createDocument(`${COLLECTION_NAME}/${document[0].id}/${HABITS_SUBCOLLECTION_NAME}`, {
                habit_id: habit_id,
                status: HABIT_STATUS.PENDING
            });
        } catch (error) {
            console.log(error);
        }
    }

    return {
        getDayHabits,
        getTodayHabits,
        updateDayHabits,
        addNewHabitToCalendar
    }
}

export default useHabitCalendarDb;