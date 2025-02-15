import PropTypes from "prop-types";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-gray-500">
        {text1} <span className="text-green-500 font-medium">{text2}</span>
      </p>
      <p className="w-8  h-[1px]  bg-gray-500"></p>
    </div>
  );
};

export default Title;

//define the prop types

Title.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};
