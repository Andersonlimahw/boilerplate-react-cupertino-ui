import { ArrowLineLeft } from '@phosphor-icons/react';
import { Footer } from '../../commons/components/Footer';
import { useHookSample } from './hooks';
import { EScreenState } from '../../enums';
import { ErrorApiComponent, NoContentComponent } from '../../commons/components/ApiFeedbacks';
import { stateKey } from '../../commons/utils/renders/screent-type';

import { AILoadingState } from '@react-cupertino-ui/ai-loading-state';
import { IntelligenceGlow } from '@react-cupertino-ui/intelligence-glow';
import { SiriWaveform } from '@react-cupertino-ui/siri-waveform';
import { SuggestionChip } from '@react-cupertino-ui/suggestion-chip';
import { TypingIndicator } from '@react-cupertino-ui/typing-indicator';

export const Chat = () => {
  const useHook = useHookSample();
  const { peopleQuery, theme } = useHook;
  const {
    data: people,
    refetch,
    isLoading
  } = peopleQuery;

  const hasSelectedContact = false;
  const containerClasses = {
    'mobile': 'min-[0px]:block',
    'default': 'min-[690px]:flex flex'
  };

  const messagesContainerClasses = {
    'mobile': !hasSelectedContact ? 'none' : 'min-[0px]:w-full',
    'default': 'max=[600px]:flex-1 w-full'
  };

  const isMobile = () => {
    return window.screen.width <= 690;
  }

  const screnType = isMobile() ? 'mobile' : 'default';

  const SuccesComponent = () => (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Let's code!</h1>
      <div className="bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/10">
        <h2 className="text-lg font-semibold">API Response</h2>
        <p>Count: {people?.length}</p>
        <p>Name: {people?.[0]?.name ?? 'Unknown'}</p>
      </div>
      <div className="mt-4 flex gap-2">
        <SuggestionChip onClick={() => { }}>Show Details</SuggestionChip>
        <SuggestionChip onClick={() => refetch()}>Refresh</SuggestionChip>
      </div>
    </div>
  );

  const screenState: any = {
    [EScreenState.loading]: { render: () => <AILoadingState variant="thinking" message="Analyzing data..." /> },
    [EScreenState.error]: { render: () => <ErrorApiComponent onRetry={refetch} /> },
    [EScreenState.noCotent]: { render: () => <NoContentComponent /> },
    [EScreenState.success]: { render: () => <SuccesComponent /> },
  };

  return (
    <>
      <div className={`w-full h-40 bg-gradient-to-r ${theme.styles.gradient} relative overflow-hidden`} >
        <ArrowLineLeft size={48} className={`mx-2 py-2 cursor-pointer ${hasSelectedContact ? 'block' : 'hidden'} relative z-10`} />
        {/* Decorative Waveform in Header */}
        <div className="absolute bottom-0 left-0 right-0 h-12 opacity-50">
          <SiriWaveform active={true} palette="ocean" motion="calm" />
        </div>
      </div>

      <div className="container mx-auto mt-[-128px] rounded-sm relative z-20">
        <div className="py-6 h-screen">
          <div className={`flex shadow-lg rounded h-full ${containerClasses[screnType]} bg-white/80 dark:bg-black/80 backdrop-blur-xl`}>
            {/* Left */}
            {
              !hasSelectedContact && (
                <div className="p-6 flex flex-col justify-between h-full w-full md:w-1/3 border-r border-gray-200 dark:border-gray-700">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">Happy customs!</h1>
                    <p className="text-gray-500">Request sample result on right!</p>
                  </div>
                  <Footer />
                </div>
              )
            }

            {/* Right */}
            <div className={`flex flex-col relative ${messagesContainerClasses[screnType]}`}>
              <IntelligenceGlow active={isLoading} intensity={0.6}>
                <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-center items-center h-full min-h-[400px]">
                  {screenState[`${stateKey(peopleQuery)}`]?.render() ?? <AILoadingState variant="generating" />}
                  {isLoading && <div className="mt-4"><TypingIndicator /></div>}
                </div>
              </IntelligenceGlow>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;

