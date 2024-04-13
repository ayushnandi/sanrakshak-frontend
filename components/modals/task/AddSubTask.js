import React, { useContext, useEffect, useState } from "react";
import DeleteLottieAnimation from "../../animation/DeleteLottieAnimation";
import axios from "axios";
import { ApiUrl } from "@/utils/BaseUrl";
import { DataLayer } from "@/context/UserDataProvider";
import UpdateAnimation from "../../animation/UpdateAnimation";
import ContactAdminForm from "../../police/contact/ContactAdminForm";
import SubTask from "@/components/Board/SubTask";

const AddSubTask = ({
  visible,
  onClose = () => { },
  callback = () => { },
  data,
}) => {
  const [updatingTask, setUpdatingTask] = useState(false);
  const { setRefresh } = useContext(DataLayer);
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);
  if (!visible) return null;


  return (
    <div
      id="background"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target.id == "background") onClose();
      }}
    >
      <div className=" flex flex-col items-center w-[35rem] h-[33rem] pt-[2rem] py-[1rem]  register-fir-bg  ">
        <div className="flex flex-col items-center w-[100%]  px-[2rem] py-[1rem]  " >
          <div className="  flex flex-col gap-[1rem] w-[100%] mt-[1rem]  ">
            <SubTask />
            <button
              onClick={() => setUpdatingTask(true)}
              className={` ${updatingTask ? "animate-pulse" : ""
                } flex gap-[.8rem] justify-center items-center bg-[#6C72FF] py-[.6rem] text-white rounded-md mt-[2rem] w-[100%] h-[2.5rem] text-[1.01rem] mx-auto   `}
            >
              {" "}
              {updatingTask ? "Updating your changes" : "Update My changes"}
              <div
                className={` ${updatingTask ? "" : "hidden"
                  } w-[1rem] h-[1rem] border-t-2  border-white rounded-[50%] animate-spin `}
              />
            </button>
            <button
              onClick={() => onClose()}
              className=" rounded-md text-[1.01rem]  pt-[.3rem]   "
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSubTask;
