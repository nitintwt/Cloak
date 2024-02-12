import conf from '../conf/conf.js';
import { Client, ID, Databases,Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }

    async createPost({ content, userId , authId}){
        try {
            
            return await this.databases.createDocument(
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
    async createUserName({userName,authId}){
        try {
            
            return await this.databases.createDocument(
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
    async createComment({comment, postId}){
        try {
            
            return await this.databases.createDocument(
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

    async getComments({postId}){
        try {
            const queries = [Query.equal("postId", `${postId}`)]; //checks which comments postId(attribute in appwrite) is equals to the given postId 
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId3,
                queries
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }
  
    async getUserPosts({authId}){
        try {
            const queries = [Query.equal("authId", `${authId}`)];
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite serive :: getUserPosts :: error", error);
            return false
        }
    }

    async updatePost(documentId,{content}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                documentId,
                {
                  content,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deletePost(documentId){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                documentId
            
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getPost(documentId){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                documentId
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }
  }

  const service = new Service()
  export default service