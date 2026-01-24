import { ArrowLineLeft, User, Envelope, MapPin, Link as LinkIcon } from '@phosphor-icons/react';

import { Footer } from '../../commons/components/Footer';
import { useHookSample } from './hooks';
import { EScreenState } from '../../enums';
import { ErrorApiComponent, LoadingComponent, NoContentComponent } from '../../commons/components/ApiFeedbacks';
import { stateKey } from '../../commons/utils/renders/screent-type';
import { Avatar } from '@react-cupertino-ui/avatar';
import { Button } from '@react-cupertino-ui/button';
import { Card } from '@react-cupertino-ui/card';

export const Profile = () => {


  const useHook = useHookSample();
  const { peopleQuery, theme } = useHook;
  const {
    data: people,
    refetch,
  } = peopleQuery;

  const hasSelectedContact = false;
  const containerClasses = {
    'mobile': 'min-[0px]:block h-full',
    'default': 'min-[690px]:flex flex h-full gap-6'
  };

  const messagesContainerClasses = {
    'mobile': !hasSelectedContact ? 'hidden' : 'min-[0px]:w-full flex-1',
    'default': 'max=[600px]:flex-1 w-full flex-1'
  };

  const isMobile = () => {
    return window.screen.width <= 690;
  }

  const screnType = isMobile() ? 'mobile' : 'default';

  const SuccesComponent = () => (
    <div className="h-full flex flex-col p-6 animate-fade-in">
      <div className="flex items-center gap-6 mb-8">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt blur"></div>
          <Avatar
            src={people && people[0] ? (people[0] as any).avatar : "https://i.pravatar.cc/150"}
            alt="User Avatar"
            size="xl"
            className="relative border-4 border-black box-content"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">
            {people && people[0] ? people[0].name : 'User Name'}
          </h1>
          <p className="text-glass-text-secondary">Product Designer • San Francisco, CA</p>
          <div className="flex gap-2 mt-3">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white border-none shadow-lg shadow-blue-900/20">Follow</Button>
            <Button size="sm" variant="secondary" className="glass-button">Message</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="glass-button p-4 flex items-center gap-3">
          <Envelope size={24} className="text-blue-300" />
          <div>
            <p className="text-xs text-glass-text-secondary uppercase tracking-wider">Email</p>
            <p className="text-white font-medium">user@example.com</p>
          </div>
        </Card>
        <Card className="glass-button p-4 flex items-center gap-3">
          <LinkIcon size={24} className="text-purple-300" />
          <div>
            <p className="text-xs text-glass-text-secondary uppercase tracking-wider">Website</p>
            <p className="text-white font-medium">portfolio.design</p>
          </div>
        </Card>
        <Card className="glass-button p-4 flex items-center gap-3">
          <MapPin size={24} className="text-pink-300" />
          <div>
            <p className="text-xs text-glass-text-secondary uppercase tracking-wider">Location</p>
            <p className="text-white font-medium">San Francisco, CA</p>
          </div>
        </Card>
        <Card className="glass-button p-4 flex items-center gap-3">
          <User size={24} className="text-green-300" />
          <div>
            <p className="text-xs text-glass-text-secondary uppercase tracking-wider">Member Since</p>
            <p className="text-white font-medium">January 2024</p>
          </div>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-white mb-4">Biography</h2>
        <p className="text-glass-text-secondary leading-relaxed">
          Passionate about creating intuitive and beautiful user experiences.
          Specializing in glassmorphism and modern UI trends.
          Always learning and exploring new technologies to push the boundaries of web design.
        </p>
      </div>
    </div>
  );


  const screenState: any = {
    [EScreenState.loading]: { render: () => <LoadingComponent /> },
    [EScreenState.error]: { render: () => <ErrorApiComponent onRetry={refetch} /> },
    [EScreenState.noCotent]: { render: () => <NoContentComponent /> },
    [EScreenState.success]: { render: () => <SuccesComponent /> },
  };
  return (
    <>
      <div className="w-full h-24 bg-transparent">
        {/* Spacer */}
      </div>

      <div className="container mx-auto rounded-sm h-[calc(100vh-100px)]">
        <div className="py-6 h-full px-4">
          <div className={`${containerClasses[screnType]}`}>
            {/* Left */}
            {
              !hasSelectedContact && (
                <div className="hidden md:flex flex-col w-1/3 glass-panel p-8 justify-between">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-500 to-orange-400 mb-6 flex items-center justify-center shadow-xl">
                      <User size={32} className="text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-white leading-tight">
                      Your<br />Profile
                    </h1>
                    <p className="text-lg text-glass-text-secondary leading-relaxed">
                      Manage your personal information, privacy settings, and public profile details.
                    </p>
                  </div>
                  <Footer />
                </div>
              )
            }

            {/* Right */}
            <div className={`glass-panel overflow-hidden ${messagesContainerClasses[screnType]}`}>
              <div className="md:hidden p-4">
                <ArrowLineLeft size={24} className={`mx-2 py-2 cursor-pointer text-white ${hasSelectedContact ? 'block' : 'hidden'}`} />
              </div>
              {screenState[`${stateKey(peopleQuery)}`]?.render() ?? LoadingComponent()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

