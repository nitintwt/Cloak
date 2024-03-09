import conf from '../conf/conf.js';
import { Client, ID, Databases,Query } from "appwrite";

const Service=()=>{
  const client = new Client()
  client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
    const databases = new Databases(client)

    const createPost = async ({ content, userId , authId})=>{
        try {
            
            return await databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(), //gives unique id to every new document
                {
                  content,
                  userId,
                  authId,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }
    const createUserName = async ({userName,authId})=>{
        try {
            
            return await databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId2,
                ID.unique(),
                {
                userName,
                authId
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createuserName :: error", error);
        }
    }
    const createComment= async ({comment, postId})=>{
        try {
            
            return await databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId3,
                ID.unique(),
                {
                comment,
                postId,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createComment :: error", error);
        }
    }

    const getComments= async({postId})=>{
        try {
            const queries = [Query.equal("postId", `${postId}`)]; //checks which comments postId(attribute in appwrite) is equals to the given postId 
            return await databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId3,
                queries
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }
  
    const getUserPosts = async ({authId})=>{
        try {
            const queries = [Query.equal("authId", `${authId}`)];
            return await databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite serive :: getUserPosts :: error", error);
            return false
        }
    }

    const updatePost = async (postId,{content})=>{
        try {
            return await databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                postId,
                {
                  content,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    const  deletePost= async(postId)=> {
        try {
            await databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                postId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    const getPost = async(postId)=>{
        try {
            return await databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                postId
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    const  getPosts= async()=>{
        try {
            return await databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }
    return {
        createComment,
        createPost,
        createUserName,
        getComments,
        getPost,
        getPosts,
        getUserPosts,
        updatePost,
        deletePost,
    }
}
  const service = Service()
  export default service