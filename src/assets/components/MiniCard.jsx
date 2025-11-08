import PropTypes from 'prop-types';
import React from 'react';
import { FiPlus } from 'react-icons/fi';

export default function MiniCard({ images, header, desc, price }) {
  MiniCard.propTypes = {
    images: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };
  return (
    <div className="flex w-[335px] rounded-[20px] border border-solid border-[#ff5722] bg-[#ffccbc66]">
      <div className="flex flex-1 p-2.5 gap-[15px]">
        <img
          src={images}
          alt=""
          className="object-cover w-20 h-20 rounded-[10px] overflow-hidden shrink-0"
        />
        <div className="flex content-around flex-col justify-evenly flex-1">
          <p className="font-inter text-[14px] font-medium leading-3.5">
            {header}
          </p>
          <p className="font-inter text-[12px] leading-[15px]">{desc}</p>
          <p className="font-inter text-[14px] font-semibold leading-5">
            {price}
          </p>
        </div>
        <button className="flex w-8 h-8 bg-[#FF5722] rounded-full justify-center self-center shrink-0 cursor-pointer">
          <FiPlus className="text-white self-center" />
        </button>
      </div>
    </div>
  );
}
