import React from 'react';

import { useDb } from '../hooks/useDb';
import { buildConstraint } from '../utils/dbConstraintBuilder';

import { useAuth } from '../hooks/useAuth';
import { DocumentData } from '@firebase/firestore';

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
        try {
            return await getDocuments(COLLECTION_NAME, [userConstraint]) as HabitsDocumentData[];
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    const newHabit = async (data: unknown) => {
        return await createDocument(COLLECTION_NAME, data) as DocumentData;
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