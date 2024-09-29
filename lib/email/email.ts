"use server";

import {EmailTemplate} from "@/components/email-template";
import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {

    const rawformData = {
        email: formData.get('email') === undefined ? "" : formData.get('email')?.toString(),
        senderName: formData.get('senderName') === undefined ? "" : formData.get('senderName')?.toString(),
        message: formData.get('message') === undefined ? "" : formData.get('message')?.toString()
    };
    console.log("good god");
    console.log(rawformData)

    if(rawformData.email === "" || rawformData.senderName === "" || rawformData.message === "") {
        return {
            message: "There was no message or other needed details provided.",
            errorCode: 500
        }
    }

    try {
        const {data, error} = await resend.emails.send({
            from: 'Niklas Haiden Contact Form <contact@contact.nhaiden.io>',
            to: ["niklas@niklas.tech"],
            subject: `Message from ${rawformData.senderName}`,
            react: EmailTemplate({
                name: rawformData.senderName,
                email: rawformData.email,
                message: rawformData.message
            }),
            text: `${rawformData.senderName} has sent you an email!`,
        });

        if (error) {
            return {
                message: error.message,
                errorCode: 500
            }
        }
        return data;
    } catch (error) {
        return {
            //@ts-ignore
            message: error.message,
            errorCode: 500
        }
    }
}