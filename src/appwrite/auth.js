import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";



//The design choice to create the account property inside the constructor rather than directly below the new client property is made for 
//clarity and proper initialization flow

export class AuthService{
    client = new Client();
    account;
    //The constructor allows you to initialize 
    //instance properties when an object is created. 
    //This is especially useful if you need to set up some 
    //state or configure dependencies.
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account= new Account(this.client);

    }

    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create
            (ID.unique(), email, password, name);
            if (userAccount){
                // call another method 
                return userAccount;
            }else{
                return userAccount; 

            }

        } catch (error){
            throw error;
              
        }

    }

    async login ({email, password}) {
        try {
            return await this.account.createEmailSession
            (email, password);
            
        } catch (error) {
            throw error
        }
        
    }

    async getCurrentUser (){
        try{
            return await this.account.get();

        }catch (error)
       { throw error;}


       return null;
    }

    async logout()
    {
         try {
            await this.account.deleteSessions();
            
         } catch (error) {
            throw error;
            
         }
    }

}






const authService = new AuthService();

export default authService ;