"use client";


import {RefObject} from "react";
import {GithubIcon} from "lucide-react";


export function Contact({contactRef}: { contactRef: RefObject<any> }) {
    return (
        <div ref={contactRef}
             className={"w-full h-dvh lg:w-2/3 h-full lg:h-fit text-2xl font-medium text-white p-10 lg:rounded-3xl flex flex-col gap-4 bg-black backdrop-blur-3xl bg-opacity-20 shadow-lg"}>
            <h1 className={"text-7xl font-bold"}>Contact</h1>
            Want to contact me? <br/>
            You can reach me via this E-Mail Address: <a href={"mailto:me@nhaiden.io"} className={"underline underline-offset-4"}>me@nhaiden.io</a>
            Or checkout my Github where I contribute to open source projects in my free time! <br/>
            <a href={"https://github.com/NiHaiden"}
               className={"flex flex-row items-center text-3xl underline underline-offset-4"}><GithubIcon
                size={48}/> GitHub Link</a>
        </div>
    )
}

/*
export function Contact({contactRef}: { contactRef: RefObject<any> }) {

    const [errorDialogOpen, setErrorDialogOpen] = useState(false);
    const [successDialogOpen, setSuccessDialogOpen] = useState(false);

    async function handleSubmit(formData: FormData) {
        console.log(formData);
        const result = await sendEmail(formData);

        if ("message" in result! && "errorCode" in result!) {
            setErrorDialogOpen(!errorDialogOpen);
            setSuccessDialogOpen(false);
            return;
        } else {
            setSuccessDialogOpen(true);
        }
    }

    return (
        <div ref={contactRef}
             className={"w-full lg:w-2/3 h-full lg:h-fit text-2xl font-medium text-white p-10 lg:rounded-3xl flex flex-col gap-4 bg-black backdrop-blur-3xl bg-opacity-20 shadow-lg"}>
            <h1 className={"text-7xl font-bold"}>Contact</h1>
            <p className={"text-lg font-medium text-white"}>Want to shoot me a message? Type it in the box below!</p>
            <form className={"flex flex-col gap-5"} action={handleSubmit}>
                <div className={"flex flex-col gap-5 bg-transparent"}>
                    <div className={"flex flex-col gap-1"}>
                        <div>Your E-Mail *</div>
                        <Input className={"border rounded-2xl border-white bg-transparent"} aria-label="Email"
                               name="email" type="email"/>
                    </div>
                    <div className={"flex flex-col gap-1"}>
                        <div>Your name</div>
                        <Input className={"border rounded-2xl border-white bg-transparent"} aria-label="name"
                               name="senderName" type="text"/>
                    </div>
                </div>
                <div className={"flex flex-col gap-1"}>
                    <h3 className={"text-2xl"}>Your message</h3>
                    <Textarea className={"rounded-2xl bg-transparent"} name={"message"}/>
                </div>
                <Dialog open={errorDialogOpen} onOpenChange={(open: boolean) => setErrorDialogOpen(open)}>
                    <DialogContent title={"Error Message about not being able to send mail"}>
                        <DialogHeader>
                            Something went wrong.
                        </DialogHeader>
                        <DialogDescription>
                            Something went wrong while trying to send the email. Please try again.
                        </DialogDescription>
                    </DialogContent>
                </Dialog>
                <AlertDialog open={successDialogOpen}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>E-Mail successfully sent.</AlertDialogTitle>
                            <AlertDialogDescription>
                                Your message was successfully sent to me! I will get back to you asap.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel onClick={() => setSuccessDialogOpen(false)}>Close</AlertDialogCancel>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                <Button type={"submit"}>Send</Button>
            </form>
        </div>
    )
}*/