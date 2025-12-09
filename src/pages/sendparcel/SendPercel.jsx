import React from "react";
import { useForm } from "react-hook-form";

const SendPercel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSendParcel = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="heading-black text-center">Send a Percel</h1>
      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="mt-12 ps-4 ">
        <div>
          <label className="label mr-4 text-black">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label text-black">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio "
              defaultChecked
            />
            Non-Document
          </label>
        </div>

        <div className="grid grid-cols-1 space-y-8 md:grid-cols-2 gap-2 ">
          <fieldset className="fieldset ">
            <label className="label text-black">Parcel Name </label>
            <input
              type="text"
              {...register("parcelName")}
              className="input "
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset ">
            <label className="label text-black">Parcel Weight (kg)</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>

        <div>
            {/* sender details  */}
            <h4 className="text-2xl font-semibold">Sender Details</h4>
            <fieldset className="fieldset ">
                {/* sender name  */}
            <label className="label text-black">Sender Name </label>
            <input
              type="text"
              {...register("senderName")}
              className="input w-full"
              placeholder="Sender Name"
            />
            {/* sender address */}
            <label className="label text-black">Sender Address </label>
            <input
              type="text"
              {...register("senderName")}
              className="input w-full mt-4"
              placeholder="Sender Address"
            />
            {/* sender phone */}
            <label className="label text-black">Sender Phone </label>
            <input
              type="number"
              {...register("senderPhone")}
              className="input w-full mt-4"
              placeholder="Sender Phone"
            />
            {/* sender district */}
            <label className="label text-black">Sender District </label>
            <input
              type="number"
              {...register("senderDistrict")}
              className="input w-full mt-4"
              placeholder="Sender District"
            />
          </fieldset>
            {/* receiver details  */}
            <div>

            </div>
        </div>
        <input
          type="submit"
          className="btn btn-primary text-black"
          value="Send-parcel"
        />
      </form>
    </div>
  );
};

export default SendPercel;
