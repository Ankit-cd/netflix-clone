import axios from 'axios';
import toast from 'react-hot-toast';
import {create} from 'zustand';

export const useAuthStore = create((set) =>({
    user:null,
    isSigningUp:false,
    isCheckingAuth:true,
    isloggingin:false,
    isLoggingOut: false,
    signup: async (credentials) =>{
        set({isSigningUp:true})
        try {
            const response = await axios.post("/api/v1/auth/signup",credentials);
            set({user:response.data.user,isSigningUp:false});
            toast.success("Account created Successfully")
        } catch (error) {
            toast.error(error.response.data.message || "Signup Failed");
            set({isSigningUp:false,user:null})
            
        }
    },
    authCheck: async () =>{
        set({ isCheckingAuth:true});
        try {
            const response = await axios.get("/api/v1/auth/authCheck");
            set({user:response.data.user,isCheckingAuth:false});          
        } catch (error) {
            set({ isCheckingAuth:false,user:null});  
            // toast.error(error.response.data.message || "An Error Occurred")         
        }
    },
    login: async (credentials) =>{
        set({isloggingin:true})
        try {
            const response = await axios.post("/api/v1/auth/login",credentials);
            set({user:response.data.user,isloggingin:false});
            toast.success("Logged In Successfully")           
        } catch (error) {
            set({ isloggingin:false,user:null});
            toast.error(error.response.data.message || "Login Failed")
        }
    },
    logout: async () =>{
        set({isLoggingOut:true});
        try {
            await axios.post("/api/v1/auth/logout");
            set({user:null,isLoggingOut:false});
            toast.success("Loggged Out Successfully")
            
        } catch (error) {
            set({isLoggingOut:false});
            toast.error(error.response.data.message || "Logout Failed");
            
        }
    },

}))