
import { User } from '@/types/common';
import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite'


export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: 'com.enable.aora',
    projectId: '66b3380f0003e8711f6a',
    databaseId: '66b339740007bab5234b',
    userCollectionId: '66b339850021e1ff87a7',
    videoCollectionId: '66b339930012fdacdfc1',
    storageId: '66b33b5e0009e207e902'
}

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform)


const account = new Account(client)
const avatars = new Avatars(client)
const databases = new Databases(client)

export const createUser = async (email: string, password: string, username: string) => {

    try {
        const newAccount = await account.create(ID.unique(), email, password, username)
        if (!newAccount) throw Error

        const avatarUrl = avatars.getInitials(username)
        await signIn(email, password)

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        )
        return newUser

    } catch (error: any) {
        console.log(error)
        throw new Error(error)
    }

}

export const signIn = async (email: string, password: string) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)
        return session

    } catch (error: any) {
        console.log(error)
        throw new Error(error)
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if (!currentUser) throw Error;

        return currentUser.documents[0]
    } catch (error: any) {
        console.log(error)
        throw new Error(error)
    }
}