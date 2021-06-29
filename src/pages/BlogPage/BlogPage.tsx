import React, { useContext, useEffect, useState } from 'react';
import env from '@beam-australia/react-env';
import { posts as postsHttp } from 'libs/http/posts/posts';
import { Tweet } from 'libs/http/posts/tweets.types';
import { Posts } from 'libs/http/posts/posts.types';
import { Layout } from 'ui/organisms/Layout/Layout';
import { BigThumbnail } from './atoms/BigThumbnail/BigThumbnail';
import { UserContext } from 'contexts/UserContext';
import { SmallThumbnail } from './atoms/SmallThumbnail/SmallThumbnail';
import { Loader } from 'ui/atoms/Loader/Loader';
import { history } from 'libs/history';
import TwitterAvatar from 'resources/twitter-avatar.jpg';

import './BlogPage.scss';
import { Button } from 'ui/atoms/Button/Button';

export const BlogPage = (): React.ReactElement => {
  const [posts, setPosts] = useState<Posts[]>();
  const [tweets, setTweets] = useState<{ data: Tweet[] }>();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingTweets, setIsLoadingTweets] = useState(true);
  const { isUserLogged } = useContext(UserContext);
  const [errors, setErrors] = useState({
    statusCode: 0,
    message: '',
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await postsHttp.getPosts();
        setIsLoading(false);
        setPosts(data);
      } catch (error) {
        setErrors(error.response.data);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const getTweets = async () => {
      const { data } = await postsHttp.getTweets('1395097226');
      setIsLoadingTweets(false);
      setTweets(data);
    };

    getTweets();
  }, []);

  const goToAddPage = (): void => {
    history.push('blog/add');
  };

  return (
    <Layout>
      <div className="blog">
        {errors && errors.message ? (
          <>
            <p>Status Code = {errors.statusCode} </p>
            <p>Message = {errors.message} </p>
          </>
        ) : (
          <>
            {isLoading || isLoadingTweets ? (
              <Loader />
            ) : (
              <>
                <div className="blog__posts">
                  {isUserLogged && (
                    <div className="blog__posts__add-btn">
                      <Button text="Add Post" onClick={goToAddPage} />
                    </div>
                  )}

                  {posts && posts.length !== 0 ? (
                    <>
                      <BigThumbnail data={posts[0]} />
                      <div className="blog__posts__posts-grid">
                        {posts.length > 1 &&
                          posts
                            .slice(1)
                            .map((item) => (
                              <SmallThumbnail data={item} key={item.id} />
                            ))}
                      </div>
                    </>
                  ) : (
                    <p>Currently no posts</p>
                  )}
                </div>
                <div className="blog__twitter-posts">
                  <div className="blog__twitter-posts__title">
                    Recent Tweets
                  </div>
                  <div className="blog__twitter-posts__tweets">
                    {tweets &&
                      tweets.data.slice(0, 5).map((item) => (
                        <div className="post" key={item.id}>
                          <a
                            href={env('TWITTER_URL')}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="header">
                              <img
                                src={TwitterAvatar}
                                className="header__avatar"
                                alt="my avatar"
                              />
                              <div className="header__name">Alex</div>
                            </div>
                          </a>

                          <a
                            href={env('TWITTER_URL')}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="post-text">{item.text}</div>
                          </a>
                        </div>
                      ))}
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};
