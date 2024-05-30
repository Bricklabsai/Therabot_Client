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
            <div className="ms-20">
              <div className="absolute flex items-center z-10 justify-center w-2 h-2 top-0 rounded-full -start-[4.5px]  ring-blue-600 dark:ring-gray-900 dark:bg-blue-900">
                <div className="inline-block border-r-2 border-primary-dark border-b-2 w-2 h-2 rotate-[225deg]"></div>
               
              </div>

              <div className="absolute flex items-center z-10 justify-center w-2 h-2 bottom-0 rounded-full -start-[4.5px]  ring-blue-600 dark:ring-gray-900 dark:bg-blue-900">
                <div className="inline-block border-r-2 border-primary-dark border-b-2 w-2 h-2 rotate-[45deg]"></div>
               
              </div>

              <br />
              <br />
              <div className="grid grid-cols-12 items-center w-full">
                <span className="absolute flex items-center z-10 justify-center w-7 h-7 border-2 border-primary-dark bg-white rounded-full -start-[14px]  ring-blue-600 dark:ring-gray-900 dark:bg-blue-900"></span>
                <span className="absolute flex items-center z-10 justify-center w-4 h-4 bg-pink-500 rounded-full -start-2  ring-blue-600 dark:ring-gray-900 dark:bg-blue-900"></span>

                <span className="absolute flex items-center justify-center h-[1.5px]  z-0 w-24 bg-primary-dark rounded-full start-0 end-0 dark:ring-gray-900 dark:bg-blue-900"></span>

                <div className="grid grid-cols-10 col-span-1">
                  <div className="col-span-4 -mr-[13px]">
                    <div className="border-b border-l-0 border-pink-500 h-1/2 w-full relative">
                      <div className="absolute top-0 left-0 h-full w-full z-10 bg-white rounded-br-full"></div>
                      <div className="h-1/2 bg-pink-500 absolute bottom-0 left-0 w-full z-0"></div>
                    </div>
                    <div className="border-t border-pink-500 h-1/2 w-full relative">
                      <div className="absolute top-0 left-0 h-full w-full z-10 bg-white rounded-tr-full"></div>
                      <div className="h-1/2 bg-pink-500 absolute top-0 left-0 w-full z-0"></div>
                    </div>
                  </div>
                  <div className="col-span-6 z-10 py-2">
                    <div className="flex items-center justify-center rounded-full w-[64px] h-[64px] bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold z-10">
                      <div className="p-4 bg-white shadow-md shadow-neutral-700 rounded-full h-[40px] w-[40px] text-black flex items-center justify-center">
                        A
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-12 flex flex-col gap-2 col-span-11">
                  <h2 className="text-2xl text-primary-dark font-semibold">
                    User Initiates Conversation
                  </h2>
                  <p className="text-sm font-medium">
                    Users start by messaging the chatbot, expressing their
                    feelings or concerns. The chatbot greets the user warmly and
                    establishes a safe, non-judgmental space.
                  </p>
                </div>
              </div>
              <br />
              <br />
              <div className="grid grid-cols-12 items-center w-full">
                <span className="absolute flex items-center z-10 justify-center w-7 h-7 border-2 border-primary-dark bg-white rounded-full -start-[14px]  ring-blue-600 dark:ring-gray-900 dark:bg-blue-900"></span>
                <span className="absolute flex items-center z-10 justify-center w-4 h-4 bg-pink-500 rounded-full -start-2  ring-blue-600 dark:ring-gray-900 dark:bg-blue-900"></span>

                <span className="absolute flex items-center justify-center h-[1.5px]  z-0 w-24 bg-primary-dark rounded-full start-0 end-0 dark:ring-gray-900 dark:bg-blue-900"></span>

                <div className="grid grid-cols-10 col-span-1">
                  <div className="col-span-4 -mr-[13px]">
                    <div className="border-b border-l-0 border-pink-500 h-1/2 w-full relative">
                      <div className="absolute top-0 left-0 h-full w-full z-10 bg-white rounded-br-full"></div>
                      <div className="h-1/2 bg-pink-500 absolute bottom-0 left-0 w-full z-0"></div>
                    </div>
                    <div className="border-t border-pink-500 h-1/2 w-full relative">
                      <div className="absolute top-0 left-0 h-full w-full z-10 bg-white rounded-tr-full"></div>
                      <div className="h-1/2 bg-pink-500 absolute top-0 left-0 w-full z-0"></div>
                    </div>
                  </div>
                  <div className="col-span-6 z-10 py-2">
                    <div className="flex items-center justify-center rounded-full w-[64px] h-[64px] bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold z-10">
                      <div className="p-4 bg-white shadow-md shadow-neutral-700 rounded-full h-[40px] w-[40px] text-black flex items-center justify-center">
                        B
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-12 flex flex-col gap-2 col-span-11">
                  <h2 className="text-2xl text-primary-dark font-semibold">
                    Natural Language Processing (NLP)
                  </h2>
                  <p className="text-sm">
                    The chatbot uses NLP to understand and interpret the
                    user&apos;s text. This technology allows the chatbot to
                    recognize emotions, key issues, and contextual nuances in
                    user&apos;s messages.
                  </p>
                </div>
              </div>

              <br />
              <br />

              <div className="grid grid-cols-12 items-center w-full">
                <span className="absolute flex items-center z-10 justify-center w-7 h-7 border-2 border-primary-dark bg-white rounded-full -start-[14px]  ring-blue-600 dark:ring-gray-900 dark:bg-blue-900"></span>
                <span className="absolute flex items-center z-10 justify-center w-4 h-4 bg-pink-500 rounded-full -start-2  ring-blue-600 dark:ring-gray-900 dark:bg-blue-900"></span>

                <span className="absolute flex items-center justify-center h-[1.5px]  z-0 w-24 bg-primary-dark rounded-full start-0 end-0 dark:ring-gray-900 dark:bg-blue-900"></span>

                <div className="grid grid-cols-10 col-span-1">
                  <div className="col-span-4 -mr-[13px]">
                    <div className="border-b border-l-0 border-pink-500 h-1/2 w-full relative">
                      <div className="absolute top-0 left-0 h-full w-full z-10 bg-white rounded-br-full"></div>
                      <div className="h-1/2 bg-pink-500 absolute bottom-0 left-0 w-full z-0"></div>
                    </div>
                    <div className="border-t border-pink-500 h-1/2 w-full relative">
                      <div className="absolute top-0 left-0 h-full w-full z-10 bg-white rounded-tr-full"></div>
                      <div className="h-1/2 bg-pink-500 absolute top-0 left-0 w-full z-0"></div>
                    </div>
                  </div>
                  <div className="col-span-6 z-10 py-2">
                    <div className="flex items-center justify-center rounded-full w-[64px] h-[64px] bg-gradient-to-r from-green-400 to-teal-400 text-white font-bold z-10">
                      <div className="p-4 bg-white shadow-md shadow-neutral-700 rounded-full h-[40px] w-[40px] text-black flex items-center justify-center">
                        C
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-12 flex flex-col gap-2 col-span-11">
                  <h2 className="text-2xl text-primary-dark font-semibold">
                    Tailored Responses
                  </h2>
                  <p className="text-sm">
                    Based on the analysis, the chatbot generates personalized
                    responses. It uses therapeutic techniques such as
                    cognitive-behavioral prompts, mindfulness exercises, and
                    supportive affirmations to address the user&apos;s needs.
                  </p>
                </div>
              </div>

              <br />
              <br />

              <div className="grid grid-cols-12 items-center w-full">
                <span className="absolute flex items-center z-10 justify-center w-7 h-7 border-2 border-primary-dark bg-white rounded-full -start-[14px]  ring-blue-600 dark:ring-gray-900 dark:bg-blue-900"></span>
                <span className="absolute flex items-center z-10 justify-center w-4 h-4 bg-pink-500 rounded-full -start-2  ring-blue-600 dark:ring-gray-900 dark:bg-blue-900"></span>

                <span className="absolute flex items-center justify-center h-[1.5px]  z-0 w-24 bg-primary-dark rounded-full start-0 end-0 dark:ring-gray-900 dark:bg-blue-900"></span>

                <div className="grid grid-cols-10 col-span-1">
                  <div className="col-span-4 -mr-[13px]">
                    <div className="border-b border-l-0 border-pink-500 h-1/2 w-full relative">
                      <div className="absolute top-0 left-0 h-full w-full z-10 bg-white rounded-br-full"></div>
                      <div className="h-1/2 bg-pink-500 absolute bottom-0 left-0 w-full z-0"></div>
                    </div>
                    <div className="border-t border-pink-500 h-1/2 w-full relative">
                      <div className="absolute top-0 left-0 h-full w-full z-10 bg-white rounded-tr-full"></div>
                      <div className="h-1/2 bg-pink-500 absolute top-0 left-0 w-full z-0"></div>
                    </div>
                  </div>
                  <div className="col-span-6 z-10 py-2">
                    <div className="flex items-center justify-center rounded-full w-[64px] h-[64px] bg-gradient-to-r from-blue-400 to-indigo-400 text-white font-bold z-10">
                      <div className="p-4 bg-white shadow-md shadow-neutral-700 rounded-full h-[40px] w-[40px] text-black flex items-center justify-center">
                        D
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-12 flex flex-col gap-2 col-span-11">
                  <h2 className="text-2xl text-primary-dark font-semibold">
                    Continuous Interaction
                  </h2>
                  <p className="text-sm">
                    The chatbot engages in an ongoing dialogue, asking follow-up
                    questions and offering further support. This continuous
                    interaction helps to deepen the conversation and provides a
                    more comprehensive therapeutic experience.
                  </p>
                </div>
              </div>

              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
