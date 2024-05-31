import clsx from "clsx";

type WorkingProps = {
  title: string;
  description: string;
  from: string;
  to: string;
  letter: string;
  bg: string,
  border: string;
};

const WORKING: WorkingProps[] = [
  {
    title: "User Initiates Conversation",
    description:
      "Users start by messaging the chatbot, expressing their feelings or concerns. The chatbot greets the user warmly and establishes a safe, non-judgmental space.",
    from: "from-pink-500",
    to: "to-orange-500",
    letter: 'A',
    bg: "bg-pink-500",
    border: 'border-pink-500',
  },
  {
    title: "Natural Language Processing (NLP)",
    description:
      "The chatbot uses NLP to understand and interpret the user's text. This technology allows the chatbot to recognize emotions, key issues, and contextual nuances in user's messages.",
    from: "from-yellow-400",
    to: "to-orange-400",
    letter: 'B',
    bg: "bg-yellow-400",
    border: 'border-yellow-400'
  },
  {
    title: "Tailored Responses",
    description:
      "Based on the analysis, the chatbot generates personalized responses. It uses therapeutic techniques such as cognitive-behavioral prompts, mindfulness exercises, and supportive affirmations to address the user's needs.",
    from: "from-green-400",
    to: "to-teal-400",
    letter: 'C',
    bg: "bg-green-400",
    border: "border-green-400"
  },
  {
    title: "Continuous Interaction",
    description:
      "The chatbot engages in an ongoing dialogue, asking follow-up questions and offering further support. This continuous interaction helps to deepen the conversation and provides a more comprehensive therapeutic experience.",
    from: "from-blue-400",
    to: "to-indigo-400",
    letter: 'D',
    bg: 'bg-blue-400',
    border: "border-blue-400"
  },
];

export default function HowItWorks() {
  return (
    <div className="flex flex-col items-center py-10 px-2">
      {/* Vertical line */}

      <div className="flex container px-6 lg:px-20 flex-col items-center w-full space-y-8">
        <div>
          <h2 className="text-4xl font-medium">How it works</h2>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-2"></div>
          <div className="relative px-2 border-s-2 border-primary-dark mx-auto col-span-12 md:col-span-8 text-left">
            <div className="ms-2 sm:ms-10">
              <div className="absolute flex items-center z-10 justify-center w-2 h-2 top-0 rounded-full -start-[4.5px]  ring-blue-600 dark:ring-gray-900 dark:bg-blue-900">
                <div className="inline-block border-r-2 border-primary-dark border-b-2 w-2 h-2 rotate-[225deg]"></div>
              </div>

              <div className="absolute flex items-center z-10 justify-center w-2 h-2 bottom-0 rounded-full -start-[4.5px]  ring-blue-600 dark:ring-gray-900 dark:bg-blue-900">
                <div className="inline-block border-r-2 border-primary-dark border-b-2 w-2 h-2 rotate-[45deg]"></div>
              </div>

              {WORKING.map((working: WorkingProps) => (
                <div key={working.title}>
                  <br />
                  <br />
                  <div className="grid grid-cols-12 items-center w-full">
                    <span className="absolute flex items-center z-20 justify-center w-5 h-5 sm:w-7 sm:h-7 border-2 border-primary-dark bg-white rounded-full -start-[14px]  ring-blue-600 dark:ring-gray-900 dark:bg-blue-900"></span>
                    <span className={clsx(`absolute flex items-center z-[21] justify-center w-2 h-2 sm:w-4 sm:h-4 bg-pink-500 rounded-full -start-2  ring-blue-600 dark:ring-gray-900 dark:bg-blue-900`, working.bg)}></span>

                    <span className={clsx(`absolute flex items-center justify-center h-[1.5px] z-10 w-16 bg-primary-dark rounded-full start-0 end-0 dark:ring-gray-900 dark:bg-blue-900`, working.bg)}></span>

                    <div className="grid grid-cols-10 col-span-3 sm:col-span-2">
                      <div className="col-span-3 -mr-[13px]">
                        <div className={clsx(`border-b border-l-0  h-1/2 w-full relative`, working.border)}>
                          <div className="absolute top-0 left-0 h-full w-full z-10 bg-white rounded-br-full"></div>
                          <div className={clsx(`h-1/2  absolute bottom-0 left-0 w-full z-0`, working.bg)}></div>
                        </div>
                        <div className={clsx(`border-t  h-1/2 w-full relative`,working.border)}>
                          <div className="absolute top-0 left-0 h-full w-full z-10 bg-white rounded-tr-full"></div>
                          <div className={clsx(`h-1/2 absolute top-0 left-0 w-full z-0`, working.bg)}></div>
                        </div>
                      </div>
                      <div className="col-span-7 z-10 py-2">
                        <div className={clsx(`flex items-center justify-center rounded-full w-[40px] h-[40px] sm:w-[64px] sm:h-[64px] bg-gradient-to-r text-white font-bold z-10`, working.from, working.to)}>
                          <div className="p-2 sm:p-4 bg-white shadow-md shadow-neutral-700 rounded-full h-[20px] w-[20px] text-black flex items-center justify-center">
                            {working.letter}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 col-span-9 sm:col-span-10">
                      <h2 className="text-2xl text-primary-dark font-semibold">
                        {working.title}
                      </h2>
                      <p className="text-sm font-medium">
                        {working.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
