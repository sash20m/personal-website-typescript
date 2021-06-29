/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from 'react';
import { Input } from 'ui/atoms/Input/Input';
import { Layout } from 'ui/organisms/Layout/Layout';
import { history } from 'libs/history';
import RichTextEditor from 'react-rte';
import { Button } from 'ui/atoms/Button/Button';
import { UserContext } from 'contexts/UserContext';
import { photos } from 'libs/http/photos/photos';
import { posts } from 'libs/http/posts/posts';
import { useParams } from 'react-router-dom';

import './AddBlogPostPage.scss';

export const AddBlogPostPage = (): React.ReactElement => {
  const [editorValue, setEditorValue] = useState(
    RichTextEditor.createEmptyValue()
  );
  const [title, setTitle] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [isBookEssay, setIsBookEssay] = useState(false);
  const { isUserLogged } = useContext(UserContext);
  const [isEditPage, setIsEditPage] = useState(false);

  // editing existing post
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!isUserLogged) history.push('/login');
  }, [isUserLogged]);

  // checking if this is edit page or add new post page
  useEffect(() => {
    const getData = async () => {
      if (id) {
        const { data } = await posts.getPost(id);
        setIsEditPage(true);
        setEditorValue(RichTextEditor.createValueFromString(data.text, 'html'));
        setTitle(data.title);
        setCoverUrl(data.coverUrl);
        setIsBookEssay(data.isBookEssay);
      } else setIsEditPage(false);
    };

    getData();
  }, [id]);

  const onChangeType = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setIsBookEssay(event.target.checked);
  };

  const onAddCover = async (event: any): Promise<void> => {
    const photo = event.target.files[0];

    const fd = new FormData();
    fd.append('file', photo, photo.name);

    const photoUrl = await photos.addPhoto(fd);
    setCoverUrl(photoUrl.data.image);
  };

  const addPost = async (): Promise<void> => {
    const text = editorValue.toString('html');
    const post = {
      coverUrl,
      title,
      text,
      isBookEssay,
    };

    await posts.addPost(post);
    history.push('/blog');
  };

  //editing current post
  const editPost = async (): Promise<void> => {
    const text = editorValue.toString('html');
    const post = {
      id: parseInt(id),
      coverUrl,
      title,
      text,
      isBookEssay,
      likeNumber: 0,
    };

    await posts.editPost({ data: post });
    history.push('/blog');
  };

  return (
    <Layout>
      <div className="add-post">
        <p className="add-post__title">Create a post ;)</p>
        <div className="add-post__add-cover">
          <p className="photo">Add Cover</p>
          <input type="file" className="upload-btn" onChange={onAddCover} />
        </div>

        <Input
          placeholder="Title"
          className="mb-20"
          value={title}
          onChange={setTitle}
        />

        <RichTextEditor
          className="add-post__editor"
          value={editorValue}
          onChange={setEditorValue}
        />
        <div className="add-post__type">
          <input
            type="checkbox"
            checked={isBookEssay}
            onChange={onChangeType}
          />
          <p>Is this a book essay?</p>
        </div>

        <Button
          text={`${isEditPage ? 'Edit Post' : 'Add Post'}`}
          onClick={isEditPage ? editPost : addPost}
        />
      </div>
    </Layout>
  );
};
