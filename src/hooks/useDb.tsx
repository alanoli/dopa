import React from 'react';

import {
	getDocs,
	getFirestore,
	collection,
	deleteDoc,
	addDoc,
	setDoc,
	doc,
	where,
	query,
	updateDoc,
	DocumentData,
	Query,
	QueryConstraint,
	WhereFilterOp
} from 'firebase/firestore';
import { useAuth } from './useAuth';

interface DocConstraint {
	column: string,
	assertion: string,
	value: string
}

interface UseDbReturn {
	getDocuments: (collectionName: string, constraints?: DocConstraint[]) => Promise<DocumentData[]>;
	createDocument: (collectionName: string, data: unknown) => DocumentData;
	deleteDocument: (collectionName: string, id: string) => void;
	updateDocument: (collectionName: string, id: string, data: unknown) => void;
	setDocument: (collectionName: string, docId: string, data: unknown) => DocumentData;
}

export const useDb = (): UseDbReturn => {
	const db = getFirestore();
	const { auth } = useAuth();

	const getDocuments = async (collectionName: string, constraints: DocConstraint[]) => {
		try {
			let queryConstraints = [] as QueryConstraint[];
			if (constraints) {
				constraints.forEach((query) => {
					queryConstraints.push(where(query.column, query.assertion as WhereFilterOp, query.value));
				})
			}
			let docQuery: Query<DocumentData> = query(collection(db, collectionName), ...queryConstraints);

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

	const setDocument = async (collectionName: string, docId: string, data: object) => {
		try {
			const queryResult = await setDoc(doc(collection(db, collectionName), docId), {
				...data, userid: auth.currentUser.uid
			});
			return queryResult;
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

	const updateDocument = async (collectionName: string, id: string, data: unknown) => {
		try {
			let docQuery: Query<DocumentData> = query(collection(db, collectionName));
			const queryResult = await getDocs(docQuery);
			queryResult.forEach(async (item) => {
				// let itemInfo = item.data();
				if (item.id == id) {
					await updateDoc(item.ref, data);
				}
			});
		} catch (error) {
			console.log(error);
		}
	}

	return {
		getDocuments,
		createDocument,
		deleteDocument,
		updateDocument,
		setDocument
	}
}