import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/custom-buttons/button';
import '../assets/sass/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Custom-Button',
  component: Button,
};

export const RegularState = () => <Button></Button>;

export const DisabledState = () => <Button disabled={true}>Disabled</Button>;

export const LoadingState = () => <Button loading={true}></Button>;

export const SuccessStyle = () => <Button variant="success">Success</Button>;

export const clickAction = () => (
  <Button variant="danger" onClickHandler={action('clicked')}>
    Save
  </Button>
);

export const WithIcon = () => (
  <Button>
    <FontAwesomeIcon icon={faUserPlus} /> button with icon
  </Button>
);
