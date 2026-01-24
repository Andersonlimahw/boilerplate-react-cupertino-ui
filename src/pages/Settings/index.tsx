import { Gear, Bell, Globe, Palette, Info } from '@phosphor-icons/react';
import { Footer } from '../../commons/components/Footer';
import { useSettingsHook } from './hooks';
import { EScreenState } from '../../enums';
import { ErrorApiComponent, LoadingComponent, NoContentComponent } from '../../commons/components/ApiFeedbacks';
import { stateKey } from '../../commons/utils/renders/screent-type';
import { THEME_OPTIONS, LANGUAGE_OPTIONS } from './constants';
import { Card } from '@react-cupertino-ui/card';
import { Select } from '@react-cupertino-ui/select';

export const Settings = () => {
  const useHook = useSettingsHook();
  const {
    settingsQuery,
    theme,
    selectedTheme,
    selectedLanguage,
    notificationsEnabled,
    saveTheme,
    saveLanguage,
    saveNotifications,
  } = useHook;

  const { data: settings, refetch } = settingsQuery;

  const containerClasses = 'min-[690px]:flex flex';

  const SettingsContent = () => (
    <div className="w-full p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-white" data-testid="settings-title">
          Settings
        </h1>

        <div className="grid gap-8">
          {/* Theme Settings */}
          <div className="glass-panel p-6" data-testid="theme-section">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-3 text-white">
              <Palette size={24} className="text-purple-300" />
              Theme Preferences
            </h2>
            <div className="space-y-4">
              {Object.entries(THEME_OPTIONS).map(([key, value]) => (
                <label key={value} className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all border ${selectedTheme === value ? 'bg-white/20 border-blue-400' : 'bg-white/5 border-transparent hover:bg-white/10'}`}>
                  <input
                    type="radio"
                    name="theme"
                    value={value}
                    checked={selectedTheme === value}
                    onChange={(e) => saveTheme(e.target.value)}
                    className="w-5 h-5 accent-blue-500"
                    data-testid={`theme-option-${value}`}
                  />
                  <span className="capitalize text-white font-medium">{value}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Language Settings */}
          <div className="glass-panel p-6" data-testid="language-section">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-3 text-white">
              <Globe size={24} className="text-blue-300" />
              Language
            </h2>
            <select
              value={selectedLanguage}
              onChange={(e) => saveLanguage(e.target.value)}
              data-testid="language-select"
              className="w-full p-4 bg-black/20 border border-white/10 rounded-xl text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              {Object.entries(LANGUAGE_OPTIONS).map(([key, value]) => (
                <option key={value} value={value} className="bg-gray-900 text-white">
                  {key}
                </option>
              ))}
            </select>
          </div>

          {/* Notifications Settings */}
          <div className="glass-panel p-6" data-testid="notifications-section">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-3 text-white">
              <Bell size={24} className="text-yellow-300" />
              Notifications
            </h2>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
              <span className="text-white font-medium">Enable push notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notificationsEnabled}
                  onChange={(e) => saveNotifications(e.target.checked)}
                  className="sr-only peer"
                  data-testid="notifications-toggle"
                />
                <div className="w-11 h-6 bg-gray-700/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>

          {/* API Status Section */}
          <div className="glass-panel p-6" data-testid="api-status-section">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-3 text-white">
              <Info size={24} className="text-green-300" />
              API Status
            </h2>
            <div className="space-y-2 text-glass-text-secondary bg-black/20 p-4 rounded-xl">
              <p className="flex justify-between"><span>Connected:</span> <span className={settings ? 'text-green-400 font-bold' : 'text-red-400'}>{settings ? 'Yes' : 'No'}</span></p>
              <p className="flex justify-between"><span>Data loaded:</span> <span className="text-white">{settings?.length || 0} items</span></p>
              {settings && settings.length > 0 ? (
                <p className="flex justify-between border-t border-white/10 pt-2 mt-2">
                  <span>Sample:</span> <span className="text-white">{settings[0].name}</span>
                </p>
              ) : null}
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="text-center mt-12" data-testid="welcome-message">
          <h3 className="text-lg font-medium text-white">
            Configure your preferences
          </h3>
          <p className="text-glass-text-secondary mt-2 text-sm">
            All settings are saved automatically
          </p>
        </div>
      </div>
    </div>
  );

  const screenState: any = {
    [EScreenState.loading]: { render: () => <LoadingComponent /> },
    [EScreenState.error]: { render: () => <ErrorApiComponent onRetry={refetch} /> },
    [EScreenState.noCotent]: { render: () => <NoContentComponent /> },
    [EScreenState.success]: { render: () => <SettingsContent /> },
  };

  return (
    <>
      <div className="w-full h-24 bg-transparent" data-testid="settings-header">
        {/* spacer */}
      </div>

      <div className="container mx-auto rounded-sm min-h-screen px-4">
        <div className="py-6 min-h-screen">
          <div className="h-full">
            <div className="flex flex-col w-full h-full">
              {screenState[`${stateKey(settingsQuery)}`]?.render() ?? LoadingComponent()}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Settings;
