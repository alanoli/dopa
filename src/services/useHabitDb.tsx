import React from 'react';

import { useDb } from '../hooks/useDb';

interface HabitsDocumentData {
    control_type: string,
    title: string
}

interface UseHabitReturn {
    getAllHabits: () => Promise<HabitsDocumentData[]>
}

const COLLECTION_NAME = "habits";

const useHabitDb = (): UseHabitReturn => {
    const { getDocuments } = useDb();

    const getAllHabits = async () => {
        return await getDocuments(COLLECTION_NAME) as HabitsDocumentData[];
    }

    return {
        getAllHabits
    }
}

export default useHabitDb;