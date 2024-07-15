import { FormData } from "@/components/contact";

export async function sendEmail(data: FormData) {
    const apiEndpoint = '/api/email';

    const d = await fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .catch((err) => {
            alert(err);
        });
    return d;
}
