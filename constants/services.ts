export interface Service {
    title: string;
    image: string;
    description: string;
}

export const SERVICES: Service[] = [
    {
        title: "individual therapy",
        image: "/readin.png",
        description: "Individual therapy, also called psychotherapy, is a type of treatment that involves meeting with a therapist one-on-one to discuss emotional and mental health issues. The goal of individual therapy is to help an individual understand and manage their emotions, behaviors, and thoughts better."
    },
    {
        title: "couples therapy",
        image: "/couples_therapy.png",
        description: "Couples therapy, also known as couples counseling or couples psychotherapy, is a form of talk therapy designed to help couples address and resolve relationship issues. This type of therapy typically involves both partners working with a trained therapist or counselor to explore problems, enhance communication, and create a stronger relationship."
    },
    {
        title: "group therapy",
        image: "/group_therapy.png",
        description: "Group therapy is a type of psychotherapy that involves a small group of individuals meeting together with a trained therapist to discuss and work through emotional or psychological issues. It is a cost-effective and practical option for those seeking help, as it allows individuals to connect with others who share similar struggles and gain support and validation from their peers."
    }
]