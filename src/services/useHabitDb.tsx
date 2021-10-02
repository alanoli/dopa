import React from 'react';

import { useDb } from '../hooks/useDb';

const COLLECTION_NAME = "habits";

interface HabitsDocumentData {
    control_type: string,
    title: string
}

interface UseHabitReturn {
    getAllHabits: () => Promise<HabitsDocumentData[]>;
    newHabit: (data: unknown) => void;
    deleteHabit: (id: string) => void;
}

const useHabitDb = (): UseHabitReturn => {
    const {
        getDocuments,
        createDocument,
        deleteDocument
    } = useDb();

    const getAllHabits = async () => {
        return await getDocuments(COLLECTION_NAME) as HabitsDocumentData[];
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