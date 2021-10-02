import React from 'react';

import {
	getDocs,
	getFirestore,
	collection,
	addDoc,
	deleteDoc,
	doc,
	where,
	query,
	DocumentData
} from 'firebase/firestore';
import { useAuth } from './useAuth';

interface UseDbReturn {
	getDocuments: (collectionName: string) => Promise<DocumentData[]>;
	createDocument: (collectionName: string, data: unknown) => void;
	deleteDocument: (collectionName: string, id: string) => void;
}

export const useDb = (): UseDbReturn => {
	const db = getFirestore();
	const { auth } = useAuth();

	const getDocuments = async (collectionName: string) => {
		try {
			const docQuery = query(collection(db, collectionName),
				where("userid", "==", auth.currentUser.uid));
			const queryResult = await getDocs(docQuery);
			let docs = [];
			queryResult.forEach((item) => {
				let data = item.data();
				let id = item.id;
				docs.push({ id, ...data });
			});
			return docs;
		} catch (error) {
			console.log(error);
		}
	}

	const createDocument = async (collectionName: string, data: object) => {
		try {
			const queryResult = await addDoc(collection(db, collectionName), {
				...data, userid: auth.currentUser.uid
			});
			return queryResult;
		} catch (error) {
			console.log(error);
		}
	}

	const deleteDocument = async (collectionName: string, id: string) => {
		try {
			const deleteResult = await deleteDoc(doc(db, collectionName, id));
			console.log(deleteResult);
		} catch (error) {
			console.log(error);
		}
	}

	return {
		getDocuments,
		createDocument,
		deleteDocument
	}
}