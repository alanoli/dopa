import React from 'react';

import { useDb } from '../hooks/useDb';
import { buildConstraint } from '../utils/dbConstraintBuilder';

import { useAuth } from '../hooks/useAuth';
import { DocumentData } from '@firebase/firestore';
import { Habit } from '../types';

const COLLECTION_NAME = "habits";

export interface HabitsDocumentData {
    id: string,
    control_type: string,
    title: string
}

interface UseHabitReturn {
    getAllHabits: () => Promise<HabitsDocumentData[]>;
    newHabit: (data: unknown) => DocumentData;
    deleteHabit: (id: string) => void;
    updateHabit: (id: string, data: Habit) => void;
}

const useHabitDb = (): UseHabitReturn => {
    const { auth } = useAuth();
    const {
        getDocuments,
        createDocument,
        deleteDocument,
        updateDocument
    } = useDb();

    const userConstraint = buildConstraint("userid", "==", auth.currentUser.uid);

    const getAllHabits = async () => {
        try {
            return await getDocuments(COLLECTION_NAME, [userConstraint]) as HabitsDocumentData[];
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    const updateHabit = async (id: string, data: Habit) => {
        try {
            updateDocument(COLLECTION_NAME, id, data);
        } catch (error) {
            console.log(error);
        }
    }

    const newHabit = async (data: Habit) => {
        return await createDocument(COLLECTION_NAME, data) as DocumentData;
    }

    const deleteHabit = async (id) => {
        deleteDocument(COLLECTION_NAME, id);
    }

    return {
        getAllHabits,
        newHabit,
        deleteHabit,
        updateHabit
    }
}

export default useHabitDb;