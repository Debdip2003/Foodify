import styled, { useTheme } from "styled-components";
import PropTypes from "prop-types";

const CustomSwitch = ({ isOn, handleToggle }) => {
  const theme = useTheme(); // Get theme from ThemeProvider

  return (
    <SwitchContainer onClick={handleToggle} isOn={isOn} theme={theme}>
      <SwitchSlider isOn={isOn} />
    </SwitchContainer>
  );
};

// Styled Components
const SwitchContainer = styled.div`
  width: 50px;
  height: 25px;
  background-color: ${({ isOn, theme }) =>
    isOn ? theme.colors.primary : theme.colors.secondary};
  border-radius: 25px;
  display: flex;
  align-items: center;
  padding: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
`;

const SwitchSlider = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  transform: ${({ isOn }) => (isOn ? "translateX(25px)" : "translateX(0)")};
  transition: transform 0.3s ease-in-out;
`;

CustomSwitch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default CustomSwitch;
