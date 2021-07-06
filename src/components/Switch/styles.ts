import styled from 'styled-components';

export const Wrapper = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 6rem;
    height: 2.7rem;
    left: 115rem;
    bottom: 4rem;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 2rem;
    width: 2rem;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(2.6rem);
    -ms-transform: translateX(2.6rem);
    transform: translateX(3.1rem);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 3.4rem;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
