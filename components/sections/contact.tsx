"use client";


import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {sendEmail} from "@/lib/email/email";

export function Contact() {

    function handleSubmit(formData:FormData) {
        console.log(formData);
        sendEmail(formData);
    }

    return (
        <div className={"w-2/3 h-fit text-2xl font-medium text-white p-10 rounded-3xl flex flex-col gap-4 bg-black backdrop-blur-3xl bg-opacity-20 shadow-lg"}>
            <h1 className={"text-7xl font-bold"}>Contact</h1>
            <p className={"text-lg font-medium text-white"}>Want to shoot me a message? Type it in the box below!</p>
            <form action={handleSubmit}>
            <div className={"flex flex-col gap-4 bg-transparent"}>
                <div className={"flex flex-col gap-2"}>
                    <div>Your E-Mail *</div>
                    <Input className={"border rounded-2xl border-white bg-transparent"} aria-label="Email" name="email" type="email"/>
                </div>
                <div className={"flex flex-col gap-2"}>
                    <div>Your name</div>
                    <Input className={"border border-white bg-transparent"} aria-label="name" name="senderName" type="text"/>
                </div>
            </div>
            <h3 className={"text-2xl"}>Your message</h3>
            <Textarea className={"bg-transparent"} name={"message"}/>
            <Button type={"submit"}>Send</Button>
            </form>
        </div>
    )
}