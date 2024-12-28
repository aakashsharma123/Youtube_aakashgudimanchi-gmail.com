import { toast , Slide } from "react-toastify"

export function successMessage (message) {
     toast.success (message , {
        position: "top-right",
        theme: "light",
        transition: Slide
    })
} 

export function ErrorMessage (message) {
     toast.error (message , {
        position: "top-right",
        theme: "light",
        transition: Slide
    })
} 