import { Users, MagnifyingGlass, CheckCircle } from '@phosphor-icons/react';
import { Footer } from '../../commons/components/Footer';
import { useCommunityHook } from './hooks';
import { EScreenState } from '../../enums';
import { ErrorApiComponent, LoadingComponent, NoContentComponent } from '../../commons/components/ApiFeedbacks';
import { stateKey } from '../../commons/utils/renders/screent-type';
import { COMMUNITY_CATEGORIES } from './constants';
import { CommunityModel } from '../../models/community';
import { Card } from '@react-cupertino-ui/card';
import { SearchBar } from '@react-cupertino-ui/search-bar';
import { Title } from '@react-cupertino-ui/title';
import { Select } from '@react-cupertino-ui/select';

export const Community = () => {
  const {
    communitiesQuery,
    communities,
    theme,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
  } = useCommunityHook();

  const { refetch } = communitiesQuery;

  const CommunityCard = ({ community }: { community: CommunityModel }) => (
    <div
      className="glass-panel hover:bg-white/15 transition-all duration-300 overflow-hidden group border border-white/10"
      data-testid={`community-card-${community.id}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={community.image}
          alt={community.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          data-testid="community-image"
        />
        {community.isVerified && (
          <div
            className="absolute top-2 right-2 bg-blue-500/80 backdrop-blur-md rounded-full p-1 shadow-lg"
            data-testid="verified-badge"
          >
            <CheckCircle size={20} weight="fill" className="text-white" />
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3
            className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors"
            data-testid="community-name"
          >
            {community.name}
          </h3>
        </div>

        <p
          className="text-glass-text-secondary mb-4 line-clamp-2 text-sm leading-relaxed"
          data-testid="community-description"
        >
          {community.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2" data-testid="members-count">
            <Users size={18} className="text-blue-300" />
            <span className="text-sm text-glass-text-secondary font-medium">
              {community.membersCount.toLocaleString()} members
            </span>
          </div>
          <span
            className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/10 capitalize"
            data-testid="community-category"
          >
            {community.category}
          </span>
        </div>

        <a
          href={community.link}
          className="block w-full text-center bg-blue-600/90 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/20 backdrop-blur-sm"
          data-testid="join-button"
        >
          Join Community
        </a>
      </div>
    </div>
  );

  const CommunitiesContent = () => (
    <div className="w-full p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Title className="text-4xl text-white mb-2">Discover Communities</Title>
          <p className="text-glass-text-secondary">Find your tribe and connect with like-minded people</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4 glass-panel p-6">
          {/* Search Bar */}
          <div className="relative" data-testid="search-section">
            <MagnifyingGlass
              size={20}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50"
            />
            <input
              type="text"
              placeholder="Search communities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              data-testid="search-input"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4" data-testid="filters-section">
            {/* Category Filter */}
            <div className="flex-1 min-w-[200px]">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none cursor-pointer"
                data-testid="category-filter"
              >
                <option value="all" className="bg-gray-900 text-white">All Categories</option>
                {Object.entries(COMMUNITY_CATEGORIES).map(([key, value]) => (
                  <option key={value} value={value} className="bg-gray-900 text-white">
                    {key.charAt(0) + key.slice(1).toLowerCase()}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="flex-1 min-w-[200px]">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none cursor-pointer"
                data-testid="sort-filter"
              >
                <option value="popular" className="bg-gray-900 text-white">Most Popular</option>
                <option value="newest" className="bg-gray-900 text-white">Newest</option>
                <option value="members" className="bg-gray-900 text-white">Most Members</option>
                <option value="name" className="bg-gray-900 text-white">Name (A-Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Communities Grid */}
        {communities.length > 0 ? (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-testid="communities-grid"
          >
            {communities.map((community) => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </div>
        ) : (
          <div
            className="text-center py-20 glass-panel"
            data-testid="no-results"
          >
            <p className="text-white text-lg font-medium mb-2">
              No communities found
            </p>
            <p className="text-glass-text-secondary">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        )}

        {/* Stats */}
        <div
          className="mt-12 text-center"
          data-testid="communities-stats"
        >
          <p className="text-glass-text-secondary text-sm bg-black/20 inline-block px-4 py-1 rounded-full backdrop-blur-sm border border-white/5">
            Showing {communities.length} {communities.length === 1 ? 'community' : 'communities'}
          </p>
        </div>
      </div>
    </div>
  );

  const screenState: any = {
    [EScreenState.loading]: { render: () => <LoadingComponent /> },
    [EScreenState.error]: { render: () => <ErrorApiComponent onRetry={refetch} /> },
    [EScreenState.noCotent]: { render: () => <NoContentComponent /> },
    [EScreenState.success]: { render: () => <CommunitiesContent /> },
  };

  return (
    <>
      <div className="container mx-auto rounded-sm pt-24 px-4 min-h-screen">
        <div className="flex flex-col w-full min-h-screen">
          {screenState[`${stateKey(communitiesQuery)}`]?.render() ?? LoadingComponent()}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Community;
