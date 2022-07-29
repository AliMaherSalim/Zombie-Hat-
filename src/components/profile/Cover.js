import React, { useState, useRef, useEffect } from "react";
import cover from "../../assets/stories/2.png";
import { AiFillCamera } from "react-icons/ai";
import { MdPhotoLibrary } from "react-icons/md";
import { MdOutlineUpload } from "react-icons/md";
import CoverSelectPhoto from "./CoverSelectPhoto";
import { axiosInstance } from "../../network/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../../store/userSlice/UserDataSlice";

function Cover() {
  const userState = useSelector((state) => state.userData.userData);
  const dispatch = useDispatch();
  const [showCoverMenu, setShowCoverMenu] = useState(false);
  const [choosePic, setChoosePic] = useState(false);
  const [coverPic, setCoverPic] = useState(cover);
  const [error, setError] = useState("");
  const refInput = useRef(null);
  useEffect(()=>setCoverPic(userState.coverImage),[coverPic, dispatch, userState.coverImage])
  
  const handleImage = (e) => {
    let file = e.target.files[0];
    if (
      file.type !== "image/jpeg" &&
      file.type !== "image/png" &&
      file.type !== "image/webp" &&
      file.type !== "image/gif"
    ) {
      setError(`${file.name} format is not supported`);
      setShowCoverMenu(false);
      return;
    } else if (file.size > 1024 * 1024 * 5) {
      setError(`${file.name} is too large`);
      setShowCoverMenu(false);
      return;
    }
    /* const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
          setCoverPic(event.target.result)
        } */
    let formData = new FormData();
    formData.append("coverImage", file);
    axiosInstance
      .post("/upload/coverImage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        dispatch(addUserData(response.data.newProfile))
        setCoverPic(userState.coverImage)});
    setShowCoverMenu(false);
    setError(null);
  };
  const openModal = () => {
    setChoosePic(!choosePic);
  };
  return (
    <div className="cover max-w-5xl mx-auto">
      <div className="bg-slate-200 relative w-full h-96 rounded-t-none rounded-b-md cursor-pointer">
        {
          <img
            className="relative w-full h-96 rounded-t-none rounded-b-md"
            src={coverPic}
            alt=""
          ></img>
        }
        {error && <div className="text-end text-red-600">{error}</div>}
        <div className="absolute bottom-4 right-4">
          <div
            className="bg-white p-2 flex items-center text-sm font-semibold rounded-lg cursor-pointer hover:brightness-95"
            onClick={() => {
              setShowCoverMenu((prev) => !prev);
            }}
          >
            <AiFillCamera className="mr-2 w-5 h-5" />
            Add Cover Photo
          </div>
          {showCoverMenu && (
            <div className="bg-white p-2 rounded-lg absolute right-0 w-80 shadow shadow-slate-400 z-10">
              <div
                className="flex items-center gap-2.5 p-3 cursor-pointer text-sm font-semibold rounded-lg hover:bg-slate-200"
                onClick={openModal}
              >
                <MdPhotoLibrary className="w-5 h-5" />
                Select Photo
                {choosePic && <CoverSelectPhoto />}
              </div>
              <div
                className="flex items-center gap-2.5 p-3 cursor-pointer text-sm font-semibold rounded-lg hover:bg-slate-200"
                onClick={() => refInput.current.click()}
              >
                <MdOutlineUpload className="w-5 h-5" />
                Upload Photo
                <input
                  type="file"
                  ref={refInput}
                  hidden
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  onChange={handleImage}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cover;
