import { FC, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch } from 'react-redux';

import Icons from '@shared/assets/icons';
import { IconProps } from '@shared/assets/icons/icon-props';
import { AppColors } from '@shared/constants/app-colors';
import useLocalStorage from '@shared/hooks/use-local-storage';
import { scaleHeight, scaleWidth } from '@shared/helpers/helper';

import HomeScreen from '@features/home/screens/home-screen';
import SearchScreen from '@features/search/screens/search-screen';
import WatchListScreen from '@features/user-library/screens/watch-list-screen';
import NetworkLogScreen from '@features/dev-tools/screens/network-log-screen';
import { IFavoriteAndWatchLater, setFavories } from '@features/user-library/store/user-library-slice';

type BottomNavigationStackTypes = {
  Home: undefined;
  WatchList: undefined;
  Bookmark: undefined;
  Search: undefined;
};

const Tab = createBottomTabNavigator<BottomNavigationStackTypes>();

const BottomNavigationStack = () => {
  const dispatch = useDispatch();
  const { GetFromStorageJSON } = useLocalStorage();

  useEffect(() => {
    const getFavorites = async () => {
      const values = await GetFromStorageJSON<IFavoriteAndWatchLater[]>('FAVORITES');
      if (values) dispatch(setFavories(values));
    };

    getFavorites();
  }, []);

  const setTabbarIcon = (Icon: FC<IconProps>, focused: boolean): React.ReactNode => {
    return <Icon color={focused ? AppColors.white : AppColors.white50} height={scaleHeight(32)} width={scaleWidth(32)} />;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        title: '',
        headerShown: false,
        tabBarStyle: { backgroundColor: AppColors.primary, borderTopWidth: 0 },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => setTabbarIcon(Icons.HomeIcon, focused),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => setTabbarIcon(Icons.Search, focused),
        }}
      />
      <Tab.Screen
        name="WatchList"
        component={WatchListScreen}
        options={{
          tabBarIcon: ({ focused }) => setTabbarIcon(Icons.AccessTimeIcon, focused),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={NetworkLogScreen}
        options={{
          tabBarIcon: ({ focused }) => setTabbarIcon(Icons.BookmarkIcon, focused),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigationStack;
