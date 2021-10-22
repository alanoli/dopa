import React from 'react';

import { useDb } from '../hooks/useDb';
import { buildConstraint } from '../utils/dbConstraintBuilder';

import { Image } from '../types';

const COLLECTION_NAME = "images";

interface UseImageReturn {
    getImageByType: (type: string) => Promise<Image>;
    getTypes: () => Promise<Image[]>;
}

const useImageDb = (): UseImageReturn => {

    const { getDocuments } = useDb();

    const getImageByType = async (type) => {
        const filter = buildConstraint("type", "==", type);
        return await getDocuments(COLLECTION_NAME, [filter])[0] as Image;
    }

    const getTypes = async () => {
        return await getDocuments(COLLECTION_NAME) as Image[];
    }

    return {
        getImageByType,
        getTypes
    }
}

export default useImageDb;