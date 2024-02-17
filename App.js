import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/UserPost/userPost';
import {scaleFonSize} from './assets/scaling';

const App = () => {
  const userStories = [
    {
      firstName: 'Kgothatso',
      id: 1,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Matshidiso',
      id: 2,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Thabang',
      id: 3,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Joseph',
      id: 4,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Tsietsi',
      id: 5,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Ayanda',
      id: 6,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Eugene',
      id: 7,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Maloka',
      id: 8,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Tate',
      id: 9,
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];

  const userPosts = [
    {
      firstName: 'Matshidiso',
      lastName: 'Masia',
      location: 'Pretoria',
      likes: 1000,
      comments: 50,
      bookmarks: 50505,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id: 1,
    },
    {
      firstName: 'Kgothatso',
      lastName: 'Masia',
      location: 'Pretoria',
      likes: 100,
      comments: 5,
      bookmarks: 505,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id: 2,
    },

    {
      firstName: 'Jacob',
      lastName: 'Masia',
      location: 'Cape town',
      likes: 10,
      comments: 3,
      bookmarks: 5050,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id: 3,
    },
  {
      firstName: 'Same',
      lastName: 'Masia',
      location: 'Johannesburg',
      likes: 1001,
      comments: 60,
      bookmarks: 145,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id: 4,
    },
    {
      firstName: 'Lameull',
      lastName: 'Masia',
      location: 'Eastern Cape',
      likes: 1020,
      comments: 1100,
      bookmarks: 90,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id: 5,
    },
  ];

  const userStoryPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoryPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={globalStyle.header}>
              <Title title={"Let's Explore"} />
              <TouchableOpacity style={globalStyle.messageIcon}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size={scaleFonSize(20)}
                  color={'#898DAE'}
                />
                <View style={globalStyle.messageNumberContainer}>
                  <Text style={globalStyle.messageNumber}>2</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={globalStyle.userStoryContainer}>
              <FlatList
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                  if (isLoadingUserStories) {
                    return;
                  }
                  setIsLoadingUserStories(true);
                  const contentToAppend = pagination(
                    userStories,
                    userStoriesCurrentPage + 1,
                    userStoryPageSize,
                  );
                  if (contentToAppend.length > 0) {
                    setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                    setUserStoriesRenderedData(prev => [...prev, ...contentToAppend]);
                  }
                  setIsLoadingUserStories(false);
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={userStoriesRenderedData}
                renderItem={({item}) => (
                  <UserStory
                    key={'userStory' + item.id}
                    firstName={item.firstName}
                    profileImage={item.profileImage}
                  />
                )}
              />
            </View>
          </>
        }
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (isLoadingUserPosts) {
            return;
          }
          setIsLoadingUserPosts(true);
          const contentToAppend = pagination(
            userPosts,
            userPostsCurrentPage + 1,
            userPostsPageSize,
          );
          if (contentToAppend.length > 0) {
            setUserPostsCurrentPage(userPostsCurrentPage + 1);
            setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
          }
          setIsLoadingUserPosts(false);
        }}
        data={userPostsRenderedData}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={globalStyle.userPostContainer}>
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              image={item.image}
              profileImage={item.profileImage}
              likes={item.likes}
              comments={item.comments}
              bookmarks={item.bookmarks}
              location={item.location}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default App;
