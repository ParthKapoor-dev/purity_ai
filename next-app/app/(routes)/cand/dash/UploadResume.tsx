
import { getAuthSession } from "@/app/api/auth/[...nextauth]/auth";
import UploadInput from "@/components/kokonutui/input-03";
import { prisma } from "@/prisma/db";

export default function UploadResume() {


    async function createUserProfile(resumeLink: string) {
        "use server"
        try {

            const session = await getAuthSession();

            const profile = await prisma.profile.create({
                data: {
                    resumeLink: resumeLink,
                    user: {
                        connect: { id: session?.user.id }
                    }
                },
            });

            console.log('Profile created:', profile);
        } catch (error: any) {
            console.error('Error creating profile:', error.message);
            throw error;
        }
    }



    return (
        <div className="flex flex-col h-full w-full items-center gap-6">

            <p className="p-3 border rounded-lg bg-slate-200 text-slate-500">
                Profile Incomplete
            </p>

            <p>We First Need you to upload your Resume in a PDF format.</p>


            <UploadInput createUserProfile={createUserProfile} />
        </div>
    );
}
