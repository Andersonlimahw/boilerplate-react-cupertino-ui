import { ArrowLineLeft } from '@phosphor-icons/react';

import { Footer } from '../../commons/components/Footer';
import { ErrorApiComponent, LoadingComponent, NoContentComponent } from '../../commons/components/ApiFeedbacks';
import { stateKey } from '../../commons/utils/renders/screent-type';
import { EScreenState } from '../../enums';
import { useGroupsPage } from './hooks';
import { List } from '@react-cupertino-ui/list';

const resolveScreenType = () => {
  if (typeof window === 'undefined') {
    return 'default';
  }

  return window.innerWidth <= 690 ? 'mobile' : 'default';
};

export const Groups = () => {
  const { peopleQuery } = useGroupsPage();
  const { data: groups, refetch } = peopleQuery;

  const hasSelectedGroup = false;

  // Layout mirrors the Chat page and keeps the responsive behaviour driven purely by viewport width.
  const containerClasses: Record<string, string> = {
    mobile: 'flex flex-col h-full',
    default: 'flex h-full gap-6',
  };

  const messagesContainerClasses: Record<string, string> = {
    mobile: 'w-full flex-1',
    default: 'flex-1 w-full',
  };

  const screenType = resolveScreenType();

  const SuccessComponent = () => (
    <section className="space-y-6 text-white h-full flex flex-col" data-testid="groups-success">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-bold tracking-tight">Your Groups</h1>
        <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-glass-text-secondary">
          {groups?.length ?? 0} Active
        </span>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {groups && groups.length > 0 ? (
          <div className="grid grid-cols-1 gap-3">
            {groups.map((group: any, index: number) => (
              <div key={index} className="glass-panel p-4 flex items-center gap-4 hover:bg-white/15 transition-all cursor-pointer group border-white/5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-lg font-bold shadow-lg">
                  {group.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{group.name}</h3>
                  <p className="text-sm text-glass-text-secondary">Last active recently</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-glass-text-secondary opacity-60">
            <p>No groups found</p>
          </div>
        )}
      </div>
    </section>
  );

  const screenState: Record<EScreenState, { render: () => JSX.Element }> = {
    [EScreenState.loading]: { render: () => <LoadingComponent /> },
    [EScreenState.error]: { render: () => <ErrorApiComponent onRetry={refetch} /> },
    [EScreenState.noCotent]: { render: () => <NoContentComponent /> },
    [EScreenState.success]: { render: () => <SuccessComponent /> },
  };

  return (
    <>
      <div className="w-full h-24 bg-transparent" data-testid="groups-header">
        {/* Spacer or minimal header if needed */}
      </div>

      <div className="container mx-auto rounded-sm h-[calc(100vh-100px)]" data-testid="groups-container">
        <div className="py-6 h-full px-4">
          <div
            className={`${containerClasses[screenType]}`}
            data-testid="groups-layout"
          >
            {/* Left Sidebar / Main Content depending on state */}
            {!hasSelectedGroup && (
              <section className="hidden md:flex flex-col w-1/3 glass-panel p-8 justify-between" data-testid="groups-welcome">
                <header className="space-y-6">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-400 to-purple-500 mb-6 flex items-center justify-center shadow-xl">
                      <ArrowLineLeft size={32} className="text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-white leading-tight">Collaborate<br />with Squads</h2>
                  </div>
                  <p className="text-lg text-glass-text-secondary leading-relaxed">
                    Organize collaborations and keep every squad aligned while fetching live data.
                  </p>
                </header>
                <div className="text-xs text-glass-text-secondary opacity-50">
                  Press command + K to search
                </div>
              </section>
            )}

            {/* Right Content / List */}
            <div
              className={`glass-panel p-6 backdrop-blur-2xl ${messagesContainerClasses[screenType]}`}
              data-testid="groups-content"
            >
              {hasSelectedGroup && (
                <div className="md:hidden mb-4">
                  <ArrowLineLeft
                    size={24}
                    className="cursor-pointer text-white"
                    data-testid="groups-back-button"
                  />
                </div>
              )}
              {screenState[stateKey(peopleQuery)]?.render() ?? <LoadingComponent />}
            </div>
          </div>
          <div className="mt-8">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Groups;
