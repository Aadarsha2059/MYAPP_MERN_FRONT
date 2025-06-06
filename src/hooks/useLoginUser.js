import { useMutation } from "@tanstack/react-query";
import { loginUserService } from "../services/authService"

import { toast } from "react-toastify";

export const useLoginUser =() =>{
    return useMutation(
        {
            mutationFn:loginUserService,
            mutationKey: ["login_key"],
            onSuccess: (data) =>{
                toast.success(data?.message || "login success")
            },
            onError: (err) =>{
                toast.error(err?.message || "login failed")
            }
        }
    )
}