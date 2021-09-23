import React from 'react';

import { getFirestore } from 'firebase/firestore';
import {
    getDocs,
    collection,
    QuerySnapshot,
    DocumentData
} from 'firebase/firestore';

interface HabitsDocumentData {
    control_type: string,
    title: string
}

interface UseDbReturn {
    getDocuments: (collectionName: string) => Promise<HabitsDocumentData[]>
}

export const useDb = (): UseDbReturn => {
    const db = getFirestore();

    const getDocuments = async (collectionName: string) => {
        try {
            const queryResult = await getDocs(collection(db, collectionName));
            let docs = [];
            queryResult.forEach((item) => {
                docs.push(item.data());
            });
            return docs;
        } catch (error) {
            console.log(error);
        }
    }

    return {
        getDocuments
    }
}