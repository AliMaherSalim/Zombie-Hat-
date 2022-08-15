import React, { useState } from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { MdCancel } from 'react-icons/md';
import { axiosInstance } from '../../../../network/axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import {
  alertHandler,
  forceUpdateHandler,
} from '../../../../store/userSlice/NewsFeedSlice';
import CreatePostModal from '../CreatePostModal';
import EditPost from './EditPost';

const More = ({
  text,
  text2,
  containerClassName,
  iconClassName,
  liNum1,
  liNum2,
  tooltipData,
  id,
  userID,
  setEditComment,
  setEditReply,
  deleteComment,
  commentId,
  replyId,
  postId,
  sharedPost,
  sharedPostData,
  moreID,
  sharerId,
  moreFullScreenClassName,
  // For edit post:
  postData,

  // for edit and delete post:
  sharededitPost,
}) => {
  // console.log(sharedPost);
  // console.log(text, text2, liNum1, liNum2);
  // console.log(id, userID);
  // console.log(postId);
  // console.log(userID, sharerId);

  // Rerender:
  const dispatch = useDispatch();
  const forceReRender = useSelector(state => state.newsFeed.forceUpdate);
  // console.log(editReply);
  // console.log(userID);
  // console.log(id, userID, sharedPostData);
  // let sharedPostID = sharedPost && sharedPostData?._id;
  // console.log(sharedPost);
  // console.log(sharedPost);

  // Show modal for edit post:
  const [showEditPostModal, setShowEditPostModal] = useState(false);

  // Show and hide more:
  const [showMore, setShowMore] = useState(false);

  // Show deleteComment confirmation:
  const [confirmDeleteComment, setConfirmDeleteComment] = useState(false);

  const deleteCommentHandler = () => {
    axiosInstance
      .delete(`/comment/${postId}/${commentId}`)
      .then(response => {
        // console.log(id);
        // console.log(response);

        // Alert message:
        dispatch(
          alertHandler({
            message: response.data,
            showAlert: true,
            statusCode: 200,
          })
        );
      })
      .catch(error => {
        // console.log(error);

        // Alert message:
        dispatch(
          alertHandler({
            message: error.data,
            showAlert: true,
            statusCode: 400,
          })
        );
      });
  };

  const deleteSharedCommentHandler = () => {
    // console.log(postId,commentId);
    axiosInstance
      .delete(`/comment/sharedpost/${postId}/${commentId}`)
      .then(response => {
        // console.log(id);
        // console.log(response);
        // console.log(sharedPostData);

        // Alert message:
        dispatch(
          alertHandler({
            message: response.data,
            showAlert: true,
            statusCode: 200,
          })
        );
      })
      .catch(error => {
        // console.log(error);

        // Alert message:
        dispatch(
          alertHandler({
            message: error.data,
            showAlert: true,
            statusCode: 400,
          })
        );
      });
  };

  const deletePostHandler = () => {
    console.log(moreID);

    axiosInstance
      .delete(`/posts/${moreID}`)
      .then(response => {
        // console.log(id);
        console.log(response);

        // Alert message:
        dispatch(
          alertHandler({
            message: response.data,
            showAlert: true,
            statusCode: 200,
          })
        );
      })
      .catch(error => {
        // console.log(error);

        // Alert message:
        dispatch(
          alertHandler({
            message: error.data,
            showAlert: true,
            statusCode: 400,
          })
        );
      });
  };

  const deleteSharedPostHandler = () => {
    console.log(moreID);

    axiosInstance
      .delete(`/share/${moreID}`)
      .then(response => {
        // console.log(id);
        console.log(response);

        // Alert message:
        dispatch(
          alertHandler({
            message: response.data,
            showAlert: true,
            statusCode: 200,
          })
        );
      })
      .catch(error => {
        // console.log(error);

        // Alert message:
        dispatch(
          alertHandler({
            message: error.data,
            showAlert: true,
            statusCode: 400,
          })
        );
      });
  };

  const deleteReplyHandler = () => {
    axiosInstance
      .delete(`/reply/post/${postId}/${commentId}/${replyId}`)
      .then(response => {
        // console.log(response);

        // Alert message:
        dispatch(
          alertHandler({
            message: response.data,
            showAlert: true,
            statusCode: 200,
          })
        );
      })
      .catch(error => {
        // console.log(error);

        // Alert message:
        dispatch(
          alertHandler({
            message: error.data,
            showAlert: true,
            statusCode: 400,
          })
        );
      });
  };

  const deleteSharedReplyHandler = () => {
    console.log(postId, commentId, replyId, sharedPost);
    axiosInstance
      .delete(`/reply/sharedPost/${postId}/${commentId}/${replyId}`)
      .then(response => {
        // console.log(id);
        // console.log(response);

        // Alert message:
        dispatch(
          alertHandler({
            message: response.data,
            showAlert: true,
            statusCode: 200,
          })
        );
      })
      .catch(error => {
        // console.log(error);

        // Alert message:
        dispatch(
          alertHandler({
            message: error.data,
            showAlert: true,
            statusCode: 400,
          })
        );
      });
  };

  return (
    <div className={containerClassName} data-title={tooltipData}>
      <button
        className={'dropdown-toggle flex items-center hidden-arrow'}
        onClick={() => {
          setShowMore(!showMore);
        }}
      >
        <BiDotsHorizontalRounded
          className={'hover:bg-zinc-100 rounded-full p-1 z-50 ' + iconClassName}
        />
      </button>

      {
        <div className={showMore ? 'block' : 'hidden'}>
          <ul
            className={`dropdown-menu min-w-max absolute bg-white text-base z-50 py-2 px-3 rounded-lg shadow-lg mt-1 m-0 left-auto right-auto ${moreFullScreenClassName}`}
          >
            {
              // For Text Number 1:
            }
            {liNum1 && !confirmDeleteComment && (
              <li
                className="dropdown-item text-sm py-2 px-4 hover:bg-gray-100 rounded cursor-pointer"
                onClick={() => {
                  text?.slice(0, 6) === 'Delete' &&
                    setConfirmDeleteComment(true);
                }}
              >
                {text}
              </li>
            )}

            {
              // For Text Number 2:
            }
            {liNum2 && id === userID && !confirmDeleteComment && (
              <li
                className="dropdown-item text-sm py-2 px-4 hover:bg-gray-100 rounded cursor-pointer"
                onClick={() => {
                  // console.log(commentId, replyId);
                  // To show edit a comment input:
                  if (setEditComment) {
                    setEditComment(commentId);
                  }

                  // To show edit a reply input:
                  if (setEditReply) {
                    setEditReply(replyId);
                  }

                  if (text2 === 'Edit post') {
                    setShowEditPostModal(true);
                    // setShowMore(!showMore);
                  }
                }}
              >
                {text2}
              </li>
            )}

            {
              // Show EditPostModal
            }
            {showEditPostModal && (
              <EditPost
                showModal={showEditPostModal}
                setShowModal={setShowEditPostModal}
                setShowMore={setShowMore}
                sharedPostData={sharedPostData}
                postData={postData}
              />
            )}

            {
              // For Delete confirmation:
            }
            {confirmDeleteComment && (
              <div className=" bg-white max-w-sm p-0.5">
                <h5 className="text-gray-900 text-sm leading-tight font-medium mb-2 ml-1">
                  Confirm deletion
                </h5>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className=" inline-block px-1 mr-0.5 py-1 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow- hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={() => {
                      // console.log(postId, commentId);
                      if (
                        deleteComment &&
                        text === 'Delete comment' &&
                        !sharedPost
                      ) {
                        deleteCommentHandler();
                        setConfirmDeleteComment(false);
                        setShowMore(!showMore);
                      }

                      if (
                        deleteComment &&
                        text === 'Delete comment' &&
                        sharedPost
                      ) {
                        deleteSharedCommentHandler();
                        setConfirmDeleteComment(false);
                        setShowMore(!showMore);
                      }

                      if (text === 'Delete post' && !sharededitPost) {
                        deletePostHandler();
                        setConfirmDeleteComment(false);
                        setShowMore(!showMore);
                      }

                      if (text === 'Delete post' && sharededitPost) {
                        deleteSharedPostHandler();
                        setConfirmDeleteComment(false);
                        setShowMore(!showMore);
                      }

                      if (text === 'Delete reply' && !sharedPost) {
                        deleteReplyHandler();
                        setConfirmDeleteComment(false);
                        setShowMore(!showMore);
                      }

                      if (text === 'Delete reply' && sharedPost) {
                        deleteSharedReplyHandler();
                        setConfirmDeleteComment(false);
                        setShowMore(!showMore);
                      }
                      dispatch(forceUpdateHandler(!forceReRender));
                    }}
                  >
                    <MdDelete className="text-xl mx-3.5 " />
                  </button>

                  <button
                    type="button"
                    className=" inline-block px-1 py-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={() => {
                      setConfirmDeleteComment(false);
                    }}
                  >
                    <MdCancel className="text-xl mx-3.5" />
                  </button>
                </div>
              </div>
            )}
          </ul>
        </div>
      }
    </div>
  );
};

export default More;
