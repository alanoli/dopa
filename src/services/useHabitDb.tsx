import React from 'react';

import { useDb } from '../hooks/useDb';
import { buildConstraint } from '../utils/dbConstraintBuilder';

import { useAuth } from '../hooks/useAuth';

const COLLECTION_NAME = "habits";

interface HabitsDocumentData {
    id: string,
    control_type: string,
    title: string
}

interface UseHabitReturn {
    getAllHabits: () => Promise<HabitsDocumentData[]>;
    newHabit: (data: unknown) => void;
    deleteHabit: (id: string) => void;
}

const useHabitDb = (): UseHabitReturn => {
    const { auth } = useAuth();
    const {
        getDocuments,
        createDocument,
        deleteDocument
    } = useDb();

    const userConstraint = buildConstraint("userid", "==", auth.currentUser.uid);

    const getAllHabits = async () => {
        return await getDocuments(COLLECTION_NAME, [userConstraint]) as HabitsDocumentData[];
    }

    const newHabit = async (data: unknown) => {
        createDocument(COLLECTION_NAME, data);
    }

    const deleteHabit = async (id) => {
        deleteDocument(COLLECTION_NAME, id);
    }

    return {
        getAllHabits,
        newHabit,
        deleteHabit
    }
}

export default useHabitDb;